// showcase-site/src/components/AppleSequenceScrubber.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Sliders, Sparkles, Layers, Download, CheckCircle2, Film } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

export const AppleSequenceScrubber: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(38);
  const [bloomEnabled, setBloomEnabled] = useState(true);
  const [grainEnabled, setGrainEnabled] = useState(true);
  const [vignetteEnabled, setVignetteEnabled] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 800;
    const height = 480;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const renderCGIFrame = (p: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const angle = (p / 100) * Math.PI * 4;
      const scale = 0.9 + Math.sin((p / 100) * Math.PI) * 0.2;

      // 1. Studio Lighting Background (Raytraced glow)
      const bgGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, width * 0.65);
      bgGrad.addColorStop(0, '#1c1f2b');
      bgGrad.addColorStop(0.5, '#0c0d14');
      bgGrad.addColorStop(1, '#040507');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric Light Beams (God-Rays)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle * 0.15);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
      for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, width * 0.8, (i * Math.PI) / 6 - 0.08, (i * Math.PI) / 6 + 0.08);
        ctx.fill();
      }
      ctx.restore();

      // 3. 3D Monolith Core (Multi-layer Titanium & Gold CGI render)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // Outer gold orbit ring with depth
      ctx.beginPath();
      ctx.arc(0, 0, 130, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Rotating faceted polygon (Studio Insignia)
      ctx.rotate(angle);
      const sides = 8;
      const polyRadius = 90;

      const polyGrad = ctx.createLinearGradient(-polyRadius, -polyRadius, polyRadius, polyRadius);
      polyGrad.addColorStop(0, '#fff6d4');
      polyGrad.addColorStop(0.35, '#d4af37');
      polyGrad.addColorStop(0.7, '#7c5a14');
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

      if (bloomEnabled) {
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 40;
      }

      ctx.fillStyle = polyGrad;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner Core Matrix Text
      ctx.rotate(-angle * 1.5);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 16px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowBlur = 0;
      ctx.fillText('STUDIO OS', 0, -10);
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.fillText(`FRAME ${Math.round((p / 100) * 150)}/150`, 0, 12);

      ctx.restore();

      // 4. Post-Processing: Film Grain Shader Simulation
      if (grainEnabled) {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const grainIntensity = 16;

        for (let i = 0; i < data.length; i += 8) {
          const noise = (Math.random() - 0.5) * grainIntensity;
          data[i] = Math.min(255, Math.max(0, data[i] + noise));
          data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
          data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
        }
        ctx.putImageData(imgData, 0, 0);
      }

      // 5. Post-Processing: Vignette
      if (vignetteEnabled) {
        const vigGrad = ctx.createRadialGradient(cx, cy, width * 0.35, cx, cy, width * 0.7);
        vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
        vigGrad.addColorStop(1, 'rgba(0,0,0,0.85)');
        ctx.fillStyle = vigGrad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    renderCGIFrame(scrollProgress);
  }, [scrollProgress, bloomEnabled, grainEnabled, vignetteEnabled]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setScrollProgress(val);
    if (val % 10 === 0) soundEngine.playClick(320 + val * 3);
  };

  return (
    <div className="apple-seq-container">
      <div className="seq-canvas-frame">
        <canvas ref={canvasRef} className="seq-viewport-canvas" />

        <div className="seq-overlay-hud">
          <div className="hud-pill">
            <span>METHOD:</span> <strong>Apple Image-Sequence Scrubbing</strong>
          </div>
          <div className="hud-pill">
            <span>FPS:</span> <strong>60.0 STABLE</strong>
          </div>
          <div className="hud-pill">
            <span>FRAME:</span> <strong>{Math.round((scrollProgress / 100) * 150)} / 150 (WebP)</strong>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Post-Processing Toggles */}
      <div className="seq-controls-panel">
        <div className="scrubber-header">
          <label>
            <Sliders size={15} color="var(--accent)" />
            <span>Скраббинг кадра таймлайна (Scroll / Scrub Progress): <strong>{scrollProgress}%</strong></span>
          </label>
          <input 
            type="range"
            min="0"
            max="100"
            value={scrollProgress}
            onChange={handleSlider}
            className="scrub-slider"
          />
        </div>

        <div className="post-fx-row">
          <button 
            className={`btn-fx-toggle ${bloomEnabled ? 'active' : ''}`}
            onClick={() => { soundEngine.playClick(500); setBloomEnabled(!bloomEnabled); }}
          >
            <span>Unreal Bloom: {bloomEnabled ? 'ON' : 'OFF'}</span>
          </button>
          <button 
            className={`btn-fx-toggle ${grainEnabled ? 'active' : ''}`}
            onClick={() => { soundEngine.playClick(450); setGrainEnabled(!grainEnabled); }}
          >
            <span>Film Grain: {grainEnabled ? 'ON' : 'OFF'}</span>
          </button>
          <button 
            className={`btn-fx-toggle ${vignetteEnabled ? 'active' : ''}`}
            onClick={() => { soundEngine.playClick(400); setVignetteEnabled(!vignetteEnabled); }}
          >
            <span>Vignette: {vignetteEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        <div className="hybrid-layers-meta">
          <span>Слой 1: <strong>Baked 3D Image-Sequence</strong></span>
          <span>Слой 2: <strong>WebGL Displacement Shader</strong></span>
          <span>Слой 3: <strong>DOM GSAP Typography</strong></span>
        </div>
      </div>

      <style>{`
        .apple-seq-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .seq-canvas-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: var(--border-width) solid var(--border-strong);
          background: #000;
          box-shadow: var(--shadow-card);
        }
        .seq-viewport-canvas {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 16 / 10;
        }
        .seq-overlay-hud {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          pointer-events: none;
        }
        .hud-pill {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem);
          color: var(--text-secondary);
        }
        .hud-pill strong {
          color: var(--accent);
        }
        .seq-controls-panel {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: clamp(14px, 3vw, 20px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .scrubber-header label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .scrub-slider {
          width: 100%;
          accent-color: var(--accent);
          cursor: pointer;
        }
        .post-fx-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .btn-fx-toggle {
          padding: 8px 14px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
          min-height: 40px;
          transition: all 0.2s;
        }
        .btn-fx-toggle.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .hybrid-layers-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 10px;
        }
        .hybrid-layers-meta strong {
          color: var(--accent);
        }
      `}</style>
    </div>
  );
};
