// showcase-site/src/components/FloatingNav.tsx
import React, { useState, useEffect } from 'react';
import { Download, Sparkles, FolderDown, Volume2, VolumeX, Eye, Terminal } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface FloatingNavProps {
  currentArchetype: string;
  onSelectArchetype: (archetype: string) => void;
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
  onToggleSpacingOverlay: () => void;
  isSpacingActive: boolean;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  currentArchetype,
  onSelectArchetype,
  onOpenDownload,
  onOpenOrder,
  onOpenVault,
  onToggleSpacingOverlay,
  isSpacingActive
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(soundEngine.getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) soundEngine.playClick(500);
  };

  return (
    <header className={`floating-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Mark */}
        <a href="#hero-intro" className="nav-brand" onClick={() => soundEngine.playClick(600)}>
          <span className="brand-logo-text">STUDIO OS</span>
          <span className="brand-badge-v">v2.0</span>
        </a>

        {/* Center Live Telemetry (Desktop Only) */}
        <div className="nav-telemetry">
          <span className="tele-pulse" />
          <span>[9 SYSTEMS ACTIVE // LENIS SMOOTH // 60 FPS]</span>
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`btn-icon-nav ${!isMuted ? 'active-glow' : ''}`}
            title="Вкл/Выкл звуковые эффекты"
            aria-label="Звук"
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>

          {/* Spacing Radar Toggle */}
          <button
            onClick={onToggleSpacingOverlay}
            className={`btn-icon-nav ${isSpacingActive ? 'active-glow' : ''}`}
            title="Включить Spacing Overlay радар отступов"
            aria-label="Отступы"
          >
            <Eye size={17} />
          </button>

          {/* Asset Vault Upload (Desktop) */}
          <button
            onClick={onOpenVault}
            className="btn-studio-secondary nav-btn-desktop"
          >
            <FolderDown size={15} />
            <span>Ассеты</span>
          </button>

          {/* Download System Button */}
          <button 
            onClick={onOpenDownload}
            className="btn-studio-secondary nav-btn-desktop"
          >
            <Download size={15} />
            <span>Скачать</span>
          </button>

          {/* Order Project Button */}
          <button 
            onClick={onOpenOrder}
            className="btn-studio-primary nav-btn-cta"
          >
            <Sparkles size={15} />
            <span>Заказать сайт</span>
          </button>
        </div>
      </div>

      <style>{`
        .floating-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 18px clamp(16px, 4vw, 36px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-scrolled {
          padding: 12px clamp(16px, 4vw, 36px);
          background: rgba(6, 7, 10, 0.88);
          backdrop-filter: blur(20px);
          border-bottom: var(--border-width) solid var(--border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
        }
        .nav-container {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-logo-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.1rem, 1rem + 0.4vw, 1.35rem);
          color: var(--accent);
          letter-spacing: 0.12em;
          text-shadow: 0 0 25px var(--accent-glow);
        }
        .brand-badge-v {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 2px 6px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .nav-telemetry {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 6px 14px;
          border-radius: 20px;
        }
        .tele-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 8px #00ff88;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 980px) {
          .nav-telemetry { display: none; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-icon-nav {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-icon-nav:hover, .btn-icon-nav.active-glow {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .nav-btn-desktop {
          padding: 8px 16px;
          min-height: 44px;
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .nav-btn-desktop { display: none; }
        }
        .nav-btn-cta {
          padding: 8px 18px;
          min-height: 44px;
          font-size: 0.82rem;
        }
      `}</style>
    </header>
  );
};
