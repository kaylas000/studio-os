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

## Фото: приёмка по одному снимку

Прислали фото — кладите в любую папку и запускайте:

```bash
node ../../core-engine/bin/studio.js photo ~/IMG-20260902-WA0018.jpg \
  --slot=aerial-22 --link=agp-22 --frame=3/2 --focus=auto --og
```

Что делает команда (`core-engine/lib/photos.js`, sharp + `--dry` для проверки без записи):

| Шаг | Зачем |
|---|---|
| поворот по EXIF-ориентации | телефонный снимок иначе ляжет на бок |
| срез чёрных полос (letterbox) | скриншоты и WhatsApp-кадры с полями; тёмную ночную смену не трогает |
| крой под кадр слота (`--frame=3/2`, `4/3`, `3/4`, `16/10`, `--native`) | рамка `.photo` обязана совпадать с пропорцией: иначе CLS-прыжок |
| `--focus=top\|center\|bottom\|auto` | `auto` ищет полосу с максимумом деталей — стрела не отрежется |
| снятие EXIF/GPS | в метаданных телефона — точка выезда на объект |
| вес ≤ 220 КБ (`--max=1600 --quality=82`) | бюджет одного снимка в первом экране |
| `--link=<id или #Заголовок>` | вписывает `photo` и `photoRatio` в `catalog.ts` / `copy.ts` — код не трогаем |
| `--og` | та же фотография → `public/og.jpg` 1200×630 для соцсетей (на него ссылается `seo.config.ts`) |
| `--blur=x,y,w,h` (доли кадра) | госномер и лица посторонних: `--blur=0.60,0.72,0.20,0.05` |

Список свободных слотов: `studio photo --list`. Проверка без записи: `--dry`.
После трёх-четырёх снимков — `npm run seo && npm run build && node scripts/smoke.mjs`.

Файлы живут в `src/assets/photos/<slot>.jpg` (имя = значение `photo` в каталоге), их `PhotoSlot`
подхватывает через `import.meta.glob` — правка кода не нужна. Пока файла нет, на месте слота
техническая плашка с именем и требуемым кадром: макет не выглядит сломанным.

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
