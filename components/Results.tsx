import React, { useState } from "react";
import { GameStats, GameToken } from "../types";
import Button from "./Button";

interface ResultsProps {
  stats: GameStats;
  onRestart: () => void;
  onMenu: () => void;
  onLanding: () => void;
  onReviewMistakes?: (missedTokens: GameToken[]) => void;
}

/* --- SUB-COMPONENT: COMING SOON MODAL --- */
const ComingSoonModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout text-center">
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
}) => {
  const [showPricing, setShowPricing] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleRestart = () => {
    setExiting(true);
    setTimeout(() => {
      onRestart();
    }, 250);
  };

  const isLoggedIn = false;

  const uniqueMissed = stats.missedTokens.filter(
    (token, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.char === token.char &&
          t.pinyin === token.pinyin &&
          !/[，。？！"“：；]/.test(t.char),
      ),
  );

  const handlePremiumClick = () => {
    if (isLoggedIn) {
      onReviewMistakes?.(uniqueMissed);
    } else {
      setShowPricing(true);
    }
  };

  const resultStyles = `
    @keyframes windowPop {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    .window-popout {
      animation: windowPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @keyframes arcade-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .blink-text {
      animation: arcade-blink 1.25s step-end infinite;
    }
    @keyframes windowExit {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.95); }
    }
    .window-exit {
      animation: windowExit 0.25s ease-in forwards;
    }
  `;

  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#f8f7f4] flex flex-col items-center justify-center p-4">
      <style>{resultStyles}</style>

      {/* --- COMING SOON MODAL --- */}
      {showComingSoon && (
        <ComingSoonModal onClose={() => setShowComingSoon(false)} />
      )}

      {/* --- PRICING MODAL OVERLAY --- */}
      {showPricing && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout">
            <button
              onClick={() => setShowPricing(false)}
              className="absolute top-4 right-4 text-2xl hover:scale-110 transition-transform"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <h3
                className="text-4xl mb-2 tracking-widest uppercase"
                style={protestFont}
              >
                Unlock Premium
              </h3>
              <p className="font-serif text-gray-600">
                Subscribe to generate personalized levels from your mistakes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Monthly Plan */}
              <div className="border-2 border-black p-6 rounded-sm flex flex-col items-center text-center bg-white">
                <span className="text-sm font-serif uppercase text-gray-500 mb-2">
                  Monthly
                </span>
                <span className="text-3xl font-bold mb-4">$4.99</span>
                <ul className="text-sm font-serif space-y-2 mb-6 text-left w-full">
                  <li>✓ Unlimited Practice</li>
                  <li>✓ No Ads</li>
                  <li>✓ No Daily Limits</li>
                </ul>
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="w-full py-2 bg-black text-white font-serif uppercase hover:bg-gray-800 transition-colors"
                >
                  Select
                </button>
              </div>

              {/* Yearly Plan */}
              <div className="border-2 border-black p-6 rounded-sm flex flex-col items-center text-center relative overflow-hidden bg-gray-50">
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] px-2 py-1 uppercase tracking-tighter">
                  Best Value
                </div>
                <span className="text-sm font-serif uppercase text-gray-500 mb-2">
                  Yearly
                </span>
                <span className="text-3xl font-bold mb-4">$39.99</span>
                <ul className="text-sm font-serif space-y-2 mb-6 text-left w-full">
                  <li>✓ Everything in Monthly</li>
                  <li>✓ 33% Savings</li>
                  <li>✓ Early Access Features</li>
                </ul>
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="w-full py-2 bg-black text-white font-serif uppercase hover:bg-gray-700 transition-colors"
                >
                  Select
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowComingSoon(true)}
                className="text-sm font-serif underline hover:text-gray-600"
              >
                Already have an account? Log in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- BACKGROUND TEXTURE --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Texturelabs_Paper_373XL.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.65,
          mixBlendMode: "multiply",
        }}
      />

      {/* --- RESULTS CARD --- */}
      <div
        className={`
          relative z-10 w-full max-w-2xl max-h-[85vh]
          bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
          flex flex-col rounded-sm
          ${exiting ? "window-exit" : "window-popout"}
        `}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 shrink-0">
            <div className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100 text-black">
              <div className="text-xs font-serif text-gray-500 uppercase tracking-widest mb-1">
                Score
              </div>
              <div className="text-4xl font-bold font-serif">{stats.score}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100 text-black">
              <div className="text-xs font-serif text-gray-500 uppercase tracking-widest mb-1">
                WPM
              </div>
              <div className="text-4xl font-bold font-serif">{stats.wpm}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100 text-black">
              <div className="text-xs font-serif text-gray-500 uppercase tracking-widest mb-1">
                Accuracy
              </div>
              <div className="text-3xl font-serif">{stats.accuracy}%</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100 text-black">
              <div className="text-xs font-serif text-gray-500 uppercase tracking-widest mb-1">
                Mistakes
              </div>
              <div className="text-3xl font-serif">{stats.mistakes}</div>
            </div>
          </div>

          {uniqueMissed.length > 0 ? (
            <div className="border-t-2 border-gray-100 pt-8 pb-4">
              <h3
                className="text-3xl mb-4 text-center tracking-wide"
                style={protestFont}
              >
                Words to Review
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                {uniqueMissed.map((token, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-3 border-2 border-gray-100 rounded-sm hover:border-black transition-colors text-center bg-white"
                  >
                    <div
                      className="text-4xl mb-1 text-red-600"
                      style={calliFont}
                    >
                      {token.char}
                    </div>
                    <div className="text-sm font-serif font-bold text-black">
                      {token.pinyin}
                    </div>
                  </div>
                ))}
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

        <div className="shrink-0 flex flex-col gap-4 py-5 px-8 border-t border-gray-200 bg-white rounded-b-sm">
          <div className="flex justify-center w-full text-black">
            <button
              onClick={handlePremiumClick}
              className="group relative w-full sm:w-auto px-4 py-4 bg-black text-white font-serif text-md tracking-widest transition-all transform hover:scale-105 hover:shadow-xl rounded-sm border-2 border-transparent hover:border-black"
            >
              <div className="relative z-10 flex flex-col items-center">
                <span className="flex items-center gap-3">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 56 56"
                  >
                    <path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z" />
                  </svg>
                  Practice {uniqueMissed.length} Mistakes
                </span>
              </div>
            </button>
          </div>

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
