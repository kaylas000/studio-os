// Смоук-тест собранного бандла: mounting в jsdom без браузера.
// Ловит то, что не видит `vite build`: упавший рендер, отсутствующий #root,
// развалившиеся секции. WebGL в jsdom недоступен — проверяем, что фолбэк живой.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

let JSDOM, VirtualConsole;
try {
  ({ JSDOM, VirtualConsole } = await import('jsdom'));
} catch {
  console.log('jsdom не установлен — пропускаем смоук: npm i -D jsdom');
  process.exit(0);
}

if (!fs.existsSync(dist)) {
  console.error('Нет dist/ — сначала npm run build');
  process.exit(1);
}

const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const entryName = path.basename([...fs.readdirSync(path.join(dist, 'assets'))].find((f) => f.startsWith('index-') && f.endsWith('.js')));

const errors = [];
const consolePipe = new VirtualConsole()
  .on('jsdomError', (e) => errors.push(`jsdomError: ${e.message}`))
  .on('error', (m) => errors.push(`console.error: ${m}`));

const dom = new JSDOM(html.replace(/<script type="module"[^>]*><\/script>/g, ''), {
  url: 'http://localhost/',
  pretendToBeVisual: true,
  virtualConsole: consolePipe
});

const define = (key, value) => Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
define('window', dom.window);
define('document', dom.window.document);
define('navigator', dom.window.navigator);
define('HTMLElement', dom.window.HTMLElement);
define('Element', dom.window.Element);
define('Node', dom.window.Node);
define('getComputedStyle', dom.window.getComputedStyle);

// Полифил modulepreload в бандле и GSAP требуют эти API — в jsdom их нет.
define('MutationObserver', class {
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
});
define('IntersectionObserver', class {
  constructor(cb) {
    this.cb = cb;
  }
  observe(target) {
    this.cb([{ isIntersecting: true, target }], this);
  }
  unobserve() {}
  disconnect() {}
});
define('ResizeObserver', class {
  observe() {}
  disconnect() {}
});
globalThis.self = globalThis.self ?? globalThis;
define('Window', dom.window.Window);
define('Document', dom.window.Document);
define('Event', dom.window.Event);
define('CustomEvent', dom.window.CustomEvent);
define('KeyboardEvent', dom.window.KeyboardEvent);
define('matchMedia', dom.window.matchMedia);

// WebGL в jsdom нет: getContext отдаёт null, и MotionGuard обязан увести проект в static-режим.
dom.window.HTMLCanvasElement.prototype.getContext = () => null;
define('HTMLCanvasElement', dom.window.HTMLCanvasElement);
globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 16);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.performance = globalThis.performance ?? { now: () => Date.now() };
dom.window.matchMedia = dom.window.matchMedia ?? ((q) => ({ matches: /reduce/.test(q), addEventListener() {}, removeEventListener() {} }));

await import(pathToFileURL(path.join(dist, 'assets', entryName)).href);
await new Promise((r) => setTimeout(r, 900));

const doc = dom.window.document;
const footerText = doc.querySelector('.disclaimer')?.textContent ?? doc.querySelector('footer')?.textContent ?? '';
const checks = [
  ['#root не пустой', doc.getElementById('root')?.childElementCount > 0],
  ['h1 на месте', /Автовышки, краны и земтехника/.test(doc.querySelector('#hero-title, .seo-h1')?.textContent ?? '')],
  ['секция парка', Boolean(doc.getElementById('fleet'))],
  ['таблица техники заполнена', doc.querySelectorAll('.fleet tbody tr').length >= 8],
  ['услуги', doc.querySelectorAll('.service').length === 6],
  ['калькулятор', Boolean(doc.querySelector('#calc select'))],
  ['шаги процесса', doc.querySelectorAll('.step').length >= 4],
  ['радар зоны выезда', doc.querySelectorAll('.areas li').length >= 4],
  ['документы', doc.querySelectorAll('.doc').length >= 5],
  ['объекты с фотослотами', doc.querySelectorAll('.photo').length >= 3],
  ['FAQ', doc.querySelectorAll('.faq details').length >= 5],
  ['форма заявки', Boolean(doc.querySelector('#order form'))],
  ['подвал с дисклеймером', /публичн[\p{L}]*\s+оферт[\p{L}]*/u.test(footerText), `нашли в подвале: «${footerText.slice(-120)}»`],
  ['touch-target у кнопки', Boolean(doc.querySelector('.btn'))],
  ['JSON-LD в разметке', /application\/ld\+json/.test(doc.documentElement.innerHTML)]
];

let ok = true;
console.log('\nСмоук собранного билда (jsdom):');
for (const [label, passed, debug] of checks) {
  if (!passed) ok = false;
  console.log(`  ${passed ? '✓' : '✗'} ${label}${passed || !debug ? '' : `\n      ${debug}`}`);
}
if (errors.length) {
  ok = false;
  console.log('\nОшибки рантайма:');
  for (const e of errors.slice(0, 8)) console.log('  !', e.slice(0, 220));
}
console.log(ok ? '\n\x1b[32m✓ приложение монтируется, критичных ошибок нет\x1b[0m\n' : '\n\x1b[31m✗ смоук не прошёл\x1b[0m\n');
process.exit(ok ? 0 : 1);
