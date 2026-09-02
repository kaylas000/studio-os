// library/04-spacing/SpacingOverlay.ts

export class SpacingOverlay {
  private active: boolean = false;
  private approvedScale = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192];
  private overlays: HTMLElement[] = [];
  private maxNodes: number;

  constructor(maxNodes: number = 400) {
    this.maxNodes = maxNodes;
  }

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
    const all = Array.from(document.querySelectorAll<HTMLElement>('body *:not(script):not(style)'));
      // Ограничитель: на длинных страницах 20 000 бейджей вешают сам оверлей
      const elements = all
        .filter((el) => !el.classList.contains('studio-spacing-badge'))
        .slice(0, this.maxNodes);

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
          background: ${isMtValid ? 'rgba(0, 255, 136, 0.85)' : 'rgba(255, 50, 50, 0.9)'};
          color: #000;
          font-family: monospace;
          font-size: 9px;
          font-weight: bold;
          padding: 2px 4px;
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
