import { Inter } from "next/font/google";

// Inter — как на gov.kz (выбор предприятия, 2026-10-31). Шрифт скачивается при
// сборке и лежит рядом с сайтом: внешние CDN из Туркменистана открываются
// через раз. latin-ext — туркменские ň, ž, ş, ý, ä; cyrillic — русская версия.
export const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});
