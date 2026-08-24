// showcase-site/src/sections/11-Footer.tsx
import React from 'react';
import { Sparkles, Download, FolderDown, Terminal, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownload,
  onOpenOrder,
  onOpenVault
}) => {
  return (
    <footer className="studio-footer-monolith">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <div className="footer-logo-title">STUDIO OS</div>
            <p className="footer-brand-desc">
              Саморазвивающаяся производственная операционная система веб-студии нового поколения.
              Монолитные стандарты качества, кинематографичные 3D-заставки и Zero-Bug гарантия.
            </p>
            <div className="footer-version-tag">Version 2.0.0 • Production Ready</div>
          </div>

          <div className="footer-links-col">
            <h4>9 Стандартов Студии</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero-intro">01. 3D Интро & Three.js</a></li>
              <li><a href="#animations">02. Кинематографичный скролл</a></li>
              <li><a href="#anti-slop">03. Анти-слоп защита</a></li>
              <li><a href="#spacing-radar">04. Контроль отступов</a></li>
              <li><a href="#mobile">05. Mobile-Perfect 48px</a></li>
              <li><a href="#seo">06. Сквозное SEO (Zod)</a></li>
              <li><a href="#archetypes">07. 5 Дизайн-архетипов</a></li>
              <li><a href="#copywriting">08. Инженерный копирайтинг</a></li>
              <li><a href="#zero-bug">09. Zero-Bug пирамида тестов</a></li>
            </ul>
          </div>

          <div className="footer-actions-col">
            <h4>Действия и Доступ</h4>
            <div className="footer-btns-group">
              <button 
                className="btn-studio-primary" 
                onClick={() => { soundEngine.playClick(600); onOpenOrder(); }} 
                style={{ width: '100%' }}
              >
                <Sparkles size={16} />
                <span>Заказать сайт</span>
              </button>
              <button 
                className="btn-studio-secondary" 
                onClick={() => { soundEngine.playClick(500); onOpenDownload(); }} 
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>Скачать системы (ZIP)</span>
              </button>
              <button 
                className="btn-studio-secondary" 
                onClick={() => { soundEngine.playClick(520); onOpenVault(); }} 
                style={{ width: '100%' }}
              >
                <FolderDown size={16} />
                <span>Загрузить ассеты с ПК</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© 2026 STUDIO OS • Все права защищены. Построено на стандартах Zero-Bug.</span>
          <div className="footer-badges-list">
            <span>60 FPS Certified</span>
            <span>WCAG 2.2 AAA</span>
            <span>100% Anti-Slop</span>
          </div>
        </div>
      </div>

      <style>{`
        .studio-footer-monolith {
          background: var(--bg-surface);
          border-top: var(--border-width) solid var(--border);
          padding: clamp(40px, 6vw, 70px) 0 30px;
          position: relative;
          z-index: 10;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: clamp(24px, 4vw, 48px);
          margin-bottom: 40px;
        }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr; gap: 30px; }
        }
        .footer-logo-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .footer-brand-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          max-width: 380px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .footer-version-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .footer-links-col h4, .footer-actions-col h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-primary);
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.08em;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-nav-list a {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-nav-list a:hover {
          color: var(--accent);
        }
        .footer-btns-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-bottom-row {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-badges-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-badges-list span {
          background: var(--bg-primary);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border);
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
};
