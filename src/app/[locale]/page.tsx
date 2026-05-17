import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeContent } from "@/components/home-content";
import { dictionary } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import type { Locale } from "@/types/portfolio";

const isValidLocale = (v: string): v is Locale => v === "en" || v === "pt";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const fullTitle =
    locale === "pt"
      ? `${SITE_NAME} — Engenheiro de Software Sênior`
      : `${SITE_NAME} — Senior Software Engineer`;
  const description = portfolioData.bio[locale];
  const t = dictionary[locale];

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [
      "Jonas G. Almeida",
      "Jonas Almeida",
      "software engineer",
      "senior engineer",
      "React",
      "Next.js",
      "TypeScript",
      "frontend",
      "Maringá",
      "Brazil",
      "portfolio",
      "Penumbria",
      "Ach so!",
    ],
    authors: [{ name: SITE_NAME, url: `${SITE_URL}/${locale}` }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        "pt-BR": `${SITE_URL}/pt`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "profile",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
      url: `${SITE_URL}/${locale}`,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      firstName: "Jonas",
      lastName: "Almeida",
      username: "jgalmeida93",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@jgalmeida93",
      images: [`/${locale}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "og:profile:first_name": "Jonas",
      "og:profile:last_name": "Almeida",
      // Reference the marquee dictionary so it's not orphan
      "x-marquee-context": String(t.marquee.tags.length),
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <HomeContent />;
}
