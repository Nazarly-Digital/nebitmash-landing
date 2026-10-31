import { Landing } from "@/components/Landing";
import { pageMetadata } from "@/content";

// Туркменская версия — на «/» (группа (tk)); здесь только ru и en.
// Чужой адрес вроде /de/ не собирается — Caddy ответит 404.
const LANGS = ["ru", "en"] as const;
type SubLang = (typeof LANGS)[number];

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return pageMetadata(lang as SubLang);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <Landing lang={lang as SubLang} />;
}
