import type { FutureId, GroupId, Lang, ProductId } from "./types";

// Всё, что не переводится: картинки, коды моделей, заказчики. Отдельно от
// текстов, чтобы смена фото не требовала правки трёх языковых файлов.

export const site = {
  phone: { display: "+993 12 37-95-07", tel: "+99312379507" },
  fax: "+993 12 37-95-15",
  // Портрет президента — как в печатном каталоге; на сайтах .gov.tm он
  // принят. Решение за предприятием: выключается здесь, без правки вёрстки.
  showPresident: true,
};

export type Img = {
  name: string;
  // Высокие кадры (вышки) вписываем целиком: при обрезке до 4:3 от опоры
  // осталась бы середина без верха и основания.
  fit?: "cover" | "contain";
};

export const groups: { id: GroupId; products: ProductId[] }[] = [
  { id: "oilgas", products: ["agp", "usn"] },
  { id: "thermal", products: ["tanks", "boilers"] },
  { id: "electrical", products: ["cabinets", "switching", "porcelain", "strain"] },
  { id: "energy", products: ["crossarms", "clamps", "transmission", "observation"] },
  { id: "custom", products: ["accommodation", "castings", "parts", "breaker"] },
];

type CustomerKey = "turkmennebit" | "border" | "energy";

export const products: Record<
  ProductId,
  { img: Img; models?: Record<Lang, string[]>; madeFor?: CustomerKey }
> = {
  agp: {
    img: { name: "agp-heater" },
    models: { tk: ["AGP-0.6", "AGP-1.0"], en: ["AGP-0.6", "AGP-1.0"], ru: ["АГП-0,6", "АГП-1,0"] },
    madeFor: "turkmennebit",
  },
  usn: {
    img: { name: "usn-175" },
    models: { tk: ["USN-175"], en: ["USN-175"], ru: ["УСН-175"] },
    madeFor: "turkmennebit",
  },
  tanks: { img: { name: "steel-tanks" } },
  boilers: {
    img: { name: "boiler-exterior" },
    models: {
      tk: ["KO-0.2", "KO-0.5", "KO-1.0", "KO-2.0"],
      en: ["KO-0.2", "KO-0.5", "KO-1.0", "KO-2.0"],
      ru: ["КО-0,2", "КО-0,5", "КО-1,0", "КО-2,0"],
    },
  },
  cabinets: { img: { name: "cabinets" }, madeFor: "energy" },
  switching: {
    img: { name: "switching" },
    models: { tk: ["RPS", "PN-2", "PK"], en: ["RPS", "PN-2", "PK"], ru: ["РПС", "ПН-2", "ПК"] },
  },
  porcelain: {
    img: { name: "porcelain" },
    models: { tk: ["SHF-20"], en: ["SHF-20"], ru: ["ШФ-20"] },
  },
  strain: {
    img: { name: "strain-insulators" },
    models: {
      tk: ["ITG", "IPT-1/250", "IPT-1/400", "IPT-1/630", "IPT-1/1000"],
      en: ["ITG", "IPT-1/250", "IPT-1/400", "IPT-1/630", "IPT-1/1000"],
      ru: ["ИТГ", "ИПТ-1/250", "ИПТ-1/400", "ИПТ-1/630", "ИПТ-1/1000"],
    },
  },
  crossarms: {
    img: { name: "crossarms" },
    models: { tk: ["TH-8", "TM-1"], en: ["TH-8", "TM-1"], ru: ["ТН-8", "ТМ-1"] },
    madeFor: "energy",
  },
  clamps: { img: { name: "clamps" } },
  transmission: {
    img: { name: "transmission-tower", fit: "contain" },
    models: { tk: ["35 kV", "110 kV", "220 kV"], en: ["35 kV", "110 kV", "220 kV"], ru: ["35 кВ", "110 кВ", "220 кВ"] },
    madeFor: "energy",
  },
  observation: {
    img: { name: "observation-tower", fit: "contain" },
    models: { tk: ["18.5 m"], en: ["18.5 m"], ru: ["18,5 м"] },
    madeFor: "border",
  },
  accommodation: { img: { name: "accommodation" } },
  castings: { img: { name: "castings" } },
  parts: { img: { name: "parts" } },
  breaker: { img: { name: "breaker-tools", fit: "contain" } },
};

// Порядок совпадает с customers.items в языковых файлах.
export const customerKeys: CustomerKey[] = ["turkmennebit", "border", "energy"];
export const customerImages: Record<CustomerKey, Img> = {
  turkmennebit: { name: "agp-heater" },
  border: { name: "observation-tower", fit: "contain" },
  energy: { name: "crossarms" },
};

export const future: { id: FutureId; img: Img }[] = [
  { id: "thermal", img: { name: "thermal" } },
  { id: "autoclave", img: { name: "autoclave" } },
  { id: "mechanical", img: { name: "mechanical" } },
  { id: "heavy", img: { name: "heavy" } },
  { id: "frames", img: { name: "frames" } },
  { id: "mixer", img: { name: "mixer" } },
  { id: "hoppers", img: { name: "hoppers" } },
  { id: "gas", img: { name: "gas-cleaning" } },
  { id: "workwear", img: { name: "workwear" } },
];

export const langs: { id: Lang; label: string; href: string }[] = [
  { id: "tk", label: "TM", href: "/" },
  { id: "ru", label: "RU", href: "/ru/" },
  { id: "en", label: "EN", href: "/en/" },
];
