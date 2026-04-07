import React, { useEffect, useRef } from "react";

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onStart();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onStart]);

  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const MAX_WIDTH = 40;
    const MIN_WIDTH = 4;
    const SPEED_SCALE = 0.10;
    // Pre-computed — avoids a template-string allocation every RAF frame
    const FADE_FILL = "rgba(0, 0, 0, 0.06)";
    const IDLE_CLEAR_MS = 2500;
    // ~60fps paint throttle: skip mouse events that arrive faster than one frame
    const PAINT_THROTTLE_MS = 16;

    const HAIRS = [
      { t: -1.2, a: 0.28, w: 0.38 },
      { t: -0.4, a: 0.68, w: 0.72 },
      { t:  0.1, a: 1.00, w: 1.00 },
      { t:  0.6, a: 0.62, w: 0.68 },
      { t:  1.3, a: 0.22, w: 0.35 },
    ];

    type BakedPoint = { x: number; y: number; speed: number; jx: number; jy: number };
    let prev: BakedPoint | null = null;
    let carryX = 0, carryY = 0, hasCarry = false;
    let lastMoveTime = 0;
    let lastPaintMs = 0;
    let rafId = 0;

    const paintSegment = (p0: BakedPoint, p1: BakedPoint) => {
      const midX = (p0.x + p1.x) / 2;
      const midY = (p0.y + p1.y) / 2;

      const startX = hasCarry ? carryX : p0.x;
      const startY = hasCarry ? carryY : p0.y;

      const segDx = midX - startX;
      const segDy = midY - startY;
      const segLen = Math.sqrt(segDx * segDx + segDy * segDy) || 1;
      const nx = -segDy / segLen;
      const ny =  segDx / segLen;

      const baseWidth = MIN_WIDTH + (MAX_WIDTH - MIN_WIDTH) * Math.exp(-p1.speed * SPEED_SCALE);
      const width = Math.max(MIN_WIDTH * 0.5, baseWidth);

      ctx.save();
      ctx.shadowColor = "rgba(18, 12, 6, 0.4)";
      ctx.shadowBlur = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (const hair of HAIRS) {
        ctx.beginPath();
        ctx.moveTo(startX + hair.t * nx, startY + hair.t * ny);
        ctx.quadraticCurveTo(
          p0.x + hair.t * nx + p0.jx,
          p0.y + hair.t * ny + p0.jy,
          midX + hair.t * nx,
          midY + hair.t * ny
        );
        ctx.globalAlpha = hair.a;
        ctx.strokeStyle = "rgba(18, 12, 6, 0.55)";
        ctx.lineWidth = Math.max(0.3, width * hair.w);
        ctx.stroke();
      }

      ctx.restore();

      carryX = midX;
      carryY = midY;
      hasCarry = true;
    };

    // Fade loop — only runs while there is ink on canvas.
    // Stops itself when the canvas is cleared, restarted by onMouseMove.
    const fade = () => {
      if (lastMoveTime === 0) {
        rafId = 0;
        return;
      }
      if (Date.now() - lastMoveTime > IDLE_CLEAR_MS) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        prev = null;
        hasCarry = false;
        lastMoveTime = 0;
        rafId = 0;
        return;
      }
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = FADE_FILL;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      rafId = requestAnimationFrame(fade);
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle paint to ~60fps — still update idle timer on skipped frames
      if (now - lastPaintMs < PAINT_THROTTLE_MS) {
        lastMoveTime = now;
        return;
      }
      lastPaintMs = now;

      const x = e.clientX;
      const y = e.clientY;
      const dx = prev ? x - prev.x : 0;
      const dy = prev ? y - prev.y : 0;
      const curr: BakedPoint = {
        x, y,
        speed: Math.sqrt(dx * dx + dy * dy),
        jx: (Math.random() - 0.5) * 0.6,
        jy: (Math.random() - 0.5) * 0.6,
      };
      if (prev) paintSegment(prev, curr);
      prev = curr;
      lastMoveTime = now;

      // Restart fade loop if it stopped while canvas was idle
      if (!rafId) rafId = requestAnimationFrame(fade);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

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
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-[5] pointer-events-none"
        style={{
          mixBlendMode: "multiply",
          opacity: 0.15,
        }}
      >
        <source src="/ink-splatter.mp4" type="video/mp4" />
      </video>

      {/* 3. INK TRAIL CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 6, mixBlendMode: "multiply" }}
      />

      {/* 4. CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8 max-w-2xl text-black w-full">
        <div className="relative">
          <style>{`
    @keyframes letterPop {
      0% { opacity: 0; transform: scale(0.5) translateY(20px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes letterHover {
      0% { transform: scale(1) translateY(0); }
      50% { transform: scale(1.2) translateY(-10px); text-shadow: 0 20px 60px rgba(0,0,0,0.25); }
      100% { transform: scale(1) translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .kuai-letter {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `}</style>
          <h1
            className="text-[84px] xs:text-[150px] sm:text-[180px] md:text-[250px] lg:text-[300px] leading-none select-none text-center"
            style={{
              fontFamily: "'Protest Revolution', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {["k", "u", "a", "i"].map((letter, i) => (
              <span
                key={i}
                className="kuai-letter"
                style={{
                  display: "inline-block",
                  cursor: "default",
                  animation: `letterPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
                onAnimationEnd={(e: React.AnimationEvent<HTMLSpanElement>) => {
                  const el = e.currentTarget;
                  el.style.opacity = "1";
                  el.style.transform = "scale(1) translateY(0)";
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => {
                  if (reducedMotion) return;
                  const el = e.currentTarget;
                  el.style.animation = "none";
                  el.style.opacity = "1";
                  el.style.textShadow =
                    "0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)";
                  // Defer to next frame instead of forcing a synchronous reflow
                  requestAnimationFrame(() => {
                    el.style.animation = `letterHover 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
                  });
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => {
                  if (reducedMotion) return;
                  const el = e.currentTarget;
                  el.style.animation = "none";
                  el.style.opacity = "1";
                  el.style.textShadow = "none";
                  requestAnimationFrame(() => {
                    el.style.transform = "scale(1) translateY(0)";
                  });
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase pt-2 sm:pt-5 text-center">
          The Art of Typing
        </p>

        <div className="w-48 sm:w-64 h-px bg-black/20" />

        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-lg leading-relaxed border-l-4 border-black italic px-4 py-2">
          Type Pinyin with tones and master Mandarin through stories.
        </p>

        <button
          onClick={onStart}
          aria-label="Begin — press Enter or Space to start"
          className="relative flex items-center justify-center group mt-4 sm:mt-8
             outline-none focus:outline-none focus:ring-0"
          style={{
            width: "clamp(220px, 70vw, 300px)",
            height: "clamp(70px, 20vw, 100px)",
            border: "none",
            background: "transparent",
          }}
        >
          {/* Brush stroke button background — PNG (634KB) replaces 18MB SVG */}
          <div
            className="absolute inset-0 z-0 pointer-events-none transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
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
               transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            style={{ fontFamily: "'Protest Revolution', sans-serif" }}
          >
            BEGIN
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
