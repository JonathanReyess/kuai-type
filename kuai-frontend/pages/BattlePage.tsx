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
    if (isHost) sessionStorage.removeItem("scrivo_battle_host");
    return isHost;
  });

  const handleSubmitName = () => {
    const name = nameInput.trim();
    if (!name) return;
    sessionStorage.removeItem("scrivo_battle_host");
    setPlayerName(name);
    setReady(true);
  };

  if (!ready) {
    return (
      <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6">
        <Texture />
        <div className="relative z-10 max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="text-center mb-8">
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
            className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {role === "host" ? "Open Room" : "Join Battle"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <BattleInner
      roomCode={roomCode!}
      playerName={playerName}
      role={role}
      onNavigate={navigate}
    />
  );
}

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
    opponent,
    errorMessage,
    isWinner,
    countdown,
    sendProgress,
    sendFinished,
    sendStartGame, // <-- 1. Extract this from the hook!
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
        title={<span className="text-5xl">Waiting</span>}
        subtitle="Share the code with your opponent"
      >
        <div className="text-7xl tracking-[0.3em]" style={protestFont}>
          {roomCode}
        </div>
        <p className="font-serif text-xs text-gray-400 uppercase tracking-wider">
          Room expires in 10 minutes
        </p>
      </StatusScreen>
    );
  }

  // 2. Update the lobby phase to give the Host the launch button
  if (phase === "lobby") {
    return (
      <StatusScreen
        title={<span className="text-5xl">Ready!</span>}
        subtitle={
          role === "guest" ? "Waiting for host to start" : "Opponent joined!"
        }
      >
        {role === "host" ? (
          <button
            onClick={() => sendStartGame(roomCode)}
            className="px-8 py-3 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
          >
            Start Battle
          </button>
        ) : (
          <div className="flex items-center gap-3 justify-center">
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0ms]" />
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        )}
        <p className="font-serif text-gray-600 uppercase tracking-wider mt-6">
          vs {opponent?.name ?? "opponent"}
        </p>
      </StatusScreen>
    );
  }

  if (phase === "rematch_waiting") {
    return (
      <StatusScreen
        title={<span className="text-5xl">Rematch</span>}
        subtitle="Waiting for opponent…"
      >
        <div className="flex items-center gap-3 justify-center">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </StatusScreen>
    );
  }

  if (phase === "countdown") {
    return (
      <StatusScreen
        subtitle={`vs ${opponent?.name ?? "opponent"}`}
        title={undefined}
      >
        <style>{`
          @keyframes countdownPop {
            0% { opacity: 0; transform: scale(0.4); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>
        <div
          key={countdown}
          style={{
            fontFamily: "'Protest Revolution', sans-serif",
            fontSize: "clamp(120px, 25vw, 240px)",
            lineHeight: 1,
            animation:
              "countdownPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}
        >
          {countdown}
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
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const [focusIndex, setFocusIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const sorted = finalStats
    ? [...finalStats].sort((a, b) => b.score - a.score)
    : null;
  const you = sorted?.find((p) => p.name === playerName);
  const opp = sorted?.find((p) => p.name !== playerName);
  const cards = you && opp ? [you, opp] : (sorted ?? []);

  const handleFlip = () => setFocusIndex((prev) => (prev === 0 ? 1 : 0));

  const VISIBLE_TOKENS = 4; // Number of tokens to show before "show more"

  return (
    <div className="relative min-h-screen bg-[#f8f7f4] flex flex-col items-center justify-center p-4 overflow-hidden">
      <Texture />

      <style>{`
        @keyframes cardIn {
          0%  { opacity: 0; transform: translateY(40px) scale(0.95); }
          100%{ opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-in { animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
        .card-transition { transition: transform 0.45s cubic-bezier(0.34,1.26,0.64,1), box-shadow 0.45s ease, opacity 0.45s ease; }
      `}</style>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 card-in">
        <h2
          className="text-5xl sm:text-6xl uppercase tracking-widest mb-1"
          style={protestFont}
        >
          {isWinner ? "Victory!" : "Defeated"}
        </h2>
        <p className="font-serif text-gray-500 text-base">
          {isWinner
            ? `You beat ${opponentName}!`
            : `${opponentName} scored higher.`}
        </p>
      </div>

      {/* Stacked cards - fixed height container */}
      <div
        className="relative z-10 w-full max-w-md mt-6"
        style={{ height: "380px" }}
      >
        {cards.length === 2 &&
          cards.map((player, i) => {
            const isYou = player.name === playerName;
            const isFront = i === focusIndex;
            const isFirst = sorted?.[0]?.name === player.name;
            const isExpanded = expandedCard === player.name;
            const missedCount = player.missedTokens?.length ?? 0;
            const hasMore = missedCount > VISIBLE_TOKENS;

            const cardStyle: React.CSSProperties = {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "340px", // Fixed card height
              zIndex: isFront ? 20 : 10,
              boxShadow: isFront
                ? "0px 0px 0px 0px rgba(0,0,0,1)"
                : "5px 5px 0px 0px rgba(0,0,0,0.4)",
              cursor: isFront ? "default" : "pointer",
              transform: isFront
                ? "translateY(0px) scale(1) rotate(0deg)"
                : "translateY(-50px) scale(0.94) rotate(-1.5deg)", // More peek
              opacity: isFront ? 1 : 0.85, // Slight opacity reduction for back card
              transition:
                "transform 0.45s cubic-bezier(0.34,1.26,0.64,1), box-shadow 0.45s ease, opacity 0.45s ease",
            };

            return (
              <div
                key={player.id ?? player.name}
                className={`border-2 rounded-sm group flex flex-col ${
                  isFirst
                    ? "border-black bg-black text-white"
                    : "border-black bg-white"
                }`}
                style={cardStyle}
                onClick={!isFront ? handleFlip : undefined}
                onMouseEnter={(e) => {
                  if (!isFront) {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-65px) scale(0.94) rotate(-1.5deg)";
                    (e.currentTarget as HTMLDivElement).style.opacity = "0.95";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isFront) {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-50px) scale(0.94) rotate(-1.5deg)";
                    (e.currentTarget as HTMLDivElement).style.opacity = "0.85";
                  }
                }}
              >
                {/* Back-card peek row — only visible when this card is behind */}
                {!isFront && (
                  <div
                    className={`flex items-center justify-center px-6 py-4 border-b ${
                      isFirst ? "border-white/20" : "border-gray-200"
                    }`}
                  >
                    {/* Centered content container */}
                    <div className="flex items-center gap-3">
                      {/* Status badge */}
                      <span
                        className={`font-serif text-sm uppercase tracking-widest ${
                          isFirst ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {isFirst ? "Winner" : "Defeated"}
                        {isYou ? " · You" : ""}
                      </span>

                      {/* Divider dot */}
                      <span
                        className={`text-lg ${isFirst ? "text-gray-400" : "text-gray-300"}`}
                      >
                        ·
                      </span>

                      {/* Name */}
                      <span
                        className="text-xl tracking-wide"
                        style={protestFont}
                      >
                        {player.name}
                      </span>

                      {/* Divider dot */}
                      <span
                        className={`text-lg ${isFirst ? "text-gray-400" : "text-gray-300"}`}
                      >
                        ·
                      </span>

                      {/* Score */}
                      <span
                        className={`text-xl font-bold tabular-nums ${
                          isFirst ? "text-gray-200" : "text-gray-700"
                        }`}
                        style={protestFont}
                      >
                        {player.score} pts
                      </span>

                      {/* Arrow icon */}
                      <div
                        className={`ml-2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isFirst
                            ? "border-white/60 text-white"
                            : "border-black text-black"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 10V2M2 6l4-4 4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card body - flex-1 to fill remaining space */}
                <div className="p-5 flex-1 flex flex-col overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span
                        className={`font-serif text-xs uppercase tracking-widest ${
                          isFirst ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {isFirst ? "Winner" : "Defeated"}
                        {isYou ? " · You" : ""}
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
                        className="text-4xl font-bold tabular-nums"
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

                  {/* Missed tokens section - fixed height with expand option */}
                  <div className="flex-1 flex flex-col min-h-0">
                    {player.missedTokens && player.missedTokens.length > 0 ? (
                      <>
                        <p
                          className={`font-serif text-xs uppercase tracking-widest mb-2 flex-shrink-0 ${
                            isFirst ? "text-gray-300" : "text-gray-400"
                          }`}
                        >
                          Missed · {player.missedTokens.length} word
                          {player.missedTokens.length !== 1 ? "s" : ""}
                        </p>

                        {/* Tokens container */}
                        <div
                          className={`flex flex-wrap gap-2 ${isExpanded ? "overflow-y-auto" : "overflow-hidden"}`}
                          style={{ maxHeight: isExpanded ? "160px" : "72px" }}
                        >
                          {(isExpanded
                            ? player.missedTokens
                            : player.missedTokens.slice(0, VISIBLE_TOKENS)
                          ).map((t, idx) => (
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

                        {/* Show more/less button */}
                        {hasMore && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(isExpanded ? null : player.name);
                            }}
                            className={`mt-2 flex items-center justify-center gap-1 font-serif text-xs uppercase tracking-wider transition-colors ${
                              isFirst
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-500 hover:text-black"
                            }`}
                          >
                            <span>
                              {isExpanded
                                ? "Show less"
                                : `+${missedCount - VISIBLE_TOKENS} more`}
                            </span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            >
                              <path d="M2 4l4 4 4-4" />
                            </svg>
                          </button>
                        )}
                      </>
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
                </div>
              </div>
            );
          })}

        {cards.length === 0 && (
          <div className="text-center font-serif text-gray-400 py-8">
            Loading results…
          </div>
        )}
      </div>

      {/* Flip dots */}
      {cards.length === 2 && (
        <div className="relative z-10 flex gap-2 mt-4">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setFocusIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === focusIndex ? "bg-black scale-125" : "bg-gray-400"}`}
            />
          ))}
        </div>
      )}

      {/* Scoring legend */}
      <div className="relative z-10 flex justify-center gap-4 mt-6 font-serif text-xs text-gray-600 uppercase tracking-wider">
        <span>
          Correct: <strong className="text-black">+10 pts</strong>
        </span>
        <span>
          Skip: <strong className="text-black">−5 pts</strong>
        </span>
        <span>
          Speed: <strong className="text-black">up to +300 pts</strong>
        </span>
      </div>

      {/* Actions */}
      <div className="relative z-10 flex gap-4 justify-center mt-6">
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
  );
}

function StatusScreen({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6">
      <Texture />
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <div
          className="uppercase tracking-widest"
          style={{ fontFamily: "'Protest Revolution', sans-serif" }}
        >
          {title}
        </div>
        {subtitle && (
          <p className="font-serif text-gray-800 text-lg uppercase tracking-[0.2em]">
            {subtitle}
          </p>
        )}
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
