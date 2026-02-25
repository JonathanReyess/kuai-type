// src/components/BattleGame.tsx
import React, { useState, useEffect, useRef } from "react";
import { GameToken } from "../types";
import { OpponentState } from "../hooks/useBattle";
import Button from "./Button";

interface BattleGameProps {
  tokens: GameToken[];
  playerName: string;
  opponent: OpponentState | null;
  onProgress: (currentIndex: number, wpm: number) => void;
  onFinished: (wpm: number, accuracy: number, score: number) => void;
  onExit: () => void;
}

const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

const gameStyles = `
  @keyframes arcade-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  .blink-text {
    animation: arcade-blink 1.25s step-end infinite;
  }
  @keyframes windowPop {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
  .window-popout {
    animation: windowPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
  @keyframes slideUpFade {
    0% { transform: translate(-50%, 100%); opacity: 0; }
    100% { transform: translate(-50%, 0); opacity: 1; }
  }
  .footer-enter {
    animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }
`;

const BattleGame: React.FC<BattleGameProps> = ({
  tokens,
  playerName,
  opponent,
  onProgress,
  onFinished,
  onExit,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [missedIndices, setMissedIndices] = useState<Set<number>>(new Set());
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Progress bar percentages
  const myPct =
    tokens.length > 0 ? Math.round((currentIndex / tokens.length) * 100) : 0;
  const oppPct =
    opponent && tokens.length > 0
      ? Math.round((opponent.currentIndex / tokens.length) * 100)
      : 0;

  // Set initial index (skip leading punctuation) + focus
  useEffect(() => {
    let startIndex = 0;
    while (
      startIndex < tokens.length &&
      /[，。？！""：；]/.test(tokens[startIndex].char)
    ) {
      startIndex++;
    }
    setCurrentIndex(startIndex);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [tokens]);

  // Escape to pause
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPaused((prev) => !prev);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Refocus on resume
  useEffect(() => {
    if (!isPaused) inputRef.current?.focus();
  }, [isPaused]);

  // Timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (startTime && !isPaused && currentIndex < tokens.length) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, isPaused, currentIndex, tokens.length]);

  // Throttled progress reporting (every 500ms)
  const lastReport = useRef(0);
  useEffect(() => {
    const now = Date.now();
    if (now - lastReport.current > 500) {
      const mins = startTime ? (now - startTime) / 60000 : 0;
      const wpm = mins > 0.01 ? Math.round(tokens.length / 5 / mins) : 0;
      onProgress(currentIndex, wpm);
      lastReport.current = now;
    }
  }, [currentIndex]);

  // End game
  useEffect(() => {
    if (tokens.length > 0 && currentIndex >= tokens.length) {
      const endTime = Date.now();
      const durationMinutes = (endTime - (startTime || endTime)) / 60000;
      const safeDuration = durationMinutes > 0 ? durationMinutes : 1 / 60;
      const wpm = Math.round(tokens.length / 5 / safeDuration);
      const accuracy = Math.max(0, 100 - (mistakes / tokens.length) * 100);
      onFinished(wpm, Math.round(accuracy), score);
    }
  }, [currentIndex, tokens]);

  // Scroll to active token
  useEffect(() => {
    if (containerRef.current) {
      const activeEl = containerRef.current.querySelector(
        '[data-active="true"]',
      );
      if (activeEl)
        activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentIndex]);

  const triggerShake = () => {
    setShake(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setShake(true));
    });
    setTimeout(() => setShake(false), 400);
  };

  const registerMistake = () => {
    if (!missedIndices.has(currentIndex)) {
      setMistakes((prev) => prev + 1);
      setMissedIndices((prev) => new Set(prev).add(currentIndex));
    }
  };

  const advanceToken = () => {
    let nextIndex = currentIndex + 1;
    while (
      nextIndex < tokens.length &&
      /[，。？！""：；]/.test(tokens[nextIndex].char)
    ) {
      nextIndex++;
    }
    setCurrentIndex(nextIndex);
    setInput("");
    setShake(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPaused) return;
    if (!startTime) setStartTime(Date.now());
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isPaused) return;
    if (!startTime) setStartTime(Date.now());

    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      setScore((prev) => Math.max(0, prev - 5));
      registerMistake();
      triggerShake();
      advanceToken();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const currentToken = tokens[currentIndex];
      if (!currentToken) return;

      const valLower = input.trim().toLowerCase();
      const rawTarget = currentToken.pinyin
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "");

      const punctuationMap: Record<string, string> = {
        "\uff0c": ",", // ，
        "\u3002": ".", // 。
        "\uff1f": "?", // ？
        "\uff01": "!", // ！
        "\u201c": '"', // "
        "\u201d": '"', // "
        "\u2018": "'", // '
        "\u2019": "'", // '
        "\uff1a": ":", // ：
        "\uff1b": ";", // ；
      };

      let target = punctuationMap[rawTarget] || rawTarget;
      target = target.replace(/ü/g, "v");

      const validTargets = [target];
      if (target.endsWith("0")) validTargets.push(target.slice(0, -1) + "4");

      if (validTargets.includes(valLower)) {
        setScore((prev) => prev + 10);
        advanceToken();
      } else {
        triggerShake();
        registerMistake();
      }
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s.toString().padStart(2, "0")}`;
  };

  const progressPercentage =
    tokens.length > 0 ? (currentIndex / tokens.length) * 100 : 0;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4]">
      <style>{gameStyles}</style>

      {/* Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.65,
          mixBlendMode: "multiply",
        }}
      />

      {/* ── Battle progress bar (pinned to top) ─────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="mx-auto max-w-2xl w-full bg-transparent text-white px-4 py-3 flex flex-col gap-2 pointer-events-auto">
          {/* Opponent */}
          <div>
            <div className="flex justify-between items-center mb-1 font-serif text-sm">
              <span className="text-[#722F37] uppercase tracking-wider">
                {opponent?.name ?? "Opponent"}
              </span>
              <span className="text-[#722F37] tabular-nums">
                {opponent?.wpm ?? 0} wpm · {oppPct}%
              </span>
            </div>
            <div className="h-2 bg-[#f8f7f4]/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#722F37] transition-all duration-500 rounded-full"
                style={{ width: `${oppPct}%` }}
              />
            </div>
          </div>

          {/* You */}
          <div>
            <div className="flex justify-between items-center mb-1 font-serif text-sm">
              <span className="text-[#4d5d53] uppercase tracking-wider">
                {playerName}
              </span>
              <span className="text-[#738276] tabular-nums">
                {startTime
                  ? Math.round(
                      tokens.length / 5 / ((Date.now() - startTime) / 60000),
                    )
                  : 0}{" "}
                wpm · {myPct}%
              </span>
            </div>
            <div className="h-2 bg-[#f8f7f4]/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#738276] transition-all duration-300 rounded-full"
                style={{ width: `${myPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ── Pause overlay ─────────────────────────────────────────────────────── */}
      {isPaused && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#f8f7f4] w-full max-w-xs p-6 sm:p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout relative">
            <div className="text-center">
              <h2
                className="text-3xl sm:text-4xl mb-6 sm:mb-8 tracking-widest uppercase"
                style={protestFont}
              >
                Paused
              </h2>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Button
                  onClick={() => setIsPaused(false)}
                  className="w-full rounded-sm"
                >
                  RESUME
                </Button>
                <Button onClick={onExit} variant="secondary">
                  QUIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Content (offset top for battle bar) ──────────────────────────────── */}
      <div
        className={`relative z-10 flex flex-col max-w-5xl mx-auto p-3 sm:p-4 md:p-8 min-h-screen pt-28 ${isPaused ? "" : "window-popout"}`}
      >
        {/* Sticky header — matches Game.tsx exactly */}
        <div className="flex justify-between items-end mb-6 sm:mb-8 md:mb-12 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 sticky top-28 backdrop-blur-sm z-20 pt-3 sm:pt-4">
          <div className="flex flex-col w-20 sm:w-24 md:w-32">
            <span className="text-xs sm:text-sm md:text-md font-serif text-gray-600 uppercase tracking-wider sm:tracking-widest">
              Progress
            </span>
            <div
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={protestFont}
            >
              {Math.round(progressPercentage)}%
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 mx-2">
            <div className="text-base sm:text-lg md:text-xl font-serif font-bold tracking-widest tabular-nums">
              {formatTime(elapsedTime)}
            </div>
          </div>

          <div className="flex flex-col items-end w-20 sm:w-24 md:w-32">
            <span className="text-xs sm:text-sm md:text-md font-serif text-gray-600 uppercase tracking-wider sm:tracking-widest">
              Score
            </span>
            <div
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={protestFont}
            >
              {score}
            </div>
          </div>
        </div>

        {/* Gameplay area — identical to Game.tsx */}
        <div className="flex-grow flex flex-col justify-center relative">
          <div
            ref={containerRef}
            className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-8 sm:gap-y-10 md:gap-y-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed py-8 sm:py-10 md:py-12 px-2 sm:px-4 transition-all"
            style={calliFont}
            onClick={() => inputRef.current?.focus()}
          >
            {tokens.map((token, idx) => {
              const isCompleted = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              const wasMissed = missedIndices.has(idx);

              return (
                <div
                  key={idx}
                  data-active={isCurrent}
                  className={`relative transition-all duration-300 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md
                    ${isCompleted ? (wasMissed ? "text-red-400/80" : "text-black/20") : "text-black"}
                    ${isCurrent ? "bg-black text-white transform scale-110 sm:scale-125 shadow-xl sm:shadow-2xl z-10" : ""}
                    ${isCurrent && shake ? "animate-shake bg-red-900" : ""}
                  `}
                >
                  {token.char}
                  {isCurrent && (
                    <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm sm:text-base md:text-xl font-serif text-black font-bold tracking-wider bg-white px-2 sm:px-3 py-0.5 sm:py-1 border-2 border-black shadow-lg z-20">
                      {input || (
                        <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-black animate-pulse align-middle" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="opacity-0 absolute top-0 left-0 h-full w-full cursor-default"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            disabled={isPaused}
          />

          {/* Hint footer — identical to Game.tsx */}
          <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-gray-700 font-serif text-xs sm:text-sm tracking-wider sm:tracking-[0.2em] text-center w-full px-4 uppercase footer-enter">
            <span className="hidden sm:inline">Type Pinyin + Tone (e.g. </span>
            <span className="sm:hidden">Pinyin + Tone (</span>
            <span className="text-black font-bold">hao3</span>
            <span className="hidden sm:inline">)</span>
            <span className="sm:hidden">)</span>
            <span className="mx-1 sm:mx-2 opacity-30">|</span>
            <span className="hidden sm:inline">Press </span>
            <span className="text-black font-bold">Space</span>
            <span className="hidden sm:inline"> to Skip</span>
            <span className="sm:hidden"> = Skip</span>
            <span className="mx-1 sm:mx-2 opacity-30">|</span>
            <span className="text-black font-bold">Esc</span>
            <span> to Pause</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleGame;
