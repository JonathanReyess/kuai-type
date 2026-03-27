import React, { useState, useEffect } from "react";
import { useNavigate as useNavigateHook } from "react-router-dom";
import { LESSONS } from "../constants";
import { Lesson, Difficulty, GameToken } from "../types";
import { PRE_GENERATED_STORIES } from "../storyData";
import Button from "./Button";
import { VocabPreview } from "./VocabPreview";
import SavedWords from "./SavedWords";
import ChallengeLinkModal from "./ChallengeLinkModal";

interface SelectionProps {
  onSelect: (lesson: Lesson, difficulty: Difficulty) => void;
  onBack: () => void;
  onPracticeSaved?: (tokens: GameToken[]) => void;
  initialLessonId?: string;
  initialDifficulty?: Difficulty;
}

const DIFFICULTY_METADATA = {
  Easy: {
    desc: "Short sentences with high repetition. Ideal for beginners.",
    length: "5-15 characters",
    focus: "1-3 vocabulary words",
  },
  Medium: {
    desc: "Standard narrative flow using compound sentences.",
    length: "20-30 characters",
    focus: "3-4 vocabulary words",
  },
  Hard: {
    desc: "Complex grammar and dense descriptive vocabulary.",
    length: "30+ characters",
    focus: "5+ vocabulary words",
  },
};

// Lightweight modal for joining an existing room by code
function JoinRoomModal({ onClose }: { onClose: () => void }) {
  const [code, setCode] = React.useState("");
  const navigate = useNavigateHook();

  const canJoin = code.trim().length >= 4;

  const handleJoin = () => {
    if (!canJoin) return;
    onClose();
    navigate(`/battle/${code.trim().toUpperCase()}`);
  };

  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-sm bg-[#f8f7f4] border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:scale-125 transition-transform"
        >
          ✕
        </button>
        <h3
          className="text-3xl uppercase tracking-widest mb-6 text-center"
          style={protestFont}
        >
          Join Room
        </h3>
        <label className="block font-serif text-sm uppercase tracking-wider text-black/50 mb-2">
          Room code
        </label>
        <input
          autoFocus
          maxLength={6}
          value={code}
          onChange={(e) =>
            setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))
          }
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
          className="w-full border-2 border-black p-3 font-serif text-2xl mb-6 outline-none bg-[#f8f7f4] focus:bg-white tracking-[0.4em] text-center uppercase"
          placeholder="ABCD12"
          style={protestFont}
        />
        <button
          disabled={!canJoin}
          onClick={handleJoin}
          className="w-full py-4 bg-black text-white font-serif uppercase tracking-[0.2em] hover:bg-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={protestFont}
        >
          Join
        </button>
      </div>
    </div>
  );
}

const Selection: React.FC<SelectionProps> = ({
  onSelect,
  onBack,
  onPracticeSaved,
  initialLessonId,
  initialDifficulty,
}) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    initialLessonId ?? null,
  );
  const [difficulty, setDifficulty] = useState<Difficulty | null>(
    initialDifficulty ?? null,
  );
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showSavedWords, setShowSavedWords] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const blinkStyles = `
    @keyframes arcade-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .blink-text {
      animation: arcade-blink 1.25s step-end infinite;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-up {
      animation: slideUp 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes windowPop {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    .window-popout {
      animation: windowPop 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `;

  const selectedLesson = LESSONS.find((l) => l.id === selectedLessonId);
  const canChallenge = !!selectedLesson && !!difficulty;

  const getStorySnippet = (): string => {
    if (!selectedLessonId || !difficulty) return "";
    const diffKey = difficulty.toLowerCase() as Lowercase<Difficulty>;
    const lessonData = PRE_GENERATED_STORIES[selectedLessonId];
    if (!lessonData) return "No data found for this lesson.";
    const stories = lessonData[diffKey];
    if (!stories || stories.length === 0) return "No preview available.";
    const previewText = stories[0]
      .slice(0, 17)
      .map((token: GameToken) => token.char)
      .join("");
    const endsWithPeriod =
      previewText.endsWith("。") || previewText.endsWith(".");
    return endsWithPeriod ? previewText : `${previewText} ...`;
  };

  const handleStart = () => {
    if (selectedLesson && difficulty) {
      onSelect(selectedLesson, difficulty);
    }
  };

  const handlePractice = (tokens: GameToken[]) => {
    setShowSavedWords(false);
    onPracticeSaved?.(tokens);
  };

  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calligraphyFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4]">
      <style>{blinkStyles}</style>

      {showSavedWords && (
        <SavedWords
          onClose={() => setShowSavedWords(false)}
          onPractice={handlePractice}
        />
      )}

      {showChallengeModal && selectedLesson && difficulty && (
        <ChallengeLinkModal
          lessonId={selectedLesson.id}
          lessonTitle={selectedLesson.title}
          difficulty={difficulty}
          tokens={
            PRE_GENERATED_STORIES[selectedLesson.id][
              difficulty.toLowerCase()
            ][0]
          }
          onClose={() => setShowChallengeModal(false)}
        />
      )}

      {showJoinModal && (
        <JoinRoomModal onClose={() => setShowJoinModal(false)} />
      )}

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

      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto flex flex-col min-h-screen">
        <header className="mb-6 sm:mb-8 lg:mb-12 grid grid-cols-3 items-center border-b-2 border-black pb-3 sm:pb-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 hover:opacity-70 transition-opacity text-base sm:text-xl justify-self-start"
            style={protestFont}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
            </svg>
            <span>BACK</span>
          </button>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl tracking-widest uppercase text-center"
            style={protestFont}
          >
            kuai
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 flex-grow">
          {/* Left Column: Lessons */}
          <div className="flex flex-col">
            <h3
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-wide"
              style={protestFont}
            >
              SELECT A LESSON
            </h3>

            {/* Scrollable lesson container — max 5 visible */}
            <div className="space-y-3 sm:space-y-4 overflow-y-auto h-[740px] pr-2 scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-transparent">
              {LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`w-full text-left p-3 sm:p-4 lg:p-[21px] border-2 transition-all duration-300 rounded-sm
                    ${
                      selectedLessonId === lesson.id
                        ? "border-black bg-black text-white"
                        : "border-black/20 hover:border-black text-black"
                    }`}
                >
                  <div className="flex justify-between items-start sm:items-center gap-2">
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-2xl sm:text-3xl mb-1 sm:mb-2 truncate"
                        style={calligraphyFont}
                      >
                        {lesson.title}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm font-serif truncate whitespace-nowrap ${
                          selectedLessonId === lesson.id
                            ? "text-white/60"
                            : "text-black/50"
                        }`}
                      >
                        {lesson.description}
                      </p>
                    </div>
                    {selectedLessonId === lesson.id && (
                      <span className="text-base sm:text-xl font-serif blink-text whitespace-nowrap flex-shrink-0">
                        Selected
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Difficulty & Unified Info/Actions Box */}
          <div className="flex flex-col">
            <h3
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-wide"
              style={protestFont}
            >
              DIFFICULTY
            </h3>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 mb-6 sm:mb-8">
              {(["Easy", "Medium", "Hard"] as unknown as Difficulty[]).map(
                (diff) => (
                  <button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`flex-1 py-3 sm:py-4 text-lg sm:text-xl font-serif border-2 transition-all rounded-sm
                    ${
                      difficulty === diff
                        ? "bg-black text-white border-black"
                        : "border-black/20 text-black/50 hover:border-black hover:text-black"
                    }`}
                  >
                    {diff}
                  </button>
                ),
              )}
            </div>

            {/* THE UNIFIED BOX */}
            <div className="flex flex-col">
              {/* Top Section: Info Card */}
              <div className="min-h-[180px] sm:min-h-[200px] border-2 border-black/20 p-4 mt-1 sm:p-6 flex flex-col justify-center rounded-t-sm bg-[#f8f7f4]/20 backdrop-blur-sm border-b-0">
                {difficulty ? (
                  <div className="animate-slide-up space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-black/40 font-bold">
                          Length
                        </p>
                        <p className="font-serif text-base sm:text-lg">
                          {DIFFICULTY_METADATA[difficulty].length}
                        </p>
                      </div>
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-black/50 font-bold">
                          Focus
                        </p>
                        <p className="font-serif text-base sm:text-lg">
                          {DIFFICULTY_METADATA[difficulty].focus}
                        </p>
                      </div>
                    </div>
                    <p className="font-serif text-black/70 italic border-t border-black/20 pt-3 text-sm">
                      {DIFFICULTY_METADATA[difficulty].desc}
                    </p>
                    {selectedLessonId && (
                      <div className="bg-black/5 p-3 sm:p-4 rounded-sm border border-black/10">
                        <p className="text-[10px] uppercase text-black/40 mb-1">
                          Passage Preview
                        </p>
                        <p
                          className="text-xl sm:text-2xl tracking-tight leading-relaxed"
                          style={calligraphyFont}
                        >
                          {getStorySnippet()}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-black/50 font-serif italic text-base sm:text-lg px-2">
                    Select a difficulty to preview level info
                  </div>
                )}
              </div>

              {/* Bottom Section: Action Buttons */}
              <div className="flex flex-col gap-3 p-4 sm:p-6 border-2 border-black/20 rounded-b-sm bg-[#f8f7f4]/10 border-t-0">
                {/* Preview Words — visible whenever a lesson is selected */}
                {selectedLessonId && (
                  <Button
                    variant="outline"
                    onClick={() => setShowPreview(true)}
                    className="w-full rounded-sm py-3 sm:py-4 text-sm sm:text-base bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all"
                  >
                    Preview Words
                  </Button>
                )}

                {/* Difficulty-dependent actions */}
                {difficulty && (
                  <>
                    {canChallenge && (
                      <Button
                        variant="secondary"
                        onClick={() => setShowChallengeModal(true)}
                        className="w-full rounded-sm py-3 sm:py-4 text-sm hover:bg-zinc-800 sm:text-base animate-slide-up"
                      >
                        Challenge a Friend
                        <span className="text-[10px] px-1.5 py-0.5 border border-current opacity-60 tracking-normal normal-case font-normal rounded-sm ml-2">
                          Beta
                        </span>
                      </Button>
                    )}

                    <Button
                      disabled={!selectedLessonId}
                      onClick={handleStart}
                      title={
                        !selectedLessonId
                          ? "Select a lesson to begin"
                          : undefined
                      }
                      className="w-full rounded-sm py-3 sm:py-4 text-sm sm:text-base bg-black hover:bg-zinc-800 text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Begin
                    </Button>
                    {!selectedLessonId && (
                      <p className="text-center text-[11px] text-black/40 font-serif italic tracking-wide">
                        Select a lesson on the left to begin
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Join a Room — always visible, below the unified box */}
            <button
              onClick={() => setShowJoinModal(true)}
              className="mt-3 w-full py-3 sm:py-4 border-2 border-black/20 font-serif text-sm sm:text-base tracking-[0.2em] hover:border-black hover:bg-black hover:text-white transition-all rounded-sm flex items-center justify-center gap-2"
            >
              Join a Room
            </button>

            {/* Review List — below Join a Room */}
            <button
              onClick={() => setShowSavedWords(true)}
              className="mt-3 w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 border-2 border-black/20 font-serif text-sm sm:text-base tracking-[0.2em] hover:border-black hover:bg-black hover:text-white transition-all bg-transparent rounded-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>Review List</span>
            </button>
          </div>
        </div>

        {showPreview && selectedLesson && (
          <VocabPreview
            vocabulary={selectedLesson.vocabulary}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Selection;
