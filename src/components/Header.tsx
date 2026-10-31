import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Call02Icon, Cancel01Icon, GlobeIcon, Menu01Icon } from "@hugeicons/core-free-icons";
import { langs, site } from "@/content/catalog";
import type { Dict, Lang } from "@/content/types";

export function Header({ d, lang }: { d: Dict; lang: Lang }) {
  const links = [
    { href: "#products", label: d.nav.products },
    { href: "#customers", label: d.nav.customers },
    { href: "#quality", label: d.nav.quality },
    { href: "#order", label: d.nav.order },
    { href: "#future", label: d.nav.future },
    { href: "#contacts", label: d.nav.contacts },
  ];
  const home = langs.find((l) => l.id === lang)?.href ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <a href={home} className="flex flex-col leading-none" aria-label="Nebitmaş">
          <span className="text-xl font-bold tracking-wide text-ink">NEBITMAŞ</span>
          <span className="mt-1 whitespace-nowrap text-[11px] text-faint">{d.hero.enterprise}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 whitespace-nowrap text-sm font-medium text-muted xl:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <LangSwitch lang={lang} />
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden h-10 items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink-press sm:inline-flex"
          >
            <HugeiconsIcon icon={Call02Icon} size={16} />
            {site.phone.display}
          </a>

          <details className="group xl:hidden" data-dropdown>
            <summary
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-surface text-ink"
              aria-label={d.nav.menu}
            >
              <HugeiconsIcon icon={Menu01Icon} size={20} className="group-open:hidden" />
              <HugeiconsIcon icon={Cancel01Icon} size={20} className="hidden group-open:block" />
            </summary>
            <div className="absolute inset-x-0 top-16 border-b border-border bg-surface px-4 pb-6 pt-2 shadow-sm sm:px-6">
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="border-b border-border py-3 text-base font-medium text-text"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-base font-medium text-white"
              >
                <HugeiconsIcon icon={Call02Icon} size={18} />
                {site.phone.display}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

// Выпадающий список, а не три кнопки (просьба 2026-10-31). На <details>,
// без JavaScript: на медленном канале язык переключается ещё до загрузки
// скриптов. Закрытие по клику мимо и по Esc — в MenuCloser.
export function LangSwitch({ lang, onDark }: { lang: Lang; onDark?: boolean }) {
  const current = langs.find((l) => l.id === lang) ?? langs[0];
  return (
    <details className="group relative" data-dropdown>
      <summary
        className={`flex h-10 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-sm font-semibold transition-colors ${
          onDark
            ? "border-white/40 text-white hover:border-white"
            : "border-border-strong bg-surface text-text hover:border-ink"
        }`}
        aria-label={current.name}
      >
        <HugeiconsIcon icon={GlobeIcon} size={16} />
        {current.label}
        <HugeiconsIcon icon={ArrowDown01Icon} size={14} className="transition-transform group-open:rotate-180" />
      </summary>
      <ul
        className={`absolute right-0 z-50 min-w-44 overflow-hidden rounded-md bg-surface py-1 shadow-lg ring-1 ring-border ${
          onDark ? "bottom-12" : "top-12"
        }`}
      >
        {langs.map((l) => {
          const active = l.id === lang;
          return (
            <li key={l.id}>
              <a
                href={l.href}
                hrefLang={l.id}
                lang={l.id}
                aria-current={active ? "page" : undefined}
                className={`flex h-11 items-center justify-between gap-4 px-4 text-sm transition-colors ${
                  active ? "font-semibold text-ink" : "text-text hover:bg-paper"
                }`}
              >
                {l.name}
                <span className="text-xs font-semibold text-faint">{l.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
