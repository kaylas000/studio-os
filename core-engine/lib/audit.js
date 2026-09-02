// core-engine/lib/audit.js
// Настоящий аудит 9 стандартов STUDIO OS. Ничего не «всегда PASS»:
// каждый пункт читает исходники проекта и вызывает детекторы из /library.

import fs from 'node:fs';
import path from 'node:path';

import { ClicheDetector } from '../../library/02-anti-slop/ClicheDetector.ts';
import { GradientSlopDetector } from '../../library/02-anti-slop/GradientSlopDetector.ts';
import { OriginalityScore } from '../../library/02-anti-slop/OriginalityScore.ts';
import { SpacingTokenGuard } from '../../library/04-spacing/SpacingTokenGuard.ts';
import { ViewportMatrix, CRITICAL_WIDTHS, VIEWPORT_MATRIX } from '../../library/03-mobile/ViewportMatrix.ts';
import { StaticCodeAuditor } from '../../library/09-quality/StaticCodeAuditor.ts';
import { FactDensityScorer } from '../../library/08-copywriting/FactDensityScorer.ts';
import { ReadabilityAnalyzer } from '../../library/08-copywriting/ReadabilityAnalyzer.ts';
import { StructureScanner } from '../../library/08-copywriting/StructureScanner.ts';
import { ARCHETYPES, auditArchetypeContrast, auditPaletteColors, cyrillicRisk } from '../../library/07-archetypes/TokenEngine.ts';
import { validateSEOContract } from '../../library/06-seo/seo.contracts.ts';

import { readSources, collectStrings, stripMarkup, importSafe, color, pad, fit, bar, table } from './fsx.js';

function statusOf(score, blockers, warnings = 0) {
  if (blockers > 0) return { key: 'fail', label: `${color.red}✗ FAIL${color.reset}` };
  if (score < 75) return { key: 'warn', label: `${color.yellow}▲ REWORK${color.reset}` };
  if (warnings > 0) return { key: 'pass-warn', label: `${color.green}✓ PASS${color.yellow} +${warnings} warn${color.reset}` };
  return { key: 'pass', label: `${color.green}✓ PASS${color.reset}` };
}

export async function auditProject({ projectDir, rootDir, strict = true }) {
  const checks = [];
  const t0 = Date.now();

  if (!fs.existsSync(projectDir)) throw new Error(`Проект не найден: ${projectDir}`);
  const srcDir = path.join(projectDir, 'src');

  const projectJson = fs.existsSync(path.join(projectDir, 'studio.project.json'))
    ? JSON.parse(fs.readFileSync(path.join(projectDir, 'studio.project.json'), 'utf8'))
    : {};
  const archetype = projectJson.archetype ?? 'cyber-tech';

  const tsx = readSources(srcDir, (f) => /\.tsx?$/.test(f) && !f.endsWith('.d.ts'));
  const css = readSources(srcDir, (f) => f.endsWith('.css'));
  const htmlFiles = readSources(projectDir, (f) => f.endsWith('.html'));
  const allText = [
    ...tsx.map((s) => ({ file: s.file, text: ClicheDetector.extractProse(s.code) })),
    ...readSources(srcDir, (f) => f.endsWith('.md')).map((s) => ({ file: s.file, text: s.code }))
  ]
    .map((f) => ({ ...f, text: f.text.replace(/\s+/g, ' ').trim() }))
    .filter((f) => f.text.length > 24);

  // ── словарь анти-слопа: базовый + внешний из библиотеки ────────────────
  const dictPath = path.join(rootDir, 'library/02-anti-slop/dictionaries/ai-phrases-ru.json');
  let dict = {};
  if (fs.existsSync(dictPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
      dict = {
        critical: parsed.critical ?? [],
        medium: parsed.medium ?? [],
        structural: parsed.structural_patterns ?? [],
        whitelist: parsed.whitelist ?? []
      };
    } catch (e) {
      checks.push({ id: 'DICT', name: 'Словарь анти-слопа', score: 0, status: statusOf(0, 1), details: [`${dictPath}: ${e.message}`], blockers: 1, warnings: 0 });
    }
  }

  // ── 1. SYS-02 · копирайт: клише ─────────────────────────────────────────
  const cliche = new ClicheDetector(dict);
  const copyAnalysis = cliche.analyzeSources(allText);
  const critical = copyAnalysis.issues.filter((i) => i.type === 'CRITICAL_AI_CLICHE');
  checks.push({
    id: 'SYS-02a',
    name: 'Anti-Slop · тексты',
    score: copyAnalysis.score,
    status: statusOf(copyAnalysis.score, strict ? critical.length : 0, copyAnalysis.issues.length - critical.length),
    blockers: critical.length,
    warnings: copyAnalysis.issues.length - critical.length,
    details: copyAnalysis.issues
      .slice(0, 12)
      .map((i) => `${color.red}«${fit(i.phrase, 44)}»${color.reset} ×${i.count}  ${color.dim}${i.file}${i.lines ? ':' + i.lines.join(',') : ''}  −${i.penalty}${color.reset}  ${i.hint ?? ''}`),
    fix: 'Заменить оценочные формулировки фактами: техника, срок, объём, цена единицы.'
  });

  // ── 2. SYS-02b · визуальный слой ────────────────────────────────────────
  const gradient = new GradientSlopDetector();
  const cssCombined = css.map((c) => c.code).join('\n');
  const gradReport = gradient.scanStylesheet(cssCombined, css.map((c) => c.file).join(', ') || '(нет css)');
  checks.push({
    id: 'SYS-02b',
    name: 'Anti-Slop · палитра и градиенты',
    score: gradReport.score,
    status: statusOf(gradReport.score, 0, gradReport.violations.length),
    blockers: 0,
    warnings: gradReport.violations.length,
    details: gradReport.violations.map((v) => `${color.yellow}${v.rule}${color.reset} L${v.line} ${fit(v.detail, 70)}`),
    fix: 'Слоп-пары цветов и «радужный текст» — признак генеративного лендинга.'
  });

  // ── 3. SYS-04 · отступы ─────────────────────────────────────────────────
  const guard = new SpacingTokenGuard();
  const spacingReports = [
    ...css.map((c) => guard.scanSource(c.code, c.file, { unit: 'css' })),
    ...tsx.map((s) => guard.scanSource(s.code, s.file, { unit: 'tsx' }))
  ];
  const spacing = guard.aggregate(spacingReports);
  const blockingSpacing = spacing.violations.filter((v) => v.severity === 'block');
  checks.push({
    id: 'SYS-04',
    name: 'Spacing Token Guard',
    score: spacing.ok ? Math.max(70, spacing.tokenUsage) : Math.max(0, 100 - blockingSpacing.length * 12),
    status: statusOf(spacing.tokenUsage, strict ? blockingSpacing.length : 0, spacing.violations.length - blockingSpacing.length),
    blockers: blockingSpacing.length,
    warnings: spacing.violations.length - blockingSpacing.length,
    details: spacing.violations.slice(0, 12).map((v) =>
      `${v.severity === 'block' ? color.red : color.yellow}${v.property}: ${v.px}px${color.reset} ${fit(v.file, 34)}:${v.line}  ${color.dim}→ var(--space-${v.nearest})${color.reset}`
    ),
    fix: 'Только шкала 2–192px: var(--space-N) или <Box pad={N}>.'
  });

  // ── 4. SYS-03 · мобильная готовность ────────────────────────────────────
  const mobileReports = css.map((c) => ViewportMatrix.auditStylesheet(c.code, c.file));
  // fluid-масштабирование ищем по проекту целиком: генерёный archetype.css токенов
  // типографики не содержит — это нормально, clamp живёт в base-слое студии
  const combinedMobile = ViewportMatrix.auditStylesheet(cssCombined || '', '(весь css проекта)');
  const clampProject = combinedMobile.stats.clampRules > 0;
  const mobileViolations = mobileReports
    .flatMap((r, idx) =>
      r.violations
        .filter((v) => !(clampProject && v.rule === 'NO_FLUID_TYPE'))
        .map((v) => ({ ...v, file: css[idx]?.file }))
    )
    .concat(clampProject ? [] : combinedMobile.violations.filter((v) => v.rule === 'NO_FLUID_TYPE'));
  const mobileBlockers = mobileViolations.filter((v) => v.severity === 'block').length;
  const mobileScore = mobileReports.length ? Math.min(...mobileReports.map((r) => r.score)) : 0;
  const touchRules = (cssCombined.match(/min-height\s*:\s*var\(--touch-target-min\)|min-height\s*:\s*4[4-9]px/gi) ?? []).length;
  checks.push({
    id: 'SYS-03',
    name: 'Mobile Perfect · 19 вьюпортов',
    score: mobileScore,
    status: statusOf(mobileScore, mobileBlockers + (css.length ? 0 : 1), mobileViolations.length - mobileBlockers),
    blockers: mobileBlockers + (css.length ? 0 : 1),
    warnings: mobileViolations.length - mobileBlockers + (touchRules ? 0 : 1),
    details: [
      ...mobileViolations.slice(0, 8).map((v) => `${v.severity === 'block' ? color.red : color.yellow}${v.rule}${color.reset} ${fit(v.detail, 82)}`),
      touchRules ? `touch-target: ${touchRules} правил(а) на --touch-target-min ✓` : `${color.yellow}нет min-height: var(--touch-target-min)${color.reset}`,
      `${color.dim}матрица: ${VIEWPORT_MATRIX.length} вьюпортов (dpr до ${Math.max(...VIEWPORT_MATRIX.map(v=>v.dpr))}), блокирующие ширины: ${CRITICAL_WIDTHS.slice(0, 6).join('/')}…${color.reset}`
    ],
    fix: 'clamp()-типографика, safe-area, никаких width > 420px без max-width.'
  });

  // ── 5. SYS-07 · архетип и контраст ──────────────────────────────────────
  const contrast = auditArchetypeContrast(archetype);
  const risks = cyrillicRisk(archetype);
  checks.push({
    id: 'SYS-07',
    name: `Архетип · ${ARCHETYPES[archetype]?.name ?? archetype}`,
    score: contrast.ok ? 100 : Math.round(contrast.minBodyLc),
    status: statusOf(contrast.ok ? 100 : 60, contrast.ok ? 0 : 1, risks.length),
    blockers: contrast.ok ? 0 : 1,
    warnings: risks.length,
    details: [
      ...contrast.rows.map((r) => `${r.pass ? color.green : color.red}${r.pass ? '✓' : '✗'}${color.reset} ${pad(r.pair, 30)} Lc ${pad(r.apcaLc.toFixed(1), 8)}  WCAG ${pad(r.wcag, 6)}`),
      ...risks.map((r) => `${color.yellow}⚠${color.reset} ${r}`)
    ],
    fix: 'min |Lc| body 75. Правка палитры без пересчёта APCA недопустима.'
  });

  // ── 5b. Бренд-DNA: клиентские override-цвета тоже под гейтом ────────────
  let brand = null;
  const brandFile = tsx.find((s) => /brand\.tsx?$/.test(s.file));
  if (brandFile) {
    try {
      const mod = await importSafe(brandFile.abs);
      const tokens = mod.brandTokens ?? mod.BRAND_TOKENS ?? mod.default?.brandTokens;
      if (tokens) brand = auditPaletteColors(tokens, mod.brandName ?? mod.BRAND_NAME ?? path.basename(projectDir));
    } catch (e) {
      brand = { ok: false, rows: [], minBodyLc: 0, rows_: [], error: e.message };
    }
  }
  if (brand && 'error' in brand && brand.error) {
    checks.push({ id: 'BRAND', name: 'Brand DNA · импорт', score: 40, status: statusOf(40, 1), blockers: 1, warnings: 0, details: [`${color.red}src/content/brand.ts не импортируется: ${brand.error}${color.reset}`], fix: 'Экспортировать `brandTokens` объектом без рантайм-зависимостей.' });
  } else if (brand) {
    checks.push({
      id: 'SYS-07b',
      name: 'Brand DNA · контраст',
      score: brand.ok ? 100 : Math.round(brand.minBodyLc),
      status: statusOf(brand.ok ? 100 : 60, brand.ok ? 0 : strict ? 1 : 0, 0),
      blockers: brand.ok ? 0 : strict ? 1 : 0,
      warnings: 0,
      details: brand.rows.map(
        (r) => `${r.pass ? color.green + '✓' : color.red + '✗'}${color.reset} ${pad(r.pair, 34)} Lc ${pad(r.apcaLc.toFixed(1), 8)}  ${color.dim}${r.fg} on ${r.bg}${color.reset}`
      ),
      fix: 'Override-палитра клиента обязана держать APCA так же, как базовый архетип.'
    });
  }

  // ── 6. SYS-08 · копирайтинг-инженерия ────────────────────────────────────
  const mergedText = allText.map((f) => f.text).join(' ');
  const facts = FactDensityScorer.calculate(mergedText);
  const readability = ReadabilityAnalyzer.analyze(mergedText);
  const structure = StructureScanner.scan(allText.slice(0, 6).map((f) => f.text).join(' '), 'PAS');
  const copyScore = Math.round(facts.score * 0.4 + readability.score * 0.35 + structure.score * 0.25);
  checks.push({
    id: 'SYS-08',
    name: 'Инженерный копирайтинг',
    score: copyScore,
    status: statusOf(copyScore, facts.meetsThreshold ? 0 : strict ? 1 : 0, readability.score < 70 ? 1 : 0),
    blockers: facts.meetsThreshold ? 0 : strict ? 1 : 0,
    warnings: (readability.score < 70 ? 1 : 0) + (structure.missing.length ? 1 : 0),
    details: [
      `факт-плотность: ${facts.factsCount} фактов / ${facts.words} слов = ${facts.wordsPerFact} слов на цифру (норма ≤ 25)`,
      `читаемость: ${readability.score}/100 (Flesch-адапт.; чистый Flesch ${readability.rawFlesch}); ASL ${readability.avgWordsPerSentence}, ASW ${readability.avgSyllablesPerWord}${readability.officeCacheHits ? `; канцелярит ×${readability.officeCacheHits}` : ''}`,
      `формула PAS: ${structure.covered.join(' → ') || 'не собрана'}${structure.missing.length ? ` | нет: ${structure.missing.join(', ')}` : ''}`,
      `VoiceMatrix: direct ${structure.voice.directness}, «мы»-доля ${structure.voice.weRatio}, обращение ${structure.voice.addressDensity}/100`,
      ...facts.missing.slice(0, 3).map((m) => `${color.dim}→ ${m}${color.reset}`)
    ],
    fix: 'Одна твёрдая цифра на 25 слов, короткие предложения, проблема → усиление → решение.'
  });

  // ── 7. SYS-09 · качество кода ────────────────────────────────────────────
  const codeAudit = new StaticCodeAuditor().audit(tsx);
  const codeBlockers = codeAudit.violations.filter((v) => v.severity === 'block').length;
  checks.push({
    id: 'SYS-09',
    name: 'Zero-Bug · статический аудит',
    score: codeAudit.score,
    status: statusOf(codeAudit.score, strict ? codeBlockers : 0, codeAudit.violations.length - codeBlockers),
    blockers: strict ? codeBlockers : 0,
    warnings: codeAudit.violations.length - codeBlockers,
    details: codeAudit.violations.slice(0, 12).map((v) =>
      `${v.severity === 'block' ? color.red : color.yellow}${v.rule}${color.reset} ${fit(v.file, 30)}:${v.line} — ${fit(v.detail, 54)}\n    ${color.dim}фикс: ${v.fix}${color.reset}`
    ),
    fix: 'rAF-отмена, dispose() WebGL, Error Boundary, alt/размеры у <img>.'
  });

  // ── 8. SYS-01 · анимации ─────────────────────────────────────────────────
  const hasGsap = tsx.some((s) => /from 'gsap'|from "gsap"/.test(s.code));
  const hasScrollTrigger = tsx.some((s) => /ScrollTrigger/.test(s.code));
  const hasLenis = tsx.some((s) => /lenis|Lenis/i.test(s.code));
  const hasReducedMotion = /prefers-reduced-motion/.test(cssCombined) || tsx.some((s) => /MotionGuard|prefers-reduced-motion/.test(s.code));
  const hasScrub = tsx.some((s) => /ImageSequenceScrubber|scrub/i.test(s.code));
  const animScore = [hasGsap, hasScrollTrigger, hasLenis, hasReducedMotion, hasScrub].filter(Boolean).length * 20;
  checks.push({
    id: 'SYS-01',
    name: 'Кинематографичные анимации',
    score: animScore,
    status: statusOf(animScore, hasReducedMotion ? 0 : strict ? 1 : 0, hasScrub ? 0 : 1),
    blockers: hasReducedMotion ? 0 : strict ? 1 : 0,
    warnings: (hasScrub ? 0 : 1) + (hasLenis ? 0 : 1),
    details: [
      `${hasGsap ? color.green + '✓' : color.red + '✗'}${color.reset} GSAP-таймлайн   ${hasScrollTrigger ? color.green + '✓' : color.yellow + '▲'}${color.reset} ScrollTrigger   ${hasLenis ? color.green + '✓' : color.yellow + '▲'}${color.reset} Lenis damping   ${hasReducedMotion ? color.green + '✓' : color.red + '✗'}${color.reset} prefers-reduced-motion   ${hasScrub ? color.green + '✓' : color.yellow + '▲'}${color.reset} sequence scrub`
    ],
    fix: 'Master Timeline + Lenis; reduced-motion обязателен: без него аудит падает на слабых устройствах.'
  });

  // ── 9. SYS-05 · 3D-заставка ──────────────────────────────────────────────
  const introFiles = tsx.filter((s) => /IntroEngine|THREE\.|three/.test(s.code));
  const introSkip = tsx.some((s) => /Skip|allowSkip|пропуск|Пропустить/i.test(s.code));
  const introDispose = introFiles.length === 0 || tsx.some((s) => /dispose\(\)/.test(s.code));
  const introScore = introFiles.length ? (introSkip ? 100 : 70) + (introDispose ? 0 : -40) : 60;
  checks.push({
    id: 'SYS-05',
    name: '3D-заставка',
    score: Math.max(0, Math.min(100, introScore)),
    status: statusOf(Math.min(100, introScore), introDispose ? 0 : 1, introSkip ? 0 : 1),
    blockers: introDispose ? 0 : 1,
    warnings: introSkip ? 0 : 1,
    details: [
      introFiles.length
        ? `${introFiles.length} файл(ов) с WebGL; skip-кнопка: ${introSkip ? 'есть' : color.red + 'нет' + color.reset}; dispose(): ${introDispose ? color.green + 'есть' : color.red + 'нет' + color.reset}`
        : `${color.yellow}WebGL не используется — допустимо для не-премиального проекта${color.reset}`
    ],
    fix: 'У интро обязано быть: Skip (Esc), лимит по FPS, полный dispose контекста.'
  });

  // ── 10. SYS-06 · SEO-контракт ───────────────────────────────────────────
  const seoFiles = tsx.filter((s) => /pageSEO|PageSEOContract|seo\.config/.test(s.code));
  let seoResult = { valid: false, errors: ['Не найден src/content/seo.config.ts с экспортом pageSEO'], warnings: [], lengths: {} };
  let h1Check = null;
  for (const file of seoFiles) {
    if (!/seo\.config|seo\.contract/.test(file.file)) continue;
    try {
      const mod = await importSafe(file.abs);
      const contract = mod.pageSEO ?? mod.default?.pageSEO;
      if (contract) seoResult = validateSEOContract({ ...contract, openGraph: contract.openGraph ?? {}, breadcrumbs: contract.breadcrumbs ?? [] });
    } catch (e) {
      seoResult = { valid: false, errors: [`Импорт ${file.file} упал: ${e.message}`], warnings: [], lengths: {} };
    }
    break;
  }
  const indexHtml = htmlFiles.find((f) => /index\.html$/.test(f.file));
  const h1Count = indexHtml ? (indexHtml.code.match(/<h1[\s>]/gi) ?? []).length : 0;
  h1Check = `h1 в index.html: ${h1Count} (SSR/пререндер — иначе поисковик увидит пустой <div id="root">)`;
  const seoBlockers = seoResult.valid ? 0 : 1;
  checks.push({
    id: 'SYS-06',
    name: 'SEO by design',
    score: seoResult.valid ? 100 : Math.max(0, 100 - seoResult.errors.length * 25),
    status: statusOf(seoResult.valid ? 100 : 50, seoBlockers, (seoResult.warnings ?? []).length + (h1Count === 1 ? 0 : 1)),
    blockers: seoBlockers,
    warnings: (seoResult.warnings ?? []).length + (h1Count === 1 ? 0 : 1),
    details: [
      ...seoResult.errors.map((e) => `${color.red}✗${color.reset} ${e}`),
      ...(seoResult.warnings ?? []).map((w) => `${color.yellow}▲${color.reset} ${w}`),
      `title ${seoResult.lengths?.title ?? 0} / description ${seoResult.lengths?.description ?? 0} симв.`,
      `${color.dim}${h1Check}${color.reset}`,
      `JSON-LD граф: ${/LocalBusiness|Service|BreadcrumbList/.test(tsx.map((t) => t.code).join('')) ? color.green + 'собирается из контракта' + color.reset : color.yellow + 'не найден' + color.reset}`
    ],
    fix: 'Title 30–70, description 70–165, OG 1200×630, один h1, LocalBusiness+BreadcrumbList+FAQPage.'
  });

  // ── сводный Originality Score из библиотеки ─────────────────────────────
  const originality = new OriginalityScore(dict).compute({
    projectName: projectJson.name ?? path.basename(projectDir),
    archetype,
    textFragments: allText,
    cssFragments: css,
    tsxFragments: tsx,
    factDensity: facts,
    readability,
    minApcaLc: contrast.minBodyLc
  });

  const blockers = checks.reduce((s, c) => s + (c.blockers ?? 0), 0);
  const warnings = checks.reduce((s, c) => s + (c.warnings ?? 0), 0);
  const worst = Math.min(...checks.map((c) => c.score));

  return {
    meta: {
      project: path.basename(projectDir),
      dir: path.relative(rootDir, projectDir),
      archetype,
      files: { tsx: tsx.length, css: css.length, text: allText.length },
      durationMs: Date.now() - t0,
      strict
    },
    originality: {
      score: originality.score,
      threshold: 75,
      verdict: originality.verdict,
      breakdown: originality.breakdown,
      notes: originality.notes
    },
    blockers,
    warnings,
    worst,
    passed: blockers === 0 && originality.score >= 75,
    checks,
    raw: {
      spacing: spacing.violations,
      gradient: gradReport.violations,
      code: codeAudit.violations,
      cliches: copyAnalysis.issues,
      facts,
      readability,
      structure: { score: structure.score, voice: structure.voice, missing: structure.missing }
    }
  };
}

export function renderAudit(result, { showDetails = true } = {}) {
  const out = [];
  const c = color;
  const line1 = `STUDIO OS · аудит проекта ${result.meta.project}`;
  const line2 = `архетип ${result.meta.archetype} · tsx ${result.meta.files.tsx} · css ${result.meta.files.css} · текстов ${result.meta.files.text} · за ${result.meta.durationMs} ms`;
  const width = Math.max(60, line1.length + 4, line2.length + 4);
  out.push('');
  out.push(`${c.bold}┌─ ${line1} ${'─'.repeat(Math.max(4, width - line1.length - 4))}┐${c.reset}`);
  out.push(`${c.dim}│ ${line2}${' '.repeat(Math.max(4, width - line2.length - 4))} │${c.reset}`);
  out.push(`${c.dim}└${'─'.repeat(width - 2)}┘${c.reset}`);

  out.push('');
  out.push(
    table(
      result.checks.map((chk) => ({
        id: chk.id,
        name: chk.name,
        score: `${chk.score}/100 ${bar(chk.score, 12)}`,
        status: chk.status.label
      })),
      [
        { key: 'id', label: 'SY', width: 8 },
        { key: 'name', label: 'СТАНДАРТ', width: 30 },
        { key: 'score', label: 'БАЛЛ', width: 22 },
        { key: 'status', label: 'ИТОГ', width: 20 }
      ]
    )
  );

  if (showDetails) {
    for (const chk of result.checks) {
      if (!chk.details?.length) continue;
      out.push('');
      out.push(`${c.cyan}${c.bold}${chk.id}${c.reset} ${c.bold}${chk.name}${c.reset}${chk.fix ? ` ${c.dim}— ${chk.fix}${c.reset}` : ''}`);
      for (const d of chk.details) out.push(`   ${d}`);
    }
  }

  out.push('');
  out.push(`${c.bold}СВОДНЫЙ ORIGINALITY SCORE${c.reset}`);
  const o = result.originality;
  out.push(`  ${bar(o.score, 30)}  ${c.bold}${o.score}/100${c.reset}  (порог студии 75)  вердикт: ${o.verdict === 'pass' ? c.green + 'PASS' : o.verdict === 'rework' ? c.yellow + 'REWORK' : c.red + 'REJECT'}`);
  for (const [k, v] of Object.entries(o.breakdown)) {
    out.push(`   ${pad(k, 12)} ${pad(String(v), 4)} ${bar(v, 18)}`);
  }
  for (const n of o.notes) out.push(`   ${c.yellow}• ${n}${c.reset}`);

  out.push('');
  if (result.passed) out.push(`${c.green}${c.bold}🏆 ПРОЕКТ ГОТОВ К РЕЛИЗУ${c.reset}${c.dim} — 9 стандартов валидированы, блокирующих нарушений нет.${c.reset}`);
  else out.push(`${c.red}${c.bold}✗ БИЛД ЗАБЛОКИРОВАН${c.reset}${c.dim}: блокирующих ${result.blockers}, предупреждений ${result.warnings}.${c.reset}`);
  out.push('');
  return out.join('\n');
}

export { bar };
