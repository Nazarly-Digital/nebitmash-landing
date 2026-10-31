import { Inter, Source_Serif_4 } from "next/font/google";

// Шрифты скачиваются при сборке и кладутся рядом с сайтом: из Туркменистана
// внешние CDN открываются через раз, а без шрифта заголовки прыгают.
// latin-ext — туркменские ň, ž, ş, ý, ä; cyrillic — русская версия.
export const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-serif-4",
  display: "swap",
});
