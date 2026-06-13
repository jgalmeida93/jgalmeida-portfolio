import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceSection } from "@/components/sections/experience-section";
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
    path: "experience",
    title: t.experience.tag,
    description: t.experience.subhead,
  });
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <ExperienceSection experience={portfolioData.experience} />;
}
