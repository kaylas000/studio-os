// showcase-site/src/sections/06-MobileLabSection.tsx
import React, { useState } from 'react';
import { Smartphone, Tablet, CheckCircle, ShieldCheck, Download, Fingerprint } from 'lucide-react';

export const MobileLabSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [selectedDevice, setSelectedDevice] = useState({
    name: 'iPhone SE (375x667)',
    width: 340,
    hasNotch: false,
    reason: 'Самый маленький актуальный экран iOS'
  });

  const DEVICES = [
    { name: 'iPhone SE (375x667)', width: 340, hasNotch: false, reason: 'Ловит проблемы с обрезкой строк' },
    { name: 'iPhone 15 Pro (393x852)', width: 370, hasNotch: true, reason: 'Dynamic Island и safe-area' },
    { name: 'Galaxy Z Fold (717x512)', width: 440, hasNotch: false, reason: 'Широкий раскладной экран' },
    { name: 'iPad Mini (768x1024)', width: 500, hasNotch: false, reason: 'Планшетный портретный режим' }
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

        <div className="mobile-lab-grid">
          {/* Interactive Device Simulator Viewport */}
          <div className="device-simulator-area">
            <div className="device-switcher-bar">
              {DEVICES.map((d, i) => (
                <button
                  key={i}
                  className={`btn-device ${selectedDevice.name === d.name ? 'active' : ''}`}
                  onClick={() => setSelectedDevice(d)}
                >
                  <Smartphone size={14} />
                  <span>{d.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Hardware Simulated Frame */}
            <div className="phone-chassis" style={{ width: `${selectedDevice.width}px` }}>
              {selectedDevice.hasNotch && <div className="notch-pill" />}

              <div className="phone-screen-content">
                <div className="sim-header">
                  <span>9:41</span>
                  <span>STUDIO OS Mobile</span>
                  <span>100%</span>
                </div>

                <div className="sim-hero">
                  <span className="sim-badge">44px Touch Target</span>
                  <h4>Мобильный интерфейс</h4>
                  <p>Текст плавно масштабируется без скачков между 320px и 1440px.</p>

                  <div className="sim-buttons">
                    <button className="sim-btn-touch">
                      <Fingerprint size={14} />
                      <span>Тап-зона 48x48px</span>
                    </button>
                  </div>
                </div>

                <div className="sim-card">
                  <strong>Safe-Area Inset</strong>
                  <p>Кнопки не перекрываются Home Indicator.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Checklist Card */}
          <div className="mobile-specs-card">
            <h3>📱 Стандарты Mobile-Perfect студии</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Каждый сайт тестируется на отсутствие горизонтального скролла на 1px и удобство управления одной рукой.
            </p>

            <div className="specs-list">
              {[
                { title: 'Touch-Target >= 44px (Apple HIG & Material)', desc: 'Все кликабельные элементы удобны для большого пальца' },
                { title: 'Zero Horizontal Scroll', desc: 'Автоматический детектор ловит вылет элементов за границы экрана' },
                { title: 'iOS Safari Auto-Zoom Protection', desc: 'Размер шрифта инпутов строго >= 16px' },
                { title: 'Safe-Area-Inset (Dynamic Island & Notch)', desc: 'Фиксированные меню учитывают вырезы экрана' },
                { title: 'Playwright Viewport Sweep (30+ устройств)', desc: 'Автоматические скриншоты всех страниц в CI/CD' }
              ].map((spec, i) => (
                <div key={i} className="spec-row">
                  <CheckCircle size={18} color="#00ff88" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>{spec.title}</strong>
                    <p>{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать Mobile-Perfect систему (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .mobile-lab-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .mobile-lab-grid { grid-template-columns: 1fr; }
        }
        .device-simulator-area, .mobile-specs-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-specs-card {
          align-items: stretch;
        }
        .device-switcher-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .btn-device {
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
        .btn-device.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .phone-chassis {
          background: #000;
          border: 4px solid #333;
          border-radius: 36px;
          padding: 12px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
          position: relative;
          transition: width 0.3s ease;
        }
        .notch-pill {
          width: 90px;
          height: 18px;
          background: #111;
          border-radius: 12px;
          margin: 0 auto 8px;
        }
        .phone-screen-content {
          background: var(--bg-primary);
          border-radius: 26px;
          padding: 16px;
          color: var(--text-primary);
          min-height: 400px;
          overflow: hidden;
        }
        .sim-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .sim-hero {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .sim-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent);
        }
        .sim-hero h4 {
          font-size: 1rem;
          margin: 4px 0;
        }
        .sim-hero p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .sim-btn-touch {
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
        .sim-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          font-size: 0.75rem;
        }
        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 20px;
        }
        .spec-row {
          display: flex;
          gap: 12px;
          font-size: 0.85rem;
        }
        .spec-row p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
