// Фото-слот: пока клиент не положил снимок в src/assets/photos/, блок остаётся
// «техническим чертежом» — макет не выглядит сломанным, и место под фото очевидно.
import { useMemo } from 'react';

const registry = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>;

const byName: Record<string, string> = Object.fromEntries(
  Object.entries(registry).map(([path, url]) => {
    const key = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    return [key, url as string];
  })
);

export function hasPhoto(name: string): boolean {
  return Boolean(byName[name]);
}

export interface PhotoSlotProps {
  name: string;
  alt: string;
  caption?: string;
  /** «3/2», «4/3», «3/4» — рамка и картинка подстраиваются под кадр, LCP не прыгает */
  ratio?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function PhotoSlot({ name, alt, caption, ratio = '3/2', width = 1200, height = 800, priority = false }: PhotoSlotProps) {
  const src = useMemo(() => byName[name], [name]);
  const [rw, rh] = (ratio || '3/2').split('/').map(Number);
  const safeRatio = Number.isFinite(rw) && Number.isFinite(rh) && rw > 0 && rh > 0 ? `${rw} / ${rh}` : '3 / 2';
  // размеры тега img берём из кадра: без них браузер не зарезервирует место до загрузки
  const imgW = width;
  const imgH = Math.round((width * rh) / rw);

  if (!src) {
    return (
      <figure className="photo photo--empty" data-slot={name} style={{ aspectRatio: safeRatio }} aria-label={`Место под фото: ${name}`}>
        <figcaption className="mono photo__name">слот · {name}.jpg</figcaption>
        <p className="photo__hint">
          Положите снимок {ratio.replace('/', '×')} (от {width}px по ширине) в src/assets/photos/ — он появится здесь
          автоматически, без правки кода.
        </p>
      </figure>
    );
  }

  return (
    <figure className="photo" data-slot={name} style={{ aspectRatio: safeRatio }}>
      <img src={src} alt={alt} width={imgW} height={imgH} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      {caption ? <figcaption className="photo__stamp">{caption}</figcaption> : null}
      <span className="sr-hidden" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }} aria-hidden="true">
        {rw}×{rh}
      </span>
    </figure>
  );
}
