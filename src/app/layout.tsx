import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Bricolage Grotesque — modern display grotesque; the headline voice.
// Loaded as a variable font (continuous wght axis) so the hero name can
// react to the cursor; one variable file also serves every static weight.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bricolage.variable} ${satoshi.variable}`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
