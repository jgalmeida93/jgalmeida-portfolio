import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Bricolage Grotesque — modern display grotesque; the headline voice.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

// Satoshi — geometric grotesque for body and UI (bundled in /public/fonts).
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/WEB/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/WEB/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Senior Software Engineer`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Portfolio of Jonas G. Almeida, senior software engineer based in Maringá, PR. Selected work in product engineering, editorial web, language tools and small products built to last.",
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
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bricolage.variable} ${satoshi.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
