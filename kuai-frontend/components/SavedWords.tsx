import React, { useState, useEffect, useRef } from "react";
import { GameToken } from "../types";

type ExportFormat = "quizlet" | "anki" | "smartcards";

function downloadText(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function buildExport(tokens: GameToken[], format: ExportFormat): string {
  const words = tokens.filter((t) => t.definition !== "punctuation");
  switch (format) {
    case "quizlet":
      return words.map((t) => `${t.char}\t${t.pinyin} — ${t.definition}`).join("\n");
    case "anki":
      return words.map((t) => `${t.char}\t${t.pinyin}\t${t.definition}`).join("\n");
    case "smartcards":
      return words.map((t) => `${t.char}\t${t.pinyin} — ${t.definition}`).join("\n");
  }
}

const EXPORT_OPTIONS: { format: ExportFormat; label: string; hint: string }[] = [
  { format: "quizlet",    label: "Quizlet",    hint: "Character → Pinyin + Definition" },
  { format: "anki",       label: "Anki",       hint: "3 fields: Character · Pinyin · Definition" },
  { format: "smartcards", label: "Smartcards", hint: "Tab-separated sides, one card per line" },
];

interface SavedWordsProps {
  onClose: () => void;
  onPractice?: (tokens: GameToken[]) => void;
}

interface FlippedCardProps {
  token: GameToken;
  onClose: () => void;
}

/* --- NEW SUB-COMPONENT: COMING SOON POPUP --- */
const ComingSoonPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  return (
    <>
      <div
        className="fixed inset-0 z-[130] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={onClose}
      >
        <div
          className="bg-[#f8f7f4] border-4 border-black p-8 max-w-xs w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform transition-transform animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-5xl mb-4">🚧</div>
          <h3
            className="text-2xl mb-2 uppercase tracking-tighter"
            style={protestFont}
          >
            Coming Soon
          </h3>
          <p className="font-serif text-sm text-black/60 mb-6">
            We're currently building the custom practice engine. Stay tuned!
          </p>
          <button
            onClick={onClose}
            className="w-full py-2 bg-black text-white font-serif uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </>
  );
};

/* --- SUB-COMPONENT: FLIPPED CARD OVERLAY --- */
const FlippedCard: React.FC<FlippedCardProps> = ({ token, onClose }) => {
  // ... (Keep existing FlippedCard code exactly as is)
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 120);
    return () => clearTimeout(t);
  }, []);

  const isPunctuation = /[，。？！""：；]/.test(token.char);
  const definition =
    token.definition && token.definition !== "punctuation"
      ? token.definition
      : null;

  const flipCardStyles = `
    @keyframes cardEntrance {
      from { opacity: 0; transform: scale(0.85); }
      to   { opacity: 1; transform: scale(1); }
    }
    .card-entrance {
      animation: cardEntrance 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    .flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .flip-inner.is-flipped {
      transform: rotateY(180deg);
    }
    .flip-front,
    .flip-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .flip-back {
      transform: rotateY(180deg);
    }
  `;

  return (
    <>
      <style>{flipCardStyles}</style>
      <div
        className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 pointer-events-none">
        <div
          className="card-entrance pointer-events-auto"
          style={{ width: "280px", height: "320px", perspective: "1000px" }}
        >
          <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
            <div className="flip-front bg-[#f8f7f4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-sm flex flex-col items-center justify-center">
              <div className="text-9xl text-[#8B2020]" style={calliFont}>
                {token.char}
              </div>
              <div className="mt-4 text-sm font-serif text-black/40 uppercase tracking-widest">
                revealing…
              </div>
            </div>
            <div className="flip-back bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] rounded-sm flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors text-lg z-10"
              >
                ✕
              </button>
              <div className="flex items-center gap-3 p-5 pb-4 border-b border-white/10">
                <div className="text-5xl text-[#8B2020]/70" style={calliFont}>
                  {token.char}
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold tracking-wider">
                    {token.pinyin}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-serif mt-0.5">
                    Mandarin
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center p-6">
                {definition ? (
                  <div className="text-center">
                    <div className="text-xs text-white/40 uppercase tracking-widest font-serif mb-3">
                      Definition
                    </div>
                    <div className="text-2xl font-serif text-gray-100 leading-snug capitalize">
                      {definition}
                    </div>
                  </div>
                ) : (
                  <div className="text-white/60 font-serif text-sm italic text-center">
                    No definition available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* --- MAIN COMPONENT --- */
const SavedWords: React.FC<SavedWordsProps> = ({ onClose, onPractice }) => {
  const [words, setWords] = useState<GameToken[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [selectMode, setSelectMode] = useState(false);
  const [activeToken, setActiveToken] = useState<GameToken | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("scrivo_saved_words") || "[]",
    );
    setWords(saved);
  }, []);

  const handleRemove = (idx: number) => {
    const updated = words.filter((_, i) => i !== idx);
    setWords(updated);
    localStorage.setItem("scrivo_saved_words", JSON.stringify(updated));
  };

  const handleRemoveSelected = () => {
    const updated = words.filter((_, i) => !selected.has(i));
    setWords(updated);
    localStorage.setItem("scrivo_saved_words", JSON.stringify(updated));
    setSelected(new Set());
    setSelectMode(false);
  };

  const handleClearAll = () => {
    setWords([]);
    localStorage.removeItem("scrivo_saved_words");
    setSelected(new Set());
  };

  const toggleSelect = (idx: number) => {
    const next = new Set(selected);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setSelected(next);
  };

  /* UPDATED HANDLER */
  const handlePractice = () => {
    // Instead of executing onPractice immediately, show the popup
    setShowComingSoon(true);

    // Optional: If you want to keep the logic for when you actually implement it:
    // const practiceWords = selectMode && selected.size > 0 ? words.filter((_, i) => selected.has(i)) : words;
    // onPractice?.(practiceWords);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node))
        setShowExport(false);
    };
    if (showExport) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showExport]);

  const handleExport = (format: ExportFormat) => {
    const exportWords = selectMode && selected.size > 0
      ? words.filter((_, i) => selected.has(i))
      : words;
    downloadText(buildExport(exportWords, format), `kuai-review-${format}.txt`);
    setShowExport(false);
  };

  const handleCardClick = (token: GameToken, idx: number) => {
    if (selectMode) {
      toggleSelect(idx);
    } else {
      setActiveToken(token);
    }
  };

  const panelStyles = `
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .panel-enter { animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  `;

  return (
    <>
      <style>{panelStyles}</style>

      {activeToken && (
        <FlippedCard token={activeToken} onClose={() => setActiveToken(null)} />
      )}

      {/* RENDER POPUP */}
      {showComingSoon && (
        <ComingSoonPopup onClose={() => setShowComingSoon(false)} />
      )}

      <div
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 bottom-0 z-[90] w-full max-w-md bg-[#f8f7f4] border-l-4 border-black shadow-[-10px_0px_0px_0px_rgba(0,0,0,0.15)] flex flex-col panel-enter">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
            backgroundSize: "cover",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative z-10 flex items-center justify-between p-6 border-b-4 border-black bg-black text-white">
          <div>
            <h2
              className="text-3xl tracking-widest uppercase"
              style={protestFont}
            >
              Review List
            </h2>
            <p className="font-serif text-white/60 text-sm mt-0.5">
              {words.length} saved words
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:scale-125 transition-transform text-white"
          >
            ✕
          </button>
        </div>

        {words.length > 0 && (
          <div className="relative z-10 flex items-center gap-2 px-6 py-3 border-b-2 border-black/10 bg-[#f8f7f4]/80">
            <button
              onClick={() => {
                setSelectMode(!selectMode);
                setSelected(new Set());
              }}
              className={`text-xs font-serif uppercase tracking-wider px-3 py-1.5 border transition-all ${selectMode ? "bg-black text-white border-black" : "border-black/30 hover:border-black"}`}
            >
              {selectMode ? "Cancel" : "Select"}
            </button>
            {selectMode && selected.size > 0 && (
              <button
                onClick={handleRemoveSelected}
                className="text-xs font-serif uppercase tracking-wider px-3 py-1.5 border border-[#8B2020] text-[#8B2020] hover:bg-[#8B2020] hover:text-white transition-all"
              >
                Remove ({selected.size})
              </button>
            )}
            <div className="flex-1" />
            <button
              onClick={handleClearAll}
              className="text-xs font-serif text-black/40 hover:text-[#8B2020] uppercase tracking-wider transition-colors"
            >
              Clear All
            </button>
          </div>
        )}

        <div className="relative z-10 flex-1 overflow-y-auto p-6">
          {words.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-6" style={calliFont}>
                空
              </div>
              <p className="font-serif text-black/50 text-lg italic mb-2">
                No saved words yet
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {words.map((token, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCardClick(token, idx)}
                  className={`relative flex flex-col items-center p-3 border-2 rounded-sm transition-all cursor-pointer group
                    ${selectMode ? (selected.has(idx) ? "border-black bg-black text-white" : "border-black/20 hover:border-black") : "border-black/20 hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-[#f8f7f4]"}`}
                >
                  {!selectMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(idx);
                      }}
                      className="absolute top-1 right-1.5 text-black/30 hover:text-[#8B2020] transition-colors text-sm opacity-0 group-hover:opacity-100"
                    >
                      ✕
                    </button>
                  )}
                  {selectMode && (
                    <div
                      className={`absolute top-1.5 right-1.5 w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${selected.has(idx) ? "border-white bg-white" : "border-black/40"}`}
                    >
                      {selected.has(idx) && (
                        <span className="text-black text-[8px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>
                  )}
                  <div
                    className={`text-4xl mb-1 transition-colors ${selected.has(idx) ? "text-white" : "text-[#8B2020]"}`}
                    style={calliFont}
                  >
                    {token.char}
                  </div>
                  <div
                    className={`text-xs font-serif font-bold ${selected.has(idx) ? "text-white/40" : "text-black/70"}`}
                  >
                    {token.pinyin}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {words.length > 0 && (
          <div className="relative z-10 p-6 border-t-2 border-black bg-[#f8f7f4]/90 flex flex-col gap-3">
            <button
              onClick={handlePractice}
              className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.25em] hover:bg-gray-900 transition-all active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3"
              style={protestFont}
            >
              <span>
                {selectMode && selected.size > 0
                  ? `Practice ${selected.size} Selected`
                  : `Practice All ${words.length}`}
              </span>
              <span className="text-black/40">→</span>
            </button>

            {/* Export flashcards */}
            <div className="relative" ref={exportRef}>
              <button
                onClick={() => setShowExport((v) => !v)}
                className="w-full py-3 border-2 border-black/30 font-serif text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Export{selectMode && selected.size > 0 ? ` ${selected.size} Selected` : ""} as Flashcards
              </button>

              {showExport && (
                <div className="absolute bottom-full mb-1 left-0 right-0 bg-[#f8f7f4] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20">
                  <p className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest text-black/40 font-serif">
                    Export as…
                  </p>
                  {EXPORT_OPTIONS.map(({ format, label, hint }) => (
                    <button
                      key={format}
                      onClick={() => handleExport(format)}
                      className="w-full text-left px-4 py-3 hover:bg-black hover:text-white transition-colors border-t border-black/10 group"
                    >
                      <div className="font-serif font-bold text-sm">{label}</div>
                      <div className="font-serif text-xs text-black/50 mt-0.5 group-hover:text-white/60">{hint}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SavedWords;
