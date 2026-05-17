import type { Metadata } from "next";
import {
  Big_Shoulders,
  Fraunces,
  Inter,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
  adjustFontFallback: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Senior Software Engineer`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Portfolio of Jonas G. Almeida, senior software engineer based in Maringá, PR. A catalog of selected work in editorial web, language tools and indie products.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

// Inline script: read theme from localStorage before React hydrates (avoids FOUC).
const themeBootstrap = `
(function() {
  try {
    var theme = localStorage.getItem('jg-portfolio-theme');
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    document.documentElement.dataset.theme = theme;
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
      data-theme="dark"
      className={`${bigShoulders.variable} ${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
