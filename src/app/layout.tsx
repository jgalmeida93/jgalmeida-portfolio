import type { Metadata } from "next";
import {
  Big_Shoulders_Display,
  Fraunces,
  Inter,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/app-context";
import { Navigation } from "@/components/ui/navigation";
import { PaperTexture } from "@/components/ui/paper-texture";
import { Analytics } from "@vercel/analytics/next";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas G. Almeida — Senior Software Engineer",
  description:
    "Portfolio of Jonas G. Almeida, senior software engineer based in Maringá, PR. A catalog of selected work in editorial web, language tools and indie products.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

// Inline script to set theme + lang before React hydrates (prevents FOUC).
const themeBootstrap = `
(function() {
  try {
    var theme = localStorage.getItem('jg-portfolio-theme');
    var locale = localStorage.getItem('jg-portfolio-locale');
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    if (locale !== 'en' && locale !== 'pt') {
      var nav = navigator.language || 'en';
      locale = nav.toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
    }
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bigShoulders.variable} ${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <AppProvider>
          <PaperTexture />
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
