import React, { useState, useEffect } from "react";
import { GameToken } from "../types";

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
          className="bg-white border-4 border-black p-8 max-w-xs w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform transition-transform animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-5xl mb-4">🚧</div>
          <h3
            className="text-2xl mb-2 uppercase tracking-tighter"
            style={protestFont}
          >
            Coming Soon
          </h3>
          <p className="font-serif text-sm text-gray-600 mb-6">
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
            <div className="flip-front bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-sm flex flex-col items-center justify-center">
              <div className="text-9xl text-red-600" style={calliFont}>
                {token.char}
              </div>
              <div className="mt-4 text-sm font-serif text-gray-400 uppercase tracking-widest">
                revealing…
              </div>
            </div>
            <div className="flip-back bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] rounded-sm flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors text-lg z-10"
              >
                ✕
              </button>
              <div className="flex items-center gap-3 p-5 pb-4 border-b border-white/10">
                <div className="text-5xl text-red-400" style={calliFont}>
                  {token.char}
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold tracking-wider">
                    {token.pinyin}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-serif mt-0.5">
                    Mandarin
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center p-6">
                {definition ? (
                  <div className="text-center">
                    <div className="text-xs text-gray-300 uppercase tracking-widest font-serif mb-3">
                      Definition
                    </div>
                    <div className="text-2xl font-serif text-gray-100 leading-snug capitalize">
                      {definition}
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-600 font-serif text-sm italic text-center">
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

  // NEW STATE FOR POPUP
  const [showComingSoon, setShowComingSoon] = useState(false);

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
            <p className="font-serif text-gray-300 text-sm mt-0.5">
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
          <div className="relative z-10 flex items-center gap-2 px-6 py-3 border-b-2 border-black/10 bg-white/60">
            <button
              onClick={() => {
                setSelectMode(!selectMode);
                setSelected(new Set());
              }}
              className={`text-xs font-serif uppercase tracking-wider px-3 py-1.5 border transition-all ${selectMode ? "bg-black text-white border-black" : "border-gray-400 hover:border-black"}`}
            >
              {selectMode ? "Cancel" : "Select"}
            </button>
            {selectMode && selected.size > 0 && (
              <button
                onClick={handleRemoveSelected}
                className="text-xs font-serif uppercase tracking-wider px-3 py-1.5 border border-red-400 text-red-600 hover:bg-red-600 hover:text-white transition-all"
              >
                Remove ({selected.size})
              </button>
            )}
            <div className="flex-1" />
            <button
              onClick={handleClearAll}
              className="text-xs font-serif text-gray-400 hover:text-red-500 uppercase tracking-wider transition-colors"
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
              <p className="font-serif text-gray-500 text-lg italic mb-2">
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
                    ${selectMode ? (selected.has(idx) ? "border-black bg-black text-white" : "border-gray-200 hover:border-black") : "border-gray-200 hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"}`}
                >
                  {!selectMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(idx);
                      }}
                      className="absolute top-1 right-1.5 text-gray-300 hover:text-red-500 transition-colors text-sm opacity-0 group-hover:opacity-100"
                    >
                      ✕
                    </button>
                  )}
                  {selectMode && (
                    <div
                      className={`absolute top-1.5 right-1.5 w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${selected.has(idx) ? "border-white bg-white" : "border-gray-400"}`}
                    >
                      {selected.has(idx) && (
                        <span className="text-black text-[8px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>
                  )}
                  <div
                    className={`text-4xl mb-1 transition-colors ${selected.has(idx) ? "text-white" : "text-red-600"}`}
                    style={calliFont}
                  >
                    {token.char}
                  </div>
                  <div
                    className={`text-xs font-serif font-bold ${selected.has(idx) ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {token.pinyin}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {words.length > 0 && (
          <div className="relative z-10 p-6 border-t-2 border-black bg-white/80">
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
              <span className="text-gray-400">→</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SavedWords;
