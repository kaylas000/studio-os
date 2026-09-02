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
  ratio?: '3/2' | '16/10' | '4/5';
  width?: number;
  height?: number;
  priority?: boolean;
}

export function PhotoSlot({ name, alt, caption, ratio = '3/2', width = 1200, height = 800, priority = false }: PhotoSlotProps) {
  const src = useMemo(() => byName[name], [name]);
  const [rw, rh] = ratio.split('/').map(Number);

  if (!src) {
    return (
      <figure className="photo photo--empty" data-slot={name} aria-label={`Место под фото: ${name}`}>
        <figcaption className="mono photo__name">слот · {name}.jpg</figcaption>
        <p className="photo__hint">
          Положите снимок {ratio.replace('/', '×')} (от {width}px по ширине) в src/assets/photos/ — он появится здесь
          автоматически, без правки кода.
        </p>
      </figure>
    );
  }

  return (
    <figure className="photo" data-slot={name}>
      <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      {caption ? <figcaption className="photo__stamp">{caption}</figcaption> : null}
      <span className="sr-hidden" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }} aria-hidden="true">
        {rw}×{rh}
      </span>
    </figure>
  );
}
