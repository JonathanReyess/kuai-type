// src/pages/BattlePage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBattle, FinalPlayerStats } from "../hooks/useBattle";
import BattleGame from "../components/BattleGame";

const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

function getHostConfig() {
  const raw = sessionStorage.getItem("scrivo_battle_host");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function BattlePage() {
  const { roomCode } = useParams<{ roomCode: string }>();
  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState("");

  // Capture role, playerName, and ready into useState initialisers so they are
  // computed exactly ONCE on mount.  Reading sessionStorage on every render and
  // then deleting it caused role to flip "host" → "guest" on the very next
  // re-render, which made the host see the guest's lobby screen.
  const [role] = useState<"host" | "guest">(() => {
    const config = getHostConfig();
    return config?.code === roomCode ? "host" : "guest";
  });

  const [playerName, setPlayerName] = useState<string>(() => {
    const config = getHostConfig();
    return config?.code === roomCode && config?.playerName
      ? (config.playerName as string)
      : "";
  });

  const [ready, setReady] = useState<boolean>(() => {
    const config = getHostConfig();
    const isHost = config?.code === roomCode && !!config?.playerName;
    if (isHost) {
      // Safe to remove now — we've captured everything we need
      sessionStorage.removeItem("scrivo_battle_host");
    }
    return isHost;
  });

  const handleSubmitName = () => {
    const name = nameInput.trim();
    if (!name) return;
    sessionStorage.removeItem("scrivo_battle_host");
    setPlayerName(name);
    setReady(true);
  };

  // ── Name entry — shown before WS connects ─────────────────────────────────
  if (!ready) {
    return (
      <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6">
        <Texture />
        <div className="relative z-10 max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="text-center mb-8">
            <h2
              className="text-4xl uppercase tracking-widest mb-1"
              style={protestFont}
            >
              Battle
            </h2>
            <p className="font-serif text-gray-500 text-md">
              Room · {roomCode}
            </p>
          </div>
          <label className="block font-serif text-sm uppercase tracking-wider text-gray-500 mb-2">
            Your Name
          </label>
          <input
            autoFocus
            maxLength={20}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmitName()}
            className="w-full border-2 border-black p-3 font-serif text-lg mb-4 outline-none focus:ring-0 bg-gray-50"
            placeholder="e.g. 小明"
          />
          <button
            disabled={!nameInput.trim()}
            onClick={handleSubmitName}
            className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {role === "host" ? "Open Room" : "Join Battle"}
          </button>
        </div>
      </div>
    );
  }

  // ── Battle — only mounts (and connects WS) after name is set ──────────────
  return (
    <BattleInner
      roomCode={roomCode!}
      playerName={playerName}
      role={role}
      onNavigate={navigate}
    />
  );
}

// Separate component so useBattle only runs after playerName is ready
function BattleInner({
  roomCode,
  playerName,
  role,
  onNavigate,
}: {
  roomCode: string;
  playerName: string;
  role: "host" | "guest";
  onNavigate: (path: string, options?: { state?: unknown }) => void;
}) {
  const {
    phase,
    tokens,
    lessonId,
    difficulty,
    opponent,
    errorMessage,
    isWinner,
    countdown,
    sendProgress,
    sendFinished,
    sendRematch,
    finalStats,
  } = useBattle({ roomCode, playerName, role });

  if (phase === "error") {
    return (
      <StatusScreen title="Connection Error" subtitle={errorMessage}>
        <button
          onClick={() => onNavigate("/")}
          className="px-8 py-3 bg-black text-white font-serif uppercase tracking-wider hover:bg-gray-900"
        >
          Back to Home
        </button>
      </StatusScreen>
    );
  }

  if (phase === "connecting" || phase === "waiting") {
    return (
      <StatusScreen
        title="Waiting"
        subtitle="Share the code with your opponent"
      >
        <div
          className="text-7xl font-bold tracking-[0.3em] mb-6"
          style={protestFont}
        >
          {roomCode}
        </div>
        <p className="font-serif text-sm text-gray-500 uppercase tracking-wider">
          Room expires in 10 minutes
        </p>
      </StatusScreen>
    );
  }

  // ── Lobby: both players present, waiting for host to start ──────────────────
  // Guest waits here. Host should rarely see this — they arrive post-GAME_START
  // from the modal and go straight to countdown. This is a safety fallback.
  if (phase === "lobby") {
    return (
      <StatusScreen
        title="Ready!"
        subtitle={role === "guest" ? "Waiting for host to start…" : "Starting…"}
      >
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
        <p className="font-serif text-gray-400 text-sm uppercase tracking-wider">
          vs {opponent?.name ?? "opponent"}
        </p>
      </StatusScreen>
    );
  }

  if (phase === "countdown") {
    return (
      <StatusScreen
        title={String(countdown ?? "")}
        subtitle={`vs ${opponent?.name ?? "opponent"}`}
      />
    );
  }

  if (phase === "rematch_waiting") {
    return (
      <StatusScreen title="Rematch" subtitle="Waiting for opponent…">
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </StatusScreen>
    );
  }

  if (phase === "finished") {
    return (
      <BattleResults
        isWinner={isWinner}
        playerName={playerName}
        opponentName={opponent?.name ?? "Opponent"}
        finalStats={finalStats}
        onHome={() => onNavigate("/")}
        onRematch={sendRematch}
      />
    );
  }

  // phase === "playing"
  return (
    <BattleGame
      tokens={tokens}
      playerName={playerName}
      opponent={opponent}
      onProgress={(idx, wpm, score) => sendProgress(idx, wpm, score)}
      onFinished={sendFinished}
      onExit={() => onNavigate("/")}
    />
  );
}

function BattleResults({
  isWinner,
  playerName,
  opponentName,
  finalStats,
  onHome,
  onRematch,
}: {
  isWinner: boolean;
  playerName: string;
  opponentName: string;
  finalStats: FinalPlayerStats[] | null;
  onHome: () => void;
  onRematch: () => void;
}) {
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  // Sort so winner appears first
  const sorted = finalStats
    ? [...finalStats].sort((a, b) => b.score - a.score)
    : null;

  return (
    <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-4">
      <Texture />
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-6xl uppercase tracking-widest mb-2"
            style={protestFont}
          >
            {isWinner ? "Victory!" : "Defeated"}
          </h2>
          <p className="font-serif text-gray-500 text-lg">
            {isWinner
              ? `You beat ${opponentName}!`
              : `${opponentName} scored higher.`}
          </p>
        </div>

        {/* Player score cards */}
        <div className="flex flex-col gap-4 mb-8">
          {sorted ? (
            sorted.map((player, i) => {
              const isYou = player.name === playerName;
              const isFirst = i === 0;

              return (
                <div
                  key={player.id}
                  className={`border-2 p-5 ${
                    isFirst
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span
                        className={`font-serif text-xs uppercase tracking-widest ${
                          isFirst ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {isFirst ? "Winner" : "Defeated"} {isYou ? "· You" : ""}
                      </span>
                      <h3
                        className="text-3xl tracking-wide mt-0.5"
                        style={protestFont}
                      >
                        {player.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-4xl font-bold tabular-nums`}
                        style={protestFont}
                      >
                        {player.score}
                      </div>
                      <div
                        className={`text-xs font-serif uppercase tracking-widest ${
                          isFirst ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        pts · {player.wpm} wpm
                      </div>
                    </div>
                  </div>

                  {/* Missed / skipped tokens */}
                  {player.missedTokens && player.missedTokens.length > 0 ? (
                    <div>
                      <p
                        className={`font-serif text-xs uppercase tracking-widest mb-2 ${
                          isFirst ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        Missed · {player.missedTokens.length} word
                        {player.missedTokens.length !== 1 ? "s" : ""}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {player.missedTokens.map((t, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col items-center px-3 py-2 border rounded-sm ${
                              isFirst
                                ? "border-white/20 bg-white/10"
                                : "border-gray-200 bg-gray-50"
                            }`}
                          >
                            <span
                              className="text-2xl leading-none"
                              style={calliFont}
                            >
                              {t.char}
                            </span>
                            <span
                              className={`text-[10px] font-serif mt-1 ${
                                isFirst ? "text-gray-300" : "text-gray-400"
                              }`}
                            >
                              {t.pinyin}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p
                      className={`font-serif text-xs uppercase tracking-widest ${
                        isFirst ? "text-green-300" : "text-green-600"
                      }`}
                    >
                      Perfect — no missed words!
                    </p>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center font-serif text-gray-400 py-8">
              Loading results…
            </div>
          )}
        </div>

        {/* Scoring legend */}
        <div className="flex justify-center gap-4 mb-8 font-serif text-xs text-gray-600 uppercase tracking-wider">
          <span>
            Correct: <strong className="text-black">+10 pts</strong>
          </span>
          <span>
            Skip: <strong className="text-black">−5 pts</strong>
          </span>
          <span>
            Speed bonus: <strong className="text-black">up to +300 pts</strong>
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onHome}
            className="px-8 py-3 border-2 border-black font-serif uppercase tracking-wider hover:bg-black hover:text-white transition-all"
          >
            Home
          </button>
          <button
            onClick={onRematch}
            className="px-8 py-3 bg-black text-white font-serif uppercase tracking-wider hover:bg-gray-800"
          >
            Rematch
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusScreen({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6">
      <Texture />
      <div className="relative z-10 text-center">
        <h2
          className="text-5xl uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Protest Revolution', sans-serif" }}
        >
          {title}
        </h2>
        <p className="font-serif text-gray-500 text-lg mb-8">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

function Texture() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
      style={{
        backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
        backgroundSize: "cover",
        mixBlendMode: "multiply",
      }}
    />
  );
}
