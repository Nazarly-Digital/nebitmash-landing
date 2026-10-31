import type { ReactNode } from "react";
import { RootHtml } from "@/components/RootHtml";
import type { Lang } from "@/content/types";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <RootHtml lang={lang as Lang}>{children}</RootHtml>;
}
