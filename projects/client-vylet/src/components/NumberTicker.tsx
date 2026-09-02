// SYS-01: число появляется счётчиком, но при reduced-motion мгновенно (см. useTicker).
import { useEffect, useRef, useState } from 'react';
import { useTicker } from '../engine/useActiveIndex';

export function NumberTicker({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shown = useTicker(value, 900, seen);

  return (
    <span ref={ref} className="mono">
      {prefix}
      {shown.toLocaleString('ru-RU')}
      {suffix}
    </span>
  );
}
