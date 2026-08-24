// showcase-site/src/components/EditorialHero.tsx
import React from 'react';
import { Sparkles, Download, FolderDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface EditorialHeroProps {
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onOpenDownload,
  onOpenOrder,
  onOpenVault
}) => {
  return (
    <section className="editorial-poster-hero" id="hero-intro">
      <div className="container hero-asymmetric-grid">
        {/* Left Column: Massive 10vw Poster Typography (SK-01 & Readymag/Pentagram benchmark) */}
        <div className="poster-title-block">
          <div className="editorial-meta-line">
            <span className="meta-bracket">[01]</span>
            <span className="meta-tag">STUDIO OS // 9 MONOLITHIC STANDARDS</span>
            <span className="meta-pulse" />
          </div>

          <h1 className="poster-headline">
            МЕТА-СИСТЕМА <br />
            <span className="gold-accent-text">ВЕБ-СТУДИИ</span> <br />
            НОВОГО ПОКОЛЕНИЯ
          </h1>

          <p className="poster-lead-copy">
            Единая производственная операционная система студии. Каждый проект создается на базе 9 кинематографичных систем: 
            от голливудских 3D-заставок и скраббинга кадров до анти-слоп фильтрации и Zero-Bug пирамиды тестов.
          </p>

          <div className="poster-actions-row">
            <button 
              className="btn-studio-primary" 
              onClick={() => { soundEngine.playClick(650); onOpenOrder(); }}
            >
              <Sparkles size={17} />
              <span>Заказать сайт студии</span>
            </button>

            <button 
              className="btn-studio-secondary" 
              onClick={() => { soundEngine.playClick(500); onOpenDownload(); }}
            >
              <Download size={17} />
              <span>Скачать системы (ZIP)</span>
            </button>
          </div>

          {/* Standards Quick Ticker */}
          <div className="poster-ticker-row">
            <span className="ticker-label">СТАНДАРТЫ:</span>
            <strong className="ticker-values">
              LENIS 1.2S • THREE.JS 3D • ANTI-SLOP &gt; 85 • TOUCH 48PX • 60 FPS • ZERO-BUG
            </strong>
          </div>
        </div>

        {/* Right Column: Industrial Telemetry Matrix (SK-05 Industrial Passport) */}
        <div className="telemetry-matrix-col">
          <div className="telemetry-hud-card">
            <div className="telemetry-card-head">
              <span className="live-radar-dot" />
              <span className="card-title-mono">LIVE PRODUCTION MATRIX</span>
              <span className="status-mono">ACTIVE</span>
            </div>

            <div className="telemetry-items-list">
              <div className="tele-row">
                <span className="t-name">01. Motion & Timeline</span>
                <span className="t-val pass">MASTER SCENE</span>
              </div>
              <div className="tele-row">
                <span className="t-name">02. Anti-Slop AI Filter</span>
                <span className="t-val pass">94% ORIGINAL</span>
              </div>
              <div className="tele-row">
                <span className="t-name">03. Mobile-Perfect UX</span>
                <span className="t-val pass">≥ 48PX HITBOX</span>
              </div>
              <div className="tele-row">
                <span className="t-name">04. Spacing Token Guard</span>
                <span className="t-val pass">0PX ARBITRARY</span>
              </div>
              <div className="tele-row">
                <span className="t-name">05. Hollywood 3D Intros</span>
                <span className="t-val pass">SUB-BASS AUDIO</span>
              </div>
              <div className="tele-row">
                <span className="t-name">06. SEO-by-Design (Zod)</span>
                <span className="t-val pass">JSON-LD GRAPH</span>
              </div>
              <div className="tele-row">
                <span className="t-name">07. 5 Design Archetypes</span>
                <span className="t-val pass">APCA AAA</span>
              </div>
              <div className="tele-row">
                <span className="t-name">08. Fact-First Copy</span>
                <span className="t-val pass">FLESCH &gt; 75</span>
              </div>
              <div className="tele-row">
                <span className="t-name">09. Zero-Bug Pyramids</span>
                <span className="t-val pass">60 FPS VERIFIED</span>
              </div>
            </div>

            <button 
              className="btn-vault-open-row"
              onClick={() => { soundEngine.playClick(520); onOpenVault(); }}
            >
              <FolderDown size={15} />
              <span>Загрузить ассеты с ПК в хранилище →</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-poster-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding-top: calc(90px + env(safe-area-inset-top, 0px));
          padding-bottom: clamp(40px, 6vw, 80px);
          z-index: 10;
        }
        .hero-asymmetric-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: clamp(24px, 5vw, 60px);
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-asymmetric-grid {
            grid-template-columns: 1fr;
            padding-top: 10px;
          }
        }
        .poster-title-block {
          display: flex;
          flex-direction: column;
        }
        .editorial-meta-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 0.65rem + 0.2vw, 0.8rem);
          color: var(--accent);
          margin-bottom: 14px;
        }
        .meta-bracket {
          opacity: 0.6;
        }
        .meta-tag {
          letter-spacing: 0.15em;
        }
        .meta-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 8px #00ff88;
        }
        .poster-headline {
          font-size: var(--fs-hero);
          line-height: 0.96;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
          text-transform: uppercase;
        }
        .gold-accent-text {
          color: var(--accent);
          text-shadow: 0 0 35px var(--accent-glow);
        }
        .poster-lead-copy {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          max-width: 620px;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .poster-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 32px;
        }
        .poster-ticker-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: clamp(0.68rem, 0.65rem + 0.15vw, 0.76rem);
          color: var(--text-muted);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
        }
        .ticker-values {
          color: var(--accent);
        }
        .telemetry-hud-card {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(20px, 4vw, 32px);
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(20px);
        }
        .telemetry-card-head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .live-radar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 10px #00ff88;
        }
        .card-title-mono {
          color: var(--text-primary);
          font-weight: bold;
        }
        .status-mono {
          margin-left: auto;
          color: #00ff88;
          font-size: 0.7rem;
        }
        .telemetry-items-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 20px;
        }
        .tele-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: var(--bg-primary);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 0.65rem + 0.15vw, 0.78rem);
        }
        .t-name {
          color: var(--text-secondary);
        }
        .t-val.pass {
          color: var(--accent);
          font-weight: bold;
        }
        .btn-vault-open-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-vault-open-row:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};
