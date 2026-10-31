import type { NextConfig } from "next";

// Статическая выгрузка: на выходе папка out/ с готовыми HTML-файлами.
// Раздаёт их Caddy, который уже стоит на сервере nebithi.gov.tm (там же
// панель учёта под /adm) — отдельный Node-процесс ради визитки не нужен.
const nextConfig: NextConfig = {
  output: "export",
  // /ru/ → out/ru/index.html: Caddy отдаёт папку без дополнительных правил.
  trailingSlash: true,
  // Оптимизатора картинок при статической выгрузке нет; сжимаем заранее
  // скриптом scripts/images.sh.
  images: { unoptimized: true },
};

export default nextConfig;
