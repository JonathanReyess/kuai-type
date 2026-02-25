import React from "react";

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#f8f7f4] px-4 sm:px-6">
      {/* 1. TEXTURE LAYER */}
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

      {/* 2. INK DROPLETS VIDEO LAYER */}
      <video
        poster="/ink-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-5 pointer-events-none"
        style={{
          mixBlendMode: "multiply",
          opacity: 0.15,
        }}
      >
        <source src="/ink-splatter.mp4" type="video/mp4" />
      </video>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8 max-w-2xl text-black w-full">
        {/* Title - responsive sizing */}
        <h1
          className="text-[72px] xs:text-[90px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none select-none relative text-center"
          style={{
            fontFamily: "'Protest Revolution', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Scrivo
        </h1>

        <div className="text-center space-y-2">
          <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase pt-2 sm:pt-5">
            The Art of Typing
          </p>
        </div>

        <div className="w-48 sm:w-64 h-px bg-black/20"></div>

        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-lg leading-relaxed border-l-4 border-black italic px-4 py-2">
          Type Pinyin with tones and master Mandarin through stories.
        </p>

        <div className="mt-4 sm:mt-8">
          <button
            onClick={onStart}
            className="relative flex items-center justify-center group 
             outline-none focus:outline-none focus:ring-0"
            style={{
              width: "clamp(220px, 70vw, 300px)",
              height: "clamp(70px, 20vw, 100px)",
              border: "none",
              background: "transparent",
            }}
          >
            {/* THE CROPPER (Ink Brush Stroke) */}
            <div
              className="absolute inset-0 z-0 pointer-events-none transition-all duration-300 ease-out 
                 group-hover:scale-110 group-active:scale-95"
              style={{
                backgroundImage: "url('/brush-stroke.svg')",
                backgroundSize: "300% 300%",
                backgroundPosition: "51% 6%",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* BUTTON TEXT */}
            <span
              className="relative z-10 text-white text-xl sm:text-2xl tracking-[0.15em] sm:tracking-[0.2em] pt-1 select-none 
                 transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Protest Revolution', sans-serif" }}
            >
              BEGIN
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
