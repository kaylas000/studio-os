// library/01-animations/ImageSequenceScrubber.ts
export interface SequenceOptions {
  canvas: HTMLCanvasElement;
  frameCount: number;
  frameUrlBuilder: (index: number) => string;
  onProgress?: (loadedRatio: number) => void;
}

export class ImageSequenceScrubber {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private frameCount: number;
  private images: HTMLImageElement[] = [];
  private currentFrameIndex: number = 0;

  constructor(options: SequenceOptions) {
    this.canvas = options.canvas;
    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('2D context not supported');
    this.ctx = context;
    this.frameCount = options.frameCount;
    this._preloadImages(options);
  }

  private _preloadImages(options: SequenceOptions) {
    let loaded = 0;
    for (let i = 0; i < this.frameCount; i++) {
      const img = new Image();
      img.onload = () => {
        loaded++;
        options.onProgress?.(loaded / this.frameCount);
        if (i === 0) this.renderFrame(0);
      };
      img.src = options.frameUrlBuilder(i);
      this.images.push(img);
    }
  }

  public renderFrame(index: number) {
    const safeIndex = Math.max(0, Math.min(this.frameCount - 1, Math.round(index)));
    this.currentFrameIndex = safeIndex;
    const img = this.images[safeIndex];
    if (img && img.complete && img.naturalWidth > 0) {
      this.canvas.width = img.naturalWidth;
      this.canvas.height = img.naturalHeight;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0);
    }
  }

  public getCurrentFrame(): number {
    return this.currentFrameIndex;
  }
}
