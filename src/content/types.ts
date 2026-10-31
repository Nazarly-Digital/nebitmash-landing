// Тексты сайта на одном языке. Все три языка (tk, ru, en) обязаны совпадать по
// форме — TypeScript ловит забытый перевод на сборке, а не на живом сайте,
// где на пустом месте человек увидел бы дыру в карточке.

export type Lang = "tk" | "ru" | "en";

export type Fact = { title: string; text: string };

export type ProductText = {
  title: string;
  subtitle: string;
  text: string;
  facts: Fact[];
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    products: string;
    customers: string;
    quality: string;
    order: string;
    future: string;
    contacts: string;
    call: string;
    menu: string;
    close: string;
  };
  hero: {
    ministry: string;
    enterprise: string;
    title: string;
    lead: string;
    ctaProducts: string;
    ctaCall: string;
    buildingAlt: string;
  };
  president: { role: string; name: string };
  stats: { value: string; label: string }[];
  products: {
    eyebrow: string;
    title: string;
    lead: string;
    modelsLabel: string;
    madeFor: string;
    groups: Record<GroupId, string>;
    items: Record<ProductId, ProductText>;
  };
  customers: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { name: string; text: string }[];
  };
  quality: { eyebrow: string; title: string; lead: string; items: Fact[] };
  order: { eyebrow: string; title: string; lead: string; steps: Fact[] };
  future: {
    eyebrow: string;
    title: string;
    lead: string;
    badge: string;
    note: string;
    items: Record<FutureId, { title: string; subtitle: string; text: string }>;
  };
  contacts: {
    eyebrow: string;
    title: string;
    lead: string;
    addressLabel: string;
    address: string[];
    phoneLabel: string;
    emailLabel: string;
  };
  footer: { illustrations: string; rights: string };
};

export type GroupId = "oilgas" | "thermal" | "electrical" | "energy" | "custom";

export type ProductId =
  | "agp"
  | "usn"
  | "tanks"
  | "boilers"
  | "cabinets"
  | "switching"
  | "porcelain"
  | "strain"
  | "crossarms"
  | "clamps"
  | "transmission"
  | "observation"
  | "accommodation"
  | "castings"
  | "parts"
  | "breaker";

export type FutureId =
  | "thermal"
  | "autoclave"
  | "mechanical"
  | "heavy"
  | "frames"
  | "mixer"
  | "hoppers"
  | "gas"
  | "workwear";
