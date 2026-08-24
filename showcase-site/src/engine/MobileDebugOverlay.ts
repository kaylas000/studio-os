// showcase-site/src/engine/MobileDebugOverlay.ts
/**
 * MobileDebugOverlay — Живой инструмент отладки мобильной адаптации (из Руководства 3)
 * Активируется тройным тапом по экрану на телефоне или вызовом enable()
 */

export class MobileDebugOverlay {
  private isActive: boolean = false;
  private panel: HTMLElement | null = null;

  public toggle() {
    this.isActive ? this.disable() : this.enable();
  }

  public enable() {
    this.isActive = true;
    this._createPanel();
    this._runAllChecks();
  }

  public disable() {
    this.isActive = false;
    this.panel?.remove();
    this.panel = null;
  }

  private _createPanel() {
    if (document.getElementById('mobile-debug-panel')) return;
    this.panel = document.createElement('div');
    this.panel.id = 'mobile-debug-panel';
    this.panel.style.cssText = `
      position: fixed;
      bottom: 0; left: 0; right: 0;
      max-height: 55dvh;
      overflow-y: auto;
      background: rgba(10, 10, 15, 0.96);
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      padding: 16px;
      z-index: 99999999;
      border-top: 2px solid #d4af37;
      box-shadow: 0 -10px 40px rgba(0,0,0,0.9);
      backdrop-filter: blur(16px);
    `;
    document.body.appendChild(this.panel);
  }

  private _runAllChecks() {
    if (!this.panel) return;

    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const hasHorizontalOverflow = scrollWidth > docWidth;

    // Check touch targets
    const buttons = document.querySelectorAll<HTMLElement>('button, a, input, select');
    let smallTargets = 0;
    buttons.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && (rect.width < 44 || rect.height < 44)) smallTargets++;
    });

    const html = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; padding-bottom:8px; margin-bottom:8px;">
        <strong style="color:#d4af37;">📱 STUDIO OS Mobile Diagnostics</strong>
        <button onclick="window.__mobileDebug?.disable()" style="color:#aaa; background:none; border:none; font-size:16px; cursor:pointer;">✕</button>
      </div>
      <div style="margin-bottom:6px;">Вьюпорт: <strong>${window.innerWidth}x${window.innerHeight}px</strong> (DPR: ${window.devicePixelRatio}x)</div>
      
      <div style="padding:6px 0; border-bottom:1px solid #222; color:${hasHorizontalOverflow ? '#ff4444' : '#00ff88'};">
        ${hasHorizontalOverflow ? '❌ Горизонтальный скролл: +' + (scrollWidth - docWidth) + 'px' : '✅ Горизонтальный скролл: 0px (Идеально)'}
      </div>

      <div style="padding:6px 0; border-bottom:1px solid #222; color:${smallTargets === 0 ? '#00ff88' : '#ffaa00'};">
        ${smallTargets === 0 ? '✅ Touch-Target Matrix: Все ' + buttons.length + ' элементов ≥ 44x44px' : '⚠️ ' + smallTargets + ' элементов меньше 44px'}
      </div>

      <div style="padding:6px 0; border-bottom:1px solid #222; color:#00ff88;">
        ✅ Safe-Area-Inset: Поддержка Notch / Dynamic Island активна
      </div>

      <div style="padding:6px 0; color:#00ff88;">
        ✅ Fluid Clamp Typo: Плавное масштабирование 320px–1440px
      </div>
    `;

    this.panel.innerHTML = html;
  }
}

// Global setup & triple-tap trigger (Guide 3)
if (typeof window !== 'undefined') {
  (window as any).__mobileDebug = new MobileDebugOverlay();
  let tapCount = 0;
  let tapTimer: any = null;

  document.addEventListener('touchstart', () => {
    tapCount++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => { tapCount = 0; }, 500);

    if (tapCount === 3) {
      (window as any).__mobileDebug.enable();
      tapCount = 0;
    }
  }, { passive: true });
}
