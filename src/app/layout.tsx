import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SocialLinks } from "@/components/ui/social-links";
import DarkVeil from "@/components/ui/dark-veil-background";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Jonas G. Almeida - Portfolio",
  description: "Software Engineer portfolio showcasing projects and experience",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "CONTACT", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-950">
        <div className="fixed inset-0 -z-10">
          <DarkVeil
            hueShift={330}
            noiseIntensity={0.01}
            scanlineIntensity={0.1}
            speed={0.2}
            scanlineFrequency={4}
            warpAmount={5}
            resolutionScale={1}
          />
        </div>
        <Navigation items={navigationItems} />
        <Breadcrumbs />
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-8">
          {children}
          <Analytics />
        </main>
        <SocialLinks />
      </body>
    </html>
  );
}
