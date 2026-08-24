// showcase-site/src/components/ImageSequenceCanvas.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Sliders, Sparkles, Layers, RefreshCw } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface ImageSequenceProps {
  progress?: number;
  bloom?: boolean;
  grain?: boolean;
  vignette?: boolean;
}

export const ImageSequenceCanvas: React.FC<ImageSequenceProps> = ({
  progress: externalProgress,
  bloom = true,
  grain = true,
  vignette = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [internalProgress, setInternalProgress] = useState(30);
  const [activeLayer, setActiveLayer] = useState<'hybrid' | 'baked' | 'shader'>('hybrid');

  const currentProgress = externalProgress !== undefined ? externalProgress : internalProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 640;
    const height = 400;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Render Procedural CGI Frame at current progress (0..100)
    const renderCGIFrame = (p: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const angle = (p / 100) * Math.PI * 4;
      const scale = 0.85 + Math.sin((p / 100) * Math.PI) * 0.25;

      // 1. Background radial gradient (Studio Lighting)
      const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.6);
      bgGrad.addColorStop(0, '#1c1f28');
      bgGrad.addColorStop(0.6, '#0c0d12');
      bgGrad.addColorStop(1, '#050608');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric God-Rays
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle * 0.2);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.04)';
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, width * 0.7, (i * Math.PI) / 4 - 0.1, (i * Math.PI) / 4 + 0.1);
        ctx.fill();
      }
      ctx.restore();

      // 3. 3D Monolith Core (Multi-layer procedural CGI render)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // Outer gold ring with depth
      ctx.beginPath();
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Rotating faceted polygon (Studio Insignia)
      ctx.rotate(angle);
      const sides = 6;
      const polyRadius = 80;

      const polyGrad = ctx.createLinearGradient(-polyRadius, -polyRadius, polyRadius, polyRadius);
      polyGrad.addColorStop(0, '#fff4cc');
      polyGrad.addColorStop(0.3, '#d4af37');
      polyGrad.addColorStop(0.7, '#805d15');
      polyGrad.addColorStop(1, '#1b1303');

      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const a = (i * Math.PI * 2) / sides;
        const x = Math.cos(a) * polyRadius;
        const y = Math.sin(a) * polyRadius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      if (bloom) {
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 35;
      }

      ctx.fillStyle = polyGrad;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner Core Matrix Text
      ctx.rotate(-angle * 1.5);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 15px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowBlur = 0;
      ctx.fillText('STUDIO OS', 0, -8);
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText(`FRAME ${Math.round((p / 100) * 150)}/150`, 0, 10);

      ctx.restore();

      // 4. Post-Processing: Film Grain Shader Simulation
      if (grain) {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const grainIntensity = 14;

        for (let i = 0; i < data.length; i += 8) {
          const noise = (Math.random() - 0.5) * grainIntensity;
          data[i] = Math.min(255, Math.max(0, data[i] + noise));
          data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
          data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
        }
        ctx.putImageData(imgData, 0, 0);
      }

      // 5. Post-Processing: Vignette
      if (vignette) {
        const vigGrad = ctx.createRadialGradient(cx, cy, width * 0.35, cx, cy, width * 0.7);
        vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
        vigGrad.addColorStop(1, 'rgba(0,0,0,0.75)');
        ctx.fillStyle = vigGrad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    renderCGIFrame(currentProgress);
  }, [currentProgress, bloom, grain, vignette, activeLayer]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setInternalProgress(val);
    if (val % 10 === 0) soundEngine.playClick(300 + val * 3);
  };

  return (
    <div className="image-seq-component">
      {/* 3-Layer Hybrid Architecture Viewport */}
      <div className="canvas-wrapper-3d">
        <canvas ref={canvasRef} className="render-canvas" />

        {/* HUD Info Badges */}
        <div className="seq-hud">
          <div className="hud-chip">
            <span>METHOD:</span> <strong>Apple Image-Sequence Scrubbing</strong>
          </div>
          <div className="hud-chip">
            <span>FPS:</span> <strong>60.0 STABLE</strong>
          </div>
          <div className="hud-chip">
            <span>POST-FX:</span> <strong>{bloom ? 'BLOOM' : ''} {grain ? 'GRAIN' : ''} {vignette ? 'VIGNETTE' : ''}</strong>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="seq-controls-bar">
        <div className="scrub-label">
          <Sliders size={15} color="var(--accent)" />
          <span>Скраббинг кадра таймлайна (Scroll / Scrub Progress): <strong>{currentProgress}%</strong></span>
        </div>
        <input 
          type="range"
          min="0"
          max="100"
          value={currentProgress}
          onChange={handleSlider}
          className="scrub-range-slider"
        />
      </div>

      <style>{`
        .image-seq-component {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .canvas-wrapper-3d {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: var(--border-width) solid var(--border-strong);
          background: #000;
          box-shadow: var(--shadow-card);
        }
        .render-canvas {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 16 / 10;
        }
        .seq-hud {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 6px;
          pointer-events: none;
        }
        .hud-chip {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .hud-chip strong {
          color: var(--accent);
        }
        .seq-controls-bar {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
        }
        .scrub-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .scrub-range-slider {
          width: 100%;
          accent-color: var(--accent);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
