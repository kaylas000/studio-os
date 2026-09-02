import { useMemo, useState } from 'react';
import { CATEGORIES, FLEET, fleetByCategory, SHIFTS, type Category } from '../content/catalog';
import { FLEET_COPY } from '../content/copy';
import { PhotoSlot } from '../components/PhotoSlot';
import { scrollToId } from '../engine/useMotion';

type Filter = Category | 'all';

const rub = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;

export function FleetTable() {
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState<string | null>('agp-22');
  const rows = useMemo(() => fleetByCategory(filter), [filter]);

  return (
    <section className="section" id="fleet" aria-labelledby="fleet-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">
            {FLEET_COPY.index} · парк {FLEET.length} моделей · 34 единицы
          </p>
          <h2 id="fleet-title" data-reveal>
            {FLEET_COPY.h2}
          </h2>
          <p className="lede" data-reveal>
            {FLEET_COPY.lede}
          </p>
        </header>
        <p className="section-index mono">нажмите на строку — раскроется карточка единицы</p>

        <div style={{ gridColumn: '1 / -1' }}>
          <div className="chips" role="group" aria-label="Категория техники">
            <button type="button" className="chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
              все · {FLEET.length}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className="chip"
                aria-pressed={filter === cat.id}
                onClick={() => setFilter(cat.id)}
              >
                {cat.name} · {fleetByCategory(cat.id).length}
              </button>
            ))}
          </div>

          <div className="data-table-wrap">
            <table className="fleet">
              <thead>
                <tr>
                  <th scope="col">{FLEET_COPY.columns[0]}</th>
                  <th scope="col">{FLEET_COPY.columns[1]}</th>
                  <th scope="col">{FLEET_COPY.columns[2]}</th>
                  <th scope="col" className="num">{FLEET_COPY.columns[3]}</th>
                  <th scope="col" className="num">{FLEET_COPY.columns[4]}</th>
                  <th scope="col">{FLEET_COPY.columns[5]}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((unit) => (
                  <tr
                    key={unit.id}
                    data-open={open === unit.id}
                    onClick={() => setOpen(open === unit.id ? null : unit.id)}
                  >
                    <td>
                      <span className="model">
                        <b>{unit.model}</b>
                        <span className="mono">
                          {unit.maker} · {unit.year} · {CATEGORIES.find((c) => c.id === unit.category)?.short}
                        </span>
                      </span>
                    </td>
                    <td className="mono">{unit.reach > 0 ? `${unit.reach} м` : '—'}</td>
                    <td className="mono">{unit.capacity.toLocaleString('ru-RU')} т</td>
                    <td className="num">{rub(unit.shift)}</td>
                    <td className="num">{unit.hours.toLocaleString('ru-RU')} м/ч</td>
                    <td>
                      <span className="avail" data-free={unit.available}>
                        <span className="avail__bar" aria-hidden="true">
                          {Array.from({ length: unit.total }).map((_, i) => (
                            <i key={i} className="avail__cell" data-on={i < unit.available} />
                          ))}
                        </span>
                        <span className="mono">
                          {unit.available}/{unit.total}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {open
            ? (() => {
                const unit = FLEET.find((u) => u.id === open)!;
                return (
                  <div className="unit-detail" style={{ marginTop: 'var(--space-24)' }}>
                    <PhotoSlot
                      name={unit.photo}
                      alt={`${unit.model} на площадке парка в Одинцово`}
                      caption={`${unit.photo}.jpg`}
                      ratio={unit.photoRatio ?? '3/2'}
                    />
                    <dl className="total__rows">
                      <div className="total__row">
                        <dt>Габарит и вылет</dt>
                        <dd>{unit.outreach}</dd>
                      </div>
                      <div className="total__row">
                        <dt>Условия стоянки</dt>
                        <dd>{unit.ground}</dd>
                      </div>
                      <div className="total__row">
                        <dt>Минимальный заказ</dt>
                        <dd>{unit.minHours ? `от ${unit.minHours} ч` : `смена ${SHIFTS.hours} ч`}</dd>
                      </div>
                      <div className="total__row">
                        <dt>Экипаж</dt>
                        <dd>{unit.crew} чел.</dd>
                      </div>
                      <div className="total__row">
                        <dt>Час сверх смены</dt>
                        <dd>{rub(unit.extraHour)}</dd>
                      </div>
                      <div className="total__row">
                        <dt>Минимальный заказ</dt>
                        <dd>{unit.minOrder} см.</dd>
                      </div>
                    </dl>
                    <div className="stack-12">
                      <p className="mono" style={{ color: 'var(--studio-text-muted)', fontSize: 'var(--fs-xs)' }}>
                        {CATEGORIES.find((c) => c.id === unit.category)?.note}
                      </p>
                      <button type="button" className="btn" onClick={() => scrollToId('order')}>
                        Бронь {unit.model.split(' ')[0]}
                      </button>
                    </div>
                  </div>
                );
              })()
            : null}

          <p className="photo__hint" style={{ marginTop: 'var(--space-16)' }}>
            {FLEET_COPY.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
