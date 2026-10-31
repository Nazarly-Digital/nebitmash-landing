import type { Metadata } from "next";
import { en } from "./en";
import { ru } from "./ru";
import { tk } from "./tk";
import type { Dict, Lang } from "./types";

export const dicts: Record<Lang, Dict> = { tk, ru, en };

export const SITE_URL = "https://nebithi.gov.tm";

export function pageMetadata(lang: Lang): Metadata {
  const d = dicts[lang];
  const path = lang === "tk" ? "/" : `/${lang}/`;
  return {
    metadataBase: new URL(SITE_URL),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: path,
      languages: { tk: "/", ru: "/ru/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: path,
      siteName: "Nebitmaş",
      images: [{ url: "/img/agp-heater-1600.webp" }],
      type: "website",
    },
  };
}
