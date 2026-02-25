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

  const hostConfig = getHostConfig();
  const role: "host" | "guest" =
    hostConfig?.code === roomCode ? "host" : "guest";

  // If host, we already have their name from ChallengeLinkModal — skip the name screen
  const [playerName, setPlayerName] = useState(
    role === "host" && hostConfig?.playerName ? hostConfig.playerName : "",
  );
  const [ready, setReady] = useState(
    role === "host" && !!hostConfig?.playerName,
  );

  // Clear sessionStorage for host now that we've read the name
  if (role === "host" && hostConfig?.playerName) {
    sessionStorage.removeItem("scrivo_battle_host");
  }

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
            <div className="text-5xl mb-3">⚔️</div>
            <h2
              className="text-4xl uppercase tracking-widest mb-1"
              style={protestFont}
            >
              Battle
            </h2>
            <p className="font-serif text-gray-500 text-sm">
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
      hostConfig={hostConfig}
      onNavigate={navigate}
    />
  );
}

// Separate component so useBattle only runs after playerName is ready
function BattleInner({
  roomCode,
  playerName,
  role,
  hostConfig,
  onNavigate,
}: {
  roomCode: string;
  playerName: string;
  role: "host" | "guest";
  hostConfig: any;
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
      <StatusScreen icon="💥" title="Connection Error" subtitle={errorMessage}>
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
        icon="⏳"
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

  if (phase === "starting") {
    return (
      <StatusScreen
        icon="🥊"
        title="Opponent Found"
        subtitle={`${opponent?.name} has joined!`}
      >
        <p className="font-serif text-gray-400 animate-pulse uppercase tracking-wider text-sm">
          Starting game…
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
        icon={isWinner ? "🏆" : "💀"}
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
      onProgress={sendProgress}
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
