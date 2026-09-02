// core-engine/lib/vault.js
// `studio vault` — реальный инвентарь ассетов: заголовки форматов читаются из байт,
// а не берутся из воздуха. Сжатие/конвертация — только командами, которые здесь и печатаются.

import fs from 'node:fs';
import path from 'node:path';

export const VAULT_DIRS = ['3d-models', 'shaders', 'sounds', 'fonts', 'textures'];

function pngSize(buf) {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  return null;
}

function jpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

function webpSize(buf) {
  if (buf.length < 30 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X') return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
  if (chunk === 'VP8 ') return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
  if (chunk === 'VP8L') {
    const bits = buf.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function gltfInfo(buf, file) {
  const head = buf.subarray(0, Math.min(buf.length, 65536)).toString('latin1');
  const glb = buf.length > 12 && buf.toString('ascii', 0, 4) === 'glTF';
  return {
    container: glb ? 'GLB' : 'glTF',
    draco: /KHR_draco_mesh_compression|DRACONodeEncoder|draco3d/i.test(head),
    ktx2: /KHR_texture_basisu|KTX 2/.test(head),
    version: glb ? buf.readUInt32LE(4) : null,
    bytes: buf.length,
    file
  };
}

function fontInfo(buf) {
  const tag = buf.length >= 4 ? buf.toString('ascii', 0, 4) : '';
  const map = {OTTO: 'OTF (CFF)', true: 'TTF', ttcf: 'TTC collection', wOFF: 'WOFF', WOFF: 'WOFF2'};
  const name = [...buf.subarray(0, 4096)].reduce((acc, b) => (b >= 32 && b < 127 ? acc + String.fromCharCode(b) : acc + ' '), '');
  const hasCyrillic = /[Ѐ-ӿ]/.test(name);
  return { format: map[tag] ?? (tag.trim() || 'unknown'), cyrillicHint: hasCyrillic };
}

export function inspectVault(rootDir) {
  const groups = [];
  for (const dir of VAULT_DIRS) {
    const abs = path.join(rootDir, 'library/assets-vault', dir);
    const items = [];
    if (fs.existsSync(abs)) {
      for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
        if (entry.name.startsWith('.') || entry.name.endsWith('.md')) continue;
        if (!entry.isFile()) continue;
        const file = path.join(abs, entry.name);
        const stat = fs.statSync(file);
        const buf = fs.readFileSync(file).subarray(0, 131072);
        const ext = path.extname(entry.name).toLowerCase();
        const row = { name: entry.name, bytes: stat.size, kind: ext.replace('.', '') || 'нет расширения' };

        if (ext === '.png') row.dimensions = pngSize(buf);
        else if (ext === '.jpg' || ext === '.jpeg') row.dimensions = jpegSize(buf);
        else if (ext === '.webp') row.dimensions = webpSize(buf);
        else if (ext === '.glb' || ext === '.gltf') Object.assign(row, gltfInfo(fs.readFileSync(file), entry.name));
        else if (ext === '.otf' || ext === '.ttf' || ext === '.woff' || ext === '.woff2') Object.assign(row, fontInfo(buf));
        else if (ext === '.wav') row.sampleRate = buf.length > 28 ? buf.readUInt32LE(24) : null;
        else if (ext === '.glsl' || ext === '.vert' || ext === '.frag') row.lines = fs.readFileSync(file, 'utf8').split('\n').length;

        items.push(row);
      }
    }
    groups.push({ dir, abs, exists: fs.existsSync(abs), items });
  }
  return groups;
}

export function vaultAdvisories(groups) {
  const advice = [];
  for (const g of groups) {
    if (!g.exists || !g.items.length) {
      advice.push(`• ${g.dir}: пусто. Формат принятия: ${g.dir === '3d-models' ? '.glb с KHR_draco_mesh_compression' : g.dir === 'fonts' ? 'woff2 с кириллицей' : g.dir === 'sounds' ? 'ogg (opus) ≤ 96 kbps + wav-мастер' : g.dir === 'textures' ? 'ktx2/webp, тайл без швов' : 'glsl с uniform-префиксом u'} .`);
      continue;
    }
    for (const item of g.items) {
      if (item.draco === false) advice.push(`• ${g.dir}/${item.name}: GLB без Draco → \`npx @gltf-transform/cli draco ${item.name} ${item.name.replace('.glb', '')}.draco.glb\` (экономия 60-80%).`);
      if (item.bytes > 1_500_000) advice.push(`• ${g.dir}/${item.name}: ${(item.bytes / 1048576).toFixed(1)} МБ — тяжелее бюджета 1.5 МБ на мобильный трафик.`);
      if (item.dimensions && item.dimensions.w > 2400) advice.push(`• ${g.dir}/${item.name}: ${item.dimensions.w}px избыточно, рендер-таргет ≤ 1920px.`);
      if (item.format && item.format.startsWith('TTF')) advice.push(`• ${g.dir}/${item.name}: TTF → конвертировать в woff2 (brotli), −55%.`);
    }
  }
  return advice;
}
