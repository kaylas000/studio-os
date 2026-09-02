// library/09-quality/StaticCodeAuditor.ts
// SYS-09: статический аудит качества по исходникам (без браузера).
// Ловит то, что обычно убивает FPS и память: layout thrashing, незакрытые rAF,
// undisposed WebGL-ресурсы, отсутствие Error Boundaries, listener-протечки.

export interface CodeViolation {
  rule: 'LAYOUT_THRASH' | 'RAF_LEAK' | 'WEBGL_DISPOSE' | 'NO_ERROR_BOUNDARY' | 'LISTENER_LEAK' | 'SYNC_LAYOUT_IN_SCROLL' | 'EVAL_OR_HTML' | 'MISSING_ALT' | 'IMG_NO_DIMENSIONS' | 'DANGEROUS_SETTER';
  file: string;
  line: number;
  detail: string;
  severity: 'block' | 'warn';
  fix: string;
}

export interface CodeAuditReport {
  ok: boolean;
  score: number;
  violations: CodeViolation[];
  files: number;
}

interface FileSource {
  file: string;
  code: string;
}

const WRITE_RE = /\.(style\.[\w.]+\s*=|setAttribute\(|classList\.(?:add|remove|toggle)\(|animate\()/;
const READ_RE = /(?:offset(?:Width|Height|Top|Left)|client(?:Width|Height|Top|Left)|getBoundingClientRect\(|scrollHeight|scrollTop)/;

export class StaticCodeAuditor {
  public audit(sources: FileSource[]): CodeAuditReport {
    const violations: CodeViolation[] = [];

    for (const { file, code } of sources) {
      const lines = code.split('\n');
      const isTsx = /\.(tsx|jsx|ts|js)$/.test(file);

      // 1. Layout thrashing: чтение геометрических свойств сразу после записи
      let lastWrite = -1;
      lines.forEach((line, i) => {
        if (WRITE_RE.test(line)) lastWrite = i;
        if (READ_RE.test(line) && i - lastWrite <= 2 && lastWrite >= 0 && !line.includes('const rect')) {
          violations.push({
            rule: 'LAYOUT_THRASH',
            file,
            line: i + 1,
            detail: 'чтение layout-свойства сразу после записи стиля — принудительный reflow',
            severity: 'block',
            fix: 'Собрать все чтения в начало кадра, записи — в конец. Для GSAP — `gsap.set()` батчем или `ScrollTrigger.batch()`.'
          });
          lastWrite = -1;
        }
      });

      // 2. requestAnimationFrame без cancelAnimationFrame в cleanup
      const rafCount = (code.match(/requestAnimationFrame\(/g) ?? []).length;
      const cancelCount = (code.match(/cancelAnimationFrame\(/g) ?? []).length;
      if (rafCount > 0 && cancelCount === 0) {
        violations.push({
          rule: 'RAF_LEAK',
          file,
          line: (code.split('\n').findIndex((l) => l.includes('requestAnimationFrame(')) ?? 0) + 1,
          detail: `${rafCount}× requestAnimationFrame и ни одного cancelAnimationFrame`,
          severity: 'block',
          fix: 'Сохранять id кадра в ref и отменять в cleanup useEffect / destroy().'
        });
      }

      // 3. addEventListener без removeEventListener
      const addL = (code.match(/addEventListener\(/g) ?? []).length;
      const removeL = (code.match(/removeEventListener\(/g) ?? []).length;
      if (addL > removeL && isTsx) {
        violations.push({
          rule: 'LISTENER_LEAK',
          file,
          line: (code.split('\n').findIndex((l) => l.includes('addEventListener(')) ?? 0) + 1,
          detail: `повесили ${addL} слушателей, сняли ${removeL}`,
          severity: 'warn',
          fix: 'Убирать слушатель в return-функции useEffect; passive: true для wheel/touchmove.'
        });
      }

      // 4. Three.js: геометрии/материалы без dispose
      if (/THREE\.|from 'three'|from "three"/.test(code)) {
        const creates = (code.match(/new THREE\.(?:Buffer|Plane|Box|Sphere|Cylinder|Torus|Instanced)?Geometry|new THREE\.(?:Shader|Points|Mesh|Sprite|Line)(?:Material)?|new THREE\.(\w*Geometry)/g) ?? []).length;
        const disposes = (code.match(/\.dispose\(\)/g) ?? []).length;
        const rendererDispose = /renderer\.dispose\(\)/.test(code);
        // dispose в цикле/traverse покрывает все объекты сразу — считать по вхождению некорректно
        const bulkDispose = /\.forEach\s*\([\s\S]{0,120}?\.dispose\s*\(|\.traverse\s*\([\s\S]{0,220}?\.dispose\s*\(/s.test(code);
        if ((!bulkDispose && creates > disposes) || !rendererDispose) {
          violations.push({
            rule: 'WEBGL_DISPOSE',
            file,
            line: (code.split('\n').findIndex((l) => /new THREE\./.test(l)) ?? 0) + 1,
            detail: `создано геометрий/материалов: ${Math.max(creates, 1)}, точечных dispose: ${disposes}${bulkDispose ? ' (+массовый dispose)' : ''}, renderer.dispose: ${rendererDispose ? 'да' : 'нет'}`,
            severity: 'block',
            fix: 'В destroy(): traverse по сцене → geometry.dispose() / material.dispose(), затем renderer.dispose() + renderer.forceContextLoss().'
          });
        }
      }

      // 5. Error Boundary
      if (/createRoot|ReactDOM\.render/.test(code) && !/componentDidCatch|ErrorBoundary/.test(code)) {
        violations.push({
          rule: 'NO_ERROR_BOUNDARY',
          file,
          line: 1,
          detail: 'точка входа без Error Boundary: одна упавшая WebGL-сцена покажет белый экран',
          severity: 'warn',
          fix: 'Обернуть App в <ErrorBoundary fallback={<StaticShell />}> и ловить oncontextlost у canvas.'
        });
      }

      lines.forEach((line, i) => {
        // 6. Опасные конструкции
        if (/\beval\(|new Function\(|dangerouslySetInnerHTML/.test(line)) {
          violations.push({
            rule: 'DANGEROUS_SETTER',
            file,
            line: i + 1,
            detail: line.trim().slice(0, 90),
            severity: 'block',
            fix: 'Убрать. Для HTML из CMS — санитизация (DOMPurify) или рендер текстовыми узлами.'
          });
        }
        // 7. Картинки без dimensions / alt
        const imgTag = line.match(/<img\b[^>]*>/);
        if (imgTag) {
          const tag = imgTag[0];
          if (!/alt=/.test(tag)) {
            violations.push({ rule: 'MISSING_ALT', file, line: i + 1, detail: '<img> без alt', severity: 'block', fix: 'alt = что на фото + техника: «Автовычка АГП-22 на фасаде, Одинцово».' });
          }
          if (!/width=|height=|aspect-ratio/.test(tag)) {
            violations.push({ rule: 'IMG_NO_DIMENSIONS', file, line: i + 1, detail: '<img> без width/height → CLS-прыжок при загрузке', severity: 'block', fix: 'Явные width/height или CSS aspect-ratio + loading="lazy" (кроме LCP-картинки).' });
          }
        }
      });
    }

    const blocking = violations.filter((v) => v.severity === 'block').length;
    const warns = violations.length - blocking;
    const score = Math.max(0, 100 - blocking * 16 - warns * 6);

    return { ok: blocking === 0, score, violations, files: sources.length };
  }

  /** Быстрая проверка FPS-бюджета по кадрам, собранным в рантайме (performance.mark). */
  public static frameBudget(fps: number[], target = 55): { ok: boolean; median: number; p5: number; drops: number } {
    if (!fps.length) return { ok: false, median: 0, p5: 0, drops: 0 };
    const sorted = [...fps].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const p5 = sorted[Math.floor(sorted.length * 0.05)];
    const drops = sorted.filter((v) => v < target).length;
    return { ok: p5 >= target - 5, median: Math.round(median), p5: Math.round(p5), drops };
  }
}
