// library/04-spacing/primitives.tsx
// SYS-04: примитивы <Box>/<Stack>, где произвольный отступ физически невозможен —
// пропсы принимают только ключи шкалы. Тип-гейт + рантайм-гейт (в dev ругается в консоль).

import * as React from 'react';

export type SpacingToken =
  | 0 | 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80 | 96 | 128 | 160 | 192 | 240 | 320;

export type FluidToken = 'section' | 'container' | 'grid' | 'card';

export const APPROVED_TOKENS: SpacingToken[] = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 240, 320];

const FLUID: Record<FluidToken, string> = {
  section: 'var(--fluid-section-gap)',
  container: 'var(--fluid-container-pad)',
  grid: 'var(--fluid-grid-gap)',
  card: 'var(--fluid-card-pad)'
};

export function tokenValue(value: SpacingToken | FluidToken | `clamp<${string}>` | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'string') {
    if (value.startsWith('clamp<')) return value.slice(6, -1);
    return FLUID[value as FluidToken];
  }
  if (!APPROVED_TOKENS.includes(value)) {
    if (import.meta.env?.DEV ?? false) {
      // eslint-disable-next-line no-console
      console.warn(`[STUDIO OS · SYS-04] отступ ${value}px вне шкалы токенов — см. library/04-spacing/tokens.css`);
    }
    const nearest = APPROVED_TOKENS.reduce((b, t) => (Math.abs(t - value) < Math.abs(b - value) ? t : b), 0);
    return `var(--space-${nearest})`;
  }
  return `var(--space-${value})`;
}

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  pad?: SpacingToken | FluidToken;
  px?: SpacingToken | FluidToken;
  py?: SpacingToken | FluidToken;
  mt?: SpacingToken;
  mb?: SpacingToken;
  as?: keyof React.JSX.IntrinsicElements;
  tone?: 'surface' | 'accent' | 'outline';
}

export function Box({ pad, px, py, mt, mb, as = 'div', tone = 'surface', style, children, ...rest }: BoxProps) {
  const Comp = as as React.ElementType;
  const computed: React.CSSProperties = {
    padding: pad ? tokenValue(pad) : undefined,
    paddingLeft: px ? tokenValue(px) : undefined,
    paddingRight: px ? tokenValue(px) : undefined,
    paddingTop: py ? tokenValue(py) : undefined,
    paddingBottom: py ? tokenValue(py) : undefined,
    marginTop: mt ? tokenValue(mt) : undefined,
    marginBottom: mb ? tokenValue(mb) : undefined,
    ...style
  };
  return (
    <Comp data-tone={tone} style={computed} {...rest}>
      {children}
    </Comp>
  );
}

export interface StackProps extends Omit<BoxProps, 'pad' | 'px' | 'py'> {
  gap?: SpacingToken | FluidToken;
  flow?: 'vertical' | 'horizontal' | 'wrap';
  align?: 'start' | 'center' | 'end' | 'stretch';
}

export function Stack({ gap = 16, flow = 'vertical', align = 'stretch', style, children, ...rest }: StackProps) {
  const dir = flow === 'vertical' ? 'column' : 'row';
  return (
    <Box
      style={{
        display: flow === 'wrap' ? 'flex' : 'flex',
        flexDirection: flow === 'vertical' ? 'column' : 'row',
        flexWrap: flow === 'wrap' ? 'wrap' : 'nowrap',
        gap: tokenValue(gap),
        alignItems: align === 'stretch' ? 'stretch' : align,
        ...style
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

/** Секция: единственный легальный способ задать вертикальный ритм страницы. */
export function Section({ children, id, bleed = false, ...rest }: BoxProps & { id?: string; bleed?: boolean }) {
  return (
    <section
      id={id}
      data-bleed={bleed ? 'true' : undefined}
      style={{
        paddingBlock: 'var(--fluid-section-gap)',
        paddingLeft: bleed ? undefined : 'var(--fluid-container-pad)',
        paddingRight: bleed ? undefined : 'var(--fluid-container-pad)'
      }}
      {...rest}
    >
      {children}
    </section>
  );
}
