/// <reference types="vite/client" />
// src/hooks/useBattle.ts
import { useEffect, useRef, useState, useCallback } from "react";
import { GameToken } from "../types";

const WS_URL =
  (import.meta as any).env?.VITE_BATTLE_WS_URL ?? "ws://localhost:3001/ws";
const API_URL =
  (import.meta as any).env?.VITE_BATTLE_API_URL ?? "http://localhost:3001";

export interface OpponentState {
  id: string;
  name: string;
  currentIndex: number;
  wpm: number;
  finished: boolean;
}

export type BattlePhase =
  | "idle"
  | "connecting"
  | "waiting" // host waiting for opponent
  | "starting" // opponent just joined
  | "countdown" // 3-2-1 before game begins
  | "playing"
  | "finished"
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
  sendProgress: (currentIndex: number, wpm: number) => void;
  sendFinished: (wpm: number, accuracy: number, score: number) => void;
}

export function useBattle({
  roomCode,
  playerName,
  role,
}: UseBattleOptions): UseBattleReturn {
  const ws = useRef<WebSocket | null>(null);

  const [phase, setPhase] = useState<BattlePhase>("connecting");
  const [tokens, setTokens] = useState<GameToken[]>([]);
  const [lessonId, setLessonId] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [opponent, setOpponent] = useState<OpponentState | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [winner, setWinner] = useState<string | null>(null);

  // Use refs for values needed inside the socket callbacks to avoid stale closures
  const opponentRef = useRef<OpponentState | null>(null);

  useEffect(() => {
    if (!roomCode || !playerName) return;

    const socket = new WebSocket(WS_URL);
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
          setPhase("waiting");
          break;

        case "WAITING":
          // Guest arrived before host — show waiting screen until host connects
          setPhase("waiting");
          break;

        case "OPPONENT_JOINED":
          opponentRef.current = event.opponent;
          setOpponent(event.opponent);
          setPhase("starting");
          break;

        case "GAME_START": {
          setTokens(event.tokens);
          setLessonId(event.lessonId);
          setDifficulty(event.difficulty);
          setPhase("countdown");
          // Tick against the server-provided absolute timestamp so both
          // clients switch to "playing" at the exact same wall-clock moment
          const startsAt: number = event.startsAt;
          const tick = () => {
            const remaining = Math.ceil((startsAt - Date.now()) / 1000);
            if (remaining > 0) {
              setCountdown(remaining);
              setTimeout(tick, 200); // poll frequently for accuracy
            } else {
              setCountdown(null);
              setPhase("playing");
            }
          };
          tick();
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
          setPhase("finished");
          break;

        case "ERROR":
          setErrorMessage(event.message);
          setPhase("error");
          break;
      }
    };

    socket.onclose = () => {
      // Only set error if we didn't already handle it via an ERROR message
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

    return () => {
      socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps — connect once on mount, never reconnect

  const sendProgress = useCallback((currentIndex: number, wpm: number) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ type: "PROGRESS", currentIndex, wpm }));
    }
  }, []);

  const sendFinished = useCallback(
    (wpm: number, accuracy: number, score: number) => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.send(
          JSON.stringify({ type: "FINISHED", wpm, accuracy, score }),
        );
      }
    },
    [],
  );

  // isWinner: we won if there's a winner and it's not our opponent
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
