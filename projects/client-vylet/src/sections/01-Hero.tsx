import { lazy } from 'react';
import { HERO } from '../content/copy';
import { FLEET, AREAS } from '../content/catalog';
import { NumberTicker } from '../components/NumberTicker';
const BoomRig = lazy(() => import('../cinema/BoomRig').then((m) => ({ default: m.BoomRig })));
import { scrollToId } from '../engine/useMotion';
import { MotionGuard } from '@library/01-animations/MotionGuard';
import { Suspense } from 'react';

export function Hero() {
  const free = FLEET.reduce((sum, u) => sum + u.available, 0);
  const nearest = AREAS[0];

  const budget = MotionGuard.budget();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {budget.allowWebGL && budget.tier !== 'static' ? (
        <Suspense fallback={null}>
          <BoomRig />
        </Suspense>
      ) : null}
      <div className="wrap grid9">
        <div className="hero__copy">
          <p className="kicker">{HERO.kicker}</p>
          <h1 id="hero-title" data-reveal>
            {HERO.h1}
          </h1>
          <p className="lede" data-reveal>
            {HERO.lede}
          </p>
          <div className="row-16" data-reveal>
            <button type="button" className="btn" onClick={() => scrollToId('order')}>
              {HERO.ctaPrimary}
            </button>
            <button type="button" className="btn btn--outline" onClick={() => scrollToId('fleet')}>
              {HERO.ctaSecondary} · {FLEET.length} моделей
            </button>
          </div>

          <div className="stats" data-reveal>
            {HERO.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <b className="stat__value">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </b>
                <span className="stat__label">{stat.label}</span>
                <span className="stat__note mono">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__aside" data-reveal>
          <div className="panel panel--glow scanlines">
            <p className="kicker">Парк сейчас</p>
            <p className="total__sum mono" style={{ marginTop: 'var(--space-16)' }}>
              <NumberTicker value={free} /> <span style={{ fontSize: 'var(--fs-sm)' }}>свободных единиц</span>
            </p>
            <dl className="total__rows" style={{ marginTop: 'var(--space-16)' }}>
              <div className="total__row">
                <dt>Ближайшее окно</dt>
                <dd>сегодня 06:00</dd>
              </div>
              <div className="total__row">
                <dt>Подача</dt>
                <dd>{nearest.eta}</dd>
              </div>
              <div className="total__row">
                <dt>Резерв после расчёта</dt>
                <dd>40 мин</dd>
              </div>
            </dl>
            <a className="btn" href="tel:+74980001124" style={{ marginTop: 'var(--space-24)', width: '100%' }}>
              +7 498 000-11-24
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
