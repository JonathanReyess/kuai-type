// src/components/ChallengeLinkModal.tsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GameToken } from "../types";
import { createBattleRoom } from "../hooks/useBattle";

/// <reference types="vite/client" />

const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };

interface ChallengeLinkModalProps {
  lessonId: string;
  lessonTitle: string;
  difficulty: string;
  tokens: GameToken[];
  onClose: () => void;
}

type ModalPhase = "naming" | "creating" | "ready" | "error";

const WS_URL =
  (import.meta as any).env?.VITE_BATTLE_WS_URL ?? "ws://localhost:3001/ws";

export default function ChallengeLinkModal({
  lessonId,
  lessonTitle,
  difficulty,
  tokens,
  onClose,
}: ChallengeLinkModalProps) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<ModalPhase>("naming");
  const [nameInput, setNameInput] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [opponentJoined, setOpponentJoined] = useState(false);
  const [opponentName, setOpponentName] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const roomCodeRef = useRef<string>("");

  const challengeLink = roomCode
    ? `${window.location.origin}/battle/${roomCode}`
    : "";

  useEffect(() => {
    return () => {
      wsRef.current?.close();
    };
  }, []);

  const handleCreateRoom = async () => {
    const name = nameInput.trim();
    if (!name) return;
    setPhase("creating");

    const result = await createBattleRoom(lessonId, difficulty, tokens, name);
    if ("error" in result) {
      setErrorMsg(result.error);
      setPhase("error");
      return;
    }

    const code = result.code;
    roomCodeRef.current = code;
    setRoomCode(code);

    sessionStorage.setItem(
      "scrivo_battle_host",
      JSON.stringify({ code, lessonId, difficulty, tokens, playerName: name }),
    );

    const socket = new WebSocket(WS_URL);
    wsRef.current = socket;

    socket.onopen = () => {
      socket.send(
        JSON.stringify({ type: "CREATE_ROOM", code, playerName: name }),
      );
    };

    socket.onmessage = (e) => {
      const event = JSON.parse(e.data);
      if (event.type === "OPPONENT_JOINED") {
        setOpponentName(event.opponent.name);
        setOpponentJoined(true);
      }
      if (event.type === "GAME_START") {
        socket.close();
        onClose();
        navigate(`/battle/${roomCodeRef.current}`);
      }
    };

    socket.onerror = () => {
      console.warn("Modal WS error — opponent detection unavailable");
    };

    setPhase("ready");
  };

  const handleStartGame = () => {
    const socket = wsRef.current;
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      onClose();
      navigate(`/battle/${roomCode}`);
      return;
    }
    socket.send(JSON.stringify({ type: "START_GAME", code: roomCode }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(challengeLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:scale-125 transition-transform"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <svg
            fill="currentColor"
            viewBox="0 0 511.999 511.999"
            className="mx-auto mb-3 w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M497.916,1.279c-8.811-3.179-18.56-0.277-24.213,7.125C460.199,26.09,415.89,74.41,373.394,85.439 c-6.635,1.707-12.075,6.571-14.571,12.992c-0.256,0.704-27.776,70.315-102.336,146.176 c-74.56-75.861-102.08-145.472-102.336-146.176c-2.475-6.421-7.915-11.285-14.571-12.992C88.53,72.191,38.674,8.874,38.162,8.234 c-5.739-7.36-15.701-10.176-24.32-6.848C5.095,4.671-0.494,13.247,0.039,22.548c0.149,2.88,4.331,71.168,34.645,139.029 c2.219,4.971,6.741,15.125,32.363,19.179c-3.093,13.653-1.685,20.48,3.669,26.965c4.757,5.696,69.504,74.389,116.096,106.709 l-8.341,8.32c-6.571-10.496-18.133-17.536-31.211-17.792h-0.427c-11.605,0-21.099,9.28-21.333,20.928 c-0.192,10.411,7.104,19.221,16.939,21.269c1.984,8.512,5.44,16.64,10.005,24.299c0.021,0.043,0.021,0.085,0.064,0.128 c0.043,0.107,0.107,0.171,0.171,0.256L48.914,475.583c-8.32,8.341-8.32,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.069,15.083-6.251l103.808-103.787c7.381,4.331,15.296,7.595,23.659,9.493 c2.133,9.579,10.688,16.64,20.779,16.64h0.725c11.776-0.384,21.013-10.24,20.608-22.016c-0.363-11.477-6.251-21.461-14.827-28.16 c15.061-12.523,28.992-22.976,40.747-31.253l22.72,22.827c-0.725,0.171-1.387,0.576-2.112,0.704 c-17.301,3.051-30.315,18.133-30.869,35.883c-0.405,11.776,8.832,21.632,20.629,22.016h0.704c10.091,0,18.645-7.061,20.779-16.64 c8.213-1.856,16.021-5.056,23.36-9.323L432.85,505.706c4.181,4.203,9.643,6.293,15.147,6.293c5.44,0,10.859-2.048,15.019-6.187 c8.384-8.277,8.427-21.803,0.128-30.165L360.124,372.138c4.757-7.829,8.363-16.192,10.411-24.981 c9.835-2.048,17.131-10.859,16.939-21.269c-0.213-11.648-9.728-20.928-21.333-20.928h-0.405 c-17.877,0.341-33.152,13.205-36.309,30.549c-0.277,1.493-1.067,2.816-1.493,4.267l-16.149-16.213 c46.293-25.813,125.205-109.525,130.475-115.819c5.397-6.443,6.805-13.269,3.669-26.987c25.643-4.053,30.165-14.187,32.363-19.157 c30.4-68.032,33.557-136.491,33.685-139.371C512.38,12.927,506.663,4.436,497.916,1.279z" />
            </g>
          </svg>
          <h3
            className="text-4xl mb-1 tracking-widest uppercase"
            style={protestFont}
          >
            Challenge
          </h3>
        </div>

        {/* Lesson + difficulty tags */}
        <div className="flex gap-3 justify-center mb-6">
          <span
            className="px-3 py-1 bg-gray-50 border border-gray-200 font-serif text-sm rounded-sm"
            style={calliFont}
          >
            {lessonTitle}
          </span>
          <span className="px-3 py-1 bg-black text-white font-serif text-sm rounded-sm uppercase tracking-wider">
            {difficulty}
          </span>
        </div>

        {/* ── Phase: naming ── */}
        {phase === "naming" && (
          <>
            <label className="block font-serif text-sm uppercase tracking-wider text-gray-500 mb-2">
              Your name (shown to opponent)
            </label>
            <input
              autoFocus
              maxLength={20}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreateRoom()}
              className="w-full border-2 border-black p-3 font-serif text-lg mb-4 outline-none bg-gray-50"
              placeholder="e.g. 小明"
            />
            <button
              disabled={!nameInput.trim()}
              onClick={handleCreateRoom}
              className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Create Room
            </button>
          </>
        )}

        {/* ── Phase: creating ── */}
        {phase === "creating" && (
          <div className="text-center py-8">
            <div className="font-serif text-gray-400 uppercase tracking-widest animate-pulse text-sm">
              Creating room…
            </div>
          </div>
        )}

        {/* ── Phase: error ── */}
        {phase === "error" && (
          <div className="text-center py-4">
            <p className="font-serif text-red-500 mb-4">{errorMsg}</p>
            <button
              onClick={() => setPhase("naming")}
              className="px-6 py-2 border-2 border-black font-serif uppercase text-sm hover:bg-black hover:text-white transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ── Phase: ready ── */}
        {phase === "ready" && (
          <>
            <div className="text-center mb-5">
              <p className="text-sm font-serif uppercase tracking-widest text-gray-400 mb-4">
                Room Code
              </p>
              <div
                className="text-6xl font-bold tracking-[0.3em] select-all"
                style={protestFont}
              >
                {roomCode}
              </div>
            </div>

            <div className="flex gap-2 mb-5">
              <div className="flex-1 border-2 border-gray-200 p-3 font-serif text-sm truncate bg-gray-50 text-gray-400">
                {challengeLink}
              </div>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 border-2 font-serif text-sm uppercase tracking-wider transition-all whitespace-nowrap
                  ${
                    copied
                      ? "bg-[#7E9E73] text-white border-[#7E9E73]"
                      : "bg-black text-white border-black hover:bg-gray-800"
                  }`}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div
              className={`border-2 p-4 text-center mb-5 transition-all duration-300 ${
                opponentJoined
                  ? "border-black bg-black text-white"
                  : "border-dashed border-gray-300"
              }`}
            >
              {opponentJoined ? (
                <div className="flex items-center justify-center gap-3">
                  <svg
                    viewBox="0 0 511.999 511.999"
                    className="w-5 h-5 fill-white shrink-0"
                  >
                    <path d="M497.916,1.279c-8.811-3.179-18.56-0.277-24.213,7.125C460.199,26.09,415.89,74.41,373.394,85.439 c-6.635,1.707-12.075,6.571-14.571,12.992c-0.256,0.704-27.776,70.315-102.336,146.176 c-74.56-75.861-102.08-145.472-102.336-146.176c-2.475-6.421-7.915-11.285-14.571-12.992C88.53,72.191,38.674,8.874,38.162,8.234 c-5.739-7.36-15.701-10.176-24.32-6.848C5.095,4.671-0.494,13.247,0.039,22.548c0.149,2.88,4.331,71.168,34.645,139.029 c2.219,4.971,6.741,15.125,32.363,19.179c-3.093,13.653-1.685,20.48,3.669,26.965c4.757,5.696,69.504,74.389,116.096,106.709 l-8.341,8.32c-6.571-10.496-18.133-17.536-31.211-17.792h-0.427c-11.605,0-21.099,9.28-21.333,20.928 c-0.192,10.411,7.104,19.221,16.939,21.269c1.984,8.512,5.44,16.64,10.005,24.299c0.021,0.043,0.021,0.085,0.064,0.128 c0.043,0.107,0.107,0.171,0.171,0.256L48.914,475.583c-8.32,8.341-8.32,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.069,15.083-6.251l103.808-103.787c7.381,4.331,15.296,7.595,23.659,9.493 c2.133,9.579,10.688,16.64,20.779,16.64h0.725c11.776-0.384,21.013-10.24,20.608-22.016c-0.363-11.477-6.251-21.461-14.827-28.16 c15.061-12.523,28.992-22.976,40.747-31.253l22.72,22.827c-0.725,0.171-1.387,0.576-2.112,0.704 c-17.301,3.051-30.315,18.133-30.869,35.883c-0.405,11.776,8.832,21.632,20.629,22.016h0.704c10.091,0,18.645-7.061,20.779-16.64 c8.213-1.856,16.021-5.056,23.36-9.323L432.85,505.706c4.181,4.203,9.643,6.293,15.147,6.293c5.44,0,10.859-2.048,15.019-6.187 c8.384-8.277,8.427-21.803,0.128-30.165L360.124,372.138c4.757-7.829,8.363-16.192,10.411-24.981 c9.835-2.048,17.131-10.859,16.939-21.269c-0.213-11.648-9.728-20.928-21.333-20.928h-0.405 c-17.877,0.341-33.152,13.205-36.309,30.549c-0.277,1.493-1.067,2.816-1.493,4.267l-16.149-16.213 c46.293-25.813,125.205-109.525,130.475-115.819c5.397-6.443,6.805-13.269,3.669-26.987c25.643-4.053,30.165-14.187,32.363-19.157 c30.4-68.032,33.557-136.491,33.685-139.371C512.38,12.927,506.663,4.436,497.916,1.279z" />
                  </svg>
                  <span className="font-serif text-sm uppercase tracking-wider font-bold">
                    {opponentName} is ready!
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                  <span className="font-serif text-sm text-gray-600 uppercase tracking-wider">
                    Waiting for opponent…
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={opponentJoined ? handleStartGame : undefined}
              disabled={!opponentJoined}
              className={`w-full py-4 font-serif uppercase tracking-[0.2em] transition-all
                ${
                  opponentJoined
                    ? "bg-[#7E9E73] text-white hover:bg-[#698360] cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200"
                }`}
              style={protestFont}
            >
              Start Game
            </button>
          </>
        )}
      </div>
    </div>
  );
}
