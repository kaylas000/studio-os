// showcase-site/src/components/FloatingNav.tsx
import React, { useState, useEffect } from 'react';
import { Download, Sparkles, FolderDown, Cpu, Layers, Eye } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`floating-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-brand">
          <div className="brand-badge">STUDIO OS</div>
          <span className="brand-version">v2.0</span>
        </div>

        {/* Quick System Links */}
        <nav className="nav-links">
          <a href="#hero-intro">01. 3D Интро</a>
          <a href="#animations">02. Анимации</a>
          <a href="#anti-slop">03. Анти-слоп</a>
          <a href="#archetypes">04. Архетипы</a>
          <a href="#mobile">06. Мобильность</a>
          <a href="#seo">07. SEO</a>
          <a href="#vault-section">08. Хранилище</a>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Spacing Overlay Toggle */}
          <button
            onClick={onToggleSpacingOverlay}
            className={`btn-icon-pill ${isSpacingActive ? 'active' : ''}`}
            title="Включить радар отступов Spacing Overlay"
          >
            <Eye size={15} />
            <span>{isSpacingActive ? 'Радар: ON' : 'Отступы'}</span>
          </button>

          {/* Asset Vault Upload */}
          <button
            onClick={onOpenVault}
            className="btn-icon-pill"
            title="Загрузить ассеты с ПК в библиотеку"
          >
            <FolderDown size={15} />
            <span>Загрузить ассет</span>
          </button>

          {/* Download System Button */}
          <button 
            onClick={onOpenDownload}
            className="btn-studio-secondary btn-sm"
          >
            <Download size={15} />
            <span>Скачать систему</span>
          </button>

          {/* Order Project Button */}
          <button 
            onClick={onOpenOrder}
            className="btn-studio-primary btn-sm"
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
          padding: 16px 24px;
          transition: all 0.3s ease;
        }
        .nav-scrolled {
          padding: 10px 24px;
          background: rgba(10, 10, 14, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: var(--border-width) solid var(--border);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .brand-badge {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--accent);
          letter-spacing: 0.1em;
        }
        .brand-version {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 2px 6px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .nav-links a {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 1100px) {
          .nav-links { display: none; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-icon-pill:hover, .btn-icon-pill.active {
          border-color: var(--accent);
          color: var(--accent);
        }
        .btn-sm {
          padding: 8px 16px;
          font-size: 0.82rem;
          min-height: 38px;
        }
      `}</style>
    </header>
  );
};
