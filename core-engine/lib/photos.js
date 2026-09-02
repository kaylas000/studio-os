// core-engine/lib/photos.js
// Приёмка фотографий клиента: одно фото → один кадр нужной пропорции, без EXIF/GPS,
// в бюджете веса. Делается здесь, а не «на глаз в Фотшопе», потому что к фото те же
// требования, что и к вёрстке: предсказуемый aspect-ratio (иначе каркас прыгает),
// снятые метаданные (в телефоне они содержат GPS точки), лимит веса для LCP.
import fs from 'node:fs';
import path from 'node:path';

/** Кадры, которые умеет рамка PhotoSlot. Всё остальное — обрезать до ближайшего. */
export const FRAME_RATIOS = ['1/1', '3/2', '4/3', '3/4', '16/10', '16/9', '9/16'];

/** Бюджет одного снимка в первом экране/сетке, КБ. Свыше — деградация LCP. */
export const PHOTO_BUDGET_KB = 220;

/** Профиль |∇| вдоль оси: по столбцам ('x') или по строкам ('y'). */
export function gradientProfile(px, pw, ph, axis = 'x') {
  const out = [];
  if (axis === 'x') {
    for (let x = 0; x < pw; x++) {
      let energy = 0;
      for (let y = 1; y < ph; y++) energy += Math.abs(px[y * pw + x] - px[(y - 1) * pw + x]);
      out.push(energy / Math.max(1, ph - 1));
    }
  } else {
    for (let y = 0; y < ph; y++) {
      let energy = 0;
      for (let x = 1; x < pw; x++) energy += Math.abs(px[y * pw + x] - px[y * pw + x - 1]);
      out.push(energy / Math.max(1, pw - 1));
    }
  }
  return out;
}

export function parseRatio(raw, fallback = null) {
  if (raw == null) return fallback;
  const m = String(raw).trim().match(/^(\d+(?:\.\d+)?)\s*[:/]\s*(\d+(?:\.\d+)?)$/u);
  if (!m) return fallback;
  const w = parseFloat(m[1]);
  const h = parseFloat(m[2]);
  if (!w || !h) return fallback;
  return { w, h, key: `${w}/${h}` };
}

/** Ближайший разрешённый кадр к соотношению исходника. */
export function pickRatio(width, height, allowed = FRAME_RATIOS) {
  const src = width / height;
  let best = allowed[0];
  let bestDelta = Infinity;
  for (const candidate of allowed) {
    const ratio = parseRatio(candidate);
    const delta = Math.abs(ratio.w / ratio.h - src);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = candidate;
    }
  }
  return { key: best, delta: Math.round(bestDelta * 1000) / 1000 };
}

/**
 * Прямоугольник кадра из srcW×srcH с фокусом по короткой оси.
 * focus: 'center' | 'top' | 'bottom' | 'left' | 'right' | 0..1
 * (0 = прижаться к началу оси, 1 = к концу; по вертикали 0 = верх кадра).
 */
export function cropBox(srcW, srcH, ratioW, ratioH, focus = 'center') {
  const target = ratioW / ratioH;
  let width = srcW;
  let height = srcH;
  let axis = 'none';
  if (srcW / srcH > target + 1e-6) {
    width = Math.max(1, Math.round(srcH * target));
    axis = 'x';
  } else if (srcW / srcH < target - 1e-6) {
    height = Math.max(1, Math.round(srcW / target));
    axis = 'y';
  }
  const t = clampFocus(focus, axis);
  const slack = axis === 'x' ? srcW - width : axis === 'y' ? srcH - height : 0;
  const offset = Math.round(slack * t);
  return {
    left: axis === 'x' ? offset : 0,
    top: axis === 'y' ? offset : 0,
    width,
    height,
    axis,
    lost: slack
  };
}

export function clampFocus(focus, axis) {
  if (typeof focus === 'number' && Number.isFinite(focus)) return Math.min(1, Math.max(0, focus));
  const map = { center: 0.5, top: 0, bottom: 1, left: 0, right: 1, auto: 0.5 };
  if (focus in map) return map[focus];
  // для горизонта допустимы только left/right/center — зеркалим на вертикаль
  if (axis === 'y' && (focus === 'left' || focus === 'right')) return 0.5;
  if (axis === 'x' && (focus === 'top' || focus === 'bottom')) return 0.5;
  return 0.5;
}

/**
 * Автофокус по энергии граней: берём профиль |∇| (по строкам или столбцам)
 * и выбираем окно размером с кадр там, где детальнее всего. Работает на
 * уменьшенном灰-изображении, поэтому цена — доли миллисекунды.
 */
export function focusFromEnergy(profile, windowSize) {
  if (!Array.isArray(profile) || profile.length < 3 || windowSize >= profile.length) return 0.5;
  let bestStart = 0;
  let bestScore = -1;
  let running = 0;
  for (let i = 0; i < windowSize; i++) running += profile[i];
  bestScore = running;
  for (let start = 1; start + windowSize <= profile.length; start++) {
    running += profile[start + windowSize - 1] - profile[start - 1];
    if (running > bestScore) {
      bestScore = running;
      bestStart = start;
    }
  }
  const span = profile.length - windowSize;
  return span > 0 ? Math.round((bestStart / span) * 100) / 100 : 0.5;
}

/**
 * Поиск letterbox-полей (чёрные полосы от телефона/скриншота) по средним яркостям.
 * Полоса снимается только если она действительно однотонная — иначе это тёмный сюжет,
 * и резать его нельзя.
 */
export function trimProfile(profile, { threshold = 16, varianceLimit = 8, minBar = 2 } = {}) {
  const isBar = (i) => profile[i].mean <= threshold && profile[i].spread <= varianceLimit;
  let start = 0;
  while (start < profile.length && isBar(start)) start++;
  let end = profile.length - 1;
  while (end >= 0 && isBar(end)) end--;
  // целиком «тёмный» кадр (ночная смена) не режем никогда
  if (start > end) return { offset: 0, length: profile.length, trimmed: 0 };
  const trimmed = start + (profile.length - 1 - end);
  const length = end - start + 1;
  if (trimmed < minBar || length < minBar) return { offset: 0, length: profile.length, trimmed: 0 };
  return { offset: start, length, trimmed };
}

/** «0.62,0.71,0.18,0.05» → пиксельный прямоугольник размытия (номерной знак, лицо). */
export function resolveRegion(raw, width, height) {
  if (!raw) return null;
  const nums = String(raw)
    .split(/[,\s/]+/u)
    .filter(Boolean)
    .map(Number);
  if (nums.length !== 4 || nums.some((n) => !Number.isFinite(n))) {
    throw new Error('--blur ждёт четыре числа x,y,w,h в долях кадра, например 0.62,0.71,0.18,0.05');
  }
  const [x, y, w, h] = nums;
  const isFraction = Math.max(x, y, w, h) <= 1.001;
  const left = Math.round(isFraction ? x * width : x);
  const top = Math.round(isFraction ? y * height : y);
  const boxW = Math.round(isFraction ? w * width : w);
  const boxH = Math.round(isFraction ? h * height : h);
  if (boxW < 4 || boxH < 4) throw new Error('область размытия слишком маленькая (меньше 4px)');
  return {
    left: Math.max(0, Math.min(width - 1, left)),
    top: Math.max(0, Math.min(height - 1, top)),
    width: Math.max(4, Math.min(width - left, boxW)),
    height: Math.max(4, Math.min(height - top, boxH))
  };
}

export function weightVerdict(bytes) {
  const kb = Math.round(bytes / 1024);
  if (kb <= PHOTO_BUDGET_KB) return { kb, ok: true, hint: `в бюджете (${PHOTO_BUDGET_KB} КБ)` };
  return {
    kb,
    ok: false,
    hint: `сверх бюджета ${PHOTO_BUDGET_KB} КБ: поднимите --quality или ужмите --max-width`
  };
}

/**
 * Правка catalog.ts: привязка снимка к единице/кейсу. Возвращает новый исходник —
 * тесты проверяют его без файловой системы.
 */
/**
 * Поиск тела объекта по ключу (`id: '…'` или `title: '…'`) со счётчиком вложенных
 * скобок — записи кейсов многострочные и содержат metrics: [{ … }].
 */
export function findObjectSpan(source, needle) {
  const at = source.indexOf(needle);
  if (at === -1) return null;
  let open = source.lastIndexOf('{', at);
  if (open === -1) return null;
  let depth = 0;
  for (let i = open; i < source.length; i++) {
    const ch = source[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return { start: open, end: i + 1, text: source.slice(open, i + 1) };
    }
  }
  return null;
}

export function applyCatalogLink(source, key, { photo, ratio } = {}) {
  if (!key) return { code: source, changed: false, entry: null };
  const isCase = key.startsWith('#');
  const value = (isCase ? key.slice(1) : key).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const quoteName = isCase ? 'title' : 'id';
  const needleMatch = source.match(new RegExp(`${quoteName}:\\s*'${value}'`, 'u'));
  if (!needleMatch) throw new Error(`нет записи ${quoteName}: '${isCase ? key.slice(1) : key}' в этом файле`);
  const span = findObjectSpan(source, needleMatch[0]);
  if (!span) throw new Error(`не удалось найти границу объекта ${quoteName}: '${isCase ? key.slice(1) : key}'`);

  let body = span.text.replace(/\s*\}$/u, '');
  const setField = (name, val) => {
    if (val === null) return body.replace(new RegExp(`,?\\s*${name}:\\s*'[^']*'`, 'u'), '');
    const fieldRe = new RegExp(`${name}:\\s*'[^']*'`, 'u');
    body = fieldRe.test(body) ? body.replace(fieldRe, `${name}: '${val}'`) : `${body}, ${name}: '${val}'`;
  };
  if (photo) setField('photo', photo);
  if (ratio !== undefined) setField('photoRatio', ratio);
  const next = `${body} }`;
  if (next === span.text) return { code: source, changed: false, entry: span.text };
  return { code: source.slice(0, span.start) + next + source.slice(span.end), changed: true, entry: span.text };
}

/** Основной вход: принять один файл в проект под конкретный слот. */
export async function importPhoto(opts) {
  const {
    file,
    projectDir,
    slot,
    frame = null,
    focus = 'center',
    maxWidth = 1600,
    quality = 82,
    blur = null,
    og = false,
    keepNative = false,
    link = null,
    format = 'jpeg',
    dryRun = false
  } = opts;

  let sharp;
  try {
    const mod = await import('sharp');
    sharp = mod.default ?? mod.sharp ?? mod;
    if (typeof sharp !== 'function') throw new Error('no export');
  } catch {
    throw new Error('нужен sharp: npm i -D sharp (он же умеет читать EXIF и поворачивать по ориентации)');
  }
  if (!fs.existsSync(file)) throw new Error(`файл не найден: ${file}`);
  if (!slot || !/^[a-z0-9][a-z0-9_-]*$/i.test(slot)) {
    throw new Error('имя слота — латиница/цифры/дефис, как поле photo в catalog.ts (например aerial-22)');
  }

  const srcMeta = await sharp(file, { failOn: 'none' }).metadata();
  const rotate = srcMeta.orientation >= 5 && srcMeta.orientation <= 8;
  const srcW = rotate ? srcMeta.height : srcMeta.width;
  const srcH = rotate ? srcMeta.width : srcMeta.height;
  const notes = [];
  if (srcMeta.orientation && srcMeta.orientation > 1) notes.push(`ориентация ${srcMeta.orientation} → поворот применён`);
  if (srcMeta.gps || srcMeta.exififtag) notes.push('EXIF/GPS с исходника сняты (в выводе метаданных нет)');

  // 1. letterbox: считаем яркость строк/столбцов на уменьшенном кадре
  const probeWidth = 120;
  const probeHeight = Math.max(1, Math.round((srcH / srcW) * probeWidth));
  const probe = await sharp(file)
    .rotate()
    .greyscale()
    .resize({ width: probeWidth, height: probeHeight, fit: 'inside' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = probe.data;
  const pw = probe.info.width;
  const ph = probe.info.height;
  const rows = [];
  for (let y = 0; y < ph; y++) {
    let min = 255;
    let max = 0;
    let sum = 0;
    for (let x = 0; x < pw; x++) {
      const v = px[y * pw + x];
      sum += v;
      if (v < min) min = v;
      if (v > max) max = v;
    }
    rows.push({ mean: sum / pw, spread: max - min });
  }
  const cols = [];
  for (let x = 0; x < pw; x++) {
    let min = 255;
    let max = 0;
    let sum = 0;
    for (let y = 0; y < ph; y++) {
      const v = px[y * pw + x];
      sum += v;
      if (v < min) min = v;
      if (v > max) max = v;
    }
    cols.push({ mean: sum / ph, spread: max - min });
  }
  const trimY = trimProfile(rows);
  const trimX = trimProfile(cols);
  let work = sharp(file).rotate();
  let curW = srcW;
  let curH = srcH;
  if (trimY.trimmed > 0) {
    const top = Math.round((trimY.offset / ph) * srcH);
    const height = Math.round((trimY.length / ph) * srcH);
    work = work.extract({ left: 0, top, width: curW, height });
    curH = height;
    notes.push(`срезаны чёрные полосы сверху/снизу: ${trimY.trimmed / ph > 0.9 ? 'весь кадр?!' : `${Math.round((trimY.trimmed / ph) * srcH)}px`}`);
  }
  if (trimX.trimmed > 0) {
    const left = Math.round((trimX.offset / pw) * srcW);
    const width = Math.round((trimX.length / pw) * srcW);
    work = work.extract({ left, top: 0, width, height: curH });
    curW = width;
    notes.push(`срезаны поля по бокам: ${Math.round((trimX.trimmed / pw) * srcW)}px`);
  }

  // 2. кадр
  const chosen = frame ? parseRatio(frame) : frame === null && keepNative ? null : parseRatio(pickRatio(curW, curH).key);
  let crop = { left: 0, top: 0, width: curW, height: curH, axis: 'none', lost: 0 };
  if (chosen) {
    let focusValue = focus;
    if (focus === 'auto') {
      // ось обрезки известна только после расчёта кадра: считаем её по соотношению
      const cropAxis = curW / curH > chosen.w / chosen.h ? 'x' : 'y';
      const probeWindow =
        cropAxis === 'x'
          ? Math.round((Math.round(curH * (chosen.w / chosen.h)) / curW) * pw)
          : Math.round((Math.round(curW / (chosen.w / chosen.h)) / curH) * ph);
      focusValue = focusFromEnergy(gradientProfile(px, pw, ph, cropAxis), Math.max(1, probeWindow));
      notes.push(`автофокус по деталям: t=${focusValue}`);
    }
    const full = cropBox(curW, curH, chosen.w, chosen.h, focusValue);
    work = work.extract({ left: full.left, top: full.top, width: full.width, height: full.height });
    crop = full;
    curW = full.width;
    curH = full.height;
  }

  // 3. размытие приватных зон (номер, лицо) — по запросу клиента
  if (blur) {
    const region = resolveRegion(blur, curW, curH);
    const patch = await sharp(file)
      .rotate()
      .resize({ width: curW, height: curH, fit: 'fill' })
      .extract(region)
      .blur(Math.max(6, Math.round(Math.max(region.width, region.height) / 6)))
      .toBuffer();
    work = work.composite([{ input: patch, left: region.left, top: region.top }]);
    notes.push(`размыта зона ${region.width}×${region.height}px`);
  }

  const outExt = format === 'webp' ? 'webp' : format === 'png' ? 'png' : 'jpg';
  const outPath = path.join(projectDir, 'src/assets/photos', `${slot}.${outExt}`);
  const pipeline = work
    .resize({ width: maxWidth, height: maxWidth, fit: 'inside', withoutEnlargement: true })
    .toColorspace('srgb');
  const encode =
    outExt === 'webp'
      ? pipeline.webp({ quality, effort: 6 })
      : outExt === 'png'
        ? pipeline.png({ palette: true })
        : pipeline.jpeg({ quality, progressive: true, mozjpeg: true });
  const info = await encode.toBuffer({ resolveWithObject: true });
  const verdict = weightVerdict(info.info.size);

  const report = {
    slot,
    source: (() => { const rel = path.relative(process.cwd(), file); return rel.startsWith('..') ? file : rel; })(),
    sourceSize: `${srcW}×${srcH}`,
    result: `${info.info.width}×${info.info.height}`,
    ratio: chosen ? chosen.key : `${info.info.width / info.info.height > 1 ? 'родной (горизонтальный)' : 'родной (вертикальный)'}`,
    croppedPx: crop.lost,
    weight: verdict,
    outDir: (() => { const rel = path.relative(process.cwd(), path.dirname(outPath)); return rel.startsWith('..') ? path.dirname(outPath) : rel; })(),
    notes,
    warnings: [],
    dryRun
  };
  if (!verdict.ok) report.warnings.push(`вес ${verdict.hint}`);
  if (report.result.startsWith(`${maxWidth}×`) && Math.max(srcW, srcH) > maxWidth * 1.6) {
    report.warnings.push('исходник сильно больше 1600px — для полноэкранного героя уменьшите --max-width отдельно');
  }
  report.warnings.push('проверьте кадр: госномера и лица посторонних перед публикацией размываются флагом --blur');

  if (!dryRun) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, info.data);
    report.written = path.relative(process.cwd(), outPath);
    if (og) {
      const ogBox = cropBox(info.info.width, info.info.height, 1200, 630, focus === 'auto' ? 0.5 : focus);
      const ogOut = await sharp(info.data)
        .extract({ left: ogBox.left, top: ogBox.top, width: Math.max(1, ogBox.width), height: Math.max(1, ogBox.height) })
        .resize({ width: 1200, height: 630, fit: 'cover' })
        .jpeg({ quality: 80, progressive: true })
        .toBuffer({ resolveWithObject: true });
      const ogPath = path.join(projectDir, 'public/og.jpg');
      fs.mkdirSync(path.dirname(ogPath), { recursive: true });
      fs.writeFileSync(ogPath, ogOut.data);
      report.og = { file: path.relative(process.cwd(), ogPath), size: `${ogOut.info.width}×${ogOut.info.height}`, kb: Math.round(ogOut.info.size / 1024) };
    }
    if (link) {
      const candidates = ['src/content/catalog.ts', 'src/content/copy.ts'].map((rel) => path.join(projectDir, rel));
      let done = false;
      for (const target of candidates) {
        if (!fs.existsSync(target)) continue;
        const original = fs.readFileSync(target, 'utf8');
        let patched;
        try {
          patched = applyCatalogLink(original, link, { photo: slot, ratio: chosen ? chosen.key : null });
        } catch {
          continue; // здесь такой записи нет — пробуем следующий файл
        }
        if (patched.changed) {
          fs.writeFileSync(target, patched.code);
          report.linked = `${path.basename(target)} → ${link}: photo '${slot}'${chosen ? `, photoRatio '${chosen.key}'` : ''}`;
        }
        done = true;
        break;
      }
      if (!done) throw new Error(`ни в catalog.ts, ни в copy.ts нет записи ${link} (для кейса — '#Заголовок')`);
    }
  }
  return report;
}

/**
 * Список слотов проекта: что уже занято и куда класть следующий снимок.
 * Смотрим и в catalog.ts (единицы парка), и в copy.ts (кейсы) — поле photo есть там и там.
 */
export async function listSlots(projectDir) {
  const photosDir = path.join(projectDir, 'src/assets/photos');
  const taken = new Set(
    fs.existsSync(photosDir)
      ? fs
          .readdirSync(photosDir)
          .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
          .map((f) => f.replace(/\.[^.]+$/i, ''))
      : []
  );
  const rows = [];
  for (const rel of ['src/content/catalog.ts', 'src/content/copy.ts']) {
    const file = path.join(projectDir, rel);
    if (!fs.existsSync(file)) continue;
    const code = fs.readFileSync(file, 'utf8');
    const re = /photo:\s*'([^']+)'/gu;
    let m;
    while ((m = re.exec(code))) {
      const before = code.slice(Math.max(0, m.index - 500), m.index);
      const id = (before.match(/id:\s*'([^']+)'/u) ?? [])[1] ?? null;
      const title = (before.match(/title:\s*'([^']+)'/u) ?? [])[1] ?? null;
      const model = (before.match(/model:\s*'([^']+)'/u) ?? [])[1] ?? (title ? `${title}${id ? '' : ' · кейс'}` : rel);
      const ratio = (code.slice(m.index, m.index + 600).match(/photoRatio:\s*'([^']+)'/u) ?? [])[1] ?? '3/2';
      rows.push({
        photo: m[1],
        id: title && !id ? `#${title}` : id,
        model,
        ratio,
        filled: taken.has(m[1])
      });
    }
  }
  const unique = new Map(rows.map((r) => [`${r.photo}|${r.id}`, r]));
  return [...unique.values()];
}
