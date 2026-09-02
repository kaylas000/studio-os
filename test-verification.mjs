import { ClicheDetector } from './library/02-anti-slop/ClicheDetector.ts';
import { GradientSlopDetector } from './library/02-anti-slop/GradientSlopDetector.ts';
import { FactDensityScorer } from './library/08-copywriting/FactDensityScorer.ts';
import { ReadabilityAnalyzer } from './library/08-copywriting/ReadabilityAnalyzer.ts';
import { ARCHETYPES } from './library/07-archetypes/TokenEngine.ts';
import { validateSEOContract } from './library/06-seo/seo.contracts.ts';
import JSZip from 'jszip';
import fs from 'node:fs';
import path from 'node:path';
import { SpacingTokenGuard } from './library/04-spacing/SpacingTokenGuard.ts';
import { ViewportMatrix } from './library/03-mobile/ViewportMatrix.ts';
import { apcaLc, wcagRatio } from './library/07-archetypes/contrast.ts';
import { auditAllArchetypes } from './library/07-archetypes/TokenEngine.ts';
import { StructureScanner } from './library/08-copywriting/StructureScanner.ts';
import { StaticCodeAuditor } from './library/09-quality/StaticCodeAuditor.ts';
import { OriginalityScore } from './library/02-anti-slop/OriginalityScore.ts';

console.log("==================================================");
console.log("🧪 ТЕСТИРОВАНИЕ ВСЕХ МОДУЛЕЙ И СИСТЕМ STUDIO OS");
console.log("==================================================\n");

let passed = 0;
let total = 0;

function assert(condition, name) {
  total++;
  if (condition) {
    passed++;
    console.log(`✅ [PASS] ${name}`);
  } else {
    console.error(`❌ [FAIL] ${name}`);
  }
}

// 1. Тест Anti-Slop ClicheDetector
const detector = new ClicheDetector();
const slopResult = detector.analyze("В современном цифровом мире мы предлагаем уникальный опыт и инновационные решения.");
assert(slopResult.score <= 60 && slopResult.issues.length >= 2, "1. ClicheDetector корректно штрафует за AI-клише");

const cleanResult = detector.analyze("Сократили время сборки с 420мс до 68мс на 85 микросервисах.");
assert(cleanResult.score === 100 && cleanResult.issues.length === 0, "2. ClicheDetector дает 100 баллов фактурному тексту");

// 2. Тест GradientSlopDetector
const gradDetector = new GradientSlopDetector();
const badGrad = gradDetector.checkGradient("#667eea", "#764ba2");
assert(badGrad.isSlop === true, "3. GradientSlopDetector ловит AI Purple (#667eea -> #764ba2)");

const goodGrad = gradDetector.checkGradient("#d4af37", "#0a0a0c");
assert(goodGrad.isSlop === false, "4. GradientSlopDetector пропускает уникальную палитру Luxury Noir");

// 3. Тест FactDensityScorer
const factReport = FactDensityScorer.calculate("За 14 дней повысили FPS с 30 до 60 на 1200 устройствах (экономия 350,000 руб).");
assert(factReport.score >= 80 && factReport.factsCount >= 4, "5. FactDensityScorer корректно находит числа, валюты, дни и FPS");

// 4. Тест ReadabilityAnalyzer
const readReport = ReadabilityAnalyzer.analyze("Короткая фраза. Еще одно предложение. Третья мысль.");
assert(readReport.score >= 80, "6. ReadabilityAnalyzer дает высокий Flesch балл лаконичному веб-тексту");

// 5. Тест 5 Дизайн-Архетипов
const archKeys = Object.keys(ARCHETYPES);
assert(archKeys.length === 5 && archKeys.includes('luxury-noir') && archKeys.includes('neo-brutalism'), "7. В TokenEngine зарегистрированы ровно 5 архетипов");

// 6. Тест SEO Contracts
const validSEO = validateSEOContract({
  title: "STUDIO OS — Мета-система веб-студии нового поколения",
  description: "Единая производственная операционная система веб-студии: 9 монолитных стандартов качества, кинематографичные анимации и 3D-заставки.",
  canonical: "https://studio-os.com",
  robots: "index, follow",
  openGraph: {
    title: "STUDIO OS",
    description: "Мета-система веб-студии",
    type: "website",
    image: { url: "https://studio-os.com/og.jpg", width: 1200, height: 630, alt: "OG Image" },
    locale: "ru_RU"
  },
  breadcrumbs: [{ name: "Главная", url: "https://studio-os.com" }],
  h1: "STUDIO OS — мета-система веб-студии"
});
assert(validSEO.valid === true, "8. SEO Contract валидирует корректную структуру");

// 7. Тест генерации ZIP-архива модулей (JSZip)
const zip = new JSZip();
zip.file("test.txt", "STUDIO OS Core Engine Module");
const buffer = await zip.generateAsync({ type: "nodebuffer" });
assert(buffer.length > 50, "9. JSZip генератор архивов систем формирует валидный бинарный ZIP");

// 8b. SEO-контракт обязан требовать h1
const badSEO = validateSEOContract({ ...validSEO, h1: "" });
assert(badSEO.valid === false, "8b. SEO Contract отклоняет страницу без h1");

// 10. Spacing Token Guard: off-scale 13px блокируется, 24px проходит
const guard = new SpacingTokenGuard();
const spacing = guard.scanSource(".card { padding: 13px; margin-top: 24px; gap: var(--space-16); }", "a.css", { unit: "css" });
assert(spacing.violations.some(v => v.px === 13 && v.severity === "block"), "10. SpacingTokenGuard ловит off-scale 13px");

// 11. ViewportMatrix: фиксированная ширина 1440px ломает 320px
const mobile = ViewportMatrix.auditStylesheet(".wrap { width: 1440px; }", "layout.css");
assert(mobile.violations.some(v => v.rule === "FIXED_WIDTH_OVERFLOW"), "11. ViewportMatrix блокирует фиксированную ширину");
assert(ViewportMatrix.presets().length >= 19, "11b. Матрица вьюпортов покрывает 19+ устройств");

// 12. APCA откалибрована по якорям
assert(Math.abs(apcaLc("#000000", "#ffffff") - 106) < 2, "12. APCA: black on white = 106 Lc");
assert(Math.abs(apcaLc("#767676", "#ffffff") - 62.7) < 2, "12b. APCA: #767676 on white = 63 Lc");
assert(wcagRatio("#767676", "#ffffff") === 4.54, "12c. WCAG 2.x: #767676 = 4.54:1");
assert(auditAllArchetypes().every(r => r.ok), "12d. Все 5 архетипов проходят APCA-гейт");

// 13. Формула PAS требует все три блока
assert(StructureScanner.scan("Кран простаивает вторые сутки. Каждый час — 4 800 руб. Подаём замену за 9 часов.", "PAS").missing.length === 0, "13. StructureScanner собирает PAS");
assert(StructureScanner.scan("Мы предлагаем качественный сервис.", "PAS").missing.length >= 2, "13b. StructureScanner режет слоп без структуры");

// 14. Zero-Bug: rAF без cancel и WebGL без dispose — блокирующие
const code = new StaticCodeAuditor().audit([{ file: "x.tsx", code: "const id = requestAnimationFrame(loop); const g = new THREE.BufferGeometry(); renderer.render(scene, camera);" }]);
assert(code.violations.some(v => v.rule === "RAF_LEAK") && code.violations.some(v => v.rule === "WEBGL_DISPOSE") && !code.ok, "14. StaticCodeAuditor ловит утечки rAF и WebGL");

// 15. Сводный Originality Score: чистый проект проходит порог 75
const originality = new OriginalityScore().compute({
  projectName: "verification",
  archetype: "cyber-tech",
  textFragments: [{ file: "copy.ts", text: "Подача автовышки 22 м на объект Одинцово — 4 часа с момента заявки. Смена 11 часов, простой свыше 2 часов оплачивается по 1 180 руб/час." }],
  cssFragments: [{ file: "site.css", code: ".a { padding: var(--space-16); gap: var(--space-8); }" }],
  tsxFragments: [],
  factDensity: { score: 100 },
  readability: { score: 90 },
  minApcaLc: 77
});
assert(originality.score >= 75 && originality.verdict === "pass", "15. Originality Score >= 75 на чистом проекте");

// 16. Regex-слой студии: \b и \w рядом с кириллицей запрещены (JS считает их ASCII).
const walkSources = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const full = path.join(dir, e.name);
  return e.isDirectory() ? walkSources(full) : (/\.(ts|js|mjs)$/.test(e.name) ? [full] : []);
}) : [];
const REGEX_LITERAL = /(?<![\\/])\/(?![/*\s])(?:\\.|\[[^\]]*\]|[^/\n\\])+\/[gimsuy]*/g;
const asciiTrapHits = [];
for (const file of [...walkSources('library'), ...walkSources('core-engine')]) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, idx) => {
    const text = line.trim();
    if (text.startsWith('//') || text.startsWith('*')) return;
    for (const [literal] of line.matchAll(REGEX_LITERAL)) {
      if (/[\u0400-\u04FF]/.test(literal) && /\\[bwB]/.test(literal)) {
        asciiTrapHits.push(`${file}:${idx + 1} ${literal.slice(0, 60)}`);
      }
    }
  });
}
assert(asciiTrapHits.length === 0, `16. Нет \\b/\\w в регулярках с кириллицей (нарушений: ${asciiTrapHits.length}${asciiTrapHits.length ? ' → ' + asciiTrapHits[0] : ''})`);

// 17. Факт-сканер: ИНН/телефон/координаты — не факты, деньги и длительности — факты
const noise = FactDensityScorer.calculate("ООО «Вылет», ИНН 5032112233, телефон +7 498 000-11-24, координаты 55.678/37.263, версия 1.02.");
const real = FactDensityScorer.calculate("Смена 11 часов стоит 13 200 ₽, страховка 3 000 000 ₽, наряд-допуск оформляем за 2 часа, ППР за 4 дня.");
assert(noise.factsCount <= 1, "17a. Реквизиты и версии не надувают факт-плотность");
assert(real.factsCount >= 4 && /3 000 000/.test(real.factsFound.join(' ')), "17b. Деньги и длительности считаются фактами");

// 18. E2E: аудит клиентского проекта проходит гейт студии без блокирующих
const { auditProject } = await import('./core-engine/lib/audit.js');
const report = await auditProject({ projectDir: path.resolve('projects/client-vylet'), rootDir: process.cwd(), strict: true });
assert(report.blockers === 0 && report.passed && report.originality.score >= 90 && report.checks.some((c) => c.id === 'SYS-09' && c.score === 100), `18. E2E-аудит client-vylet: ${report.originality.score}/100, блокирующих ${report.blockers}`);

// 19. Extractor прозы: апостроф в JSX не должен «съедать» соседние строки копирайта
const tricky = [
  "export const C = () => {",
  "  const [t, setT] = useState('user’s can’t case');",
  "  const SLOP = ['В современном цифровом мире мы предлагаем уникальный опыт'];",
  "  return <p>Мы не просто делаем сайты, а воплощаем мечты</p>;",
  "};"
].join("\n");
const prose19 = ClicheDetector.extractProseWithLines(tricky);
const joined19 = prose19.map((c) => c.text).join(" | ");
assert(/мы предлагаем/iu.test(joined19) && /не просто/iu.test(joined19), "19a. Extractor находит копипаст после строк с апострофами");
assert(prose19.find((c) => /мы предлагаем/iu.test(c.text))?.line === 3, "19b. Номера строк прозы указывают на файл, а не на выжимку");

// 20. Фотоприёмка: letterbox, кадр, бюджет веса
const photos = await import('./core-engine/lib/photos.js');
const letterbox = Array.from({ length: 60 }, (_, i) => (i < 10 || i >= 50 ? { mean: 2, spread: 1 } : { mean: 120, spread: 40}));
const trimmed = photos.trimProfile(letterbox);
assert(trimmed.offset === 10 && trimmed.length === 40 && trimmed.trimmed === 20, "20a. Чёрные полосы телефона срезаются по профилю яркости");
const night = Array.from({ length: 60 }, () => ({ mean: 5, spread: 90 }));
assert(photos.trimProfile(night).trimmed === 0, "20b. Тёмный сюжет (ночная смена) не режется");
const box = photos.cropBox(1600, 1200, 3, 2, 'center');
assert(box.width === 1600 && box.height === 1067 && box.top === 67 && box.axis === 'y', "20c. Кадр 3:2 из 4:3 режется по вертикали и центрируется");
assert(photos.pickRatio(4000, 3000).key === '4/3' && photos.pickRatio(3000, 4000).key === '3/4', "20d. Кадр подбирается к соотношению исходника");
assert(photos.focusFromEnergy([1, 1, 1, 9, 9, 9, 1, 1], 3) === 0.6, "20e. Автофокус ищет полосу с максимумом деталей");
assert(photos.weightVerdict(300 * 1024).ok === false && photos.weightVerdict(120 * 1024).ok === true, "20f. Бюджет веса снимка проверяется");
const region = photos.resolveRegion('0.62,0.71,0.18,0.05', 1600, 1067);
assert(region.left === 992 && region.width === 288, "20g. Зона размытия считается в долях и пикселях");
let regionFailed = false;
try { photos.resolveRegion('0.1,0.2', 100, 100); } catch { regionFailed = true; }
assert(regionFailed, "20h. Кривая зона размытия — ошибка, а не тихий пропуск");

// 21. Привязка фото к записи каталога/кейса
const sampleUnit = "{ id: 'agp-22', model: 'X', photo: 'aerial-22', available: 3 }";
const linked = photos.applyCatalogLink(sampleUnit, 'agp-22', { photo: 'aerial-22', ratio: '3/4' });
assert(/photoRatio: '3\/4'/.test(linked.code) && linked.changed, "21a. catalog.ts получает photo и photoRatio");
const noChange = photos.applyCatalogLink(sampleUnit, 'agp-22', { photo: 'aerial-22' });
assert(noChange.changed === false, "21b. Повторная приёмка не плодит дублей поля");
const sampleCase = "{\n  title: 'ЖК',\n  metrics: [{ value: '1', label: 'смен' }],\n  photo: 'case-facade'\n}";
const linkedCase = photos.applyCatalogLink(sampleCase, '#ЖК', { photo: 'case-facade', ratio: '4/3' });
assert(linkedCase.changed && /photoRatio: '4\/3'/.test(linkedCase.code), "21c. многострочный кейс с вложенными {} тоже правится");
assert(linkedCase.code.endsWith('}'), "21d. после правки объект остаётся валидным");

// 22. Пакетная приёмка: WhatsApp присылает горсть, часто с дублями
const waDir = fs.mkdtempSync('/tmp/wa-');
for (const name of ['IMG-20260902-WA0001.jpg', 'IMG-20260902-WA0002.JPG', 'заметка.txt']) {
  fs.writeFileSync(path.join(waDir, name), 'x');
}
const waRows = [
  { photo: 'aerial-16', id: 'agp-16', ratio: '3/4', filled: false },
  { photo: 'aerial-22', id: 'agp-22', ratio: '3/2', filled: true },
  { photo: 'case-facade', id: '#ЖК', ratio: '3/2', filled: false }
];
const waPlan = photos.planIntake({ inputs: [waDir, path.join(waDir, 'IMG-20260902-WA0001.jpg')], rows: waRows, auto: true });
assert(waPlan.jobs.length === 2 && waPlan.dropped === 1, "22a. Папка разворачивается, .txt игнорируется, дубль по имени отброшен");
assert(waPlan.jobs.map((j) => j.slot).join(',') === 'aerial-16,case-facade', "22b. --auto кладёт в свободные слоты и обходит занятые");
assert(waPlan.jobs.map((j) => j.link).join(',') === 'agp-16,#ЖК', "22c. --link подставляется из каталога, а не пишется руками");
const waShort = photos.planIntake({ inputs: [waDir], rows: waRows, slots: ['aerial-16'] });
assert(waShort.jobs.length === 0 && /слота/.test(waShort.error), "22d. Слотов меньше, чем снимков — ошибка, а не тихая потеря кадра");
const waSingle = photos.planIntake({ inputs: [path.join(waDir, 'IMG-20260902-WA0001.jpg')], rows: waRows, single: 'aerial-16', link: 'agp-16' });
assert(waSingle.jobs.length === 1 && waSingle.jobs[0].slot === 'aerial-16' && waSingle.jobs[0].link === 'agp-16', "22e. Одиночный файл со --slot работает как раньше");
fs.rmSync(waDir, { recursive: true, force: true });

console.log("\n==================================================");
const pct = total ? Math.round((passed / total) * 100) : 0;
console.log(`📊 ИТОГ: пройдено ${passed} из ${total} (${pct}%)`);
if (passed !== total) console.log(`❌ провалено ${total - passed} — студия не принимает релиз`);
console.log("==================================================");
process.exit(passed === total ? 0 : 1);
