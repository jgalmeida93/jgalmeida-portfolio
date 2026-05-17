import { notFound } from "next/navigation";
import { AppProvider } from "@/contexts/app-context";
import { Navigation } from "@/components/ui/navigation";
import { PaperTexture } from "@/components/ui/paper-texture";
import { Analytics } from "@vercel/analytics/next";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/person-jsonld";
import type { Locale } from "@/types/portfolio";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

const isValidLocale = (v: string): v is Locale => v === "en" || v === "pt";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <AppProvider initialLocale={locale}>
      <PersonJsonLd locale={locale} />
      <WebsiteJsonLd locale={locale} />
      <SetHtmlLang locale={locale} />
      <PaperTexture />
      <Navigation />
      <main className="relative z-10">{children}</main>
      <Analytics />
    </AppProvider>
  );
}

// Server component that updates html lang via a tiny inline script.
function SetHtmlLang({ locale }: { locale: Locale }) {
  const lang = locale === "pt" ? "pt-BR" : "en";
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang='${lang}';`,
      }}
    />
  );
}
