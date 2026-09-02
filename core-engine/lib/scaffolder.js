// core-engine/lib/scaffolder.js
// `studio new` — разворачивает ЗАПУСКАЕМЫЙ проект: 9 систем подключаются не «галочкой»,
// а реальными импортами из /library, алиасами Vite, SEO-контрактом и CSS-токенами архетипа,
// сгенерированными из TokenEngine (единственный источник правды по палитре).

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const STANDARDS = [
  '01-animations',
  '02-anti-slop',
  '03-mobile',
  '04-spacing',
  '05-hollywood-intros',
  '06-seo',
  '07-archetypes',
  '08-copywriting',
  '09-quality'
];

async function loadTokenEngine(rootDir) {
  const target = path.join(rootDir, 'library/07-archetypes/TokenEngine.ts');
  return import(pathToFileURL(target).href);
}

export function archetypeCssBlock(archetype, vars) {
  const body = Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  return `/* SYS-07 · сгенерировано core-engine/lib/scaffolder.js из library/07-archetypes/TokenEngine.ts.
   Руками не править — изменить токены и пересобрать: studio tokens ${archetype} */
:root,
[data-archetype='${archetype}'] {
${body}
}

/* Анимационные пресеты: движение только если бюджет устройства позволяет (SYS-01) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
}

export async function buildTemplateFiles({ rootDir, name, archetype, brand }) {
  const engine = await loadTokenEngine(rootDir);
  if (!engine.ARCHETYPES[archetype]) {
    throw new Error(`Неизвестный архетип «${archetype}». Доступны: ${Object.keys(engine.ARCHETYPES).join(', ')}`);
  }
  const contrast = engine.auditArchetypeContrast(archetype);
  const risks = engine.cyrillicRisk(archetype);
  const vars = engine.toCssVars(archetype);

  return {
    'studio.project.json': JSON.stringify(
      {
        name: `@studio-projects/${name}`,
        version: '1.0.0',
        private: true,
        brand,
        archetype,
        standards: STANDARDS,
        clientAliases: [brand, 'ООО «КЛИЕНТ»'],
        createdAt: new Date().toISOString(),
        audit: {
          minOriginality: 75,
          minApcaBodyLc: contrast.minBodyLc,
          contrastAtScaffold: contrast.ok ? 'pass' : 'FAIL',
          fontRisks: risks
        }
      },
      null,
      2
    ),

    'package.json': JSON.stringify(
      {
        name: `@studio-projects/${name}`,
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'vite build',
          preview: 'vite preview',
          typecheck: 'tsc --noEmit',
          audit: `node ../../core-engine/bin/studio.js audit .`
        },
        dependencies: {
          react: '^18.3.1',
          'react-dom': '^18.3.1',
          gsap: '^3.13.0',
          lenis: '^1.3.26',
          three: '^0.176.0'
        },
        devDependencies: {
          '@types/react': '^18.3.12',
          '@types/react-dom': '^18.3.1',
          '@types/three': '^0.176.0',
          '@vitejs/plugin-react': '^4.3.4',
          typescript: '^5.7.0',
          vite: '^6.3.5'
        }
      },
      null,
      2
    ),

    'tsconfig.json': JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          lib: ['ES2023', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          moduleResolution: 'bundler',
          jsx: 'react-jsx',
          strict: true,
          noEmit: true,
          allowImportingTsExtensions: true,
          resolveJsonModule: true,
          isolatedModules: true,
          skipLibCheck: true,
          types: ['vite/client'],
          baseUrl: '.',
          paths: { '@/*': ['src/*'], '@library/*': ['../../library/*'], '@core/*': ['../../core-engine/*'] }
        },
        include: ['src', '../../library']
      },
      null,
      2
    ),

    'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@library': path.resolve(dirname, '../../library'),
      '@core': path.resolve(dirname, '../../core-engine')
    }
  },
  server: { host: '0.0.0.0', port: 3000, allowedHosts: true },
  preview: { host: '0.0.0.0', port: 3000, allowedHosts: true },
  optimizeDeps: { include: ['three', 'gsap', 'lenis'] }
});
`,

    'index.html': `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${brand} — страница загружается</title>
    <meta name="description" content="Опишите оффер цифрами: 70-165 символов. Иначе studio audit блокирует сборку (SYS-06)." />
    <link rel="canonical" href="https://example.com/" />
    <meta name="theme-color" content="${vars['--studio-bg']}" />
  </head>
  <body>
    <!-- SYS-06: h1 в первом ответе документа — SPA-заглушка индексируется плохо -->
    <h1 class="seo-h1">${brand}</h1>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

    'src/main.tsx': `import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import '@library/04-spacing/tokens.css';
import '@library/03-mobile/fluid-system.css';
import '@library/03-mobile/safe-area.css';
import './styles/archetype.css';
import './styles/site.css';

const host = document.getElementById('root');
if (!host) throw new Error('#root не найден');

document.documentElement.setAttribute('data-archetype', '${archetype}');

createRoot(host).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
`,

    'src/components/ErrorBoundary.tsx': `import React from 'react';

interface State {
  error: Error | null;
}

/** SYS-09: упавшая WebGL-сцена не имеет права показывать белый экран. */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[STUDIO OS] ErrorBoundary:', error.message, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container" style={{ paddingBlock: 'var(--space-64)' }}>
          <h2>Сцена упала — статический режим</h2>
          <p>Заявка работает: приложите задачу письмом, диспетчер перезвонит. ({String(this.state.error.message).slice(0, 120)})</p>
        </div>
      );
    }
    return this.props.children;
  }
}
`,

    'src/content/seo.config.ts': `import type { PageSEOContract } from '@library/06-seo/seo.contracts';

// SYS-06. Контракт читает \`studio audit\` (реальный импорт, а не копия) — цифры обязаны быть клиентскими.
export const pageSEO: PageSEOContract = {
  title: '${brand} — заполните title 30-70 символов',
  description:
    'Опишите услугу цифрами: парк, вылет, сроки подачи, цена за смену, радиус выезда. Норма 70-165 символов для этого описания.',
  canonical: 'https://example.com/',
  robots: 'index, follow',
  lang: 'ru-RU',
  h1: '${brand}: заголовок одной строкой, до 90 символов',
  breadcrumbs: [
    { name: 'Главная', url: 'https://example.com/' },
    { name: 'Техника', url: 'https://example.com/#fleet' }
  ],
  openGraph: {
    title: '${brand}',
    description: 'Оффер одной строкой',
    type: 'website',
    image: { url: 'https://example.com/og.png', width: 1200, height: 630, alt: 'Техника на объекте' },
    locale: 'ru_RU'
  }
};
`,

    'src/App.tsx': `import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { MotionGuard } from '@library/01-animations/MotionGuard';
import { Section, Stack } from '@library/04-spacing/primitives';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
    const budget = MotionGuard.budget();
    if (budget.tier === 'static') return;

    const lenis = new Lenis({ duration: budget.tier === 'reduced' ? 0.6 : 1.2 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const triggers = gsap.utils.toArray<HTMLElement>('[data-reveal]').map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => gsap.to(el, { autoAlpha: 1, y: 0, duration: MotionGuard.duration(0.8) / 1000, ease: 'expo.out' })
      })
    );

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="shell">
      <Section id="hero" className="container">
        <Stack gap={24}>
          <h1 data-reveal>Каркас собран \`studio new\`</h1>
          <p data-reveal className="lede">
            Подключены 9 систем студии: токены, fluid-типографика, safe-area, архетип ${archetype},
            reduced-motion-гейт, SEO-контракт и анти-слоп-детекторы. Замените тексты, положите фото в
            /public/photos/, затем выполните \`studio audit\`.
          </p>
        </Stack>
      </Section>
    </div>
  );
}
`,

    'src/styles/archetype.css': archetypeCssBlock(archetype, vars),

    'src/styles/site.css': `/* Проектные стили. Отступы — только var(--space-*) и var(--fluid-*) (SYS-04). */
.shell {
  min-height: 100dvh;
  background: var(--studio-bg);
  color: var(--studio-text);
  font-family: var(--studio-font-body);
  line-height: var(--lh-normal);
}

h1 {
  font-family: var(--studio-font-heading);
  font-size: var(--fs-hero);
  line-height: var(--lh-tight);
  letter-spacing: var(--studio-tracking);
}

.lede {
  font-size: var(--fs-lg);
  color: var(--studio-text-muted);
  max-width: 62ch;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: var(--fluid-container-pad);
}

button,
a.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target-min);
  padding-inline: var(--space-16);
  border: var(--studio-border-width) solid var(--studio-accent);
  color: var(--studio-accent);
  background: none;
}

.seo-h1 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
`
  };
}

export async function scaffold({ rootDir, name, archetype = 'cyber-tech', brand, force = false }) {
  const dir = path.join(rootDir, 'projects', name);
  if (fs.existsSync(dir) && fs.readdirSync(dir).length > 0 && !force) {
    throw new Error(`projects/${name} уже непустой. Перезапись: --force`);
  }

  const files = await buildTemplateFiles({ rootDir, name, archetype, brand: brand ?? name });
  const created = [];
  for (const [rel, content] of Object.entries(files)) {
    const target = path.join(dir, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
    created.push(path.relative(rootDir, target));
  }

  for (const empty of ['src/sections', 'src/hooks', 'src/audio', 'tests', 'public/photos']) {
    fs.mkdirSync(path.join(dir, empty), { recursive: true });
    fs.writeFileSync(
      path.join(dir, empty, '.gitkeep'),
      empty === 'public/photos'
        ? 'Фото клиента. Имена задаёт content/fleet.ts (поле photo). <TechImage> подхватывает файлы через import.meta.glob.\nПоддерживаются jpg/png/webp/avif, пропорции 3:2 или 16:10, ширина >= 1600px.\n'
        : ''
    );
  }

  return { dir, files: created };
}
