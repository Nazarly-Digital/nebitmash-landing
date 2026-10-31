/* eslint-disable @next/next/no-img-element --
   next/image при статической выгрузке не сжимает (нет сервера), а только
   добавляет код. Размеры уже нарезаны scripts/images.sh: 800 и 1600 px. */
import type { Img } from "@/content/catalog";

type Props = {
  img: Img;
  alt: string;
  // Ширина картинки на экране — браузер по ней выбирает 800 или 1600.
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function Picture({ img, alt, sizes, className = "", priority }: Props) {
  const fit = img.fit === "contain" ? "object-contain p-4" : "object-cover";
  return (
    <img
      src={`/img/${img.name}-800.webp`}
      srcSet={`/img/${img.name}-800.webp 800w, /img/${img.name}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${fit} ${className}`}
    />
  );
}
