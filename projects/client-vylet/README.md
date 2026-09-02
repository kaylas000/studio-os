# ВЫЛЕТ · спецтехника на смену

Клиентский проект на STUDIO OS: автовышки, автокраны, манипуляторы и земтехника
с заказом работ. Архетип — **Cyber-Tech** (HUD-панели, срезанные углы, моноширинная
телеметрия), анти-слоп-контур включён в сборку.

```bash
npm run dev --workspace=projects/client-vylet     # порт 3000
node ../../core-engine/bin/studio.js audit .      # аудит 9 стандартов (или npm run audit)
npm run seo                                       # перегенерить title/description/JSON-LD в index.html
npm run build && node scripts/smoke.mjs           # сборка + смоук-проверка монтирования
```

## Что менять под клиента (порядок, а не список)

1. **`src/content/catalog.ts`** — модели, год, наработка, цены за смену, количество свободных единиц.
   Все числа в интерфейсе приходят отсюда: карточки, таблица, калькулятор, `priceRange` в Schema.org.
2. **`src/content/copy.ts`** — тексты. Формула PAS и факт-плотность проверяются аудитом:
   оценочные слова («качественно», «индивидуальный подход», «широкий спектр») роняют Originality Score.
3. **`src/content/seo.config.ts`** — title 30–70, description 70–165 символа, адрес, телефон, `sameAs`, FAQ.
   После правки — `npm run seo`, иначе мета в `index.html` разъедется с контрактом.
4. **`src/content/brand.ts`** — палитра поверх архетипа. Это единственный файл, где меняются цвета:
   он же красит CSS-переменные, и он же проходит APCA-гейт (`studio audit` не даст поставить нечитаемый цвет).

## Фото

Положите снимки в `src/assets/photos/` с именами из `catalog.ts` (поле `photo`):

```
aerial-12.jpg  aerial-22.jpg  aerial-34.jpg  aerial-44.jpg
crane-25.jpg   crane-40.jpg   crane-100.jpg
manipulator-32.jpg  manipulator-70.jpg
tractor-mtz.jpg  excavator-jcb.jpg  excavator-20.jpg
case-facade.jpg  case-crane.jpg  case-earth.jpg
```

`PhotoSlot` подхватывает файлы через `import.meta.glob` — код править не нужно.
Пока файла нет, на месте слота остаётся техническая плашка с именем файла и требуемыми
пропорциями (3:2, от 1200 px по ширине). Формат jpg/webp, для портрета техники — 4:5.

## Что уже встроено из библиотеки

| SYS | Реализация в проекте |
|---|---|
| 01 | `engine/useMotion.ts` — Lenis + GSAP + ScrollTrigger, `MotionGuard` (reduced-motion, Data Saver, батарея, слабый GPU) |
| 02 | тексты и палитра под `ClicheDetector` + `GradientSlopDetector`, Originality Score 92/100 |
| 03 | `fluid-system.css`, `safe-area.css`, таблица в `ViewportMatrix` (19 вьюпортов), touch-target ≥ 44 px |
| 04 | все отступы — `var(--space-*)`; `Box/Stack/Section` из `primitives.tsx` |
| 05 | `components/Intro.tsx` на `IntroEngine`: Skip + Esc, лимит по FPS, полный `dispose`, статика без WebGL |
| 06 | `content/seo.config.ts` → валидация контракта + JSON-LD (LocalBusiness, Service, BreadcrumbList, FAQPage), h1 в первом ответе |
| 07 | архетип cyber-tech + `brand.ts`, контраст считается по APCA (мин. 75 Lc для body) |
| 08 | PAS в текстах, факт-плотность и читаемость — метрики в `studio.audit.json` |
| 09 | `StaticCodeAuditor`: rAF-отмена, `dispose()` WebGL, Error Boundary, alt/размеры у `<img>` |

## Черновые данные

Модели, цены, телефон, ИНН и адреса в каркасе — **заглушки** (см. `FOOTER.dataNotice`).
Перед публикацией заменить на реестровые и поставить `canonical` на рабочий домен.
Форма заявки собирает письмо на стороне браузера: бэкенд подключается одним `fetch`
в `10-OrderForm.tsx`, контракт payload уже зафиксирован.
