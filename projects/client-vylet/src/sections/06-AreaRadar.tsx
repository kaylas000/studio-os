import { AREAS } from '../content/catalog';
import { AREA_COPY } from '../content/copy';

const MAX = 130;

export function AreaRadar() {
  return (
    <section className="section" id="area" aria-labelledby="area-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{AREA_COPY.index} · логистика</p>
          <h2 id="area-title" data-reveal>
            {AREA_COPY.h2}
          </h2>
          <p className="lede" data-reveal>{AREA_COPY.lede}</p>
        </header>
        <p className="section-index mono">база: Одинцово, Транспортный пр-д 4</p>

        <div className="radar" style={{ gridColumn: '1 / -1', marginTop: 'var(--space-48)' }}>
          <div className="panel panel--ghost" data-reveal>
            <svg viewBox="0 0 400 400" role="img" aria-label="Радар зоны выезда: кольца 12, 34, 45, 65 и 120 км от базы в Одинцово">
              <g fill="none" stroke="var(--studio-line)">
                {AREAS.map((area, i) => (
                  <circle key={area.name} cx="200" cy="200" r={Math.max(18, (area.radius / MAX) * 178)} strokeWidth="1" opacity={0.9 - i * 0.12} />
                ))}
                <path d="M20 200 H380 M200 20 V380" strokeDasharray="4 6" />
              </g>
              <g fill="var(--studio-telemetry)" fontFamily="'JetBrains Mono', monospace" fontSize="10">
                {AREAS.map((area) => (
                  <text key={`r-${area.name}`} x="206" y={200 - Math.max(18, (area.radius / MAX) * 178) + 12}>
                    {area.radius} км
                  </text>
                ))}
              </g>
              <g>
                {AREAS.map((area, i) => {
                  const angle = (-90 + i * 58) * (Math.PI / 180);
                  const r = Math.max(18, (area.radius / MAX) * 178);
                  return (
                    <circle key={`d-${area.name}`} cx={200 + Math.cos(angle) * r} cy={200 + Math.sin(angle) * r} r="4" fill="var(--studio-accent)" />
                  );
                })}
              </g>
              <g>
                <circle cx="200" cy="200" r="6" fill="var(--studio-accent)" />
                <circle cx="200" cy="200" r="16" fill="none" stroke="var(--studio-accent)" strokeWidth="1" opacity="0.5" />
              </g>
              <g className="radar-sweep">
                <path d="M200 200 L200 22 A178 178 0 0 1 316 60 Z" fill="var(--studio-accent)" opacity="0.08" />
              </g>
            </svg>
          </div>

          <ul className="areas" data-reveal>
            {AREAS.map((area) => (
              <li key={area.name}>
                <b>{area.name}</b>
                <span>{area.eta}</span>
                <small>
                  радиус {area.radius} км · {area.note}
                </small>
              </li>
            ))}
          </ul>

          <p className="photo__hint" data-reveal>
            {AREA_COPY.note}
          </p>
        </div>
      </div>
    </section>
  );
}
