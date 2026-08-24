// showcase-site/src/sections/06-MobileLabSection.tsx
import React, { useState } from 'react';
import { Smartphone, CheckCircle, ShieldCheck, Download, Fingerprint } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

export const MobileLabSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [selectedDevice, setSelectedDevice] = useState({
    name: 'iPhone SE (375x667)',
    width: 320,
    hasNotch: false,
    reason: 'Самый маленький актуальный экран iOS'
  });

  const DEVICES = [
    { name: 'iPhone SE (375x667)', width: 320, hasNotch: false, reason: 'Ловит обрезку строк и вылеты' },
    { name: 'iPhone 15 Pro (393x852)', width: 360, hasNotch: true, reason: 'Dynamic Island и Safe-Area' },
    { name: 'Galaxy Z Fold (717x512)', width: 440, hasNotch: false, reason: 'Раскладной широкий экран' },
    { name: 'iPad Mini (768x1024)', width: 500, hasNotch: false, reason: 'Планшетный портрет' }
  ];

  return (
    <section className="section-block" id="mobile">
      <div className="container">
        <div className="section-tagline">
          <Smartphone size={14} />
          <span>Система 03: Тотальная мобильная адаптация (Mobile-Perfect)</span>
        </div>

        <h2 className="section-title">АДАПТАЦИЯ БЕЗ КОМПРОМИССОВ</h2>
        <p className="section-desc">
          Отказ от ручных брейкпоинтов в пользу fluid-типографики `clamp()`, гарантия touch target &gt;= 44x44px 
          и автоматический Playwright-прогон по матрице из 30+ реальных мобильных разрешений.
        </p>

        <div className="mobile-lab-layout-grid">
          {/* Interactive Hardware Simulated Frame */}
          <div className="device-simulator-col">
            <div className="device-selector-row">
              {DEVICES.map((d, i) => (
                <button
                  key={i}
                  className={`btn-device-tab ${selectedDevice.name === d.name ? 'active' : ''}`}
                  onClick={() => {
                    soundEngine.playClick(400 + i * 40);
                    setSelectedDevice(d);
                  }}
                >
                  <Smartphone size={13} />
                  <span>{d.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <div className="phone-mockup-frame" style={{ width: `${selectedDevice.width}px` }}>
              {selectedDevice.hasNotch && <div className="dynamic-island-bar" />}

              <div className="mockup-screen">
                <div className="mockup-status-bar">
                  <span>9:41</span>
                  <span>STUDIO OS Mobile</span>
                  <span>100%</span>
                </div>

                <div className="mockup-hero-card">
                  <span className="mock-badge">48px Touch Target</span>
                  <h4>Мобильный интерфейс</h4>
                  <p>Текст плавно масштабируется без скачков между 320px и 1440px.</p>

                  <div className="mockup-btn-group">
                    <button className="btn-touch-demo">
                      <Fingerprint size={14} />
                      <span>Тап-зона 48x48px</span>
                    </button>
                  </div>
                </div>

                <div className="mockup-safe-note">
                  <strong>Safe-Area Inset Handling</strong>
                  <p>Кнопки не перекрываются Home Indicator.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Standards & Triple-Tap Tool Card */}
          <div className="mobile-standards-col">
            <h3>📱 Стандарты Mobile-Perfect студии</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Каждый проект тестируется на отсутствие горизонтального скролла на 1px и удобство управления одной рукой.
            </p>

            <div className="specs-checklist">
              {[
                { title: 'Touch-Target >= 48px (Apple HIG & Material)', desc: 'Все кликабельные элементы удобны для большого пальца' },
                { title: 'Zero Horizontal Scroll', desc: 'Автоматический детектор ловит вылет элементов за границы экрана' },
                { title: 'iOS Safari Auto-Zoom Protection', desc: 'Размер шрифта инпутов строго >= 16px' },
                { title: 'Safe-Area-Inset (Dynamic Island & Notch)', desc: 'Фиксированные меню учитывают вырезы экрана' },
                { title: 'Playwright Viewport Sweep (30+ устройств)', desc: 'Автоматические скриншоты всех страниц в CI/CD' }
              ].map((spec, i) => (
                <div key={i} className="spec-item">
                  <CheckCircle size={17} color="#00ff88" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>{spec.title}</strong>
                    <p>{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="triple-tap-hint">
              <span>💡 СОВЕТ: Нажмите 3 раза подряд по экрану на телефоне, чтобы открыть Mobile Debug Overlay!</span>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать Mobile-Perfect систему (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .mobile-lab-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .mobile-lab-layout-grid { grid-template-columns: 1fr; }
        }
        .device-simulator-col, .mobile-standards-col {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-standards-col {
          align-items: stretch;
        }
        .device-selector-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .btn-device-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: 20px;
          cursor: pointer;
        }
        .btn-device-tab.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .phone-mockup-frame {
          background: #000;
          border: 4px solid #333;
          border-radius: 34px;
          padding: 10px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
          position: relative;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dynamic-island-bar {
          width: 80px;
          height: 16px;
          background: #111;
          border-radius: 10px;
          margin: 0 auto 8px;
        }
        .mockup-screen {
          background: var(--bg-primary);
          border-radius: 24px;
          padding: 14px;
          color: var(--text-primary);
          min-height: 380px;
          overflow: hidden;
        }
        .mockup-status-bar {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .mockup-hero-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .mock-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent);
        }
        .mockup-hero-card h4 {
          font-size: 0.95rem;
          margin: 4px 0;
        }
        .mockup-hero-card p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .btn-touch-demo {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 44px;
          padding: 8px 14px;
          background: var(--accent);
          color: #000;
          font-weight: bold;
          font-size: 0.75rem;
          border-radius: 6px;
        }
        .mockup-safe-note {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px;
          font-size: 0.72rem;
        }
        .specs-checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .spec-item {
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
        }
        .spec-item strong { display: block; font-size: 0.85rem; }
        .spec-item p { font-size: 0.75rem; color: var(--text-secondary); }
        .triple-tap-hint {
          padding: 10px 14px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};
