import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
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
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href={home} className="flex flex-col leading-none" aria-label="Nebitmaş">
          <span className="font-serif text-xl font-semibold tracking-wide text-ink">NEBITMAŞ</span>
          <span className="mt-1 text-[11px] text-faint">{d.hero.enterprise}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 text-sm font-medium text-muted lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LangSwitch lang={lang} />
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden h-10 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink-press sm:inline-flex"
          >
            <HugeiconsIcon icon={Call02Icon} size={16} />
            {site.phone.display}
          </a>

          <details className="group lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border-strong text-ink"
              aria-label={d.nav.menu}
            >
              <HugeiconsIcon icon={Menu01Icon} size={20} className="group-open:hidden" />
              <HugeiconsIcon icon={Cancel01Icon} size={20} className="hidden group-open:block" />
            </summary>
            <div className="absolute inset-x-0 top-16 border-b border-border bg-paper px-4 pb-6 pt-2 shadow-sm sm:px-6">
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
                className="mt-4 flex h-12 items-center justify-center gap-2 rounded-lg bg-ink text-base font-medium text-white"
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

export function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="flex h-10 items-center rounded-lg border border-border-strong p-0.5 text-xs font-semibold">
      {langs.map((l) => (
        <a
          key={l.id}
          href={l.href}
          hrefLang={l.id}
          aria-current={l.id === lang ? "page" : undefined}
          className={`flex h-full items-center rounded-md px-2.5 transition-colors ${
            l.id === lang ? "bg-ink text-white" : "text-muted hover:text-ink"
          }`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
