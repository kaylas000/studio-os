// showcase-site/src/cinema/CinemaWebGLCanvas.tsx
import React, { useEffect, useRef } from 'react';
import { CinematicThreeEngine } from '../engine/CinematicThreeEngine';

interface CinemaCanvasProps {
  scrollProgress: number;
  activeArchetype: string;
  bloom?: boolean;
  grain?: boolean;
  vignette?: boolean;
}

export const CinemaWebGLCanvas: React.FC<CinemaCanvasProps> = ({
  scrollProgress,
  activeArchetype,
  bloom = true,
  grain = true,
  vignette = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<CinematicThreeEngine | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new CinematicThreeEngine(canvasRef.current);
    engineRef.current = engine;

    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.targetScrollProgress = scrollProgress;
      engineRef.current.activeArchetype = activeArchetype;
      engineRef.current.config.bloom = bloom;
      engineRef.current.config.grain = grain;
      engineRef.current.config.vignette = vignette;
    }
  }, [scrollProgress, activeArchetype, bloom, grain, vignette]);

  return (
    <div className="cinema-canvas-fixed-wrap">
      <canvas ref={canvasRef} className="cinema-canvas" />

      {/* Real Film Grain & Vignette Overlay Layers */}
      <div className={`cinema-film-grain ${grain ? 'active' : ''}`} />
      <div className={`cinema-vignette ${vignette ? 'active' : ''}`} />

      <style>{`
        .cinema-canvas-fixed-wrap {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100dvh;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .cinema-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .cinema-film-grain.active {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }
        .cinema-vignette.active {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.88) 100%);
          pointer-events: none;
          z-index: 3;
        }
      `}</style>
    </div>
  );
};
