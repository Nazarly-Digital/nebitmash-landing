#!/usr/bin/env bash
# Сжимает исходники из assets/source в public/img: WebP двух ширин.
# Почему руками, а не next/image: при статической выгрузке оптимизатора
# картинок нет (нужен свой сервер), а исходники из каталога — по 0,5–1 МБ,
# по туркменскому мобильному интернету такая страница грузилась бы минуту.
# 800 px — карточки и телефоны, 1600 px — крупные блоки на компьютере.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/img
for src in assets/source/*.jpg; do
  name=$(basename "$src" .jpg)
  # Исходник уже 1600 — не растягиваем: файл вырастет, а резкость нет.
  src_w=$(sips -g pixelWidth "$src" | awk '/pixelWidth/ {print $2}')
  for w in 800 1600; do
    out="public/img/$name-$w.webp"
    [ "$out" -nt "$src" ] && continue
    target=$(( w < src_w ? w : src_w ))
    cwebp -quiet -q 78 -resize "$target" 0 "$src" -o "$out"
  done
done
du -sh public/img
