import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Game from "./components/Game";
import Results from "./components/Results";
import BattlePage from "./pages/BattlePage";
import { useLandingAssets } from "./useLandingAssets";
import { AppState, Lesson, Difficulty, GameStats, GameToken } from "./types";

const App: React.FC = () => {
  const assetsReady = true;
  const [screen, setScreen] = useState<AppState>("landing");
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [stats, setStats] = useState<GameStats | null>(null);
  const [reviewTokens, setReviewTokens] = useState<GameToken[]>([]);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);

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

  // The main single-page app — same as before, unchanged
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
            <Selection onSelect={handleLessonSelected} onBack={handleHome} />
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
            />
          )}

          {screen === "result" && stats && (
            <Results
              stats={stats}
              onRestart={handlePlayAgain}
              onMenu={() => setScreen("selection")}
              onLanding={handleHome}
              onReviewMistakes={handleReviewMistakes}
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
