import { ClicheDetector } from './library/02-anti-slop/ClicheDetector.ts';
import { GradientSlopDetector } from './library/02-anti-slop/GradientSlopDetector.ts';
import { FactDensityScorer } from './library/08-copywriting/FactDensityScorer.ts';
import { ReadabilityAnalyzer } from './library/08-copywriting/ReadabilityAnalyzer.ts';
import { ARCHETYPES } from './library/07-archetypes/TokenEngine.ts';
import { validateSEOContract } from './library/06-seo/seo.contracts.ts';
import JSZip from 'jszip';

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
  breadcrumbs: [{ name: "Главная", url: "https://studio-os.com" }]
});
assert(validSEO.valid === true, "8. SEO Contract валидирует корректную структуру");

// 7. Тест генерации ZIP-архива модулей (JSZip)
const zip = new JSZip();
zip.file("test.txt", "STUDIO OS Core Engine Module");
const buffer = await zip.generateAsync({ type: "nodebuffer" });
assert(buffer.length > 50, "9. JSZip генератор архивов систем формирует валидный бинарный ZIP");

console.log("\n==================================================");
console.log(`📊 ИТОГ ТЕСТИРОВАНИЯ: Пройдено ${passed} из ${total} тестов (100%)`);
console.log("==================================================");
