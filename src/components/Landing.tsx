import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Call02Icon, Location01Icon, PrinterIcon } from "@hugeicons/core-free-icons";
import type { ReactNode } from "react";
import { customerImages, customerKeys, future, groups, products, site } from "@/content/catalog";
import { dicts } from "@/content";
import type { Dict, Lang, ProductId } from "@/content/types";
import { Header, LangSwitch } from "./Header";
import { MenuCloser } from "./MenuCloser";
import { Picture } from "./Picture";

export function Landing({ lang }: { lang: Lang }) {
  const d = dicts[lang];
  return (
    <>
      <Header d={d} lang={lang} />
      <MenuCloser />
      <main>
        <Hero d={d} />
        {site.showPresident && <President d={d} />}
        <Products d={d} lang={lang} />
        <Customers d={d} />
        <Quality d={d} />
        <Order d={d} />
        <Future d={d} />
        <Contacts d={d} />
      </main>
      <Footer d={d} lang={lang} />
    </>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, lead, dark }: { eyebrow: string; title: string; lead?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl ${dark ? "text-night-text" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-night-muted" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

function Hero({ d }: { d: Dict }) {
  return (
    <section className="border-b border-border">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="text-sm leading-snug text-muted">{d.hero.ministry}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{d.hero.enterprise}</p>
          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            «Nebitmaş»
            <span className="mt-2 block text-3xl text-text sm:text-4xl lg:text-[2.75rem]">{d.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{d.hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-base font-medium text-white transition-colors hover:bg-ink-press"
            >
              {d.hero.ctaProducts}
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border-strong px-6 text-base font-medium text-ink transition-colors hover:border-ink"
            >
              <HugeiconsIcon icon={Call02Icon} size={18} />
              {d.hero.ctaCall}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-xl bg-canvas lg:aspect-[3/4]">
          <Picture img={{ name: "building" }} alt={d.hero.buildingAlt} sizes="(min-width: 1024px) 480px, 100vw" priority />
        </div>
      </Container>
      <Container>
        <dl className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
          {d.stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 ${i % 2 === 1 ? "border-l border-border pl-4 sm:pl-6" : "pr-4"} ${
                i >= 2 ? "border-t border-border lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-mono text-2xl font-semibold tabular-nums text-ink sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function President({ d }: { d: Dict }) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="flex items-center gap-5 py-6 sm:gap-6">
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-canvas sm:h-28 sm:w-24">
          <Picture img={{ name: "president" }} alt={`${d.president.role} ${d.president.name}`} sizes="96px" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{d.president.role}</p>
          <p className="mt-2 font-serif text-xl font-medium text-ink sm:text-2xl">{d.president.name}</p>
        </div>
      </Container>
    </section>
  );
}

function Products({ d, lang }: { d: Dict; lang: Lang }) {
  return (
    <section id="products" className="py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow={d.products.eyebrow} title={d.products.title} lead={d.products.lead} />

        {/* Быстрый переход к направлению: 16 карточек на телефоне — это
            длинная лента, и нужный раздел иначе ищут пальцем. */}
        <nav className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#group-${g.id}`}
              className="flex h-10 shrink-0 items-center rounded-full border border-border-strong bg-surface px-4 text-sm font-medium text-text transition-colors hover:border-ink hover:text-ink"
            >
              {d.products.groups[g.id]}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-16">
          {groups.map((g) => (
            <div key={g.id} id={`group-${g.id}`}>
              <h3 className="flex items-baseline gap-3 border-b border-border pb-3 font-serif text-2xl font-medium text-ink">
                {d.products.groups[g.id]}
                <span className="font-mono text-sm text-faint">{String(g.products.length).padStart(2, "0")}</span>
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.products.map((id) => (
                  <ProductCard key={id} id={id} d={d} lang={lang} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ id, d, lang }: { id: ProductId; d: Dict; lang: Lang }) {
  const t = d.products.items[id];
  const p = products[id];
  const models = p.models?.[lang];
  const customer = p.madeFor ? d.customers.items[customerKeys.indexOf(p.madeFor)]?.name : undefined;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[4/3] bg-canvas">
        <Picture img={p.img} alt={t.title} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-accent">{t.subtitle}</p>
        <h4 className="mt-1.5 font-serif text-xl font-medium leading-snug text-ink">{t.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>

        <dl className="mt-4 space-y-3 border-t border-border pt-4">
          {t.facts.map((f) => (
            <div key={f.title}>
              <dt className="text-xs font-semibold text-text">{f.title}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-muted">{f.text}</dd>
            </div>
          ))}
        </dl>

        {(models || customer) && (
          <div className="mt-auto space-y-3 pt-5">
            {models && (
              <ul className="flex flex-wrap gap-1.5" aria-label={d.products.modelsLabel}>
                {models.map((m) => (
                  <li key={m} className="rounded-md border border-border bg-paper px-2 py-1 font-mono text-xs tabular-nums text-text">
                    {m}
                  </li>
                ))}
              </ul>
            )}
            {customer && (
              <p className="text-xs text-faint">
                {d.products.madeFor}: <span className="text-muted">{customer}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Customers({ d }: { d: Dict }) {
  return (
    <section id="customers" className="border-y border-border bg-surface py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow={d.customers.eyebrow} title={d.customers.title} lead={d.customers.lead} />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {d.customers.items.map((c, i) => (
            <li key={c.name} className="overflow-hidden rounded-xl border border-border bg-paper">
              <div className="relative aspect-[16/10] bg-canvas">
                <Picture img={customerImages[customerKeys[i]]} alt="" sizes="(min-width: 768px) 360px, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-medium leading-snug text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Quality({ d }: { d: Dict }) {
  return (
    <section id="quality" className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <SectionHead eyebrow={d.quality.eyebrow} title={d.quality.title} lead={d.quality.lead} />
          <ul className="mt-8 space-y-6">
            {d.quality.items.map((q) => (
              <li key={q.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-serif text-lg font-medium text-ink">{q.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{q.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-canvas">
          <Picture img={{ name: "switching" }} alt="" sizes="(min-width: 1024px) 540px, 100vw" />
        </div>
      </Container>
    </section>
  );
}

function Order({ d }: { d: Dict }) {
  return (
    <section id="order" className="border-t border-border bg-surface py-16 sm:py-20">
      <Container>
        <SectionHead eyebrow={d.order.eyebrow} title={d.order.title} lead={d.order.lead} />
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {d.order.steps.map((s, i) => (
            <li key={s.title} className="border-t border-border-strong pt-5">
              <span className="font-serif text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

// Тёмный фон и метка «рассматривается» — намеренно: это НЕ ассортимент.
// Если смешать с карточками выше, заказчик позвонит за автоклавом, которого
// завод ещё не делает (так и записано в каталоге — «отдельно от текущего»).
function Future({ d }: { d: Dict }) {
  return (
    <section id="future" className="bg-night py-16 text-night-text sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead eyebrow={d.future.eyebrow} title={d.future.title} lead={d.future.lead} dark />
          <span className="inline-flex h-8 w-fit shrink-0 items-center rounded-full border border-night-line px-3 text-xs font-medium text-night-muted">
            {d.future.badge}
          </span>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {future.map((f) => {
            const t = d.future.items[f.id];
            return (
              <li key={f.id} className="overflow-hidden rounded-xl border border-night-line">
                <div className="relative aspect-[3/2] bg-canvas">
                  <Picture img={f.img} alt={t.title} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-night-muted">{t.subtitle}</p>
                  <h3 className="mt-1.5 font-serif text-lg font-medium">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-night-muted">{t.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-night-muted">{d.future.note}</p>
      </Container>
    </section>
  );
}

function Contacts({ d }: { d: Dict }) {
  return (
    <section id="contacts" className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <SectionHead eyebrow={d.contacts.eyebrow} title={d.contacts.title} lead={d.contacts.lead} />
        <div className="divide-y divide-border rounded-xl border border-border bg-surface">
          <ContactRow icon={Call02Icon} label={d.contacts.phoneLabel}>
            <a href={`tel:${site.phone.tel}`} className="font-mono text-2xl tabular-nums text-ink hover:underline sm:text-3xl">
              {site.phone.display}
            </a>
          </ContactRow>
          <ContactRow icon={PrinterIcon} label={d.contacts.faxLabel}>
            <span className="font-mono text-xl tabular-nums text-text">{site.fax}</span>
          </ContactRow>
          <ContactRow icon={Location01Icon} label={d.contacts.addressLabel}>
            <address className="text-base not-italic leading-relaxed text-text">
              {d.contacts.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </ContactRow>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: typeof Call02Icon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 sm:p-6">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-ink">
        <HugeiconsIcon icon={icon} size={20} />
      </span>
      <div>
        <p className="text-xs font-semibold text-faint">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

function Footer({ d, lang }: { d: Dict; lang: Lang }) {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <p className="font-serif text-lg font-semibold tracking-wide text-ink">NEBITMAŞ</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} {d.footer.rights}</p>
          <p className="mt-4 text-xs leading-relaxed text-faint">{d.footer.illustrations}</p>
        </div>
        <LangSwitch lang={lang} />
      </Container>
    </footer>
  );
}
