import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SocialLinks } from "@/components/ui/social-links";
import DarkVeil from "@/components/ui/dark-veil-background";

export const metadata: Metadata = {
  title: "Jonas G. Almeida - Portfolio",
  description: "Software Engineer portfolio showcasing projects and experience",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
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
            hueShift={37}
            noiseIntensity={0.01}
            scanlineIntensity={0.1}
            speed={0.2}
            scanlineFrequency={3.0}
            warpAmount={4}
            resolutionScale={2}
          />
        </div>
        <Navigation items={navigationItems} />
        <Breadcrumbs />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          {children}
        </main>
        <SocialLinks />
      </body>
    </html>
  );
}
