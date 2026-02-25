import express from "express";
import cors from "cors";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import { v4 as uuidv4 } from "uuid";
import {
  generateCode,
  createRoom,
  getRoom,
  upsertPlayer,
  updateProgress,
  setFinished,
  getRoomForPlayer,
  removePlayer,
  broadcast,
  sendToPlayer,
} from "./rooms";
import { ClientEvent } from "./types";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/rooms", (req, res) => {
  const { lessonId, difficulty, tokens, playerName } = req.body;
  if (!lessonId || !difficulty || !tokens || !playerName)
    return res.status(400).json({ error: "Missing required fields" });
  const code = generateCode();
  createRoom(code, lessonId, difficulty, tokens);
  console.log(`[REST] Room created: ${code}`);
  res.json({ code });
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });

function startCountdown(code: string) {
  const room = getRoom(code);
  if (!room) return;
  // startsAt is 3 seconds from now — both clients count down to this absolute time
  const startsAt = Date.now() + 3000;
  broadcast(code, {
    type: "GAME_START",
    tokens: room.tokens,
    lessonId: room.lessonId,
    difficulty: room.difficulty,
    startsAt,
  });
}

wss.on("connection", (ws: WebSocket) => {
  const playerId = uuidv4();
  let roomCode: string | null = null;
  let gameFinished = false;

  ws.on("message", (raw) => {
    let event: ClientEvent;
    try {
      event = JSON.parse(raw.toString());
    } catch {
      ws.send(JSON.stringify({ type: "ERROR", message: "Invalid JSON" }));
      return;
    }

    switch (event.type) {
      // ── CREATE_ROOM ──────────────────────────────────────────────────────────
      // Called by the host both from the modal AND from BattlePage.
      // upsertPlayer evicts the stale modal socket by name before adding the new one.
      case "CREATE_ROOM": {
        const { code, playerName } = event;
        const room = upsertPlayer(code, playerId, playerName, ws);
        if (!room) {
          ws.send(
            JSON.stringify({
              type: "ERROR",
              message: "Room not found. Try creating a new challenge.",
            }),
          );
          return;
        }
        roomCode = code;
        console.log(
          `[WS] CREATE_ROOM: ${playerName} in room ${code} | players: ${room.players.size} | started: ${!!room.startedAt}`,
        );

        // Find the other player (guest), if present
        const other = [...room.players.values()].find((p) => p.id !== playerId);

        if (room.startedAt && other) {
          // Game already running — BattlePage reconnecting after modal auto-nav
          // Resend OPPONENT_JOINED + GAME_START so BattlePage transitions to playing
          ws.send(JSON.stringify({ type: "OPPONENT_JOINED", opponent: other }));
          ws.send(
            JSON.stringify({
              type: "GAME_START",
              tokens: room.tokens,
              lessonId: room.lessonId,
              difficulty: room.difficulty,
            }),
          );
          console.log(
            `[WS] Resent GAME_START to reconnecting host ${playerName}`,
          );
        } else if (other) {
          // Guest was waiting before host — start now
          room.startedAt = Date.now();
          ws.send(
            JSON.stringify({
              type: "OPPONENT_JOINED",
              opponent: {
                id: other.id,
                name: other.name,
                currentIndex: 0,
                wpm: 0,
                finished: false,
              },
            }),
          );
          sendToPlayer(code, other.id, {
            type: "OPPONENT_JOINED",
            opponent: {
              id: playerId,
              name: playerName,
              currentIndex: 0,
              wpm: 0,
              finished: false,
            },
          });
          startCountdown(code);
          console.log(`[WS] Starting countdown in room ${code}`);
        } else {
          // No guest yet — host waits
          ws.send(
            JSON.stringify({
              type: "ROOM_CREATED",
              code,
              lessonId: room.lessonId,
              difficulty: room.difficulty,
              tokens: room.tokens,
            }),
          );
        }
        break;
      }

      // ── JOIN_ROOM ────────────────────────────────────────────────────────────
      case "JOIN_ROOM": {
        const { code, playerName } = event;
        const room = getRoom(code);
        if (!room) {
          ws.send(
            JSON.stringify({
              type: "ERROR",
              message: "Room not found. The code may have expired.",
            }),
          );
          return;
        }

        // Block if there are already 2 distinct players (not counting a stale host re-register)
        const existingNames = new Set(
          [...room.players.values()].map((p) => p.name),
        );
        if (existingNames.size >= 2 && !existingNames.has(playerName)) {
          ws.send(JSON.stringify({ type: "ERROR", message: "Room is full." }));
          return;
        }

        room.players.set(playerId, {
          id: playerId,
          name: playerName,
          currentIndex: 0,
          wpm: 0,
          finished: false,
        });
        room.sockets.set(playerId, ws);
        roomCode = code;
        console.log(
          `[WS] JOIN_ROOM: ${playerName} in room ${code} | players: ${room.players.size}`,
        );

        const host = [...room.players.values()].find((p) => p.id !== playerId);
        if (host) {
          room.startedAt = Date.now();
          ws.send(
            JSON.stringify({
              type: "OPPONENT_JOINED",
              opponent: {
                id: host.id,
                name: host.name,
                currentIndex: 0,
                wpm: 0,
                finished: false,
              },
            }),
          );
          sendToPlayer(code, host.id, {
            type: "OPPONENT_JOINED",
            opponent: {
              id: playerId,
              name: playerName,
              currentIndex: 0,
              wpm: 0,
              finished: false,
            },
          });
          startCountdown(code);
        } else {
          ws.send(JSON.stringify({ type: "WAITING" }));
        }
        break;
      }

      // ── PROGRESS ─────────────────────────────────────────────────────────────
      case "PROGRESS": {
        if (!roomCode) return;
        const { currentIndex, wpm } = event;
        const player = updateProgress(roomCode, playerId, currentIndex, wpm);
        if (!player) return;
        broadcast(
          roomCode,
          { type: "OPPONENT_PROGRESS", opponent: player },
          playerId,
        );
        break;
      }

      // ── FINISHED ─────────────────────────────────────────────────────────────
      case "FINISHED": {
        if (!roomCode) return;
        gameFinished = true;
        const result = setFinished(roomCode, playerId, event.wpm);
        if (!result) return;
        const { room, player, allDone } = result;
        broadcast(
          roomCode,
          { type: "OPPONENT_FINISHED", opponent: player },
          playerId,
        );
        if (allDone) {
          const players = [...room.players.values()];
          const winner = players.reduce((a, b) =>
            (a.finishedAt ?? Infinity) < (b.finishedAt ?? Infinity) ? a : b,
          );
          console.log(`[WS] Game over in ${roomCode}, winner: ${winner.name}`);
          broadcast(roomCode, {
            type: "GAME_OVER",
            winner: winner.id,
            players,
          });
        }
        break;
      }
    }
  });

  ws.on("close", () => {
    // Only notify opponent of disconnect if game was actively in progress
    if (roomCode && !gameFinished) {
      const room = getRoom(roomCode);
      if (room?.startedAt) {
        broadcast(
          roomCode,
          { type: "ERROR", message: "Opponent disconnected." },
          playerId,
        );
      }
    }
    removePlayer(playerId);
    console.log(`[WS] Disconnected: ${playerId}`);
  });

  ws.on("error", (err) => console.error("[WS] Error:", err));
});

server.listen(PORT, () => {
  console.log(`🥋 Scrivo battle server running on port ${PORT}`);
  console.log(`   WS:   ws://localhost:${PORT}/ws`);
  console.log(`   REST: http://localhost:${PORT}/rooms`);
});
