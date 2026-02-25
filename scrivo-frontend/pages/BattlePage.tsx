// src/pages/BattlePage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBattle } from "../hooks/useBattle";
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
        <div className="relative z-10 w-full max-w-sm bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="text-center mb-8">
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
            <h2
              className="text-4xl uppercase tracking-widest mb-2"
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
  onNavigate: (path: string) => void;
}) {
  const {
    phase,
    tokens,
    opponent,
    errorMessage,
    isWinner,
    countdown,
    sendProgress,
    sendFinished,
  } = useBattle({ roomCode, playerName, role });

  if (phase === "error") {
    return (
      <StatusScreen icon=" " title="Connection Error" subtitle={errorMessage}>
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
        icon=" "
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
        icon=" "
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
        icon=""
        title={String(countdown ?? "")}
        subtitle={`vs ${opponent?.name ?? "opponent"}`}
      />
    );
  }

  if (phase === "finished") {
    return (
      <StatusScreen
        icon={isWinner ? " " : " "}
        title={isWinner ? "Victory!" : "Defeated"}
        subtitle={
          isWinner
            ? `You beat ${opponent?.name}!`
            : `${opponent?.name} finished first.`
        }
      >
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => onNavigate("/")}
            className="px-8 py-3 border-2 border-black font-serif uppercase tracking-wider hover:bg-black hover:text-white transition-all"
          >
            Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-black text-white font-serif uppercase tracking-wider hover:bg-gray-900"
          >
            Rematch
          </button>
        </div>
      </StatusScreen>
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

function StatusScreen({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6">
      <Texture />
      <div className="relative z-10 text-center">
        <div className="text-7xl mb-6">{icon}</div>
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
