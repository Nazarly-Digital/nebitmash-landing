"use client";

import { useEffect } from "react";

// Меню на телефоне — <details>: открывается без JavaScript. Но после тапа по
// пункту оно осталось бы открытым и закрыло раздел, к которому человек
// перешёл. Закрываем его по клику на ссылку внутри.
export function MenuCloser() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("header details a");
      link?.closest("details")?.removeAttribute("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
