import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Grain } from "@/components/ui/grain";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas G. Almeida — Senior Software Engineer",
  description:
    "Portfolio of Jonas G. Almeida — Senior Software Engineer building considered, fast, production-grade web products.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
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
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <AmbientGlow />
        <Grain />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
