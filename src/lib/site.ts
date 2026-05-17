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
