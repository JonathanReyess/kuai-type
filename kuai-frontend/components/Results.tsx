import React, { useState } from "react";
import { GameStats, GameToken } from "../types";
import Button from "./Button";
import ChallengeLinkModal from "./ChallengeLinkModal";
import { PRE_GENERATED_STORIES } from "../storyData";

interface ResultsProps {
  stats: GameStats;
  onRestart: () => void;
  onMenu: () => void;
  onLanding: () => void;
  onReviewMistakes?: (missedTokens: GameToken[]) => void;
  lessonId?: string;
  lessonTitle?: string;
  difficulty?: string;
  tokens?: GameToken[];
}

/* --- SUB-COMPONENT: COMING SOON MODAL --- */
const ComingSoonModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#f8f7f4] border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:scale-125 transition-transform"
        >
          ✕
        </button>
        <div className="text-6xl mb-6 blink-text">🚧</div>
        <h3
          className="text-5xl mb-4 tracking-tighter uppercase text-black"
          style={protestFont}
        >
          Coming Soon
        </h3>
        <p className="font-serif text-lg leading-tight text-black border-y-2 border-black/20 py-4 mb-8">
          This feature is currently under construction. <br />
          <span style={calliFont} className="text-2xl mt-2 block">
            敬请期待
          </span>
        </p>
        <button
          onClick={onClose}
          className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-gray-900 transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
        >
          Back to Results
        </button>
      </div>
    </div>
  );
};

const Results: React.FC<ResultsProps> = ({
  stats,
  onRestart,
  onMenu,
  onLanding,
  onReviewMistakes,
  lessonId,
  lessonTitle,
  difficulty,
  tokens,
}) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [savedWords, setSavedWords] = useState<Set<number>>(new Set());
  const [allSaved, setAllSaved] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleRestart = () => {
    setExiting(true);
    setTimeout(() => {
      onRestart();
    }, 250);
  };

  const uniqueMissed = stats.missedTokens.filter(
    (token, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.char === token.char &&
          t.pinyin === token.pinyin &&
          !/[，。？！""：；]/.test(t.char),
      ),
  );

  const saveToStorage = (tokens: GameToken[]) => {
    const existing: GameToken[] = JSON.parse(
      localStorage.getItem("scrivo_saved_words") || "[]",
    );
    const merged = [...existing, ...tokens].filter(
      (token, index, self) =>
        index ===
        self.findIndex(
          (t) => t.char === token.char && t.pinyin === token.pinyin,
        ),
    );
    localStorage.setItem("scrivo_saved_words", JSON.stringify(merged));
  };

  const handleSaveWord = (idx: number, token: GameToken) => {
    saveToStorage([token]);
    setSavedWords((prev) => new Set(prev).add(idx));
  };

  const handleSaveAll = () => {
    saveToStorage(uniqueMissed);
    setSavedWords(new Set(uniqueMissed.map((_, i) => i)));
    setAllSaved(true);
  };

  // Resolve tokens for ChallengeLinkModal.
  // Prefer passed tokens, otherwise grab the first story for this lesson/difficulty
  // from PRE_GENERATED_STORIES so the modal always has something to work with.
  const challengeTokens: GameToken[] = (() => {
    if (tokens && tokens.length > 0) return tokens;
    if (lessonId && difficulty) {
      const lessonData = (PRE_GENERATED_STORIES as any)[lessonId];
      const stories: GameToken[][] =
        lessonData?.[difficulty.toLowerCase()] ?? [];
      if (stories.length > 0) return stories[0];
    }
    return [];
  })();

  const canChallenge = !!(lessonId && difficulty && challengeTokens.length > 0);

  const resultStyles = `
    @keyframes windowPop {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    .window-popout { animation: windowPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
    @keyframes arcade-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .blink-text { animation: arcade-blink 1.25s step-end infinite; }
    @keyframes windowExit {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.95); }
    }
    .window-exit { animation: windowExit 0.25s ease-in forwards; }
  `;

  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#f8f7f4] flex flex-col items-center justify-center p-4">
      <style>{resultStyles}</style>

      {showComingSoon && (
        <ComingSoonModal onClose={() => setShowComingSoon(false)} />
      )}

      {showChallengeModal && canChallenge && (
        <ChallengeLinkModal
          onClose={() => setShowChallengeModal(false)}
          lessonId={lessonId!}
          lessonTitle={lessonTitle ?? lessonId!}
          difficulty={difficulty! as any}
          tokens={challengeTokens}
        />
      )}

      {/* BACKGROUND TEXTURE */}
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

      {/* RESULTS CARD */}
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[85vh] bg-[#f8f7f4] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col rounded-sm ${exiting ? "window-exit" : "window-popout"}`}
      >
        <div className="text-center p-6 pb-4 shrink-0">
          <h2
            className="text-5xl tracking-widest uppercase"
            style={protestFont}
          >
            Complete
          </h2>
        </div>

        <div className="flex-col flex-grow overflow-y-auto px-8 custom-scrollbar min-h-0">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-5 mt-2 shrink-0">
            {[
              { label: "Score", value: stats.score, size: "text-4xl" },
              { label: "WPM", value: stats.wpm, size: "text-4xl" },
              {
                label: "Accuracy",
                value: `${stats.accuracy}%`,
                size: "text-3xl",
              },
              { label: "Mistakes", value: stats.mistakes, size: "text-3xl" },
            ].map(({ label, value, size }) => (
              <div
                key={label}
                className="text-center flex flex-col items-center justify-center"
              >
                <div className="text-[10px] sm:text-xs font-serif text-black/50 uppercase tracking-[0.2em] mb-2">
                  {label}
                </div>
                <div className={`${size} font-serif text-black leading-none`}>
                  {value}
                </div>
                {/* Optional: A very thin minimal underline for emphasis */}
                <div className="w-8 h-px bg-black/10 mt-3" />
              </div>
            ))}
          </div>
          {uniqueMissed.length > 0 ? (
            <div className="border-t-2 border-gray-100 pt-8 pb-4">
              {/* Header row: title + save all */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl tracking-wide" style={protestFont}>
                  WORDS TO REVIEW
                </h3>
                <button
                  onClick={handleSaveAll}
                  disabled={allSaved}
                  className={`flex items-center gap-2 px-4 py-2 border-2 font-serif text-sm uppercase tracking-wider transition-all rounded-sm
                    ${
                      allSaved
                        ? "border-[#7E9E73]/70 text-white bg-[#7E9E73]/80 cursor-default"
                        : "border-black hover:bg-black hover:text-white"
                    }`}
                >
                  {allSaved ? (
                    <>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>All Saved</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>Save All</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                {uniqueMissed.map((token, idx) => {
                  const isSaved = savedWords.has(idx);
                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col items-center p-3 border-2 rounded-sm transition-all text-center
                        ${isSaved ? "border-bg-[#7E9E73] bg-[#7E9E73]/25" : "border-black/10 hover:border-black/30 bg-[#f8f7f4]"}`}
                    >
                      <button
                        onClick={() => handleSaveWord(idx, token)}
                        disabled={isSaved}
                        className="absolute top-1.5 right-1.5 transition-all"
                        aria-label="Save word"
                      >
                        {isSaved ? (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#7E9E73"
                            stroke="none"
                          >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#d1d5db"
                            strokeWidth="2.5"
                            className="hover:stroke-black transition-colors"
                          >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                        )}
                      </button>

                      <div
                        className="text-4xl mb-1 text-[#bc2f32]"
                        style={calliFont}
                      >
                        {token.char}
                      </div>
                      <div className="text-sm font-serif font-bold text-black">
                        {token.pinyin}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <h3
                className="text-5xl text-green-600 blink-text"
                style={calliFont}
              >
                完美! Perfect!
              </h3>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="shrink-0 flex flex-col gap-3 py-5 px-8 border-t border-black/10 bg-[#f8f7f4] rounded-b-sm">
          <button
            onClick={() =>
              canChallenge
                ? setShowChallengeModal(true)
                : setShowComingSoon(true)
            }
            className="w-fit mx-auto px-8 py-3 border-2 border-black font-serif text-sm uppercase tracking-[0.2em] hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-3 group rounded-sm"
          >
            <span>Challenge a Friend</span>
            <span className="text-[10px] px-1.5 py-0.5 border border-current opacity-60 tracking-normal normal-case font-normal">
              Beta
            </span>
          </button>

          <div className="flex flex-row gap-4 justify-center">
            <Button
              onClick={handleRestart}
              size="md"
              className="flex-1 sm:flex-none sm:w-30 rounded-sm"
            >
              PLAY AGAIN
            </Button>
            <Button
              onClick={onMenu}
              variant="outline"
              size="md"
              className="flex-1 sm:flex-none sm:w-40 rounded-sm"
            >
              MENU
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
