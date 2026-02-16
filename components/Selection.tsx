import React, { useState } from "react";
import { LESSONS } from "../constants";
import { Lesson, Difficulty, GameToken } from "../types";
import { PRE_GENERATED_STORIES } from "../storyData";
import Button from "./Button";
import { VocabPreview } from "./VocabPreview";

interface SelectionProps {
  onSelect: (lesson: Lesson, difficulty: Difficulty) => void;
  onBack: () => void;
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

const Selection: React.FC<SelectionProps> = ({ onSelect, onBack }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [showPreview, setShowPreview] = useState<boolean>(false);

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
`;

  const selectedLesson = LESSONS.find((l) => l.id === selectedLessonId);

  // FIXED SNIPPET LOGIC
  const getStorySnippet = (): string => {
    if (!selectedLessonId || !difficulty) return "";

    // Convert "Easy" to "easy" to match storyData keys
    const diffKey = difficulty.toLowerCase() as Lowercase<Difficulty>;

    // Access the database
    const lessonData = PRE_GENERATED_STORIES[selectedLessonId];
    if (!lessonData) return "No data found for this lesson.";

    const stories = lessonData[diffKey];
    if (!stories || stories.length === 0) return "No preview available.";

    // Grab the first 30 characters
    const previewText = stories[0]
      .slice(0, 30)
      .map((token: GameToken) => token.char)
      .join("");

    // Only add ellipsis if the text doesn't end in a Chinese or English period
    const endsWithPeriod =
      previewText.endsWith("。") || previewText.endsWith(".");

    return endsWithPeriod ? previewText : `${previewText} ...`;
  };

  const handleStart = () => {
    if (selectedLesson && difficulty) {
      onSelect(selectedLesson, difficulty);
    }
  };

  const protestFont = { fontFamily: "'Protest Revolution', sans-serif" };
  const calligraphyFont = { fontFamily: "'Ma Shan Zheng', cursive" };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f7f4]">
      <style>{blinkStyles}</style>

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

      <div className="relative z-10 p-8 max-w-6xl mx-auto flex flex-col min-h-screen">
        <header className="mb-12 flex justify-between items-center border-b-2 border-black pb-4">
          <button
            onClick={onBack}
            className="font-serif hover:underline text-lg"
          >
            ← Back
          </button>
          <h2
            className="text-4xl tracking-widest uppercase"
            style={protestFont}
          >
            Preparation
          </h2>
          <div className="w-16"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-grow">
          {/* Left: Lessons */}
          <div className="space-y-8">
            <h3 className="text-3xl mb-6 tracking-wide" style={protestFont}>
              Select a Lesson
            </h3>
            <div className="space-y-4">
              {LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`w-full text-left p-6 border-2 transition-all duration-300 rounded-sm
                    ${selectedLessonId === lesson.id ? "border-black bg-black text-white" : "border-gray-300 hover:border-black text-black"}
                  `}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-3xl mb-2" style={calligraphyFont}>
                        {lesson.title}
                      </h4>
                      <p
                        className={`text-sm font-serif ${selectedLessonId === lesson.id ? "text-gray-300" : "text-gray-500"}`}
                      >
                        {lesson.description}
                      </p>
                    </div>
                    {selectedLessonId === lesson.id && (
                      <span className="text-xl font-serif blink-text">
                        Selected
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Difficulty & Preview Details */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-3xl mb-6 tracking-wide" style={protestFont}>
                Difficulty
              </h3>
              <div className="flex space-x-4 mb-8">
                {(["Easy", "Medium", "Hard"] as unknown as Difficulty[]).map(
                  (diff) => (
                    <button
                      key={diff}
                      onClick={() => setDifficulty(diff)}
                      className={`flex-1 py-4 text-xl font-serif border-2 transition-all rounded-sm
                      ${difficulty === diff ? "bg-black text-white border-black" : "border-gray-300 text-gray-500 hover:border-black hover:text-black"}
                    `}
                    >
                      {diff}
                    </button>
                  ),
                )}
              </div>

              {/* Difficulty Info Card */}
              <div className="min-h-[220px] border-3 border-2 border-gray-300 p-6 flex flex-col justify-center rounded-sm bg-white/20 backdrop-blur-sm">
                {difficulty ? (
                  <div className="animate-slide-up space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-gray-400 font-bold">
                          Length
                        </p>
                        <p className="font-serif text-lg">
                          {DIFFICULTY_METADATA[difficulty].length}
                        </p>
                      </div>
                      <div className="border-l-2 border-black pl-3">
                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                          Focus
                        </p>
                        <p className="font-serif text-lg">
                          {DIFFICULTY_METADATA[difficulty].focus}
                        </p>
                      </div>
                    </div>

                    <p className="font-serif text-gray-700 italic border-t border-gray-200 pt-3 text-md">
                      {DIFFICULTY_METADATA[difficulty].desc}
                    </p>

                    {selectedLessonId && (
                      <div className="bg-black/5 p-4 rounded-sm border border-black/10">
                        <p className="text-[12px] uppercase text-gray mb-1">
                          Passage Preview
                        </p>
                        <p
                          className="text-2xl tracking-tight leading-relaxed"
                          style={calligraphyFont}
                        >
                          {getStorySnippet()}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 font-serif italic text-lg">
                    Select a difficulty to preview level info
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow flex items-end pt-8">
              <div className="flex gap-4 w-full">
                <Button
                  variant="secondary"
                  disabled={!selectedLessonId}
                  onClick={() => setShowPreview(true)}
                  className="flex-1 rounded-sm"
                >
                  Preview Words
                </Button>
                <Button
                  disabled={!selectedLessonId || !difficulty}
                  onClick={handleStart}
                  className="flex-1 rounded-sm"
                >
                  BEGIN
                </Button>
              </div>
            </div>
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
