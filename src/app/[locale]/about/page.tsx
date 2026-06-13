import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { portfolioData } from "@/data/portfolio";
import { dictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
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
  const t = dictionary[locale];
  return pageMetadata({
    locale,
    path: "about",
    title: t.about.tag,
    description: portfolioData.bio[locale],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <AboutSection skills={portfolioData.skills} />;
}
