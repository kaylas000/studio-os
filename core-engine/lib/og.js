// core-engine/lib/og.js
// Техническая og-карточка для случая, когда фото парка ещё не приняты.
// Это не замена снимку и не «красивая картинка из нейросети»: векторная схема
// техники + выверенные числа из каталога. Как только в проект попадает фото,
// `studio photo --og` перезаписывает этот файл настоящим кадром.

import fs from 'node:fs';
import path from 'node:path';
import { weightVerdict } from './photos.js';

const esc = (value) =>
  String(value ?? '')
    .replace(/&/gu, '&amp;')
    .replace(/</gu, '&lt;')
    .replace(/>/gu, '&gt;')
    .replace(/"/gu, '&quot;')
    .replace(/'/gu, '&apos;');

const DEFAULT_TOKENS = {
  bgPrimary: '#05070c',
  bgSurface: '#0b1119',
  textPrimary: '#e8eef8',
  textSecondary: '#a8c6ff',
  accent: '#ffb020',
  telemetry: '#00f2fe'
};

const clip = (value, max) => {
  const line = String(value ?? '').trim();
  return line.length > max ? `${line.slice(0, max - 1).trimEnd()}…` : line;
};

/**
 * SVG карточки 1200×630 (формат, который берут VK, Telegram и поисковые превью).
 * Слева — схема машины, справа — строки только из данных проекта: сюда нельзя
 * вписать «24/7», если это не живёт в каталоге. Текст подрезается по ширине
 * колонки, потому что длина фактов приходит из данных и предсказать её нельзя.
 */
export function ogSvg({ width = 1200, height = 630, brand = '', tagline = '', facts = [], note = '', tokens = {} } = {}) {
  const t = { ...DEFAULT_TOKENS, ...tokens };
  const list = facts.filter(Boolean).slice(0, 6);
  const factLines = list
    .map(
      (line, i) =>
        `<text x="640" y="${212 + i * 42}" font-family="DejaVu Sans Mono, monospace" font-size="21" fill="${t.textPrimary}"><tspan fill="${t.accent}">·</tspan> ${esc(clip(line, 40))}</text>`
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${t.bgPrimary}"/>
  <g opacity="0.55">
    ${Array.from({ length: 15 }, (_, i) => `<line x1="0" y1="${i * 45}" x2="1200" y2="${i * 45}" stroke="${t.bgSurface}" stroke-width="1"/>`).join('')}
    ${Array.from({ length: 27 }, (_, i) => `<line x1="${i * 45}" y1="0" x2="${i * 45}" y2="630" stroke="${t.bgSurface}" stroke-width="1"/>`).join('')}
  </g>
  <text x="60" y="140" font-family="DejaVu Sans, sans-serif" font-size="78" font-weight="bold" letter-spacing="6" fill="${t.textPrimary}">${esc(clip(brand, 10))}</text>
  <text x="62" y="184" font-family="DejaVu Sans, sans-serif" font-size="18" fill="${t.textSecondary}">${esc(clip(tagline, 52))}</text>
  <g>
    <line x1="30" y1="524" x2="566" y2="524" stroke="${t.accent}" stroke-opacity="0.3"/>
    <rect x="40" y="390" width="380" height="96" rx="8" fill="${t.bgSurface}" stroke="${t.accent}" stroke-opacity="0.45"/>
    <rect x="64" y="330" width="130" height="64" rx="10" fill="${t.bgSurface}" stroke="${t.accent}" stroke-opacity="0.45"/>
    <circle cx="118" cy="506" r="30" fill="none" stroke="${t.textSecondary}" stroke-opacity="0.6" stroke-width="6"/>
    <circle cx="352" cy="506" r="30" fill="none" stroke="${t.textSecondary}" stroke-opacity="0.6" stroke-width="6"/>
    <line x1="436" y1="470" x2="436" y2="522" stroke="${t.accent}" stroke-width="10"/>
    <line x1="462" y1="482" x2="462" y2="522" stroke="${t.accent}" stroke-width="10"/>
    <polyline points="250,352 404,290 504,258" fill="none" stroke="${t.accent}" stroke-width="13" stroke-linecap="round"/>
    <polyline points="252,368 396,314 486,286" fill="none" stroke="${t.accent}" stroke-opacity="0.4" stroke-width="7" stroke-linecap="round"/>
    <rect x="504" y="246" width="70" height="44" rx="6" fill="none" stroke="${t.telemetry}" stroke-width="6"/>
    <line x1="578" y1="268" x2="578" y2="524" stroke="${t.telemetry}" stroke-opacity="0.35" stroke-dasharray="5 7"/>
    <line x1="566" y1="268" x2="590" y2="268" stroke="${t.telemetry}" stroke-opacity="0.35"/>
    <line x1="566" y1="524" x2="590" y2="524" stroke="${t.telemetry}" stroke-opacity="0.35"/>
  </g>
  <line x1="596" y1="92" x2="596" y2="560" stroke="${t.accent}" stroke-opacity="0.28"/>
  ${factLines}
  ${note ? `<text x="62" y="592" font-family="DejaVu Sans Mono, monospace" font-size="18" fill="${t.textSecondary}" opacity="0.85">${esc(clip(note, 68))}</text>` : ''}
</svg>`;
}

/**
 * Рендерит схему в JPEG по пути outPath. sharp подключается лениво: без него
 * приёмка не падает — gen-seo просто честно предупреждает, что og-файла нет.
 */
export async function renderTechnicalOg({ outPath, width = 1200, height = 630, quality = 78, ...card } = {}) {
  if (!outPath) throw new Error('renderTechnicalOg: нужен outPath');
  const mod = await import('sharp');
  const sharp = mod.default ?? mod.sharp ?? mod;
  const buf = await sharp(Buffer.from(ogSvg({ width, height, ...card }))).jpeg({ quality, mozjpeg: true }).toBuffer();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buf);
  return { outPath, width, height, bytes: buf.length, kb: Math.round(buf.length / 1024), weight: weightVerdict(buf.length) };
}
