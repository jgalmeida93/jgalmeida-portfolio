import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SECTION_SLUGS } from "@/lib/sections";

const LOCALES = ["en", "pt"] as const;

function languagesFor(path: string) {
  const clean = path ? `/${path}` : "";
  return {
    en: `${SITE_URL}/en${clean}`,
    "pt-BR": `${SITE_URL}/pt${clean}`,
    "x-default": `${SITE_URL}/en${clean}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...SECTION_SLUGS];

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path ? `/${path}` : ""}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages: languagesFor(path) },
    }))
  );
}
