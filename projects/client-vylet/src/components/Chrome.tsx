// Верхняя навигация, мобильная панель действий и бегущая строка парка.
import { useEffect, useState } from 'react';
import { TICKER } from '../content/copy';
import { brandName } from '../content/brand';
import { scrollToId } from '../engine/useMotion';

const LINKS = [
  { id: 'fleet', label: 'Парк' },
  { id: 'services', label: 'Работы' },
  { id: 'calc', label: 'Смета' },
  { id: 'docs', label: 'Допуски' },
  { id: 'cases', label: 'Объекты' },
  { id: 'faq', label: 'Вопросы' }
];

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...TICKER, ...TICKER].map((item, i) => (
          <span className="ticker__item" key={`${item}-${i}`}>
            <i className="ticker__dot" />
            <b>{item.split(' · ')[0]}</b> {item.split(' · ').slice(1).join(' · ')}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TopNav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="top">
      <div className="wrap top__inner">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {brandName} <i>спецтехника · МО</i>
        </a>
        <nav className="nav" aria-label="Основные разделы">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToId(link.id); }}>
              {link.label}
            </a>
          ))}
        </nav>
        <button type="button" className="btn" onClick={() => scrollToId('order')}>
          Заявка
        </button>
      </div>
      <span
        className="mono"
        style={{ display: 'block', height: 'var(--space-2)', background: 'var(--studio-accent)', width: `${Math.round(progress * 100)}%`, transition: 'width 120ms linear' }}
        aria-hidden="true"
      />
    </header>
  );
}

export function MobileCta() {
  return (
    <div className="cta-bar" role="navigation" aria-label="Быстрые действия">
      <a href="tel:+74980001124">Позвонить</a>
      <button type="button" onClick={() => scrollToId('calc')}>Смета</button>
      <button type="button" onClick={() => scrollToId('order')}>Заявка</button>
    </div>
  );
}
