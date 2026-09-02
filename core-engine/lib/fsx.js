// core-engine/lib/fsx.js
// Файловая обвязка для CLI: обход проекта, извлечение строк, цвет, таблица.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const SOURCE_EXT = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json', '.md'];
export const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'coverage', 'build', '.vite', '.turbo', 'test-results']);

export function walk(dir, filter = () => true, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.name !== '.nojekyll') continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, acc);
    else if (filter(full)) acc.push(full);
  }
  return acc;
}

export function readSources(root, predicate) {
  return walk(root, predicate).map((file) => ({
    file: path.relative(root, file),
    abs: file,
    code: fs.readFileSync(file, 'utf8')
  }));
}

export function importSafe(absPath) {
  return import(pathToFileURL(absPath).href);
}

/** Собирает человекочитаемые строки из исходника (для текстовых детекторов). */
export function collectStrings(code, { minWords = 3 } = {}) {
  const out = [];
  const literal = /(['"`])((?:\\.|(?!\1)[\s\S]){6,}?)\1/g;
  let m;
  while ((m = literal.exec(code))) {
    const raw = m[2].replace(/\\\$/g, '$').replace(/\{\{[^}]*\}\}/g, ' ').replace(/\$\{[^}]*\}/g, ' ');
    if (/^[\w@./#-]+$/.test(raw.trim())) continue; // пути, классы, имена
    if (!/[а-яёa-z]{3}/i.test(raw)) continue;
    const words = raw.match(/[\p{L}\p{N}]+/gu) ?? [];
    if (words.length < minWords) continue;
    out.push(raw.trim());
  }
  return out;
}

export function stripMarkup(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^\s*(import|export)[\s\S]*?;\s*$/gm, ' ')
    .replace(/<[A-Za-z/][^>]*>/g, ' ')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const color = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const ANSI = /\x1b\[[0-9;]*m/g;
/** Длина строки без управляющих последовательностей цвета. */
export function visibleLength(str) {
  return String(str).replace(ANSI, '').length;
}

export function pad(str, n) {
  const s = String(str);
  const len = visibleLength(s);
  return len >= n ? s : s + ' '.repeat(n - len);
}

export function fit(str, n) {
  const s = String(str);
  return visibleLength(s) <= n ? s : s.replace(ANSI, '').slice(0, Math.max(1, n - 1)) + '…';
}

export function bar(value, width = 22) {
  const filled = Math.max(0, Math.min(width, Math.round((value / 100) * width)));
  const ch = value >= 75 ? '█' : value >= 50 ? '▓' : '▒';
  const c = value >= 75 ? color.green : value >= 50 ? color.yellow : color.red;
  return `${c}${ch.repeat(filled) || '·'}${color.reset}${color.dim}${'░'.repeat(Math.max(0, width - filled))}${color.reset}`;
}

export function table(rows, columns, headerColor = color.cyan) {
  const lines = [];
  const head = columns.map((c) => pad(fit(c.label, c.width), c.width)).join('  ');
  lines.push(`${headerColor}${head}${color.reset}`);
  lines.push(`${color.dim}${'─'.repeat(head.length)}${color.reset}`);
  for (const row of rows) {
    lines.push(columns.map((c) => pad(fit(row[c.key] ?? '', c.width), c.width)).join('  '));
  }
  return lines.join('\n');
}
