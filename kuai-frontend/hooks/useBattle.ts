/// <reference types="vite/client" />
// src/hooks/useBattle.ts
import { useEffect, useRef, useState, useCallback } from "react";
import { GameToken } from "../types";
import { PRE_GENERATED_STORIES } from "../storyData";

const WS_URL =
  (import.meta as any).env?.VITE_BATTLE_WS_URL ?? "ws://localhost:3001/ws";
const API_URL =
  (import.meta as any).env?.VITE_BATTLE_API_URL ?? "http://localhost:3001";

export interface OpponentState {
  id: string;
  name: string;
  currentIndex: number;
  wpm: number;
  score: number;
  finished: boolean;
}

export interface FinalPlayerStats {
  id: string;
  name: string;
  score: number;
  wpm: number;
  missedTokens: GameToken[]; // always present after normalization
}

export type BattlePhase =
  | "idle"
  | "connecting"
  | "waiting" // waiting for opponent to arrive
  | "lobby" // both players present, host hasn't started yet
  | "countdown" // 3-2-1 before game begins
  | "playing"
  | "finished"
  | "rematch_waiting" // this player clicked Rematch, waiting for opponent
  | "error";

interface UseBattleOptions {
  roomCode: string;
  playerName: string;
  role: "host" | "guest";
}

interface UseBattleReturn {
  phase: BattlePhase;
  tokens: GameToken[];
  lessonId: string;
  difficulty: string;
  opponent: OpponentState | null;
  errorMessage: string;
  winner: string | null;
  isWinner: boolean;
  countdown: number | null;
  sendProgress: (currentIndex: number, wpm: number, score: number) => void;
  sendFinished: (
    wpm: number,
    accuracy: number,
    finalScore: number,
    missedTokens: GameToken[],
  ) => void;
  sendStartGame: (roomCode: string) => void;
  sendRematch: () => void;
  finalStats: FinalPlayerStats[] | null;
}

// Pick a random passage from the story data for the given lesson/difficulty
function pickNewTokens(lessonId: string, difficulty: string): GameToken[] {
  const lessonData = (PRE_GENERATED_STORIES as any)[lessonId];
  if (!lessonData) return [];
  const stories: GameToken[][] = lessonData[difficulty.toLowerCase()] ?? [];
  if (stories.length === 0) return [];
  return stories[Math.floor(Math.random() * stories.length)];
}

// Fetch server time and calculate offset (serverTime - clientTime)
// Positive offset means server clock is ahead of client
// Fetch server time multiple times and use the fastest ping to calculate offset
async function getServerTimeOffset(): Promise<number> {
  let bestOffset = 0;
  let lowestRoundTrip = Infinity;

  // Ping 3 times to bypass cold-start, DNS, and TLS handshake latencies
  for (let i = 0; i < 3; i++) {
    try {
      const beforeRequest = Date.now();
      const res = await fetch(`${API_URL}/time`, { cache: "no-store" });
      const { serverTime } = await res.json();
      const afterRequest = Date.now();

      const roundTrip = afterRequest - beforeRequest;

      // We only trust the ping with the fastest round trip
      if (roundTrip < lowestRoundTrip) {
        lowestRoundTrip = roundTrip;
        const estimatedServerNow = serverTime + roundTrip / 2;
        bestOffset = estimatedServerNow - afterRequest;
      }
    } catch (e) {
      console.warn(
        `Time sync ping ${i + 1} failed, using local clock or previous best`,
      );
    }
  }

  return bestOffset;
}

export function useBattle({
  roomCode,
  playerName,
  role,
}: UseBattleOptions): UseBattleReturn {
  const ws = useRef<WebSocket | null>(null);
  const serverTimeOffset = useRef<number>(0); // serverTime - clientTime

  const [phase, setPhase] = useState<BattlePhase>("connecting");
  const [tokens, setTokens] = useState<GameToken[]>([]);
  const [lessonId, setLessonId] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [opponent, setOpponent] = useState<OpponentState | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [finalStats, setFinalStats] = useState<FinalPlayerStats[] | null>(null);

  // Keep lessonId/difficulty in refs so sendRematch can access latest values
  const lessonIdRef = useRef("");
  const difficultyRef = useRef("");

  const opponentRef = useRef<OpponentState | null>(null);

  useEffect(() => {
    if (!roomCode || !playerName) return;

    let socket: WebSocket;
    let mounted = true;

    // Helper to get "server time" using local clock + offset
    const getServerNow = () => Date.now() + serverTimeOffset.current;

    // Sync time first, then connect WebSocket
    getServerTimeOffset().then((offset) => {
      if (!mounted) return;

      serverTimeOffset.current = offset;
      console.log(`[Time Sync] Server offset: ${offset}ms`);

      socket = new WebSocket(WS_URL);
      ws.current = socket;

      socket.onopen = () => {
        if (role === "host") {
          socket.send(
            JSON.stringify({ type: "CREATE_ROOM", code: roomCode, playerName }),
          );
        } else {
          socket.send(
            JSON.stringify({ type: "JOIN_ROOM", code: roomCode, playerName }),
          );
        }
      };

      socket.onmessage = (e) => {
        const event = JSON.parse(e.data);
        console.log("[WS received]", event.type, event);

        switch (event.type) {
          case "ROOM_CREATED":
            setTokens(event.tokens);
            setLessonId(event.lessonId);
            setDifficulty(event.difficulty);
            lessonIdRef.current = event.lessonId;
            difficultyRef.current = event.difficulty;
            setPhase("waiting");
            break;

          case "WAITING":
            setPhase("waiting");
            break;

          case "OPPONENT_JOINED":
            opponentRef.current = event.opponent;
            setOpponent(event.opponent);
            setPhase("lobby");
            break;

          case "GAME_START": {
            // Works for both initial start and rematch
            setTokens(event.tokens);
            setLessonId(event.lessonId);
            setDifficulty(event.difficulty);
            lessonIdRef.current = event.lessonId;
            difficultyRef.current = event.difficulty;
            // Reset winner/stats so finished screen doesn't linger
            setWinner(null);
            setFinalStats(null);
            setPhase("countdown");

            const startsAt: number = event.startsAt;

            const tick = () => {
              const remainingMs = startsAt - getServerNow();
              const remainingSec = Math.ceil(remainingMs / 1000);

              if (remainingMs <= 0) {
                setCountdown(null);
                setPhase("playing");
                return;
              }

              setCountdown(Math.min(3, remainingSec));

              // Align ticks to whole-second boundaries in server time
              // This ensures both clients update their countdown at the same absolute moment
              const msUntilNextSecond = remainingMs % 1000 || 1000;
              setTimeout(tick, msUntilNextSecond);
            };

            // Start countdown aligned to server time
            const initialRemainingMs = startsAt - getServerNow();
            setCountdown(Math.ceil(initialRemainingMs / 1000));
            const msUntilFirstTick = initialRemainingMs % 1000 || 1000;
            setTimeout(tick, msUntilFirstTick);
            break;
          }

          case "OPPONENT_PROGRESS":
            opponentRef.current = event.opponent;
            setOpponent({ ...event.opponent });
            break;

          case "OPPONENT_FINISHED":
            opponentRef.current = event.opponent;
            setOpponent({ ...event.opponent });
            break;

          case "GAME_OVER":
            setWinner(event.winner);
            // Normalize: ensure missedTokens is always an array
            setFinalStats(
              (event.players ?? []).map((p: any) => ({
                id: p.id,
                name: p.name,
                score: p.score,
                wpm: p.wpm,
                missedTokens: p.missedTokens ?? [],
              })),
            );
            setPhase("finished");
            break;

          case "REMATCH_WAITING":
            // Either we requested rematch (confirmation) or opponent did (prompt)
            setPhase("rematch_waiting");
            break;

          case "ERROR":
            setErrorMessage(event.message);
            setPhase("error");
            break;
        }
      };

      socket.onclose = () => {
        setPhase((current) => {
          if (current === "finished" || current === "error") return current;
          setErrorMessage("Connection lost.");
          return "error";
        });
      };

      socket.onerror = () => {
        setErrorMessage("Could not connect to battle server. Is it running?");
        setPhase("error");
      };
    });

    return () => {
      mounted = false;
      if (ws.current) {
        ws.current.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendProgress = useCallback(
    (currentIndex: number, wpm: number, score: number) => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.send(
          JSON.stringify({ type: "PROGRESS", currentIndex, wpm, score }),
        );
      }
    },
    [],
  );

  const sendFinished = useCallback(
    (
      wpm: number,
      accuracy: number,
      finalScore: number,
      missedTokens: GameToken[],
    ) => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.send(
          JSON.stringify({
            type: "FINISHED",
            wpm,
            accuracy,
            score: finalScore,
            missedTokens,
          }),
        );
      }
    },
    [],
  );

  const sendStartGame = useCallback((code: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ type: "START_GAME", code }));
    }
  }, []);

  const sendRematch = useCallback(() => {
    if (ws.current?.readyState !== WebSocket.OPEN) return;
    // Pick a new random passage client-side and send it with the request.
    // The server uses whichever player's tokens arrive when both have voted.
    const newTokens = pickNewTokens(lessonIdRef.current, difficultyRef.current);
    ws.current.send(
      JSON.stringify({ type: "REMATCH", code: roomCode, tokens: newTokens }),
    );
  }, [roomCode]);

  const isWinner =
    winner !== null && opponent !== null && winner !== opponent.id;

  return {
    phase,
    tokens,
    lessonId,
    difficulty,
    opponent,
    errorMessage,
    winner,
    isWinner,
    countdown,
    sendProgress,
    sendFinished,
    sendStartGame,
    sendRematch,
    finalStats,
  };
}

// ── Helper: create a room via REST ───────────────────────────────────────────
export async function createBattleRoom(
  lessonId: string,
  difficulty: string,
  tokens: GameToken[],
  playerName: string,
): Promise<{ code: string } | { error: string }> {
  try {
    const res = await fetch(`${API_URL}/rooms`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, difficulty, tokens, playerName }),
    });
    if (!res.ok) throw new Error("Server error");
    return await res.json();
  } catch {
    return {
      error: "Could not reach the battle server. Is it running on port 3001?",
    };
  }
}
