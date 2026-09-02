// Собирает JSON-LD граф из seo.config.ts и вставляет его в index.html между маркерами.
// Запуск: npm run seo (и как prebuild) — так SEO-контент есть в первом ответе, а не только после JS.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const lib = path.resolve(root, '../../library/06-seo/seo.contracts.ts');

const { validateSEOContract, buildSchemaGraph } = await import(pathToFileURL(lib).href);
const { pageSEO } = await import(pathToFileURL(path.join(root, 'src/content/seo.config.ts')).href);

const check = validateSEOContract(pageSEO);
if (!check.valid) {
  console.error('\x1b[31m✗ SEO-контракт не проходит (SYS-06):\x1b[0m');
  for (const e of check.errors) console.error('   •', e);
  for (const w of check.warnings) console.warn('   ▲', w);
  process.exit(1);
}

const graph = JSON.stringify({ '@context': 'https://schema.org', '@graph': buildSchemaGraph(pageSEO) });
const tag = `<script type="application/ld+json">${graph}</script>`;
const title = `<title>${pageSEO.title}</title>`;
const desc = `<meta name="description" content="${pageSEO.description}" />`;
const og = Object.entries({
  'og:type': pageSEO.openGraph.type,
  'og:locale': pageSEO.openGraph.locale,
  'og:title': pageSEO.openGraph.title,
  'og:description': pageSEO.openGraph.description,
  'og:image': pageSEO.openGraph.image.url,
  'og:image:width': String(pageSEO.openGraph.image.width),
  'og:image:height': String(pageSEO.openGraph.image.height),
  'og:url': pageSEO.canonical,
  'twitter:card': 'summary_large_image'
})
  .map(([k, v]) => `    <meta property="${k}" content="${v}" />`)
  .join('\n    ');

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const replace = (marker, payload) => {
  const open = `<!-- ${marker}:START -->`;
  const close = `<!-- ${marker}:END -->`;
  if (!html.includes(open)) throw new Error(`index.html: нет маркера ${open}`);
  html = html.replace(new RegExp(`${open}[\\s\\S]*?${close}`), `${open}\n    ${payload}\n    ${close}`);
};

replace('SEO:TITLE', title);
replace('SEO:DESC', desc);
replace('SEO:OG', og);
replace('SEO:GRAPH', tag);
replace('SEO:H1', `<h1 class="seo-h1">${pageSEO.h1}</h1>`);
fs.writeFileSync(path.join(root, 'index.html'), html);
fs.mkdirSync(path.join(root, 'src/generated'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/generated/seo-graph.json'), graph);

console.log(`\x1b[32m✓ index.html обновлён: title ${check.lengths.title} симв., description ${check.lengths.description} симв., 1 h1, граф ${(JSON.parse(graph)['@graph'] ?? []).length} узла\x1b[0m`);
// Проверка og-карточки: файл обязателен, иначе соцсеть покажет пустую превьюшку.
const ogRaw = pageSEO.openGraph?.image ?? pageSEO.openGraph?.imageUrl ?? '';
const ogUrl = String(typeof ogRaw === 'object' && ogRaw !== null ? ogRaw.url ?? '' : ogRaw).replace(/^https?:\/\/[^/]+/u, '');
if (ogUrl && ogUrl.startsWith('/')) {
  const ogPath = path.join(root, 'public', ogUrl.replace(/^\//, ''));
  if (!fs.existsSync(ogPath)) {
    console.log(`⚠ og-картинка ${ogUrl} не найдена в public/ — соберите: studio photo <файл> --slot=... --og`);
  } else {
    const kb = Math.round(fs.statSync(ogPath).size / 1024);
    console.log(kb > 200 ? `⚠ og-картинка ${kb} КБ — соцсети обрезают тяжёлые превью, жмите --quality 76` : `✓ og-картинка ${kb} КБ`);
  }
}
