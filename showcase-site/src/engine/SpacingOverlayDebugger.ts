// showcase-site/src/engine/SpacingOverlayDebugger.ts
/**
 * SpacingOverlayDebugger — Инструмент визуального контроля отступов (Руководство 4)
 * Активируется горячей клавишей Ctrl+Shift+S или кнопкой в шапке
 */

export class SpacingOverlayDebugger {
  private active: boolean = false;
  private approvedScale = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192];
  private overlays: HTMLElement[] = [];

  public toggle(): boolean {
    this.active = !this.active;
    if (this.active) {
      this._renderOverlay();
    } else {
      this._clearOverlay();
    }
    return this.active;
  }

  private _renderOverlay() {
    this._clearOverlay();
    const elements = document.querySelectorAll<HTMLElement>('body *:not(script):not(style)');

    elements.forEach(el => {
      const comp = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const mt = parseFloat(comp.marginTop);
      const pt = parseFloat(comp.paddingTop);

      if (mt > 0 || pt > 0) {
        const badge = document.createElement('div');
        badge.className = 'studio-spacing-badge';
        const isMtValid = this.approvedScale.includes(Math.round(mt));
        badge.style.cssText = `
          position: absolute;
          top: ${rect.top + window.scrollY}px;
          left: ${rect.left + window.scrollX}px;
          background: ${isMtValid ? 'rgba(0, 255, 136, 0.9)' : 'rgba(255, 50, 50, 0.92)'};
          color: #000;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: bold;
          padding: 2px 5px;
          border-radius: 2px;
          pointer-events: none;
          z-index: 999999;
        `;
        badge.textContent = `M:${mt}px P:${pt}px`;
        document.body.appendChild(badge);
        this.overlays.push(badge);
      }
    });
  }

  private _clearOverlay() {
    this.overlays.forEach(o => o.remove());
    this.overlays = [];
  }
}

if (typeof window !== 'undefined') {
  (window as any).__spacingOverlay = new SpacingOverlayDebugger();

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
      e.preventDefault();
      (window as any).__spacingOverlay?.toggle();
    }
  });
}
