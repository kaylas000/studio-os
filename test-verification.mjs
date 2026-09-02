import { ClicheDetector } from './library/02-anti-slop/ClicheDetector.ts';
import { GradientSlopDetector } from './library/02-anti-slop/GradientSlopDetector.ts';
import { FactDensityScorer } from './library/08-copywriting/FactDensityScorer.ts';
import { ReadabilityAnalyzer } from './library/08-copywriting/ReadabilityAnalyzer.ts';
import { ARCHETYPES } from './library/07-archetypes/TokenEngine.ts';
import { validateSEOContract } from './library/06-seo/seo.contracts.ts';
import JSZip from 'jszip';
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

console.log("\n==================================================");
const pct = total ? Math.round((passed / total) * 100) : 0;
console.log(`📊 ИТОГ: пройдено ${passed} из ${total} (${pct}%)`);
if (passed !== total) console.log(`❌ провалено ${total - passed} — студия не принимает релиз`);
console.log("==================================================");
process.exit(passed === total ? 0 : 1);
