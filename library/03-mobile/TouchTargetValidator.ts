// library/03-mobile/TouchTargetValidator.ts

export interface TouchViolation {
  selector: string;
  actualSize: string;
  requiredSize: string;
}

export class TouchTargetValidator {
  private minSize: number;

  constructor(minSize: number = 44) {
    this.minSize = minSize;
  }

  public validateDOM(rootNode: HTMLElement = document.body): { valid: boolean; violations: TouchViolation[] } {
    const interactives = rootNode.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [role="button"], [role="link"], [onclick]'
    );
    const violations: TouchViolation[] = [];

    interactives.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (rect.width < this.minSize || rect.height < this.minSize) {
          violations.push({
            selector: el.tagName.toLowerCase() + (el.className ? `.${el.className.toString().split(' ')[0]}` : ''),
            actualSize: `${Math.round(rect.width)}x${Math.round(rect.height)}px`,
            requiredSize: `${this.minSize}x${this.minSize}px`
          });
        }
      }
    });

    return {
      valid: violations.length === 0,
      violations
    };
  }
}
