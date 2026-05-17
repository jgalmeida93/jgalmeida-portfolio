import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languages = {
    en: `${SITE_URL}/en`,
    "pt-BR": `${SITE_URL}/pt`,
  };

  return [
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/pt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
