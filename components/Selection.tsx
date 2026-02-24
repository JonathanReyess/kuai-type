import React, { useState, useEffect } from "react";
import { LESSONS } from "../constants";
import { Lesson, Difficulty, GameToken } from "../types";
import { PRE_GENERATED_STORIES } from "../storyData";
import Button from "./Button";
import { VocabPreview } from "./VocabPreview";
import SavedWords from "./SavedWords";

interface SelectionProps {
  onSelect: (lesson: Lesson, difficulty: Difficulty) => void;
  onBack: () => void;
  onPracticeSaved?: (tokens: GameToken[]) => void;
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

/* --- SUB-COMPONENT: CHALLENGE LINK MODAL --- */
const ChallengeLinkModal: React.FC<{
  lesson: Lesson;
  difficulty: Difficulty;
  onClose: () => void;
}> = ({ lesson, difficulty, onClose }) => {
  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calliFont = { fontFamily: "'Ma Shan Zheng', cursive" };
  const [copied, setCopied] = useState(false);

  const [roomCode] = useState(() =>
    Math.random().toString(36).substring(2, 8).toUpperCase(),
  );
  const challengeLink = `${window.location.origin}/battle/${roomCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(challengeLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm window-popout">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:scale-125 transition-transform"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <svg
                fill="currentColor"
                viewBox="0 0 510.31 510.31"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path d="M504.06,443.728c-8.341-8.341-21.845-8.341-30.165,0h-0.021L412.946,382.8c20.096-23.915,34.731-50.389,36.928-72.768 c1.131-11.733-7.424-22.165-19.157-23.317c-11.925-1.195-22.165,7.445-23.317,19.157c-0.256,2.773-1.067,5.803-2.091,8.917 l-59.648-59.627l128.235-128.235c2.325-2.347,4.096-5.205,5.141-8.341l30.165-90.496c2.56-7.68,0.555-16.128-5.141-21.845 c-5.717-5.717-14.187-7.701-21.845-5.141L391.719,31.27c-3.136,1.045-5.995,2.816-8.341,5.163L255.143,164.646L126.93,36.432 c-2.325-2.347-5.184-4.117-8.341-5.163L28.092,1.104c-7.616-2.56-16.128-0.597-21.284,5.141 c-5.717,5.717-7.723,14.165-5.163,21.845l30.165,90.496c1.045,3.136,2.816,5.995,5.163,8.341l128.213,128.213l-59.904,59.925 c-0.917-2.965-1.621-5.824-1.771-8.405c-0.704-11.755-10.88-20.693-22.592-20.011c-11.776,0.725-20.693,10.837-19.989,22.592 c1.344,22.251,16.149,49.237,36.864,73.643l-60.821,60.843c-8.341-8.341-21.845-8.341-30.165,0c-8.341,8.32-8.341,21.824,0,30.165 l30.165,30.165c4.16,4.16,9.621,6.251,15.083,6.251s10.901-2.091,15.083-6.251c8.32-8.341,8.32-21.845,0-30.165l60.907-60.928 c23.915,20.096,50.411,34.709,72.789,36.885c0.725,0.085,1.408,0.107,2.091,0.107c10.859,0,20.139-8.235,21.205-19.264 c1.152-11.712-7.445-22.165-19.157-23.296c-2.773-0.277-5.803-1.067-8.917-2.112l59.648-59.627l59.904,59.904 c-2.965,0.917-5.824,1.621-8.405,1.771c-11.776,0.704-20.715,10.816-20.011,22.592c0.683,11.307,10.091,20.032,21.269,20.032 c0.448,0,0.875,0,1.323-0.043c22.251-1.344,49.216-16.149,73.621-36.864l60.843,60.843c-8.32,8.32-8.32,21.824,0,30.165 c4.181,4.16,9.643,6.251,15.104,6.251c5.44,0,10.901-2.091,15.083-6.251l30.165-30.165 C512.38,465.552,512.38,452.048,504.06,443.728z M157.927,382.544c-5.653-4.587-11.2-9.557-16.448-14.784 c-0.149-0.149-0.299-0.32-0.448-0.469c-4.715-4.736-9.237-9.728-13.419-14.784l67.2-67.179l30.187,30.165L157.927,382.544z M298.194,207.696l-12.864-12.885L409.98,70.16l45.269-15.083l-15.104,45.248L315.495,224.998L298.194,207.696z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <h3
            className="text-4xl mb-4 tracking-widest uppercase"
            style={protestFont}
          >
            Challenge
          </h3>
        </div>

        <div className="flex gap-3 justify-center mb-6">
          <span
            className="px-4 py-2 bg-gray-50 border border-gray-200 font-serif text-md rounded-sm"
            style={calliFont}
          >
            {lesson.title}
          </span>
          <span className="px-4 py-2 bg-black text-white font-serif text-md rounded-sm uppercase tracking-wider">
            {difficulty}
          </span>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm font-serif uppercase tracking-widest text-gray-500 mb-3">
            Room Code
          </p>
          <div
            className="text-6xl font-bold tracking-[0.4em] select-all"
            style={protestFont}
          >
            {roomCode}
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          <div className="flex-1 border-2 border-gray-200 p-3 font-serif text-sm truncate bg-gray-50 text-gray-500">
            {challengeLink}
          </div>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 border-2 font-serif text-sm uppercase tracking-wider transition-all whitespace-nowrap
              ${
                copied
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-black text-white border-black hover:bg-gray-800"
              }`}
          >
            {copied ? "✓ Copied" : "Copy Link"}
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-200 p-4 text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-serif text-sm text-gray-600 uppercase tracking-wider">
              Waiting for opponent…
            </span>
          </div>
          <p className="font-serif text-xs text-gray-400">
            Room expires in 10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

const Selection: React.FC<SelectionProps> = ({
  onSelect,
  onBack,
  onPracticeSaved,
}) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showSavedWords, setShowSavedWords] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("scrivo_saved_words") || "[]",
    );
    setSavedCount(saved.length);
  }, [showSavedWords]);

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
      animation: slideUp 0.3s ease-out forwards;
    }
    @keyframes windowPop {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    .window-popout {
      animation: windowPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
          lesson={selectedLesson}
          difficulty={difficulty}
          onClose={() => setShowChallengeModal(false)}
        />
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
        <header className="mb-6 sm:mb-8 lg:mb-12 flex justify-between items-center border-b-2 border-black pb-3 sm:pb-4">
          <button
            onClick={onBack}
            className="font-serif hover:underline text-base sm:text-lg"
          >
            ← Back
          </button>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase"
            style={protestFont}
          >
            Preparation
          </h2>
          <div className="w-[80px] sm:w-[120px]"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 flex-grow">
          {/* Left Column: Lessons */}
          <div className="flex flex-col">
            <h3
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-wide"
              style={protestFont}
            >
              Select a Lesson
            </h3>
            <div className="space-y-3 sm:space-y-4 mb-8">
              {LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`w-full text-left p-4 sm:p-5 lg:p-6 border-2 transition-all duration-300 rounded-sm
                    ${
                      selectedLessonId === lesson.id
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black text-black"
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
                        className={`text-xs sm:text-sm font-serif line-clamp-2 ${selectedLessonId === lesson.id ? "text-gray-300" : "text-gray-500"}`}
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

            <div className="mt-0">
              <button
                onClick={() => setShowSavedWords(true)}
                className="relative w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-black font-serif text-sm sm:text-base uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] bg-transparent"
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
                {savedCount > 0 && (
                  <span className="bg-black/5 text-black text-[12px] px-3 py-0.6 border border-black/20 rounded-full font-serif lowercase italic tracking-wider">
                    {savedCount} saved
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right: Difficulty & Unified Info/Actions Box */}
          <div className="flex flex-col">
            <h3
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-wide"
              style={protestFont}
            >
              Difficulty
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
                        : "border-gray-300 text-gray-500 hover:border-black hover:text-black"
                    }`}
                  >
                    {diff}
                  </button>
                ),
              )}
            </div>

            {/* THE UNIFIED BOX START */}
            <div className="flex flex-col flex-grow">
              {/* Top Section: Info Card */}
              <div className="min-h-[180px] sm:min-h-[200px] border-2 border-gray-300 p-4 mt-2 sm:p-6 flex flex-col justify-center rounded-t-sm bg-white/20 backdrop-blur-sm border-b-0">
                {difficulty ? (
                  <div className="animate-slide-up space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-gray-400 font-bold">
                          Length
                        </p>
                        <p className="font-serif text-base sm:text-lg">
                          {DIFFICULTY_METADATA[difficulty].length}
                        </p>
                      </div>
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                          Focus
                        </p>
                        <p className="font-serif text-base sm:text-lg">
                          {DIFFICULTY_METADATA[difficulty].focus}
                        </p>
                      </div>
                    </div>
                    <p className="font-serif text-gray-700 italic border-t border-gray-200 pt-3 text-sm">
                      {DIFFICULTY_METADATA[difficulty].desc}
                    </p>
                    {selectedLessonId && (
                      <div className="bg-black/5 p-3 sm:p-4 rounded-sm border border-black/10">
                        <p className="text-[10px] uppercase text-gray mb-1">
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
                  <div className="text-center text-gray-500 font-serif italic text-base sm:text-lg px-2">
                    Select a difficulty to preview level info
                  </div>
                )}
              </div>

              {/* Bottom Section: Action Buttons */}
              <div className="flex flex-col gap-3 p-4 sm:p-6 border-2 border-gray-300 rounded-b-sm bg-white/10 border-t-0">
                <Button
                  variant="outline"
                  disabled={!selectedLessonId}
                  onClick={() => setShowPreview(true)}
                  className="w-full rounded-sm py-3 sm:py-4 text-sm sm:text-base bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all"
                >
                  PREVIEW WORDS
                </Button>

                {canChallenge && (
                  <Button
                    variant="secondary"
                    onClick={() => setShowChallengeModal(true)}
                    className="w-full rounded-sm py-3 sm:py-4 text-sm sm:text-base animate-slide-up"
                  >
                    Challenge a Friend
                    <span className="text-[10px] px-1.5 py-0.5 border border-current opacity-60 tracking-normal normal-case font-normal rounded-sm ml-2">
                      Beta
                    </span>
                  </Button>
                )}

                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full">
                  <Button
                    disabled={!selectedLessonId || !difficulty}
                    onClick={handleStart}
                    className="flex-1 rounded-sm py-3 sm:py-4 text-sm sm:text-base"
                  >
                    BEGIN
                  </Button>
                </div>
              </div>
            </div>
            {/* THE UNIFIED BOX END */}
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
