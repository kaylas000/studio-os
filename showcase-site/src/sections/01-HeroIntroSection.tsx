// showcase-site/src/sections/01-HeroIntroSection.tsx
import React from 'react';
import { Sparkles, Download, FolderDown, ShieldCheck, Terminal, ArrowRight, Play } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface HeroIntroProps {
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
}

export const HeroIntroSection: React.FC<HeroIntroProps> = ({
  onOpenDownload,
  onOpenOrder,
  onOpenVault
}) => {
  return (
    <section className="hero-monolith-section" id="hero-intro">
      <div className="container hero-layout-grid">
        {/* Left Column: Asymmetrical Editorial Narrative */}
        <div className="hero-text-col">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>STUDIO OS v2.0 • 9 MONOLITHIC STANDARDS</span>
          </div>

          <h1 className="hero-main-title">
            МЕТА-СИСТЕМА <br />
            <span className="accent-shimmer">ВЕБ-СТУДИИ</span> <br />
            НОВОГО ПОКОЛЕНИЯ
          </h1>

          <p className="hero-lead-text">
            Единая саморазвивающаяся операционная среда, где каждый проект создается на базе 9 кинематографичных систем: 
            от голливудских 3D-заставок и скраббинга кадров до анти-слоп фильтрации и Zero-Bug валидации.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-group">
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
              <span>Скачать все 9 систем (ZIP)</span>
            </button>
          </div>

          {/* Standards Quick Ticker */}
          <div className="standards-quick-bar">
            <span>СТАНДАРТЫ:</span>
            <strong>LENIS 1.2S • THREE.JS 3D • ANTI-SLOP > 85 • TOUCH 48PX • 60 FPS • ZERO-BUG</strong>
          </div>
        </div>

        {/* Right Column: Interactive Telemetry HUD Card */}
        <div className="hero-hud-col">
          <div className="hud-glass-card">
            <div className="hud-header">
              <span className="hud-dot" />
              <span className="hud-title">LIVE PRODUCTION MATRIX</span>
              <span className="hud-status">ACTIVE</span>
            </div>

            <div className="hud-stats-list">
              <div className="hud-stat-row">
                <span className="stat-name">01. Motion & Timeline</span>
                <span className="stat-val pass">MASTER SCENE</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">02. Anti-Slop AI Filter</span>
                <span className="stat-val pass">94% ORIGINAL</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">03. Mobile-Perfect UX</span>
                <span className="stat-val pass">≥ 48PX HITBOX</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">04. Spacing Token Guard</span>
                <span className="stat-val pass">0PX ARBITRARY</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">05. Hollywood 3D Intros</span>
                <span className="stat-val pass">SUB-BASS AUDIO</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">06. SEO-by-Design (Zod)</span>
                <span className="stat-val pass">JSON-LD GRAPH</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">07. 5 Design Archetypes</span>
                <span className="stat-val pass">APCA AAA</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">08. Fact-First Copy</span>
                <span className="stat-val pass">FLESCH > 75</span>
              </div>
              <div className="hud-stat-row">
                <span className="stat-name">09. Zero-Bug Pyramids</span>
                <span className="stat-val pass">60 FPS VERIFIED</span>
              </div>
            </div>

            <button 
              className="btn-vault-trigger"
              onClick={() => { soundEngine.playClick(550); onOpenVault(); }}
            >
              <FolderDown size={15} />
              <span>Загрузить ассеты с ПК в хранилище →</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-monolith-section {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding-top: calc(90px + env(safe-area-inset-top, 0px));
          padding-bottom: 60px;
          z-index: 10;
        }
        .hero-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: clamp(24px, 5vw, 60px);
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-layout-grid {
            grid-template-columns: 1fr;
            padding-top: 20px;
          }
        }
        .hero-main-title {
          font-size: var(--fs-hero);
          margin-top: 18px;
          margin-bottom: 20px;
          line-height: 1.05;
        }
        .accent-shimmer {
          color: var(--accent);
          text-shadow: 0 0 35px var(--accent-glow);
        }
        .hero-lead-text {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          max-width: 620px;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero-actions-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 32px;
        }
        .standards-quick-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: clamp(0.68rem, 0.65rem + 0.15vw, 0.75rem);
          color: var(--text-muted);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
        }
        .standards-quick-bar strong {
          color: var(--accent);
        }
        .hud-glass-card {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(20px, 4vw, 32px);
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(20px);
        }
        .hud-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .hud-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 10px #00ff88;
        }
        .hud-title {
          color: var(--text-primary);
          font-weight: bold;
        }
        .hud-status {
          margin-left: auto;
          color: #00ff88;
          font-size: 0.7rem;
        }
        .hud-stats-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .hud-stat-row {
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
        .stat-name {
          color: var(--text-secondary);
        }
        .stat-val.pass {
          color: var(--accent);
          font-weight: bold;
        }
        .btn-vault-trigger {
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
        .btn-vault-trigger:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};
