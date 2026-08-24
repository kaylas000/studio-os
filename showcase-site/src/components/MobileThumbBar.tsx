// showcase-site/src/components/MobileThumbBar.tsx
import React, { useState } from 'react';
import { Palette, Download, Sparkles, FolderDown, Menu, X, Play, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface MobileThumbBarProps {
  currentArchetype: string;
  onSelectArchetype: (archetype: string) => void;
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
  onReplayIntro: () => void;
}

export const MobileThumbBar: React.FC<MobileThumbBarProps> = ({
  currentArchetype,
  onSelectArchetype,
  onOpenDownload,
  onOpenOrder,
  onOpenVault,
  onReplayIntro
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleArchetypeClick = (arch: string) => {
    soundEngine.playClick(440);
    onSelectArchetype(arch);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Fixed Bottom Thumb Bar for Mobile Viewports */}
      <nav className="mobile-thumb-bar">
        <div className="thumb-grid">
          <button 
            className="thumb-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Сменить архетип"
          >
            <Palette size={20} />
            <span>Архетипы</span>
          </button>

          <button 
            className="thumb-btn"
            onClick={onReplayIntro}
            aria-label="3D Интро"
          >
            <Play size={20} />
            <span>3D Интро</span>
          </button>

          <button 
            className="thumb-btn primary-cta"
            onClick={onOpenOrder}
            aria-label="Заказать сайт"
          >
            <Sparkles size={20} />
            <span>Заказать</span>
          </button>

          <button 
            className="thumb-btn"
            onClick={onOpenDownload}
            aria-label="Скачать"
          >
            <Download size={20} />
            <span>Скачать</span>
          </button>

          <button 
            className="thumb-btn"
            onClick={onOpenVault}
            aria-label="Хранилище"
          >
            <FolderDown size={20} />
            <span>Ассеты</span>
          </button>
        </div>
      </nav>

      {/* Swipeable Drawer Sheet for Archetypes */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="drawer-sheet" onClick={e => e.stopPropagation()}>
            <div className="drawer-handle" />

            <div className="drawer-header">
              <h3>🎨 Выбор Дизайн-Архетипа</h3>
              <button onClick={() => setIsDrawerOpen(false)} className="close-drawer">✕</button>
            </div>

            <div className="drawer-archetypes-list">
              {[
                { id: 'luxury-noir', name: 'Luxury Noir', desc: 'Кинематографичный люкс, черный + золото' },
                { id: 'neo-brutalism', name: 'Neo-Brutalism', desc: 'Сырой уличный контраст, четкие тени' },
                { id: 'cyber-tech', name: 'Cyber-Tech', desc: 'Инженерный неон, терминальные сетки' },
                { id: 'editorial-swiss', name: 'Editorial Swiss', desc: 'Швейцарская сетка, чистая типографика' },
                { id: 'clean-minimal', name: 'Clean Minimal', desc: 'Мягкий human-интерфейс, закругления' }
              ].map(a => (
                <button
                  key={a.id}
                  className={`drawer-arch-card ${currentArchetype === a.id ? 'active' : ''}`}
                  onClick={() => handleArchetypeClick(a.id)}
                >
                  <div>
                    <strong>{a.name}</strong>
                    <p>{a.desc}</p>
                  </div>
                  {currentArchetype === a.id && <span className="active-dot">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-thumb-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: rgba(8, 9, 12, 0.92);
          backdrop-filter: blur(18px);
          border-top: var(--border-width) solid var(--border);
          padding-bottom: env(safe-area-inset-bottom, 0px);
          box-shadow: 0 -10px 30px rgba(0,0,0,0.8);
        }
        @media (max-width: 860px) {
          .mobile-thumb-bar { display: block; }
        }
        .thumb-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          height: 60px;
          align-items: center;
        }
        .thumb-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          height: 100%;
          min-height: 48px;
          min-width: 48px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .thumb-btn:active {
          transform: scale(0.92);
        }
        .thumb-btn.primary-cta {
          color: #000;
          background: var(--accent);
          font-weight: bold;
          border-radius: 8px;
          margin: 4px;
          height: calc(100% - 8px);
        }
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          z-index: 100000;
          display: flex;
          align-items: flex-end;
        }
        .drawer-sheet {
          width: 100%;
          background: var(--bg-surface);
          border-top: var(--border-width) solid var(--border-strong);
          border-radius: 20px 20px 0 0;
          padding: 16px 20px calc(24px + env(safe-area-inset-bottom, 0px));
          max-height: 80vh;
          overflow-y: auto;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .drawer-handle {
          width: 40px;
          height: 4px;
          background: rgba(255,255,255,0.2);
          border-radius: 2px;
          margin: 0 auto 16px;
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .drawer-header h3 {
          font-size: 1.1rem;
        }
        .close-drawer {
          font-size: 20px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .drawer-archetypes-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .drawer-arch-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          text-align: left;
          color: var(--text-primary);
          cursor: pointer;
          min-height: 52px;
        }
        .drawer-arch-card.active {
          border-color: var(--accent);
          background: var(--bg-card);
        }
        .drawer-arch-card strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }
        .drawer-arch-card p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .active-dot {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--accent);
          font-weight: bold;
        }
      `}</style>
    </>
  );
};
