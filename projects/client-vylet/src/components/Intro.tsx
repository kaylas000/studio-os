// SYS-05: интро на IntroEngine из библиотеки — с Skip, Esc, лимитом по FPS
// и статическим фолбэком, когда WebGL недоступен (MotionGuard).
import { useEffect, useRef, useState } from 'react';
import { IntroEngine } from '@library/05-hollywood-intros/IntroEngine';
import { HERO } from '../content/copy';

export function Intro() {
  const host = useRef<HTMLDivElement>(null);
  const engine = useRef<IntroEngine | null>(null);
  const [done, setDone] = useState(false);
  const [hud, setHud] = useState('инициализация парка');

  useEffect(() => {
    const node = host.current;
    if (!node) return;

    let timer = 0;
    engine.current = new IntroEngine({
      container: node,
      preset: 'glitchCyber',
      accentColor: '#00f2fe',
      durationMs: 2200,
      allowSkip: true,
      onTelemetry: (t) => setHud(`${t.fps} fps · ${t.particles} точек · ${t.tier}`),
      onComplete: () => {
        setDone(true);
        timer = window.setTimeout(() => engine.current?.destroy(), 700);
      }
    });

    return () => {
      window.clearTimeout(timer);
      engine.current?.destroy();
      engine.current = null;
    };
  }, []);

  const skip = () => {
    setDone(true);
    engine.current?.destroy();
  };

  return (
    <div className="intro" data-done={done} aria-hidden={done}>
      <div className="intro__rig" ref={host} />
      <div className="intro__ui">
        <p className="intro__hud">
          <span>ВЫЛЕТ</span>
          <span>{hud}</span>
          <span>{HERO.kicker}</span>
        </p>
        <h2 className="h1" style={{ maxWidth: '14ch' }}>{HERO.h1}</h2>
        <button type="button" className="skip" onClick={skip}>
          Пропустить · Esc
        </button>
      </div>
    </div>
  );
}
