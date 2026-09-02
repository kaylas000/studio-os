// core-engine/lib/harvester.js
// `studio harvest` — перенос удачного блока из клиентского проекта в библиотеку студии.
// Деперсонализация не «на глаз»: имена клиента вырезаются по manifest.clientAliases,
// относительные импорты переводятся на алиасы, считается подпись содержимого.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SCRUB_PATTERNS = [
  /(?:телефон|тел\.?)\s*[+8][\d\s()-]{8,}/gi,
  /[+8]\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}/g,
  /[\w.+-]+@[\w-]+\.[\w.]+/g,
  /(?:ООО|ЗАО|АО|ИП)\s+[«"'][^»"']+[»"']/g,
  /https?:\/\/(?!example\.com)[\w./-]+/g
];

function resolveBlock(projectDir, block) {
  const candidates = [
    path.join(projectDir, block),
    path.join(projectDir, 'src/components', `${block}.tsx`),
    path.join(projectDir, 'src/sections', `${block}.tsx`),
    path.join(projectDir, 'src/components', `${block}.ts`),
    path.join(projectDir, 'src/sections', `${block}.ts`),
    path.join(projectDir, 'src/components', block),
    path.join(projectDir, 'src/sections', block)
  ];
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    if (fs.statSync(c).isDirectory()) {
      return { kind: 'dir', path: c, files: walkFiles(c) };
    }
    return { kind: 'file', path: c, files: [c] };
  }
  throw new Error(
    `Блок «${block}» не найден в ${path.basename(projectDir)}. Передайте имя файла (например cyber-hero) или путь src/sections/05-Fleet.tsx`
  );
}

function walkFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx?|css|json|glsl)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

export function harvest({ rootDir, projectDir, block, category = 'components', note = '', standards = [] }) {
  const found = resolveBlock(projectDir, block);
  const manifestPath = path.join(projectDir, 'studio.project.json');
  const project = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
  const aliases = (project.clientAliases ?? [project.brand]).filter(Boolean);

  const name = path.basename(found.kind === 'dir' ? found.path : found.path.replace(/\.[^.]+$/, ''));
  const target = path.join(rootDir, 'library', category, name);
  if (fs.existsSync(target)) {
    throw new Error(`library/${category}/${name} уже существует — обновите вручную или удалите перед харвестингом`);
  }
  fs.mkdirSync(target, { recursive: true });

  const copied = [];
  let lines = 0;
  let scrubbed = 0;
  const deps = new Set();

  for (const file of found.files) {
    const rel = found.kind === 'dir' ? path.relative(found.path, file) : path.basename(file);
    const dest = path.join(target, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    let code = fs.readFileSync(file, 'utf8');
    const before = code;

    // 1. алиасы вместо относительных путей — иначе блок выпадет из библиотеки
    code = code
      .replace(/from\s+['"](?:\.\.\/)+(?:src\/)?([^'"]+?)['"]/g, (m, p) => (p.includes('library') ? m : `from '@/${p}'`))
      .replace(/from\s+['"](?:\.\.\/)+library\/([^'"]+?)['"]/g, "from '@library/$1'");

    // 2. деперсонализация
    for (const alias of aliases) {
      const safe = alias.replace(/[.*+?^${}()|[\]\\«»"']/g, (c) => `\\${c}`);
      code = code.replace(new RegExp(safe, 'g'), 'БРЕНД');
    }
    for (const re of SCRUB_PATTERNS) {
      code = code.replace(re, (m) => {
        scrubbed++;
        return `[SCRUBBED:${m.length}]`;
      });
    }

    for (const imp of code.matchAll(/from\s+['"]([a-z@][^'"]*)['"]/g)) deps.add(imp[1].split('/').slice(0, 2).join('/'));

    if (code !== before) scrubbed += 0;
    fs.writeFileSync(dest, code);
    lines += code.split('\n').length;
    copied.push(rel);
  }

  const hash = crypto
    .createHash('sha256')
    .update(copied.map((c) => fs.readFileSync(path.join(target, c))).join('\n'))
    .digest('hex')
    .slice(0, 16);

  const manifest = {
    name,
    category,
    harvestedAt: new Date().toISOString(),
    originProject: project.name ?? path.basename(projectDir),
    originBlock: found.kind === 'dir' ? `${block}/` : path.basename(found.files[0]),
    archetype: project.archetype ?? '—',
    files: copied,
    lines,
    externalDeps: [...deps].filter((d) => !d.startsWith('@/')),
    stripped: scrubbed,
    standards: standards.length ? standards : ['SYS-01', 'SYS-02', 'SYS-03', 'SYS-04', 'SYS-06', 'SYS-07', 'SYS-09'],
    integrity: `sha256:${hash}`,
    note
  };
  fs.writeFileSync(path.join(target, 'manifest.json'), JSON.stringify(manifest, null, 2));

  return { target: path.relative(rootDir, target), manifest };
}
