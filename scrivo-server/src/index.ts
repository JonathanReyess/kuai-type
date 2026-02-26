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
  resetRoom,
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
  const startsAt = Date.now() + 3500;
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

        // Always update hostId to the current socket's playerId when CREATE_ROOM is called.
        // upsertPlayer evicts the old modal socket, so this reassigns host to the new BattlePage socket.
        room.hostId = playerId;

        console.log(
          `[WS] CREATE_ROOM: ${playerName} in room ${code} | players: ${room.players.size} | started: ${!!room.startedAt}`,
        );

        // Find the other player (guest), if present
        const other = [...room.players.values()].find((p) => p.id !== playerId);

        if (room.startedAt && other) {
          // Game already started — host's BattlePage socket reconnecting after
          // modal navigated. Resend both OPPONENT_JOINED and GAME_START so
          // BattlePage transitions straight into countdown/playing.
          ws.send(JSON.stringify({ type: "OPPONENT_JOINED", opponent: other }));
          ws.send(
            JSON.stringify({
              type: "GAME_START",
              tokens: room.tokens,
              lessonId: room.lessonId,
              difficulty: room.difficulty,
              startsAt: room.startedAt + 3500, // same absolute time as original broadcast
            }),
          );
          console.log(
            `[WS] Resent GAME_START to reconnecting host ${playerName}`,
          );
        } else if (other) {
          // Guest was waiting before host arrived — notify both sides.
          // Do NOT auto-start; wait for host to click "Start Game".
          ws.send(
            JSON.stringify({
              type: "OPPONENT_JOINED",
              opponent: {
                id: other.id,
                name: other.name,
                currentIndex: 0,
                wpm: 0,
                score: 0,
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
              score: 0,
              finished: false,
            },
          });
          console.log(
            `[WS] Both players present in ${code} — waiting for host to start`,
          );
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

        // Block if there are already 2 distinct players
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
          score: 0,
          finished: false,
        });
        room.sockets.set(playerId, ws);
        roomCode = code;
        console.log(
          `[WS] JOIN_ROOM: ${playerName} in room ${code} | players: ${room.players.size}`,
        );

        const host = [...room.players.values()].find((p) => p.id !== playerId);
        if (host) {
          // Notify both that opponent is present — game will start when host clicks "Start"
          ws.send(
            JSON.stringify({
              type: "OPPONENT_JOINED",
              opponent: {
                id: host.id,
                name: host.name,
                currentIndex: 0,
                wpm: 0,
                score: 0,
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
              score: 0,
              finished: false,
            },
          });
          console.log(
            `[WS] Guest ${playerName} joined ${code} — notified host`,
          );
        } else {
          ws.send(JSON.stringify({ type: "WAITING" }));
        }
        break;
      }

      // ── START_GAME ───────────────────────────────────────────────────────────
      // Only the host may trigger this. Sends GAME_START to all players.
      case "START_GAME": {
        const { code } = event;
        const room = getRoom(code);
        if (!room) {
          ws.send(
            JSON.stringify({ type: "ERROR", message: "Room not found." }),
          );
          return;
        }
        if (room.hostId && room.hostId !== playerId) {
          ws.send(
            JSON.stringify({
              type: "ERROR",
              message: "Only the host can start the game.",
            }),
          );
          return;
        }
        if (room.players.size < 2) {
          ws.send(
            JSON.stringify({
              type: "ERROR",
              message: "Need 2 players to start.",
            }),
          );
          return;
        }
        room.startedAt = Date.now();
        roomCode = code;
        console.log(`[WS] Host started game in room ${code}`);
        startCountdown(code);
        break;
      }

      // ── PROGRESS ─────────────────────────────────────────────────────────────
      case "PROGRESS": {
        if (!roomCode) return;
        const { currentIndex, wpm, score } = event as any;
        const player = updateProgress(
          roomCode,
          playerId,
          currentIndex,
          wpm,
          score,
        );
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
        // Persist missedTokens from client before marking finished
        const room0 = getRoom(roomCode);
        const player0 = room0?.players.get(playerId);
        if (player0 && event.missedTokens) {
          player0.missedTokens = event.missedTokens;
        }
        const result = setFinished(roomCode, playerId, event.wpm, event.score);
        if (!result) return;
        const { room, player, allDone } = result;
        broadcast(
          roomCode,
          { type: "OPPONENT_FINISHED", opponent: player },
          playerId,
        );
        if (allDone) {
          const players = [...room.players.values()];
          const winner = players.reduce((a, b) => (a.score >= b.score ? a : b));
          console.log(`[WS] Game over in ${roomCode}, winner: ${winner.name}`);
          broadcast(roomCode, {
            type: "GAME_OVER",
            winner: winner.id,
            players,
          });
        }
        break;
      }

      // ── REMATCH ──────────────────────────────────────────────────────────────
      // Either player can request a rematch. The sender gets REMATCH_WAITING
      // until the other player also clicks Rematch, at which point the room
      // resets and a new countdown fires for both.
      case "REMATCH": {
        if (!roomCode) return;
        const room = getRoom(roomCode);
        if (!room) return;
        const player = room.players.get(playerId);
        if (!player) return;

        player.wantsRematch = true;
        const allWantRematch = [...room.players.values()].every(
          (p) => p.wantsRematch,
        );

        if (allWantRematch) {
          // Both players ready — reset room with new tokens and start
          const reset = resetRoom(roomCode, event.tokens);
          if (!reset) return;
          reset.startedAt = Date.now();
          gameFinished = false;
          console.log(`[WS] Rematch starting in room ${roomCode}`);
          startCountdown(roomCode);
        } else {
          // First player to click — only tell them to wait, don't touch opponent's screen
          ws.send(JSON.stringify({ type: "REMATCH_WAITING" }));
        }
        break;
      }
    }
  });

  ws.on("close", () => {
    // Use a grace period before broadcasting disconnect. This covers the case
    // where the host's modal socket closes and their BattlePage socket
    // re-registers within milliseconds — we don't want to falsely tell the
    // guest their opponent disconnected during that handoff.
    const disconnectedPlayerId = playerId;
    const disconnectedRoomCode = roomCode;
    const wasFinished = gameFinished;

    // Capture the player's name before removing them, so we can check
    // by name whether they re-registered under a new socket ID
    const disconnectedName =
      getRoom(disconnectedRoomCode ?? "")?.players.get(disconnectedPlayerId)
        ?.name ?? null;

    // Remove immediately so the slot is free for re-registration
    removePlayer(disconnectedPlayerId);
    console.log(
      `[WS] Disconnected: ${disconnectedPlayerId} (${disconnectedName})`,
    );

    if (disconnectedRoomCode && !wasFinished) {
      setTimeout(() => {
        const room = getRoom(disconnectedRoomCode);
        if (!room?.startedAt) return; // game never started, no need to notify
        // Check by name — upsertPlayer replaces the UUID but keeps the name
        const playerReconnected =
          disconnectedName !== null &&
          [...room.players.values()].some((p) => p.name === disconnectedName);
        if (!playerReconnected) {
          // Genuinely gone — tell the other player
          broadcast(disconnectedRoomCode, {
            type: "ERROR",
            message: "Opponent disconnected.",
          });
        }
      }, 800); // 800ms grace window covers modal→BattlePage socket handoff
    }
  });

  ws.on("error", (err) => console.error("[WS] Error:", err));
});

server.listen(PORT, () => {
  console.log(`🥋 Scrivo battle server running on port ${PORT}`);
  console.log(`   WS:   ws://localhost:${PORT}/ws`);
  console.log(`   REST: http://localhost:${PORT}/rooms`);
});
