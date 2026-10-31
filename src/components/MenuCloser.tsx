"use client";

import { useEffect } from "react";

// Меню на телефоне и выбор языка — <details>: открываются без JavaScript.
// Но сами по себе они не закрываются: после тапа по пункту меню оно
// осталось бы поверх раздела, к которому человек перешёл, а открытый
// список языков висел бы до повторного клика по нему же.
// Закрываем: по клику на ссылку внутри, по клику мимо, по Esc, и одно
// открытое закрывает другое.
export function MenuCloser() {
  useEffect(() => {
    const all = () => document.querySelectorAll<HTMLDetailsElement>("details[data-dropdown][open]");
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const own = target.closest("details[data-dropdown]");
      all().forEach((d) => {
        if (d !== own || target.closest("a")) d.removeAttribute("open");
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") all().forEach((d) => d.removeAttribute("open"));
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
