// src/components/BattleGame.tsx
import React, { useState, useEffect, useRef } from "react";
import { GameToken } from "../types";
import { OpponentState } from "../hooks/useBattle";
import Button from "./Button";

interface BattleGameProps {
  tokens: GameToken[];
  playerName: string;
  opponent: OpponentState | null;
  onProgress: (currentIndex: number, wpm: number, score: number) => void;
  onFinished: (
    wpm: number,
    accuracy: number,
    finalScore: number,
    missedTokens: GameToken[],
  ) => void;
  onExit: () => void;
}

const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

const gameStyles = `
  @keyframes arcade-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  .blink-text { animation: arcade-blink 1.25s step-end infinite; }
  @keyframes windowPop {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
  .window-popout { animation: windowPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
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

// Speed bonus: 300pts at 0s, decays by 2pts per second, scaled by accuracy ratio.
// Scaling by accuracyRatio (correct / total tokens) means skipping tokens reduces
// the bonus proportionally — skipping everything gives 0 bonus regardless of speed.
// Example: 14/15 correct at 60s → (300-120) * (14/15) ≈ 168 bonus.
//          15/15 correct at 75s → (300-150) * 1.0 = 150 bonus.
function calcSpeedBonus(elapsedSeconds: number, accuracyRatio: number): number {
  return Math.round(Math.max(0, 300 - elapsedSeconds * 2) * accuracyRatio);
}

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
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track score in a ref so the finish effect always has the latest value
  const scoreRef = useRef(0);
  const missedIndicesRef = useRef<Set<number>>(new Set());

  const myPct =
    tokens.length > 0 ? Math.round((currentIndex / tokens.length) * 100) : 0;
  const oppPct =
    opponent && tokens.length > 0
      ? Math.round((opponent.currentIndex / tokens.length) * 100)
      : 0;

  useEffect(() => {
    let startIndex = 0;
    while (
      startIndex < tokens.length &&
      /[，。？！""：；]/.test(tokens[startIndex].char)
    ) {
      startIndex++;
    }
    setCurrentIndex(startIndex);
    // Reset all state for rematch
    hasFinished.current = false;
    setDone(false);
    setScore(0);
    scoreRef.current = 0;
    setMistakes(0);
    setMissedIndices(new Set());
    missedIndicesRef.current = new Set();
    setStartTime(null);
    setElapsedTime(0);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [tokens]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPaused((p) => !p);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (!isPaused) inputRef.current?.focus();
  }, [isPaused]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (startTime && !isPaused && currentIndex < tokens.length) {
      interval = setInterval(
        () => setElapsedTime(Math.floor((Date.now() - startTime) / 1000)),
        1000,
      );
    }
    return () => clearInterval(interval);
  }, [startTime, isPaused, currentIndex, tokens.length]);

  const lastReport = useRef(0);
  const hasFinished = useRef(false);
  useEffect(() => {
    const now = Date.now();
    if (now - lastReport.current > 500) {
      const mins = startTime ? (now - startTime) / 60000 : 0;
      const wpm = mins > 0.01 ? Math.round(tokens.length / 5 / mins) : 0;
      onProgress(currentIndex, wpm, scoreRef.current);
      lastReport.current = now;
    }
  }, [currentIndex, score]);

  useEffect(() => {
    if (
      tokens.length > 0 &&
      currentIndex >= tokens.length &&
      !hasFinished.current
    ) {
      hasFinished.current = true;
      setDone(true);
      const endTime = Date.now();
      const elapsedSeconds = startTime ? (endTime - startTime) / 1000 : 0;
      const durationMinutes = elapsedSeconds / 60;
      const safeDuration = durationMinutes > 0 ? durationMinutes : 1 / 60;
      const wpm = Math.round(tokens.length / 5 / safeDuration);
      const accuracy = Math.max(0, 100 - (mistakes / tokens.length) * 100);

      const missedCount = missedIndicesRef.current.size;
      const accuracyRatio = Math.max(0, 1 - missedCount / tokens.length);
      const speedBonus = calcSpeedBonus(elapsedSeconds, accuracyRatio);
      const finalScore = Math.round(scoreRef.current + speedBonus);

      const missedTokens = Array.from<number>(missedIndicesRef.current).map(
        (idx) => tokens[idx],
      );

      onFinished(wpm, Math.round(accuracy), finalScore, missedTokens);
    }
  }, [currentIndex, tokens]);

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
    requestAnimationFrame(() => requestAnimationFrame(() => setShake(true)));
    setTimeout(() => setShake(false), 400);
  };

  const registerMistake = () => {
    if (!missedIndicesRef.current.has(currentIndex)) {
      setMistakes((prev) => prev + 1);
      const next = new Set(missedIndicesRef.current).add(currentIndex);
      missedIndicesRef.current = next;
      setMissedIndices(next);
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
      // Skipping deducts 5 pts — score CAN go negative
      const next = scoreRef.current - 5;
      scoreRef.current = next;
      setScore(next);
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
        "\uff0c": ",",
        "\u3002": ".",
        "\uff1f": "?",
        "\uff01": "!",
        "\u201c": '"',
        "\u201d": '"',
        "\u2018": "'",
        "\u2019": "'",
        "\uff1a": ":",
        "\uff1b": ";",
      };

      let target = punctuationMap[rawTarget] || rawTarget;
      target = target.replace(/ü/g, "v");
      const validTargets = [target];
      if (target.endsWith("0")) validTargets.push(target.slice(0, -1) + "4");
      // Neutral tone: bare syllable, "0", and "5" all accepted
      if (target.endsWith("0") || target.endsWith("5")) {
        const bare = target.slice(0, -1);
        validTargets.push(bare, bare + "0", bare + "5");
      }

      if (validTargets.includes(valLower)) {
        const next = scoreRef.current + 10;
        scoreRef.current = next;
        setScore(next);
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
  const liveWpm =
    startTime && Date.now() - startTime > 0
      ? Math.round(tokens.length / 5 / ((Date.now() - startTime) / 60000))
      : 0;

  // Show waiting screen after submitting results, before GAME_OVER arrives
  if (done) {
    return (
      <div className="relative min-h-screen bg-[#f8f7f4] flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0ms]" />
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
            <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
          <p className="font-serif text-black/50 uppercase tracking-widest text-sm">
            Waiting for results…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4]">
      <style>{gameStyles}</style>

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

      {/* ── Battle progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="mx-auto max-w-4xl w-full px-3 sm:px-6 pt-2 sm:pt-4 pb-2 flex flex-col gap-2 sm:gap-3 pointer-events-auto [perspective:1000px]">
          {/* Opponent */}
          <div
            role="progressbar"
            aria-valuenow={oppPct}
            className="transform-gpu transition-all duration-500 scale-95 opacity-60 blur-[0.4px] [transform:translateZ(-100px)_rotateX(5deg)]"
            style={{ transformOrigin: "bottom" }}
          >
            <div className="flex justify-between items-center mb-0.5 font-serif">
              <span className="text-[#722F37] text-[10px] sm:text-xs font-bold tracking-widest uppercase truncate max-w-[50%]">
                {opponent?.name ?? "Opponent"}
              </span>
              <span className="text-[#5c262d] text-[10px] sm:text-xs tabular-nums opacity-80 shrink-0">
                {opponent?.score ?? 0} PTS • {opponent?.wpm ?? 0} WPM
              </span>
            </div>
            <div className="h-1.5 sm:h-2 bg-[#f2e6e6]/20 border border-[#722F37]/10 overflow-hidden shadow-sm">
              <div
                className="h-full bg-[#722F37]/70 transition-all duration-1000 ease-out"
                style={{ width: `${oppPct}%` }}
              />
            </div>
          </div>

          {/* Player */}
          <div
            role="progressbar"
            aria-valuenow={myPct}
            className="transform-gpu transition-all duration-300 [transform:translateZ(20px)]"
          >
            <div className="flex justify-between items-center mb-1 font-serif">
              <span className="text-[#2d3b32] text-sm sm:text-base font-black tracking-tight drop-shadow-sm">
                YOU
              </span>
              <span className="text-[#3a4d41] text-xs sm:text-sm font-bold tabular-nums shrink-0">
                {score} <span className="opacity-50 font-normal text-[10px]">PTS</span>
                <span className="opacity-30 mx-1">•</span>
                {liveWpm} <span className="opacity-50 font-normal text-[10px]">WPM</span>
              </span>
            </div>
            <div className="h-2.5 sm:h-3.5 bg-[#e8edea]/20 border sm:border-2 border-[#2d3b32]/40 overflow-hidden shadow-lg relative">
              <div
                className="h-full bg-[#4d5d53] transition-all duration-300 ease-out relative z-10"
                style={{ width: `${myPct}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2d3b32]/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Pause overlay ── */}
      {isPaused && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#f8f7f4] w-full max-w-xs p-6 sm:p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout">
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

      {/* ── Content ── */}
      <div
        className={`relative z-10 flex flex-col max-w-5xl mx-auto p-3 sm:p-4 md:p-8 min-h-screen pt-20 sm:pt-24 ${isPaused ? "" : "window-popout"}`}
      >
        <div className="flex-grow flex flex-col justify-center relative">
          <div
            ref={containerRef}
            className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-8 sm:gap-y-10 md:gap-y-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed py-8 sm:py-10 md:py-12 px-2 sm:px-4"
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
                    ${isCompleted ? (wasMissed ? "text-[#8B2020]/80" : "text-black/20") : "text-black"}
                    ${isCurrent ? "bg-black text-white transform scale-110 sm:scale-125 shadow-xl z-10" : ""}
                    ${isCurrent && shake ? "animate-shake bg-[#5c1010]" : ""}
                  `}
                >
                  {token.char}
                  {isCurrent && (
                    <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm sm:text-base md:text-xl font-serif text-black font-bold tracking-wider bg-[#f8f7f4] px-2 sm:px-3 py-0.5 sm:py-1 border-2 border-black shadow-lg z-20">
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
