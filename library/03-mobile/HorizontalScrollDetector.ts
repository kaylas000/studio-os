// library/03-mobile/HorizontalScrollDetector.ts

export class HorizontalScrollDetector {
  public detect(): { hasIssue: boolean; overflowPx: number; culprits: string[] } {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const overflowPx = scrollWidth - docWidth;

    if (overflowPx <= 1) {
      return { hasIssue: false, overflowPx: 0, culprits: [] };
    }

    const culprits: string[] = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 1 || rect.left < -1) {
        const id = el.id ? `#${el.id}` : '';
        const cls = el.className && typeof el.className === 'string' ? `.${el.className.split(' ')[0]}` : '';
        culprits.push(`${el.tagName.toLowerCase()}${id}${cls} (+${Math.round(rect.right - docWidth)}px)`);
      }
    });

    return {
      hasIssue: true,
      overflowPx,
      culprits: culprits.slice(0, 5)
    };
  }
}
