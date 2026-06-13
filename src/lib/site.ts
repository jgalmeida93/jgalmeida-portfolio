import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const SITE_NAME = "Jonas G. Almeida";

export const ALT_LOCALES: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
};

export function localeHref(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return `/${locale}${clean ? `/${clean}` : ""}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localeHref(locale, path)}`;
}

export function buildAlternates(locale: Locale, path = "") {
  const clean = path ? `/${path}` : "";
  return {
    canonical: `${SITE_URL}/${locale}${clean}`,
    languages: {
      en: `${SITE_URL}/en${clean}`,
      "pt-BR": `${SITE_URL}/pt${clean}`,
      "x-default": `${SITE_URL}/en${clean}`,
    },
  };
}

// Lighter per-page metadata for the section routes (the home page builds its own).
export function pageMetadata(opts: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const { locale, path = "", title, description } = opts;
  const url = `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
