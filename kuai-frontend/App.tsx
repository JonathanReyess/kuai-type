import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Game from "./components/Game";
import Results from "./components/Results";
import BattlePage from "./pages/BattlePage";
import { AppState, Lesson, Difficulty, GameStats, GameToken } from "./types";
import { LESSONS } from "./constants";

// Read rematch state passed via React Router navigate("/", { state: {...} })
// window.history.state.usr is where React Router stores navigate() state
function getRematchState(): {
  lessonId?: string;
  difficulty?: Difficulty;
} | null {
  try {
    const usr = window.history.state?.usr;
    if (usr?.lessonId) return usr;
  } catch {}
  return null;
}

const App: React.FC = () => {
  const assetsReady = true;

  const rematch = getRematchState();
  const rematchLesson = rematch?.lessonId
    ? (LESSONS.find((l) => l.id === rematch.lessonId) ?? null)
    : null;

  const [screen, setScreen] = useState<AppState>(() =>
    rematchLesson ? "selection" : "landing",
  );
  const [lesson, setLesson] = useState<Lesson | null>(rematchLesson);
  const [difficulty, setDifficulty] = useState<Difficulty>(
    rematch?.difficulty ?? "medium",
  );
  const [stats, setStats] = useState<GameStats | null>(null);
  const [reviewTokens, setReviewTokens] = useState<GameToken[]>([]);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);
  const [useCalliFont, setUseCalliFont] = useState(true);
  const handleToggleFont = () => setUseCalliFont((prev) => !prev);

  const handleStartSelection = () => setScreen("selection");

  const handleLessonSelected = (
    selectedLesson: Lesson,
    selectedDifficulty: Difficulty,
  ) => {
    setLesson(selectedLesson);
    setDifficulty(selectedDifficulty);
    setReviewTokens([]);
    setScreen("game");
  };

  const handleGameEnd = (gameStats: GameStats) => {
    setStats(gameStats);
    setScreen("result");
  };

  const handlePlayAgain = () => {
    setReviewTokens([]);
    setScreen("loading");
    setTimeout(() => setScreen("game"), 100);
  };

  const handleReviewMistakes = (missedTokens: GameToken[]) => {
    setReviewTokens(missedTokens);
    setScreen("loading");
    setTimeout(() => setScreen("game"), 50);
  };

  const handleHome = () => {
    setScreen("landing");
    setLesson(null);
    setStats(null);
    setReviewTokens([]);
  };

  // The main single-page app
  const MainApp = (
    <div
      className={`ink-stroke-bg min-h-screen text-black antialiased
        transition-opacity duration-700
        ${assetsReady ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {assetsReady && (
        <>
          {screen === "landing" && <Landing onStart={handleStartSelection} />}
          {screen === "selection" && (
            <Selection
              onSelect={handleLessonSelected}
              onBack={handleHome}
              initialLessonId={rematch?.lessonId}
              initialDifficulty={rematch?.difficulty}
            />
          )}
          {screen === "loading" && (
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#f8f7f4]">
              <div
                className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "url('/Texturelabs_Paper_373XL.webp')",
                  backgroundSize: "cover",
                }}
              />
              <div className="relative z-10 text-4xl mb-4 font-serif animate-pulse">
                Loading...
              </div>
            </div>
          )}
          {screen === "game" && lesson && (
            <Game
              key={`${lesson.id}-${difficulty}-${reviewTokens.length}`}
              lesson={lesson}
              difficulty={difficulty}
              reviewTokens={reviewTokens}
              onEndGame={handleGameEnd}
              showTutorialOnStart={!hasSeenTutorial}
              onExit={() => setScreen("selection")}
              onTutorialComplete={() => setHasSeenTutorial(true)}
              useCalliFont={useCalliFont}
              onToggleFont={handleToggleFont}
            />
          )}
          {screen === "result" && stats && lesson && (
            <Results
              stats={stats}
              onRestart={handlePlayAgain}
              onMenu={() => setScreen("selection")}
              onLanding={handleHome}
              onReviewMistakes={handleReviewMistakes}
              lessonId={lesson.id}
              lessonTitle={lesson.title}
              difficulty={difficulty}
              tokens={reviewTokens.length > 0 ? reviewTokens : undefined}
            />
          )}
        </>
      )}
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* All existing screens live at "/" */}
        <Route path="/" element={MainApp} />
        {/* Battle route — completely separate, no shared state needed */}
        <Route path="/battle/:roomCode" element={<BattlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
