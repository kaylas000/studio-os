// showcase-site/src/components/OrderModal.tsx
import React, { useState } from 'react';
import { Sparkles, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../audio/WebAudioEngine';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    clientContact: '',
    archetype: 'luxury-noir',
    hasHollywoodIntro: true,
    animationLevel: 'cinematic',
    pageCount: 3,
    dislikedColors: 'Фиолетовый AI-градиент, дефолтный Inter',
    targetMetrics: 'Увеличение конверсии в заявку до 4.8%'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const calculateEstimate = () => {
    let price = 120000;
    if (formData.hasHollywoodIntro) price += 45000;
    if (formData.animationLevel === 'cinematic') price += 50000;
    price += (formData.pageCount - 1) * 25000;
    return `${price.toLocaleString('ru-RU')} ₽`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playCinematicImpact();
    setIsSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="studio-modal-overlay" onClick={onClose}>
      <div className="studio-modal" onClick={e => e.stopPropagation()}>
        <div className="studio-modal__header">
          <div>
            <h2>⚡ Конфигуратор проекта и Заказ сайта</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Разработка сайта на базе 9 монолитных стандартов качества STUDIO OS
            </p>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {isSubmitted ? (
          <div className="order-success-box">
            <div className="success-icon">✓</div>
            <h3>Заявка и Brand DNA успешно приняты!</h3>
            <p>
              ИИ-агент STUDIO OS зарезервировал проект <strong>{formData.projectName || 'Новый Проект'}</strong> в монорепозитории.
              Арт-директор свяжется с вами в течение 15 минут для согласования интерактивного прототипа.
            </p>
            <div className="summary-pill">
              Архетип: <strong>{formData.archetype}</strong> • Оценка: <strong>{calculateEstimate()}</strong>
            </div>
            <button 
              className="btn-studio-primary" 
              onClick={onClose} 
              style={{ marginTop: '20px', width: 'auto' }}
            >
              Вернуться к витрине студии
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Название бренда / компании *</label>
                <input
                  type="text"
                  required
                  placeholder="напр. Aurum Luxury Goods"
                  value={formData.projectName}
                  onChange={e => setFormData({ ...formData, projectName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Telegram / Email для связи *</label>
                <input
                  type="text"
                  required
                  placeholder="@telegram_handle или name@company.com"
                  value={formData.clientContact}
                  onChange={e => setFormData({ ...formData, clientContact: e.target.value })}
                />
              </div>

              <div className="form-group full-width">
                <label>Базовый визуальный архетип (Система 07)</label>
                <div className="archetype-select-row">
                  {[
                    { id: 'luxury-noir', name: 'Luxury Noir' },
                    { id: 'neo-brutalism', name: 'Neo-Brutalism' },
                    { id: 'cyber-tech', name: 'Cyber-Tech' },
                    { id: 'editorial-swiss', name: 'Editorial Swiss' },
                    { id: 'clean-minimal', name: 'Clean Minimal' }
                  ].map(a => (
                    <button
                      type="button"
                      key={a.id}
                      className={`arch-btn ${formData.archetype === a.id ? 'active' : ''}`}
                      onClick={() => {
                        soundEngine.playClick(450);
                        setFormData({ ...formData, archetype: a.id });
                      }}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Голливудская 3D-заставка (Система 05)</label>
                <div className="checkbox-wrap">
                  <input
                    type="checkbox"
                    id="introCheck"
                    checked={formData.hasHollywoodIntro}
                    onChange={e => setFormData({ ...formData, hasHollywoodIntro: e.target.checked })}
                  />
                  <label htmlFor="introCheck">Интегрировать 3D Three.js интро</label>
                </div>
              </div>

              <div className="form-group">
                <label>Уровень кинематографичности анимаций</label>
                <select
                  value={formData.animationLevel}
                  onChange={e => setFormData({ ...formData, animationLevel: e.target.value })}
                >
                  <option value="subtle">Стандартный (плавные переходы)</option>
                  <option value="cinematic">Кино-продакшн (ScrollTrigger + Post-FX)</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Brand DNA Антипатии (какие цвета/приемы строго запрещены?)</label>
                <input
                  type="text"
                  placeholder="напр. Никаких фиолетовых градиентов, 3D-блобов и стоковых фото"
                  value={formData.dislikedColors}
                  onChange={e => setFormData({ ...formData, dislikedColors: e.target.value })}
                />
              </div>
            </div>

            {/* Price & Summary Box */}
            <div className="estimate-bar">
              <div>
                <span className="est-lbl">Предварительный расчет стоимости:</span>
                <div className="est-val">{calculateEstimate()}</div>
                <span className="est-terms"><ShieldCheck size={14} /> Включает все 9 стандартов, SEO, 60 FPS и мобильный адаптив</span>
              </div>
              <button type="submit" className="btn-studio-primary">
                <Send size={16} />
                <span>Отправить заявку</span>
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .form-group label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .form-group input, .form-group select {
          width: 100%;
          min-height: 44px;
          padding: 10px 14px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
        }
        .form-group input:focus, .form-group select:focus {
          border-color: var(--accent);
        }
        .archetype-select-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .arch-btn {
          padding: 8px 14px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .arch-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 44px;
        }
        .checkbox-wrap label {
          margin: 0;
          cursor: pointer;
        }
        .estimate-bar {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .est-lbl {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          display: block;
        }
        .est-val {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          color: var(--accent);
          font-weight: 800;
        }
        .est-terms {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .order-success-box {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #00ff88;
          color: #00ff88;
          background: rgba(0, 255, 136, 0.15);
          border: 2px solid #00ff88;
          font-size: 30px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .summary-pill {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 16px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
};
