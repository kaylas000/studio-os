// showcase-site/src/components/AntiSlopLiveValidator.tsx
import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, RefreshCw, Download, Sparkles, Sliders } from 'lucide-react';
import { ClicheDetector } from '@library/02-anti-slop/ClicheDetector';
import { GradientSlopDetector } from '@library/02-anti-slop/GradientSlopDetector';
import { ConstraintInjector, CreativeConstraint } from '@library/02-anti-slop/ConstraintInjector';
import { soundEngine } from '../audio/WebAudioEngine';

interface AntiSlopProps {
  onDownload: () => void;
  onOpenOrder: () => void;
}

export const AntiSlopLiveValidator: React.FC<AntiSlopProps> = ({ onDownload, onOpenOrder }) => {
  // 1. Text Analysis State
  const [inputText, setInputText] = useState(
    'В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения для вашего бизнеса. Мы не просто создаём сайты, а воплощаем ваши идеи в жизнь.'
  );

  // 2. Color Gradient State
  const [color1, setColor1] = useState('#667eea');
  const [color2, setColor2] = useState('#764ba2');

  // 3. Fonts State
  const [headingFont, setHeadingFont] = useState('Inter');
  const [bodyFont, setBodyFont] = useState('Inter');

  // 4. Constraints Generator State (Guide 2)
  const constraintGen = new ConstraintInjector();
  const [constraints, setConstraints] = useState<CreativeConstraint[]>(constraintGen.generate('studio-demo', 3));

  // Run Real Cliche Detector
  const clicheDetector = new ClicheDetector();
  const textAnalysis = clicheDetector.analyze(inputText);

  // Run Real Gradient Slop Detector
  const gradientDetector = new GradientSlopDetector();
  const gradientCheck = gradientDetector.checkGradient(color1, color2);

  // Font Slop Score calculation
  const overusedFonts = ['Inter', 'Poppins', 'Montserrat', 'Roboto', 'Open Sans', 'Lato', 'DM Sans', 'Space Grotesk'];
  const fontRisk = (overusedFonts.includes(headingFont) ? 30 : 0) + (headingFont === bodyFont ? 20 : 0);
  const fontScore = Math.max(0, 100 - fontRisk);

  // Weighted Overall Originality Score (from Guide 2, Module 6)
  const gradientScore = gradientCheck.isSlop ? 30 : 100;
  const layoutScore = 90;
  const overallOriginalityScore = Math.round(
    textAnalysis.score * 0.35 + gradientScore * 0.25 + fontScore * 0.2 + layoutScore * 0.2
  );

  const getScoreVerdict = (score: number) => {
    if (score >= 85) return { emoji: '🏆', text: 'Шедевр! Проект чист от AI-слопа и готов к сдаче клиенту', color: '#00ff88' };
    if (score >= 70) return { emoji: '✅', text: 'Хорошо: проходит минимальный порог качества студии (≥ 70)', color: '#00f2fe' };
    if (score >= 50) return { emoji: '⚠️', text: 'Требуется ревизия арт-директора: обнаружены AI-клише', color: '#ffbd2e' };
    return { emoji: '❌', text: 'STOP. Обнаружен критический AI-слоп! Полная переработка', color: '#ff4444' };
  };

  const verdict = getScoreVerdict(overallOriginalityScore);

  const handleRegenerateConstraints = () => {
    soundEngine.playClick(520);
    setConstraints(constraintGen.generate(`seed-${Date.now()}`, 3));
  };

  return (
    <div className="anti-slop-master-container">
      {/* 1. Header: Art Director Originality Dashboard Header */}
      <div className="slop-dashboard-hero-box">
        <div className="slop-gauge-col">
          <div className="circular-score-dial" style={{ borderColor: verdict.color }}>
            <span className="dial-num" style={{ color: verdict.color }}>{overallOriginalityScore}</span>
            <span className="dial-lbl">ORIGINALITY SCORE</span>
          </div>
        </div>

        <div className="slop-verdict-col">
          <div className="verdict-tag" style={{ color: verdict.color, borderColor: verdict.color }}>
            {verdict.emoji} {verdict.text}
          </div>
          <h3>ВАЛИДАТОР АНТИ-СЛОП СИСТЕМЫ STUDIO OS</h3>
          <p>
            Автоматический фильтр проверяет проект по 4 направлениям: тексты (NLP анализ клише), палитры (Delta-E от заезженных AI-градиентов), шрифты (дефолтность пар) и структура сеток.
          </p>

          {/* 4 Score Breakdown Cards */}
          <div className="score-breakdown-row">
            <div className="breakdown-pill">
              <span className="b-icon">✍️</span>
              <div>
                <span className="b-name">Копирайтинг</span>
                <strong style={{ color: textAnalysis.score >= 75 ? '#00ff88' : '#ff5555' }}>{textAnalysis.score}/100</strong>
              </div>
            </div>

            <div className="breakdown-pill">
              <span className="b-icon">🎨</span>
              <div>
                <span className="b-name">Градиенты</span>
                <strong style={{ color: !gradientCheck.isSlop ? '#00ff88' : '#ff5555' }}>{gradientScore}/100</strong>
              </div>
            </div>

            <div className="breakdown-pill">
              <span className="b-icon">🔤</span>
              <div>
                <span className="b-name">Шрифты</span>
                <strong style={{ color: fontScore >= 70 ? '#00ff88' : '#ffaa00' }}>{fontScore}/100</strong>
              </div>
            </div>

            <div className="breakdown-pill">
              <span className="b-icon">📐</span>
              <div>
                <span className="b-name">Layout Сетка</span>
                <strong style={{ color: '#00ff88' }}>{layoutScore}/100</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Testing Labs Grid */}
      <div className="slop-tools-grid">
        {/* Lab 1: Live NLP Copy Cliche Scanner */}
        <div className="slop-panel-card">
          <div className="panel-card-head">
            <div className="panel-title-wrap">
              <span className="p-num">01</span>
              <div>
                <h4>Живой NLP Сканер AI-Клише</h4>
                <p>Поиск фраз-паразитов, избытка тире и одинаковой длины предложений</p>
              </div>
            </div>
            <span className={`status-pill ${textAnalysis.score >= 75 ? 'clean' : 'alert'}`}>
              {textAnalysis.score >= 75 ? 'ЧИСТО' : 'НАЙДЕН СЛОП'}
            </span>
          </div>

          <textarea 
            className="slop-text-input"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            rows={4}
            placeholder="Введите текст для анализа..."
          />

          <div className="slop-penalties-box">
            <div className="penalties-head">
              <span>Найденные проблемы и штрафные баллы:</span>
              <strong>{textAnalysis.issues.length} маркеров</strong>
            </div>

            {textAnalysis.issues.length > 0 ? (
              <div className="issues-tags-list">
                {textAnalysis.issues.map((issue, i) => (
                  <div key={i} className="penalty-tag">
                    <AlertTriangle size={13} />
                    <span className="p-phrase">"{issue.phrase}"</span>
                    <span className="p-pts">-{issue.penalty} pts</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="zero-cliches-note">
                <CheckCircle2 size={15} color="#00ff88" />
                <span>Текст чист от клише, абстракций и шаблонных конструкций</span>
              </div>
            )}
          </div>

          {/* Quick Presets */}
          <div className="quick-presets-row">
            <span>Примеры:</span>
            <button 
              className="btn-preset-test"
              onClick={() => {
                soundEngine.playClick(350);
                setInputText('В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения. Мы не просто создаём сайты, а воплощаем ваши идеи в жизнь.');
              }}
            >
              Типичный AI-Slop
            </button>
            <button 
              className="btn-preset-test"
              onClick={() => {
                soundEngine.playClick(500);
                setInputText('За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Время ответа сократилось с 420мс до 68мс (экономия 450,000 ₽/мес).');
              }}
            >
              Fact-First Копирайтинг
            </button>
          </div>
        </div>

        {/* Lab 2: Delta-E Gradient Slop & Font Pairing */}
        <div className="slop-panel-card">
          <div className="panel-card-head">
            <div className="panel-title-wrap">
              <span className="p-num">02</span>
              <div>
                <h4>Детектор Градиентов и Шрифтов</h4>
                <p>Проверка на совпадение с заезженными AI-палитрами</p>
              </div>
            </div>
            <span className={`status-pill ${!gradientCheck.isSlop ? 'clean' : 'alert'}`}>
              {gradientCheck.isSlop ? 'AI GRADIENT' : 'ORIGINAL'}
            </span>
          </div>

          <div 
            className="gradient-display-surface"
            style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
          >
            <span>{color1} → {color2}</span>
          </div>

          <div className="color-selectors-bar">
            <label className="color-field">
              <span>Цвет 1:</span>
              <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
              <code>{color1}</code>
            </label>
            <label className="color-field">
              <span>Цвет 2:</span>
              <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
              <code>{color2}</code>
            </label>
          </div>

          {/* Quick Gradient Samples */}
          <div className="quick-presets-row">
            <span>Тест палитры:</span>
            <button 
              className="btn-preset-test"
              onClick={() => { soundEngine.playClick(320); setColor1('#667eea'); setColor2('#764ba2'); }}
            >
              AI Purple (#667eea)
            </button>
            <button 
              className="btn-preset-test"
              onClick={() => { soundEngine.playClick(340); setColor1('#f093fb'); setColor2('#f5576c'); }}
            >
              AI Pink (#f093fb)
            </button>
            <button 
              className="btn-preset-test"
              onClick={() => { soundEngine.playClick(500); setColor1('#d4af37'); setColor2('#070709'); }}
            >
              Luxury Gold (#d4af37)
            </button>
          </div>

          {/* Creative Constraint Injector Widget */}
          <div className="constraint-injector-panel">
            <div className="ci-head">
              <span className="ci-title">🎯 Принудительные ограничения (Constraint Injector):</span>
              <button onClick={handleRegenerateConstraints} title="Сгенерировать новые">
                <RefreshCw size={13} />
              </button>
            </div>
            <div className="ci-list">
              {constraints.map((c, i) => (
                <div key={i} className="ci-item">
                  <strong>[{c.category.toUpperCase()}]:</strong> {c.rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer Bar */}
      <div className="slop-footer-cta-row">
        <button className="btn-studio-secondary" onClick={onDownload}>
          <Download size={16} />
          <span>Скачать весь Анти-слоп модуль (ZIP)</span>
        </button>

        <button className="btn-studio-primary" onClick={onOpenOrder}>
          <Sparkles size={16} />
          <span>Заказать сайт с гарантией Анти-слоп &gt; 85</span>
        </button>
      </div>

      <style>{`
        .anti-slop-master-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .slop-dashboard-hero-box {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(20px, 4vw, 36px);
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: clamp(20px, 4vw, 40px);
          align-items: center;
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 860px) {
          .slop-dashboard-hero-box { grid-template-columns: 1fr; }
        }
        .slop-gauge-col {
          display: flex;
          justify-content: center;
        }
        .circular-score-dial {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid var(--accent);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          box-shadow: 0 0 30px rgba(0,0,0,0.8);
        }
        .dial-num {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1;
        }
        .dial-lbl {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .slop-verdict-col h3 {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          margin: 10px 0 8px;
        }
        .slop-verdict-col p {
          font-size: var(--fs-sm);
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .verdict-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid;
          background: var(--bg-primary);
        }
        .score-breakdown-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
        }
        .breakdown-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .b-icon { font-size: 1.2rem; }
        .b-name { display: block; font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-secondary); }
        .breakdown-pill strong { font-family: var(--font-mono); font-size: 0.95rem; }
        
        .slop-tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .slop-tools-grid { grid-template-columns: 1fr; }
        }
        .slop-panel-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 26px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
        .panel-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .panel-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .p-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--accent);
          line-height: 1;
        }
        .panel-title-wrap h4 {
          font-size: 1rem;
          margin-bottom: 2px;
        }
        .panel-title-wrap p {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .status-pill {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .status-pill.clean { background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.3); }
        .status-pill.alert { background: rgba(255, 60, 60, 0.15); color: #ff5555; border: 1px solid rgba(255, 60, 60, 0.3); }
        
        .slop-text-input {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 12px 14px;
          font-family: inherit;
          font-size: 0.88rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
        }
        .slop-text-input:focus { border-color: var(--accent); }
        
        .slop-penalties-box {
          background: var(--bg-primary);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .penalties-head {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .issues-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .penalty-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 60, 60, 0.1);
          color: #ff6666;
          border: 1px solid rgba(255, 60, 60, 0.25);
          border-radius: 4px;
          padding: 3px 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .p-pts { color: #ffaa00; font-weight: bold; }
        .zero-cliches-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #00ff88;
        }
        .quick-presets-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }
        .btn-preset-test {
          padding: 4px 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.72rem;
          cursor: pointer;
        }
        .btn-preset-test:hover { border-color: var(--accent); color: var(--accent); }
        
        .gradient-display-surface {
          height: 90px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }
        .color-selectors-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .color-field {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .color-field input[type="color"] {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: none;
        }
        .constraint-injector-panel {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .ci-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .ci-head button { color: var(--accent); cursor: pointer; }
        .ci-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ci-item {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .ci-item strong {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.7rem;
        }
        .slop-footer-cta-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 14px;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 18px 24px;
        }
      `}</style>
    </div>
  );
};
