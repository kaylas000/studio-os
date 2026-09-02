import { FOOTER } from '../content/copy';
import { FLEET } from '../content/catalog';
import { brandName } from '../content/brand';

export function SiteFooter() {
  const total = FLEET.reduce((s, u) => s + u.total, 0);
  return (
    <footer className="footer" id="contacts">
      <div className="wrap">
        <div className="footer__grid">
          <div className="stack-12">
            <p className="brand">
              {brandName} <i>спецтехника</i>
            </p>
            <p style={{ color: 'var(--studio-text-muted)', fontSize: 'var(--fs-sm)' }}>{FOOTER.legal}</p>
            <p style={{ color: 'var(--studio-text-muted)', fontSize: 'var(--fs-sm)' }}>{FOOTER.address}</p>
          </div>
          <nav className="stack-8" aria-label="Разделы">
            <p className="field__label">Техника</p>
            <a href="#fleet">парк {FLEET.length} моделей · {total} единиц</a>
            <a href="#services">услуги и работы</a>
            <a href="#calc">расчёт смены</a>
          </nav>
          <nav className="stack-8" aria-label="Документы">
            <p className="field__label">Порядок</p>
            <a href="#docs">допуски и ППР</a>
            <a href="#area">радиус выезда</a>
            <a href="#faq">вопросы</a>
          </nav>
          <div className="stack-8">
            <p className="field__label">Диспетчерская</p>
            <a href="tel:+74980001124" className="mono">+7 498 000-11-24</a>
            <a href="mailto:dispatch@vylet.example" className="mono">dispatch@vylet.example</a>
            <p style={{ color: 'var(--studio-text-muted)', fontSize: 'var(--fs-xs)' }}>{FOOTER.hours}</p>
          </div>
        </div>

        <p className="disclaimer">
          <span>{FOOTER.disclaimer}</span>
          <span>{FOOTER.dataNotice}</span>
        </p>
      </div>
    </footer>
  );
}
