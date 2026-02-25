import React, { useState, useEffect, useRef } from "react";
import { GameToken, GameStats } from "../types";
import { Lesson, Difficulty } from "../types";
import { generateGameContent } from "../services/geminiService";
import Button from "./Button";

interface GameProps {
  lesson: Lesson;
  difficulty: Difficulty;
  reviewTokens?: GameToken[];
  onEndGame: (stats: GameStats) => void;
  showTutorialOnStart: boolean;
  onTutorialComplete: () => void;
  onExit: () => void; // <--- Add this line
}

// --- SUB-COMPONENT: Typing Demo Animation ---
const TypingDemo = () => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "success">("typing");

  useEffect(() => {
    const sequence = [
      { t: "h", d: 500 },
      { t: "ha", d: 200 },
      { t: "hao", d: 200 },
      { t: "hao3", d: 300 }, // Full pinyin + tone
    ];

    let timeouts: NodeJS.Timeout[] = [];

    const runLoop = () => {
      setPhase("typing");
      setText("");

      let cumTime = 0;
      sequence.forEach(({ t, d }) => {
        cumTime += d;
        const id = setTimeout(() => setText(t), cumTime);
        timeouts.push(id);
      });

      // Simulating Enter Press / Success state
      const successTime = cumTime + 600;
      const successId = setTimeout(() => {
        setPhase("success");
      }, successTime);
      timeouts.push(successId);

      // Reset loop
      const resetId = setTimeout(runLoop, successTime + 1500);
      timeouts.push(resetId);
    };

    runLoop();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-md my-3 sm:my-4">
      <div className="text-xs sm:text-sm text-gray-500 font-serif mb-2 uppercase tracking-widest">
        Example
      </div>
      {/* Character Card */}
      <div
        className={`relative transition-all duration-300 px-2 py-1 rounded-md mb-3 sm:mb-4 border-2
        ${phase === "success" ? "bg-black text-white border-black scale-110" : "bg-white text-black border-gray-200"}`}
      >
        <span
          className="text-4xl sm:text-5xl"
          style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
        >
          好
        </span>
      </div>

      {/* Simulated Input */}
      <div className="relative h-8 sm:h-10 w-28 sm:w-32 border-b-2 border-black flex items-center justify-center">
        <span className="font-serif text-lg sm:text-xl font-bold">{text}</span>
        {/* Blinking Cursor */}
        <span className="h-5 sm:h-6 w-0.5 bg-black animate-pulse ml-0.5"></span>

        {/* Enter Key Hint */}
        {text === "hao3" && phase === "typing" && (
          <span className="absolute -right-10 sm:-right-12 text-base sm:text-lg font-serif text-gray-600 animate-bounce">
            ↵ Enter
          </span>
        )}
      </div>
    </div>
  );
};

const Game: React.FC<GameProps> = ({
  lesson,
  difficulty,
  reviewTokens = [],
  onEndGame,
  showTutorialOnStart,
  onTutorialComplete,
  onExit, // <--- Add this line
}) => {
  const [tokens, setTokens] = useState<GameToken[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  // Initialize state based on the Prop from App.tsx
  const [showTutorial, setShowTutorial] = useState(showTutorialOnStart);
  const [isExitingTutorial, setIsExitingTutorial] = useState(false);

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

  // Font Styles
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

  // Cleaned up CSS (removed duplicates)
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
    /* Slide up animation for the footer */
    @keyframes slideUpFade {
        0% { transform: translate(-50%, 100%); opacity: 0; }
        100% { transform: translate(-50%, 0); opacity: 1; }
    }
    .footer-enter {
        animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        animation-delay: 0.2s; /* Wait for modal to disappear */
        opacity: 0; /* Start hidden */
    }
  `;

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const data = await generateGameContent(lesson, difficulty, reviewTokens);
      setTokens(data);
      setLoading(false);

      let startIndex = 0;
      while (
        startIndex < data.length &&
        /[，。？！""：；]/.test(data[startIndex].char)
      ) {
        startIndex++;
      }
      setCurrentIndex(startIndex);

      // Focus if tutorial is NOT showing
      if (!showTutorial) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };
    loadContent();
  }, [lesson, difficulty, reviewTokens]);

  // Handle Escape Key for Pause
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      // Don't allow pausing if tutorial is currently showing
      if (showTutorial) return;

      if (e.key === "Escape") {
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showTutorial]);

  // Effect to refocus input when resuming
  useEffect(() => {
    if (!isPaused && !showTutorial) {
      inputRef.current?.focus();
    }
  }, [isPaused, showTutorial]);

  // Handle Tutorial Close
  const handleCloseTutorial = () => {
    setIsExitingTutorial(true);
    setTimeout(() => {
      setShowTutorial(false);
      onTutorialComplete(); // <--- Notify App.tsx that user has seen it
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 300);
  };

  // Timer Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (
      startTime &&
      !loading &&
      !showTutorial &&
      !isPaused && // <-- Add this
      currentIndex < tokens.length
    ) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, loading, currentIndex, tokens.length, showTutorial]);

  // End Game Logic
  useEffect(() => {
    if (
      !loading &&
      !showTutorial &&
      tokens.length > 0 &&
      currentIndex >= tokens.length
    ) {
      const endTime = Date.now();
      const durationMinutes = (endTime - (startTime || endTime)) / 60000;
      const safeDuration = durationMinutes > 0 ? durationMinutes : 1 / 60;
      const wpm = Math.round(tokens.length / 5 / safeDuration);
      const accuracy = Math.max(0, 100 - (mistakes / tokens.length) * 100);

      onEndGame({
        wpm,
        accuracy: Math.round(accuracy),
        score,
        totalChars: tokens.length,
        mistakes,
        missedTokens: Array.from(missedIndices).map((idx) => tokens[idx]),
      });
    }
  }, [
    currentIndex,
    loading,
    showTutorial,
    tokens,
    startTime,
    mistakes,
    score,
    missedIndices,
    onEndGame,
  ]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showTutorial || isPaused) return;

    if (!startTime) setStartTime(Date.now());
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showTutorial || isPaused) return;

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

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s.toString().padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4] flex flex-col items-center justify-center">
        <style>{gameStyles}</style>
        <div
          className="absolute inset-0 z-0 opacity-60 mix-blend-multiply"
          style={{
            backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
            backgroundSize: "cover",
          }}
        />
        <div
          className="relative z-10 text-3xl sm:text-4xl mb-4 blink-text"
          style={calliFont}
        >
          Loading...
        </div>
        <div className="relative z-10 text-lg sm:text-xl font-serif text-gray-500 text-center px-4">
          {reviewTokens.length > 0
            ? "Generating Custom Level..."
            : "Preparing Lesson..."}
        </div>
      </div>
    );
  }

  const progressPercentage = (currentIndex / tokens.length) * 100;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4]">
      <style>{gameStyles}</style>

      {/* TEXTURE LAYER */}
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

      {/* --- TUTORIAL OVERLAY --- */}
      {showTutorial && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 p-4 ${isExitingTutorial ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`bg-[#f8f7f4] w-full max-w-md p-5 sm:p-8 border-4 border-black shadow-2xl rounded-md relative transform transition-all duration-300 max-h-[90vh] overflow-y-auto ${isExitingTutorial ? "scale-90 translate-y-10" : "scale-100"}`}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2
                className="text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-wide"
                style={protestFont}
              >
                How to Play
              </h2>

              {/* Animated Demo */}
              <TypingDemo />

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-serif mb-6 sm:mb-8 text-left w-full px-2 sm:px-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="bg-black text-white w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-xs shrink-0 mt-1">
                    1
                  </span>
                  <p>
                    Type the <strong>Pinyin + Tone</strong> number.
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="bg-black text-white w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-xs shrink-0 mt-1">
                    2
                  </span>
                  <p>
                    Press{" "}
                    <span className="font-bold border border-black px-1.5 sm:px-2 rounded text-xs sm:text-sm">
                      Enter
                    </span>{" "}
                    to submit.
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="bg-black text-white w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-xs shrink-0 mt-1">
                    3
                  </span>
                  <p>
                    Press{" "}
                    <span className="font-bold border border-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                      Space
                    </span>{" "}
                    to skip.
                  </p>
                </div>
              </div>

              <Button
                onClick={handleCloseTutorial}
                size="md"
                className="rounded-md min-w-[120px]"
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* --- PAUSE MENU OVERLAY --- */}
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
      {/* CONTENT LAYER */}
      <div
        className={`relative z-10 flex flex-col max-w-5xl mx-auto p-3 sm:p-4 md:p-8 min-h-screen ${showTutorial ? "blur-sm" : "window-popout"}`}
      >
        {/* STICKY HEADER */}
        <div className="flex justify-between items-end mb-6 sm:mb-8 md:mb-12 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 sticky top-0 backdrop-blur-sm z-20 pt-3 sm:pt-4 ">
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
            <div
              className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-5 text-center hidden sm:block line-clamp-1"
              style={calliFont}
            >
              {lesson.title}
            </div>
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

        {/* GAMEPLAY AREA */}
        <div className="flex-grow flex flex-col justify-center relative">
          <div
            ref={containerRef}
            className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-8 sm:gap-y-10 md:gap-y-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed py-8 sm:py-10 md:py-12 px-2 sm:px-4 transition-all"
            style={calliFont}
            onClick={() => !showTutorial && inputRef.current?.focus()}
          >
            {tokens.map((token, idx) => {
              const isCompleted = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              const isPunctuation = /[，。？！""：；]/.test(token.char);
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
                        <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-black animate-pulse align-middle"></span>
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
            autoFocus={!showTutorial}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            disabled={showTutorial}
          />

          {/* HINT FOOTER */}
          {!showTutorial && (
            <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-gray-700 font-serif text-xs sm:text-sm tracking-wider sm:tracking-[0.2em] text-center w-full px-4 uppercase footer-enter">
              <span className="hidden sm:inline">
                Type Pinyin + Tone (e.g.{" "}
              </span>
              <span className="sm:hidden">Pinyin + Tone (</span>
              <span className="text-black font-bold">hao3</span>
              <span className="hidden sm:inline">)</span>
              <span className="sm:hidden">)</span>
              <span className="mx-1 sm:mx-2 opacity-30">|</span>
              <span className="hidden sm:inline">Press </span>
              <span className="text-black font-bold">Space</span>
              <span className="hidden sm:inline"> to Skip</span>
              <span className="sm:hidden"> = Skip</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
