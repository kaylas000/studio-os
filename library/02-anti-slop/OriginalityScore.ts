// library/02-anti-slop/OriginalityScore.ts
// SYS-02: сводный Originality Score 0-100. Порог студии — 75 (см. .studio/agent-rules.json).
// Композиция детекторов: ни один из них не решает исход билда в одиночку.

import { ClicheDetector, type ClicheAnalysisResult, type FileFinding } from './ClicheDetector.ts';
import { GradientSlopDetector, type StylesheetReport } from './GradientSlopDetector.ts';
import { SpacingTokenGuard, type SpacingReport } from '../04-spacing/SpacingTokenGuard.ts';

export interface OriginalityInput {
  projectName?: string;
  archetype?: string;
  textFragments: Array<{ file: string; text: string }>;
  cssFragments: Array<{ file: string; code: string }>;
  tsxFragments: Array<{ file: string; code: string }>;
  factDensity?: { score: number; factsCount: number };
  readability?: { score: number };
  minApcaLc?: number; // минимальный контраст по проекту (Lc)
}

export interface OriginalityBreakdown {
  copy: number;
  visuals: number;
  spacing: number;
  facts: number;
  readability: number;
  contrast: number;
}

export interface OriginalityReport {
  score: number;
  verdict: 'pass' | 'rework' | 'reject';
  breakdown: OriginalityBreakdown;
  weights: OriginalityBreakdown;
  cliches: ClicheAnalysisResult;
  gradientReport: StylesheetReport;
  spacingReport: SpacingReport;
  findings: FileFinding[];
  constraints: Array<{ category: string; rule: string }>;
  notes: string[];
}

const WEIGHTS: OriginalityBreakdown = {
  copy: 32,
  visuals: 22,
  spacing: 14,
  facts: 12,
  readability: 12,
  contrast: 8
};

export const ORIGINALITY_THRESHOLD = 75;

export class OriginalityScore {
  private cliche: ClicheDetector;
  private gradient: GradientSlopDetector;
  private spacing: SpacingTokenGuard;

  constructor(phraseOverrides?: { critical?: string[]; medium?: string[]; structural?: string[]; whitelist?: string[] }) {
    this.cliche = new ClicheDetector(phraseOverrides);
    this.gradient = new GradientSlopDetector();
    this.spacing = new SpacingTokenGuard();
  }

  public compute(input: OriginalityInput): OriginalityReport {
    const notes: string[] = [];

    // 1. Текст: считаем по файлам (взвешенно), иначе один грязный блок топит весь проект
    //    и наоборот — «в среднем чисто» не проходит через штраф за наихудший файл.
    const source = this.cliche.analyzeSources(input.textFragments);
    const perFile = source.perFile;
    const findings: FileFinding[] = perFile.flatMap((p) =>
      p.issues.map((i) => ({ ...i, file: p.file }))
    );
    const merged = input.textFragments.map((f) => f.text).join('\n\n');
    const cliches = { ...this.cliche.analyze(merged), score: source.score, verdict: perFile.length ? this.cliche.analyze('').verdict : '' };

    // 2. Визуальный слой CSS
    const cssReports = input.cssFragments.map((f) => this.gradient.scanStylesheet(f.code, f.file));
    const gradientReport: StylesheetReport = {
      ok: cssReports.every((r) => r.ok),
      score: cssReports.length ? Math.min(...cssReports.map((r) => r.score)) : 100,
      violations: cssReports.flatMap((r) => r.violations),
      gradients: cssReports.reduce((s, r) => s + r.gradients, 0)
    };

    // 3. Отступы
    const spacingReports = [
      ...input.cssFragments.map((f) => this.spacing.scanSource(f.code, f.file, { unit: 'css' })),
      ...input.tsxFragments.map((f) => this.spacing.scanSource(f.code, f.file, { unit: 'tsx' }))
    ];
    const spacingReport = this.spacing.aggregate(spacingReports);

    // 4-5. Факты и читаемость (если вызывающий слой их посчитал)
    const facts = input.factDensity?.score ?? 100;
    const readability = input.readability?.score ?? 100;

    // 6. Контраст
    let contrast = 100;
    if (input.minApcaLc !== undefined) {
      if (input.minApcaLc < 60) {
        contrast = Math.round((input.minApcaLc / 60) * 100);
        notes.push(`APCA Lc ${input.minApcaLc} ниже порога 60 — пострадает читаемость на солнце/в пыли.`);
      } else if (input.minApcaLc < 75) {
        contrast = 95;
        notes.push(`APCA Lc ${input.minApcaLc}: крупный текст допустим, body-текст подтянуть до 75.`);
      }
    }

    const breakdown: OriginalityBreakdown = {
      copy: cliches.score,
      visuals: gradientReport.score,
      spacing: spacingReport.ok
        ? Math.max(70, spacingReport.tokenUsage)
        : Math.max(0, 100 - spacingReport.violations.filter((v) => v.severity === 'block').length * 12),
      facts,
      readability,
      contrast
    };

    const totalWeight = Object.values(WEIGHTS).reduce((a, b) => a + b, 0);
    const score = Math.round(
      (Object.keys(WEIGHTS) as Array<keyof OriginalityBreakdown>).reduce(
        (sum, key) => sum + breakdown[key] * WEIGHTS[key],
        0
      ) / totalWeight
    );

    const blocking = findings.filter((f) => f.type === 'CRITICAL_AI_CLICHE');
    let verdict: OriginalityReport['verdict'] = 'pass';
    if (blocking.length >= 3 || score < 55) verdict = 'reject';
    else if (score < ORIGINALITY_THRESHOLD || blocking.length || spacingReport.violations.some((v) => v.severity === 'block'))
      verdict = 'rework';

    if (verdict === 'reject') notes.push('Порог 55/100: переписать тексты и палитру с нуля, правки точечно не помогут.');
    if (!spacingReport.ok) notes.push(`Spacing: ${spacingReport.violations.filter((v) => v.severity === 'block').length} off-scale значений >= 8px блокируют билд.`);

    return {
      score,
      verdict,
      breakdown,
      weights: WEIGHTS,
      cliches: { ...cliches, issues: findings },
      gradientReport,
      spacingReport,
      findings,
      constraints: [],
      notes
    };
  }

  public static threshold(): number {
    return ORIGINALITY_THRESHOLD;
  }
}
