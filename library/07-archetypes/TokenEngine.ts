// library/07-archetypes/TokenEngine.ts

export interface ArchetypeDefinition {
  id: string;
  name: string;
  tagline: string;
  colors: {
    bgPrimary: string;
    bgSurface: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  typography: {
    fontHeading: string;
    fontBody: string;
    fontMono?: string;
    scaleRatio: number;
    letterSpacing: string;
  };
  geometry: {
    radiusSm: string;
    radiusMd: string;
    radiusLg: string;
    borderWidth: string;
  };
  effects: {
    shadowCard: string;
    backdropBlur: string;
  };
}

// Палитры проверены auditArchetypeContrast(): APCA body >= 75 Lc, крупный >= 60, ui >= 45.
// Правка цвета без пересчёта Lc блокируется `studio audit`.
export const ARCHETYPES: Record<string, ArchetypeDefinition> = {
  'luxury-noir': {
    id: 'luxury-noir',
    name: 'Luxury Noir',
    tagline: 'Кинематографичная эстетика высокой моды и премиального люкса',
    colors: {
      bgPrimary: '#08080a',
      bgSurface: '#121216',
      textPrimary: '#f7f7fa',
      textSecondary: '#c2c2cd',
      accent: '#d4af37',
      border: 'rgba(212, 175, 55, 0.25)'
    },
    typography: {
      fontHeading: "'Cormorant Garamond', 'Playfair Display', serif",
      fontBody: "'Cormorant Garamond', 'Georgia', serif",
      scaleRatio: 1.414,
      letterSpacing: '0.08em'
    },
    geometry: {
      radiusSm: '1px',
      radiusMd: '2px',
      radiusLg: '4px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: '0 20px 50px rgba(0,0,0,0.8)',
      backdropBlur: '12px'
    }
  },
  'neo-brutalism': {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    tagline: 'Сырой уличный контраст, четкие тени со смещением и моноширинный слог',
    colors: {
      bgPrimary: '#f4f0ea',
      bgSurface: '#ffffff',
      textPrimary: '#000000',
      textSecondary: '#222222',
      accent: '#d92c00',
      border: '#000000'
    },
    typography: {
      fontHeading: "'Unbounded', 'Space Grotesk', sans-serif",
      fontBody: "'Golos Text', 'JetBrains Mono', monospace",
      scaleRatio: 1.5,
      letterSpacing: '-0.04em'
    },
    geometry: {
      radiusSm: '0px',
      radiusMd: '0px',
      radiusLg: '0px',
      borderWidth: '3px'
    },
    effects: {
      shadowCard: '6px 6px 0px #000000',
      backdropBlur: '0px'
    }
  },
  'cyber-tech': {
    id: 'cyber-tech',
    name: 'Cyber-Tech',
    tagline: 'Инженерная точность, терминальные сетки, скошенные углы и неон',
    colors: {
      bgPrimary: '#050b14',
      bgSurface: '#0d1829',
      textPrimary: '#00f2fe',
      textSecondary: '#a8c6ff',
      accent: '#00ff88',
      border: 'rgba(0, 242, 254, 0.3)'
    },
    typography: {
      // Orbitron/Share Tech Mono не имеют кириллицы — для RU-проектов только эти стеки.
      fontHeading: "'Unbounded', 'Russo One', 'Chakra Petch', sans-serif",
      fontBody: "'Golos Text', 'IBM Plex Sans', sans-serif",
      fontMono: "'JetBrains Mono', 'IBM Plex Mono', monospace",
      scaleRatio: 1.333,
      letterSpacing: '0.05em'
    },
    geometry: {
      radiusSm: '4px',
      radiusMd: '8px',
      radiusLg: '12px',
      borderWidth: '1.5px'
    },
    effects: {
      shadowCard: '0 0 25px rgba(0, 255, 136, 0.2)',
      backdropBlur: '16px'
    }
  },
  'editorial-swiss': {
    id: 'editorial-swiss',
    name: 'Editorial Swiss',
    tagline: 'Академическая строгость, швейцарская сетка и безупречная типографика',
    colors: {
      bgPrimary: '#f9f9fb',
      bgSurface: '#ffffff',
      textPrimary: '#111111',
      textSecondary: '#4d4d4d',
      accent: '#0055ff',
      border: '#e2e2e8'
    },
    typography: {
      fontHeading: "'Unbounded', 'Neue Montreal', 'Golos Text', sans-serif",
      fontBody: "'Golos Text', 'IBM Plex Sans', sans-serif",
      scaleRatio: 1.25,
      letterSpacing: '-0.02em'
    },
    geometry: {
      radiusSm: '0px',
      radiusMd: '0px',
      radiusLg: '0px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: 'none',
      backdropBlur: '0px'
    }
  },
  'clean-minimal': {
    id: 'clean-minimal',
    name: 'Clean Minimal',
    tagline: 'Мягкий human-интерфейс, закругленные формы, воздух и деликатность',
    colors: {
      bgPrimary: '#0d0f12',
      bgSurface: '#181b20',
      textPrimary: '#ffffff',
      textSecondary: '#bcc4d2',
      accent: '#8b9dff',
      border: 'rgba(255, 255, 255, 0.08)'
    },
    typography: {
      fontHeading: "'Golos Text', 'Plus Jakarta Sans', sans-serif",
      fontBody: "'Golos Text', 'Plus Jakarta Sans', sans-serif",
      scaleRatio: 1.2,
      letterSpacing: '0em'
    },
    geometry: {
      radiusSm: '8px',
      radiusMd: '16px',
      radiusLg: '24px',
      borderWidth: '1px'
    },
    effects: {
      shadowCard: '0 10px 30px rgba(0,0,0,0.3)',
      backdropBlur: '20px'
    }
  }
};


// ─────────────────────────────────────────────────────────────────────────
// Утилиты: CSS-переменные, кириллическая подстраховка, контраст-аудит.
// ─────────────────────────────────────────────────────────────────────────

import { apcaLc, wcagRatio } from './contrast.ts';

export interface ArchetypeContrastRow {
  pair: string;
  fg: string;
  bg: string;
  apcaLc: number;
  wcag: number;
  usage: 'body' | 'large' | 'ui';
  pass: boolean;
}

export interface ArchetypeContrastReport {
  archetype: string;
  rows: ArchetypeContrastRow[];
  minBodyLc: number;
  ok: boolean;
}

const CYRILLIC_UNSAFE = /Orbitron|Share Tech Mono|Cinzel|Chakra Petch|Neue Montreal|Syne|Space Grotesk|Plus Jakarta/i;

/** Предупреждает, если первый шрифт стека не поддерживает кириллицу. */
export function cyrillicRisk(archetypeId: string): string[] {
  const a = ARCHETYPES[archetypeId];
  if (!a) return ['Неизвестный архетип: ' + archetypeId];
  const risks: string[] = [];
  for (const [role, stack] of Object.entries(a.typography)) {
    if (typeof stack !== 'string') continue;
    const first = stack.split(',')[0]?.replace(/['"]/g, '').trim();
    if (!first) continue;
    if (CYRILLIC_UNSAFE.test(first)) {
      risks.push(`${archetypeId}.${role}: «${first}» не покрывает кириллицу — нужен fallback доGreek/latin-only шрифта, иначе RU-текст поедет в системный sans.`);
    }
  }
  return risks;
}

/** CSS Custom Properties — единый источник токенов для любого проекта студии. */
export function toCssVars(archetypeId: string, prefix = 'studio'): Record<string, string> {
  const a = ARCHETYPES[archetypeId] ?? ARCHETYPES['cyber-tech'];
  return {
    [`--${prefix}-bg`]: a.colors.bgPrimary,
    [`--${prefix}-surface`]: a.colors.bgSurface,
    [`--${prefix}-text`]: a.colors.textPrimary,
    [`--${prefix}-text-muted`]: a.colors.textSecondary,
    [`--${prefix}-accent`]: a.colors.accent,
    [`--${prefix}-border`]: a.colors.border,
    [`--${prefix}-font-heading`]: a.typography.fontHeading,
    [`--${prefix}-font-body`]: a.typography.fontBody,
    [`--${prefix}-font-mono`]: a.typography.fontMono ?? 'ui-monospace, monospace',
    [`--${prefix}-ratio`]: String(a.typography.scaleRatio),
    [`--${prefix}-tracking`]: a.typography.letterSpacing,
    [`--${prefix}-radius-sm`]: a.geometry.radiusSm,
    [`--${prefix}-radius-md`]: a.geometry.radiusMd,
    [`--${prefix}-radius-lg`]: a.geometry.radiusLg,
    [`--${prefix}-border-width`]: a.geometry.borderWidth,
    [`--${prefix}-shadow-card`]: a.effects.shadowCard,
    [`--${prefix}-blur`]: a.effects.backdropBlur
  };
}

export function toCssBlock(archetypeId: string, prefix = 'studio'): string {
  const vars = toCssVars(archetypeId, prefix);
  return `:root, [data-archetype='${archetypeId}'] {\n${Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')}\n}`;
}

/** Проверяет ключевые цветовые пары архетипа через APCA. */
export function auditArchetypeContrast(archetypeId: string): ArchetypeContrastReport {
  const a = ARCHETYPES[archetypeId];
  const rows: ArchetypeContrastRow[] = [];
  if (!a) return { archetype: archetypeId, rows, minBodyLc: 0, ok: false };

  const pairs: Array<[string, string, string, 'body' | 'large' | 'ui']> = [
    ['textPrimary / bgPrimary', a.colors.textPrimary, a.colors.bgPrimary, 'body'],
    ['textSecondary / bgPrimary', a.colors.textSecondary, a.colors.bgPrimary, 'body'],
    ['textPrimary / bgSurface', a.colors.textPrimary, a.colors.bgSurface, 'body'],
    ['accent / bgPrimary', a.colors.accent, a.colors.bgPrimary, 'large'],
    ['accent / bgSurface', a.colors.accent, a.colors.bgSurface, 'ui']
  ];

  for (const [pair, fg, bg, usage] of pairs) {
    const lc = apcaLc(fg, bg);
    const need = usage === 'body' ? 75 : usage === 'large' ? 60 : 45;
    rows.push({
      pair,
      fg,
      bg,
      apcaLc: lc,
      wcag: wcagRatio(fg, bg),
      usage,
      pass: Math.abs(lc) >= need
    });
  }

  const bodyRows = rows.filter((r) => r.usage === 'body');
  const minBodyLc = bodyRows.length ? Math.min(...bodyRows.map((r) => Math.abs(r.apcaLc))) : 0;
  return { archetype: archetypeId, rows, minBodyLc, ok: rows.every((r) => r.pass) };
}

export function auditAllArchetypes(): ArchetypeContrastReport[] {
  return Object.keys(ARCHETYPES).map(auditArchetypeContrast);
}

/**
 * Аудит произвольной палитры (бренд-DNA клиента поверх архетипа).
 * Вызывается из `studio audit`, чтобы клиентские override-цвета не жили вне гейта.
 */
export function auditPaletteColors(
  colors: Partial<ArchetypeDefinition['colors']> & Record<string, string>,
  label = 'brand-dna'
): ArchetypeContrastReport {
  const bg = colors.bgPrimary ?? colors.bg ?? '#000000';
  const surface = colors.bgSurface ?? colors.surface ?? bg;
  const pairs: Array<[string, string, string, 'body' | 'large' | 'ui']> = [
    ['text / bg', colors.textPrimary ?? colors.text ?? '#ffffff', bg, 'body'],
    ['muted / bg', colors.textSecondary ?? colors.muted ?? colors.textSecondaryColor ?? '#888888', bg, 'body'],
    ['text / surface', colors.textPrimary ?? colors.text ?? '#ffffff', surface, 'body'],
    ['accent / bg', colors.accent ?? '#ffffff', bg, 'large'],
    ['accent / surface', colors.accent ?? '#ffffff', surface, 'ui'],
    ['muted / surface', colors.textSecondary ?? colors.muted ?? '#888888', surface, 'body']
  ];

  const rows: ArchetypeContrastRow[] = pairs.map(([pair, fg, bg2, usage]) => {
    const lc = apcaLc(String(fg), String(bg2));
    const need = usage === 'body' ? 75 : usage === 'large' ? 60 : 45;
    return { pair: `${label}: ${pair}`, fg: String(fg), bg: String(bg2), apcaLc: lc, wcag: wcagRatio(String(fg), String(bg2)), usage, pass: Math.abs(lc) >= need };
  });

  const body = rows.filter((r) => r.usage === 'body');
  return { archetype: label, rows, minBodyLc: body.length ? Math.min(...body.map((r) => Math.abs(r.apcaLc))) : 0, ok: rows.every((r) => r.pass) };
}
