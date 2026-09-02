#!/usr/bin/env node
// core-engine/bin/studio.js
// Консольный оркестратор STUDIO OS. Команды делегируют в core-engine/lib/*,
// аудит вызывает детекторы из /library — никаких захардкоженных «PASS».

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { auditProject, renderAudit } from '../lib/audit.js';
import { scaffold, archetypeCssBlock } from '../lib/scaffolder.js';
import { harvest } from '../lib/harvester.js';
import { inspectVault, vaultAdvisories } from '../lib/vault.js';
import * as photos from '../lib/photos.js';
import { color, bar, pad } from '../lib/fsx.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../');

const args = process.argv.slice(2);
const command = args[0] && !args[0].startsWith('-') ? args[0] : 'help';
const positional = args.slice(command === 'help' ? 0 : 1).filter((a) => !a.startsWith('-'));
const flags = new Set(args.filter((a) => a.startsWith('--')));
const flagValue = (name, fallback = undefined) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split('=').slice(1).join('=') : fallback;
};

function header() {
  console.log(`\x1b[36m
╔═══════════════════════════════════════════════════════════════════════════╗
║                             STUDIO OS v2.1.0                              ║
║     Production Core • Living Library • Real Audit Engine (9 SYS)           ║
╚═══════════════════════════════════════════════════════════════════════════╝
\x1b[0m`);
}

async function main() {
  header();

  switch (command) {
    // ───────────────────────────────────────────────────────────── new ─────
    case 'new':
    case 'create': {
      const name = positional[0] ?? `project-${Date.now().toString().slice(-4)}`;
      const archetype = positional[1] ?? 'cyber-tech';
      const brand = flagValue('brand', name.replace(/^client-/, '').replace(/[-_]/g, ' ').toUpperCase());

      console.log(`🚀 Каркас «${name}» · архетип ${archetype} · бренд «${brand}»`);
      const res = await scaffold({ rootDir, name, archetype, brand, force: flags.has('--force') });
      console.log(`${color.green}✓ ${res.files.length} файлов в ${path.relative(rootDir, res.dir)}${color.reset}`);
      for (const f of res.files) console.log(`   ${color.dim}${f}${color.reset}`);
      console.log(`
   Дальше:  npm install && npm run dev --workspace=projects/${name}
            studio audit projects/${name}
   Фото клиента → projects/${name}/src/assets/photos/  (см. .gitkeep)`);
      break;
    }

    // ─────────────────────────────────────────────────────────── harvest ────
    case 'harvest': {
      const project = positional[0];
      const block = positional[1];
      const category = positional[2] ?? 'components';
      if (!project || !block) {
        console.error(`${color.red}Нужны два аргумента: studio harvest <project> <block> [category]${color.reset}`);
        console.log(`   пример: studio harvest client-vylet 05-Fleet sections`);
        process.exit(2);
      }
      const projectDir = path.isAbsolute(project) ? project : path.join(rootDir, 'projects', project.replace(/^projects\//, ''));
      const res = harvest({ rootDir, projectDir, block, category, note: flagValue('note', '') });
      console.log(`${color.green}🌾 блок вычищен и положен в библиотеку${color.reset}`);
      console.log(`   ${res.target}`);
      console.log(`   файлов: ${res.manifest.files.length}, строк: ${res.manifest.lines}, вырезано персональных данных: ${res.manifest.stripped}`);
      console.log(`   подпись: ${color.dim}${res.manifest.integrity}${color.reset}`);
      if (res.manifest.externalDeps.length) console.log(`   внешние зависимости: ${res.manifest.externalDeps.join(', ')}`);
      break;
    }

    // ───────────────────────────────────────────────────────────── audit ────
    case 'audit': {
      const target = positional[0];
      const dirs = target
        ? [path.isAbsolute(target) ? target : path.join(rootDir, target.replace(/^\.?\/?projects\//, 'projects/'))]
        : fs.existsSync(path.join(rootDir, 'projects'))
          ? fs.readdirSync(path.join(rootDir, 'projects'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => path.join(rootDir, 'projects', d.name))
          : [];

      if (!dirs.length) {
        console.error(`${color.red}Нет проектов в projects/. Создайте: studio new client-demo cyber-tech${color.reset}`);
        process.exit(2);
      }

      let failed = 0;
      const summaries = [];
      for (const dir of dirs) {
        const result = await auditProject({ projectDir: dir, rootDir, strict: !flags.has('--loose') });
        console.log(renderAudit(result, { showDetails: !flags.has('--quiet') }));
        if (!flags.has('--no-report')) {
          fs.writeFileSync(path.join(dir, 'studio.audit.json'), JSON.stringify(result, null, 2));
          console.log(`${color.dim}   отчёт: ${path.relative(rootDir, path.join(dir, 'studio.audit.json'))}${color.reset}\n`);
        }
        if (flags.has('--json')) console.log(JSON.stringify(result));
        summaries.push({ name: path.basename(dir), score: result.originality.score, blockers: result.blockers, warnings: result.warnings, passed: result.passed });
        if (!result.passed) failed++;
      }

      if (dirs.length > 1) {
        console.log(`${color.bold}СВОДКА ПО СТУДИИ${color.reset}`);
        for (const s of summaries) {
          console.log(`  ${pad(s.name, 26)} ${bar(s.score, 18)} ${pad(s.score + '/100', 8)} ${s.passed ? color.green + '✓ релиз' : color.red + `✗ блоков: ${s.blockers}`}${color.reset}  ${color.dim}warn ${s.warnings}${color.reset}`);
        }
        console.log('');
      }
      process.exit(failed && flags.has('--fail-on-error') ? 1 : 0);
    }

    // ────────────────────────────────────────────────────────────── vault ───
    case 'vault': {
      const groups = inspectVault(rootDir);
      console.log(`${color.bold}Хранилище ассетов · library/assets-vault${color.reset}`);
      for (const g of groups) {
        const bytes = g.items.reduce((s, i) => s + i.bytes, 0);
        console.log(`  ${pad(g.dir, 12)} ${pad(String(g.items.length) + ' файл(ов)', 12)} ${pad((bytes / 1024).toFixed(0) + ' КБ', 9)} ${color.dim}${g.exists ? g.abs.replace(rootDir + '/', '') : 'папки нет'}${color.reset}`);
        for (const item of g.items) {
          const meta = [item.dimensions ? `${item.dimensions.w}×${item.dimensions.h}` : null, item.container ? `${item.container}${item.draco ? '+draco' : ''}` : null, item.format, item.sampleRate ? item.sampleRate + ' Hz' : null, item.lines ? item.lines + ' строк' : null]
            .filter(Boolean)
            .join(' · ');
          console.log(`      ${pad(item.name, 28)} ${pad((item.bytes / 1024).toFixed(1) + ' КБ', 10)} ${color.cyan}${meta}${color.reset}`);
        }
      }
      const advice = vaultAdvisories(groups);
      if (advice.length) {
        console.log(`\n${color.yellow}Требования к наполнению:${color.reset}`);
        for (const a of advice) console.log('  ' + a);
      }
      console.log('');
      break;
    }

    // ───────────────────────────────────────────────────────────── tokens ───
    case 'tokens': {
      const engine = await import(path.join(rootDir, 'library/07-archetypes/TokenEngine.ts'));
      const archetype = positional[0] ?? 'cyber-tech';
      const project = positional[1];
      if (!engine.ARCHETYPES[archetype]) {
        console.error(`${color.red}Архетип «${archetype}» неизвестен: ${Object.keys(engine.ARCHETYPES).join(', ')}${color.reset}`);
        process.exit(2);
      }
      const css = archetypeCssBlock(archetype, engine.toCssVars(archetype));
      const report = engine.auditArchetypeContrast(archetype);
      if (project) {
        const file = path.join(rootDir, project, 'src/styles/archetype.css');
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, css);
        console.log(`${color.green}✓ переписан ${path.relative(rootDir, file)}${color.reset}`);
      } else {
        console.log(css);
      }
      console.log(`${color.dim}APCA-аудит архетипа: ${report.ok ? 'зелёная зона' : 'есть провалы'} (min body Lc ${report.minBodyLc.toFixed(1)})${color.reset}`);
      break;
    }

    // ────────────────────────────────────────────────────────── archetypes ──
    case 'archetypes': {
      const engine = await import(path.join(rootDir, 'library/07-archetypes/TokenEngine.ts'));
      for (const [key, def] of Object.entries(engine.ARCHETYPES)) {
        const report = engine.auditArchetypeContrast(key);
        console.log(`  ${pad(key, 16)} ${pad(def.name, 16)} ${report.ok ? color.green + 'APCA ✓' : color.red + 'APCA ✗' + color.reset}  Lc body ${report.minBodyLc.toFixed(1).padStart(6)}  ${color.dim}${def.typography.fontHeading.split(',')[0]}${color.reset}`);
      }
      break;
    }

    // ───────────────────────────────────────────────────────────── photo ────
    case 'photo':
    case 'import-photo': {
      const projectArg = flagValue('project', positional.find((a) => a.startsWith('client-')) ?? 'client-vylet');
      const dir = path.isAbsolute(projectArg) ? projectArg : path.join(rootDir, 'projects', projectArg.replace(/^projects\//, ''));

      if (flags.has('--list')) {
        const rows = await photos.listSlots(dir);
        console.log(`${color.bold}слоты кадров · ${path.basename(dir)}${color.reset}\n`);
        for (const row of rows) {
          const mark = row.filled ? `${color.green}✓ файл на месте${color.reset}` : `${color.yellow}· пусто${color.reset}`;
          console.log(`  ${pad(row.photo, 18)} ${pad(row.model, 36)} кадр ${pad(row.ratio, 6)} ${mark}`);
        }
        const free = rows.filter((r) => !r.filled).length;
        console.log(`\n  занято ${rows.length - free} из ${rows.length}; следующий снимок: studio photo <файл> --slot=${rows.find((r) => !r.filled)?.photo ?? '<slot>'} --link=${rows.find((r) => !r.filled)?.id ?? '<id>'}\n`);
        break;
      }

      // Пакетная приёмка: папка или горсть файлов; дубли по имени и расклад по слотам
      // считает photos.planIntake — там же, где и вся остальная логика приёмки.
      const plan = photos.planIntake({
        inputs: positional,
        rows: await photos.listSlots(dir),
        slots: (flagValue('slots', '') || '').split(',').map((x) => x.trim()).filter(Boolean),
        auto: flags.has('--auto'),
        single: flagValue('slot', flagValue('name')),
        link: flagValue('link', null)
      });
      if (!plan.jobs.length) {
        console.error(`${color.red}✗ ${plan.error ?? 'нет ни одного файла: studio photo ~/IMG_0001.jpg --slot=aerial-22 --link=agp-22 (пачкой: studio photo ~/uploads --auto)'}${color.reset}`);
        console.log(`${color.dim}список слотов: studio photo --list · проверка без записи: --dry${color.reset}`);
        process.exit(2);
      }
      const jobs = plan.jobs;
      const dupes = plan.dropped;
      console.log(`${color.bold}приёмка ${jobs.length} снимк${jobs.length === 1 ? 'а' : 'ов'} · проект ${path.basename(dir)}${dupes ? color.dim + ` · ${dupes} дубль(ей) по имени отброшен` : ''}${color.reset}`);
      let failed = 0;
      for (const [index, job] of jobs.entries()) {
        try {
          const report = await photos.importPhoto({
            file: job.file,
            projectDir: dir,
            slot: job.slot,
            frame: flagValue('frame', null),
            keepNative: flags.has('--native'),
            focus: flagValue('focus', 'center'),
            maxWidth: parseInt(flagValue('max', '1600'), 10),
            quality: parseInt(flagValue('quality', '82'), 10),
            format: flagValue('format', 'jpeg'),
            blur: flagValue('blur', null),
            og: flags.has('--og') && index === 0,
            link: job.link,
            dryRun: flags.has('--dry')
          });
          console.log(`\n${color.bold}[${index + 1}/${jobs.length}] слот ${report.slot}${color.reset}${report.dryRun ? color.dim + ' · проверка, файл не записан' + color.reset : ''}`);
          console.log(`  ${path.basename(job.file)} → ${report.result} · кадр ${report.ratio} · потеряно по короткой стороне ${report.croppedPx}px`);
          console.log(`  вес      ${report.weight.kb} КБ — ${report.weight.ok ? color.green + report.weight.hint : color.yellow + report.weight.hint}${color.reset}`);
          if (report.written) console.log(`  записан  ${color.green}${report.written}${color.reset}`);
          if (report.og) console.log(`  og-карта ${report.og.file} ${report.og.size} · ${report.og.kb} КБ`);
          if (report.linked) console.log(`  каталог  ${color.green}${report.linked}${color.reset}`);
          for (const note of report.notes) console.log(`  ${color.dim}· ${note}${color.reset}`);
          for (const warn of report.warnings) console.log(`  ${color.yellow}▲ ${warn}${color.reset}`);
        } catch (error) {
          failed++;
          console.error(`${color.red}✗ ${path.basename(job.file)}: ${error.message}${color.reset}`);
        }
      }

      if (failed) {
        console.error(`\n${color.red}✗ принято с ошибками: ${jobs.length - failed} из ${jobs.length}${color.reset}\n`);
        process.exit(1);
      }
      if (!flags.has('--dry')) {
        console.log(`\n  ${color.dim}дальше: npm run build --workspace=projects/${path.basename(dir)} && node core-engine/bin/studio.js audit projects/${path.basename(dir)}${color.reset}\n`);
      } else {
        console.log('');
      }
      break;
    }

    // ─────────────────────────────────────────────────────────────── help ───
    case 'help':
    default:
      console.log(`Доступные команды STUDIO OS:

  ${color.yellow}studio new <name> <archetype>${color.reset} [--brand=X] [--force]
      Каркас клиентского проекта в projects/<name>: 9 систем, алиасы @library, SEO-контракт, ErrorBoundary.

  ${color.yellow}studio audit [projects/name]${color.reset} [--loose] [--json] [--quiet] [--no-report] [--fail-on-error]
      Настоящий аудит: клише, слоп-градиенты, off-scale отступы, вьюпорты, APCA, факт-плотность,
      читаемость, PAS, layout thrashing, dispose(), SEO-контракт. Пишет studio.audit.json.
      Без аргумента — все проекты папки projects/.

  ${color.yellow}studio harvest <project> <block> [category]${color.reset} [--note=…]
      Деперсонализация и перенос блока в library/<category>/ с манифестом и sha256-подписью.

  ${color.yellow}studio photo <файл…|папка> --slot=<slot> [--link=<id>]${color.reset} [--frame=3/2] [--focus=auto] [--og] [--dry]
      Приёмка фото клиента: убрать letterbox, привести к кадру слота, срезать EXIF/GPS,
      вписать в catalog.ts, уложить в бюджет веса. --list — какие слоты ещё пустые.
  ${color.yellow}studio photo ~/uploads --auto${color.reset} [--dry]   — пачка: снимки в свободные слоты по порядку,
      дубликаты по имени отбрасываются, --link подставляется из каталога сам.

  ${color.yellow}studio vault${color.reset}
      Инвентарь ассетов с чтением заголовков форматов (PNG/JPEG/WebP/GLB/Draco/WOFF2/WAV).

  ${color.yellow}studio tokens <archetype> [project]${color.reset}
      Сгенерировать src/styles/archetype.css из TokenEngine и проверить контраст.

  ${color.yellow}studio archetypes${color.reset}
      APCA-статус всех 5 архетипов.

  ${color.yellow}npm run dev --workspace=projects/<name>${color.reset}
`);
      break;
  }
}

main().catch((err) => {
  console.error(`\n${color.red}${color.bold}✗ ${err.message}${color.reset}\n`);
  process.exit(1);
});
