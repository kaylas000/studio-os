// showcase-site/src/components/AntiSlopSuite.tsx
import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, RefreshCw, Download, Sparkles, Sliders, Type, Palette, Layout, ShieldCheck, ArrowRight, Wand2 } from 'lucide-react';
import { ClicheDetector } from '@library/02-anti-slop/ClicheDetector';
import { GradientSlopDetector } from '@library/02-anti-slop/GradientSlopDetector';
import { ConstraintInjector, CreativeConstraint } from '@library/02-anti-slop/ConstraintInjector';
import { soundEngine } from '../audio/WebAudioEngine';

interface AntiSlopProps {
  onDownload: () => void;
  onOpenOrder: () => void;
}

export const AntiSlopSuite: React.FC<AntiSlopProps> = ({ onDownload, onOpenOrder }) => {
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

  // Font Slop Score calculation (Guide 2, Module 5.2)
  const overusedFonts = ['Inter', 'Poppins', 'Montserrat', 'Roboto', 'Open Sans', 'Lato', 'DM Sans', 'Space Grotesk'];
  const fontRisk = (overusedFonts.includes(headingFont) ? 30 : 0) + (headingFont === bodyFont ? 20 : 0);
  const fontScore = Math.max(0, 100 - fontRisk);

  // Weighted Overall Originality Score (Guide 2, Module 6)
  const gradientScore = gradientCheck.isSlop ? 30 : 100;
  const layoutScore = 92;
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

  const handleApplyRewriteSuggestion = () => {
    soundEngine.playCinematicImpact();
    setInputText('За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Среднее время ответа сократилось с 420мс до 68мс (экономия 450,000 ₽/мес).');
  };

  return (
    <section className="section" id="anti-slop">
      <div className="container">
        <div className="editorial-section-tag">
          <ShieldAlert size={14} />
          <span>[SYSTEM 02 // АНТИ-СЛОП СИСТЕМА ДЛЯ ВЕБ-СТУДИИ]</span>
        </div>

        <h2 className="section-hero-title">ВАЛИДАТОР АНТИ-СЛОП СИСТЕМЫ</h2>
        <p className="section-hero-desc">
          Автоматические и ручные фильтры не пропускают усредненный AI-слоп: клише в копирайтинге, 
          заезженные градиенты по Delta-E формуле, дефолтные шрифтовые пары и шаблонные симметричные сетки.
        </p>

        {/* Master Originality Dashboard (Guide 2, Module 12) */}
        <div className="slop-master-card">
          <div className="slop-dial-zone">
            <div className="dial-circle-outer" style={{ borderColor: verdict.color }}>
              <span className="dial-value" style={{ color: verdict.color }}>{overallOriginalityScore}</span>
              <span className="dial-caption">ORIGINALITY SCORE</span>
            </div>

            <div className="verdict-banner-box" style={{ borderColor: verdict.color }}>
              <span className="v-emoji">{verdict.emoji}</span>
              <span className="v-text" style={{ color: verdict.color }}>{verdict.text}</span>
            </div>
          </div>

          {/* 4 Score Breakdown Metric Bars */}
          <div className="slop-breakdown-matrix">
            <div className="matrix-cell">
              <div className="mc-head">
                <span>✍️ Копирайтинг (NLP)</span>
                <strong style={{ color: textAnalysis.score >= 75 ? '#00ff88' : '#ff5555' }}>{textAnalysis.score} / 100</strong>
              </div>
              <div className="mc-track">
                <div className="mc-fill" style={{ width: `${textAnalysis.score}%`, background: textAnalysis.score >= 75 ? '#00ff88' : '#ff5555' }} />
              </div>
            </div>

            <div className="matrix-cell">
              <div className="mc-head">
                <span>🎨 Палитра (Delta-E)</span>
                <strong style={{ color: !gradientCheck.isSlop ? '#00ff88' : '#ff5555' }}>{gradientScore} / 100</strong>
              </div>
              <div className="mc-track">
                <div className="mc-fill" style={{ width: `${gradientScore}%`, background: !gradientCheck.isSlop ? '#00ff88' : '#ff5555' }} />
              </div>
            </div>

            <div className="matrix-cell">
              <div className="mc-head">
                <span>🔤 Шрифтовые пары</span>
                <strong style={{ color: fontScore >= 70 ? '#00ff88' : '#ffaa00' }}>{fontScore} / 100</strong>
              </div>
              <div className="mc-track">
                <div className="mc-fill" style={{ width: `${fontScore}%`, background: fontScore >= 70 ? '#00ff88' : '#ffaa00' }} />
              </div>
            </div>

            <div className="matrix-cell">
              <div className="mc-head">
                <span>📐 Layout Асимметрия</span>
                <strong style={{ color: '#00ff88' }}>{layoutScore} / 100</strong>
              </div>
              <div className="mc-track">
                <div className="mc-fill" style={{ width: `${layoutScore}%`, background: '#00ff88' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 2 Deep Working Workstations */}
        <div className="slop-workstations-grid">
          {/* Workstation 1: Live NLP Cliche Scanner */}
          <div className="workstation-card">
            <div className="ws-card-header">
              <div>
                <span className="ws-code">[MOD.01 // NLP CLICHE SCANNER]</span>
                <h3>Живой аудит текста на AI-клише</h3>
              </div>
              <span className={`status-tag ${textAnalysis.score >= 75 ? 'ok' : 'fail'}`}>
                {textAnalysis.score >= 75 ? 'PASS ≥ 75' : 'FAIL (< 75)'}
              </span>
            </div>

            <textarea 
              className="ws-textarea"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              rows={4}
              placeholder="Введите или вставьте текст для проверки на AI-клише..."
            />

            {/* Found Penalties & Rewrite Suggester */}
            <div className="penalties-results-box">
              <div className="pr-header">
                <span>Найденные AI-маркеры ({textAnalysis.issues.length}):</span>
                {textAnalysis.issues.length > 0 && (
                  <button className="btn-auto-rewrite" onClick={handleApplyRewriteSuggestion}>
                    <Wand2 size={13} />
                    <span>Применить Fact-First рерайт</span>
                  </button>
                )}
              </div>

              {textAnalysis.issues.length > 0 ? (
                <div className="penalties-chips-list">
                  {textAnalysis.issues.map((issue, idx) => (
                    <div key={idx} className="penalty-chip-item">
                      <AlertTriangle size={13} />
                      <span className="p-text">"{issue.phrase}"</span>
                      <span className="p-minus">-{issue.penalty} pts</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="zero-violations-status">
                  <CheckCircle2 size={16} color="#00ff88" />
                  <span>Текст чист от клише, абстракций и шаблонных конструкций</span>
                </div>
              )}
            </div>

            {/* Quick Test Presets */}
            <div className="presets-row">
              <span className="pr-lbl">Быстрый выбор:</span>
              <button 
                className="btn-preset-chip"
                onClick={() => {
                  soundEngine.playClick(320);
                  setInputText('В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения для вашего бизнеса. Мы не просто создаём сайты, а воплощаем ваши идеи в жизнь.');
                }}
              >
                Типичный AI-Slop (Сломан)
              </button>
              <button 
                className="btn-preset-chip"
                onClick={() => {
                  soundEngine.playClick(480);
                  setInputText('За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Среднее время ответа сократилось с 420мс до 68мс с гарантией по договору.');
                }}
              >
                Fact-First (Оригинал)
              </button>
            </div>
          </div>

          {/* Workstation 2: Delta-E Gradient Slop & Constraint Injector */}
          <div className="workstation-card">
            <div className="ws-card-header">
              <div>
                <span className="ws-code">[MOD.02 // DELTA-E GRADIENT DETECTOR]</span>
                <h3>Контроль градиентов и палитр</h3>
              </div>
              <span className={`status-tag ${!gradientCheck.isSlop ? 'ok' : 'fail'}`}>
                {gradientCheck.isSlop ? 'AI GRADIENT' : 'ORIGINAL'}
              </span>
            </div>

            {/* Live Gradient Preview Display */}
            <div 
              className="gradient-display-canvas"
              style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
            >
              <span>{color1} ➔ {color2}</span>
            </div>

            <div className="color-pickers-bar">
              <label className="picker-field">
                <span>Color 1:</span>
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
                <code>{color1}</code>
              </label>
              <label className="picker-field">
                <span>Color 2:</span>
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
                <code>{color2}</code>
              </label>
            </div>

            {/* Quick Gradient Samples */}
            <div className="presets-row">
              <span className="pr-lbl">Тест палитр:</span>
              <button 
                className="btn-preset-chip"
                onClick={() => { soundEngine.playClick(320); setColor1('#667eea'); setColor2('#764ba2'); }}
              >
                AI Purple (#667eea)
              </button>
              <button 
                className="btn-preset-chip"
                onClick={() => { soundEngine.playClick(340); setColor1('#f093fb'); setColor2('#f5576c'); }}
              >
                AI Pink (#f093fb)
              </button>
              <button 
                className="btn-preset-chip"
                onClick={() => { soundEngine.playClick(500); setColor1('#d4af37'); setColor2('#050508'); }}
              >
                Luxury Gold (#d4af37)
              </button>
            </div>

            {/* Creative Constraint Injector Widget (Guide 2, Module 11.2) */}
            <div className="constraint-injector-box">
              <div className="ci-box-head">
                <span>🎯 Принудительные ограничения (Constraint Injector):</span>
                <button onClick={handleRegenerateConstraints} title="Сгенерировать новые ограничения">
                  <RefreshCw size={13} />
                </button>
              </div>
              <div className="ci-items-list">
                {constraints.map((c, i) => (
                  <div key={i} className="ci-row">
                    <strong>[{c.category.toUpperCase()}]:</strong> {c.rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Master Action Bar */}
        <div className="slop-action-footer-bar">
          <button className="btn-studio-secondary" onClick={onDownload}>
            <Download size={16} />
            <span>Скачать модуль Анти-слоп (ZIP)</span>
          </button>

          <button className="btn-studio-primary" onClick={onOpenOrder}>
            <Sparkles size={16} />
            <span>Заказать сайт с гарантией Анти-слоп &gt; 85</span>
          </button>
        </div>
      </div>

      <style>{`
        .slop-master-card {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(24px, 4vw, 44px);
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: clamp(24px, 4vw, 48px);
          align-items: center;
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(20px);
          margin-bottom: 28px;
        }
        @media (max-width: 900px) {
          .slop-master-card { grid-template-columns: 1fr; }
        }
        .slop-dial-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .dial-circle-outer {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid var(--accent);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          box-shadow: 0 0 35px rgba(0,0,0,0.85);
        }
        .dial-value {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1;
        }
        .dial-caption {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .verdict-banner-box {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid;
          background: var(--bg-primary);
          text-align: center;
        }
        .slop-breakdown-matrix {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .matrix-cell {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }
        .mc-head {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          margin-bottom: 8px;
        }
        .mc-track {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .mc-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .slop-workstations-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        @media (max-width: 960px) {
          .slop-workstations-grid { grid-template-columns: 1fr; }
        }
        .workstation-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(20px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
        }
        .ws-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .ws-code {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent);
          display: block;
          margin-bottom: 4px;
        }
        .ws-card-header h3 {
          font-size: 1.15rem;
        }
        .status-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .status-tag.ok { background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.4); }
        .status-tag.fail { background: rgba(255, 60, 60, 0.15); color: #ff5555; border: 1px solid rgba(255, 60, 60, 0.4); }
        
        .ws-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 14px;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.6;
          resize: vertical;
        }
        .ws-textarea:focus { border-color: var(--accent); }
        
        .penalties-results-box {
          background: var(--bg-primary);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 14px;
        }
        .pr-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 6px;
        }
        .btn-auto-rewrite {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 8px;
          background: rgba(0, 255, 136, 0.15);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.35);
          border-radius: 4px;
          font-size: 0.72rem;
          cursor: pointer;
        }
        .penalties-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .penalty-chip-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 60, 60, 0.1);
          color: #ff6666;
          border: 1px solid rgba(255, 60, 60, 0.25);
          border-radius: 4px;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }
        .p-minus { color: #ffaa00; font-weight: bold; }
        .zero-violations-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #00ff88;
        }
        .presets-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }
        .btn-preset-chip {
          padding: 5px 10px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-preset-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .gradient-display-canvas {
          height: 100px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }
        .color-pickers-bar {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .picker-field {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .picker-field input[type="color"] {
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: none;
        }
        .constraint-injector-box {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px;
        }
        .ci-box-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .ci-box-head button { color: var(--accent); cursor: pointer; }
        .ci-items-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ci-row {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .ci-row strong {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .slop-action-footer-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 32px);
        }
      `}</style>
    </section>
  );
};
