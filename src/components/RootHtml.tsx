import type { ReactNode } from "react";
import { inter } from "@/app/fonts";
import type { Lang } from "@/content/types";
import "@/app/globals.css";

// Общий <html> для двух корневых макетов: туркменская версия живёт на «/»,
// русская и английская — на /ru/ и /en/. У каждой свой lang, иначе
// поисковик и экранный диктор читают туркменский текст как английский.
export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
