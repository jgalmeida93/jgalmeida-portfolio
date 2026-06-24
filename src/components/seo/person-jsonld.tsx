import { portfolioData } from "@/data/portfolio";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import type { Locale } from "@/types/portfolio";

interface PersonJsonLdProps {
  locale: Locale;
}

export function PersonJsonLd({ locale }: PersonJsonLdProps) {
  const jobTitle = portfolioData.title[locale];
  const description = portfolioData.bio[locale];

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: "Jonas Gabriel Almeida",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/og?locale=${locale}`,
    jobTitle,
    description,
    email: `mailto:${portfolioData.contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maringá",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    sameAs: [
      portfolioData.contact.github,
      portfolioData.contact.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      "Software Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Frontend Development",
      "Editorial Web",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Escale Digital",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface WebsiteJsonLdProps {
  locale: Locale;
}

export function WebsiteJsonLd({ locale }: WebsiteJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_NAME} — Portfolio`,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
