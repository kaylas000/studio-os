import { useMemo, useState } from 'react';
import { EXTRAS, FLEET, SHIFTS } from '../content/catalog';
import { CALC_COPY } from '../content/copy';
import { NumberTicker } from '../components/NumberTicker';
import { scrollToId } from '../engine/useMotion';

const rub = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;
const KM_RATE = 46; // ₽/км плеча сверх 12 км — черновик, править в catalog.ts

export function ShiftCalculator() {
  const [unitId, setUnitId] = useState('agp-22');
  const [shifts, setShifts] = useState(2);
  const [night, setNight] = useState(false);
  const [km, setKm] = useState(18);
  const [extras, setExtras] = useState<string[]>(['winch']);

  const unit = useMemo(() => FLEET.find((u) => u.id === unitId) ?? FLEET[0], [unitId]);

  const lines = useMemo(() => {
    const base = unit.shift * shifts;
    const nightUp = night ? Math.round(base * 0.25) : 0;
    const mileage = Math.max(0, km - 12) * KM_RATE * shifts;
    const extraRows = EXTRAS.filter((e) => extras.includes(e.id)).map((e) => ({
      label: e.name,
      value: e.per === 'смена' ? Math.round(base * e.price) || 0 : e.per === 'час' ? e.price * SHIFTS.hours : e.price * shifts
    }));
    const flatExtras = EXTRAS.filter((e) => extras.includes(e.id) && e.per !== 'смена').reduce((s, e) => s + e.price * (e.per === 'час' ? SHIFTS.hours : shifts), 0);
    const perShiftExtras = EXTRAS.filter((e) => extras.includes(e.id) && e.per === 'смена').reduce((s, e) => s + base * e.price, 0);
    const total = base + nightUp + mileage + flatExtras + perShiftExtras;
    return { base, nightUp, mileage, extraRows, total, hours: shifts * SHIFTS.hours };
  }, [unit, shifts, night, km, extras]);

  const toggle = (id: string) => setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="section" id="calc" aria-labelledby="calc-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{CALC_COPY.index} · смета, а не «от»</p>
          <h2 id="calc-title" data-reveal>
            {CALC_COPY.h2}
          </h2>
          <p className="lede" data-reveal>{CALC_COPY.lede}</p>
        </header>
        <p className="section-index mono">расчёт предварительный, фиксируется менеджером</p>

        <div style={{ gridColumn: '1 / span 5' }}>
          <div className="calc" style={{ gridTemplateColumns: '1fr' }}>
            <label className="field">
              <span className="field__label">Единица парка</span>
              <select value={unitId} onChange={(e) => setUnitId(e.target.value)}>
                {FLEET.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.model} — {rub(u.shift)}/смена
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field__label">
                Смен: {shifts} · всего {lines.hours} ч
              </span>
              <input
                type="range"
                min={unit.minOrder}
                max={14}
                step={1}
                value={shifts}
                onChange={(e) => setShifts(Number(e.target.value))}
                aria-label="Количество смен"
              />
            </label>

            <label className="field">
              <span className="field__label">Плечо выезда: {km} км · {KM_RATE} ₽/км сверх 12 км</span>
              <input
                type="range"
                min={0}
                max={120}
                step={2}
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                aria-label="Километраж до объекта"
              />
            </label>

            <div className="checks">
              <label className="check">
                <input type="checkbox" checked={night} onChange={(e) => setNight(e.target.checked)} />
                <span>
                  Ночная смена 22:00–06:00 <small>наценка 25% и согласование по шуму</small>
                </span>
              </label>
              {EXTRAS.filter((e) => e.id !== 'night').map((extra) => (
                <label className="check" key={extra.id}>
                  <input type="checkbox" checked={extras.includes(extra.id)} onChange={() => toggle(extra.id)} />
                  <span>
                    {extra.name}{' '}
                    <small>
                      {extra.per === 'смена' ? `+${Math.round(extra.price * 100)}% к смене` : `${rub(extra.price)} / ${extra.per}`} · {extra.hint}
                    </small>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ gridColumn: '7 / span 3' }} data-reveal>
          <div className="panel scanlines total">
            <p className="kicker">Итого по парку</p>
            <p className="total__sum">
              <NumberTicker value={lines.total} suffix=" ₽" />
            </p>
            <div className="total__rows">
              <div className="total__row">
                <span>
                  Смена × {shifts} ({SHIFTS.hours} ч)
                </span>
                <b>{rub(lines.base)}</b>
              </div>
              {night ? (
                <div className="total__row">
                  <span>Ночная наценка</span>
                  <b>{rub(lines.nightUp)}</b>
                </div>
              ) : null}
              <div className="total__row">
                <span>Плечо {km} км</span>
                <b>{rub(lines.mileage)}</b>
              </div>
              {lines.extraRows.map((row) => (
                <div className="total__row" key={row.label}>
                  <span>{row.label}</span>
                  <b>{row.value ? rub(row.value) : rub(Math.round(lines.base * 0.25))}</b>
                </div>
              ))}
              <div className="total__row">
                <span>Простой сверх {SHIFTS.graceHours} ч</span>
                <b>{rub(unit.extraHour)}/ч</b>
              </div>
            </div>
            <ul className="limits">
              {CALC_COPY.limits.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
            <button type="button" className="btn" onClick={() => scrollToId('order')}>
              Зафиксировать расчёт
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
