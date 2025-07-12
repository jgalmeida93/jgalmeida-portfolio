import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { SocialLinks } from "@/components/ui/social-links";
import { BackgroundArtifact } from "@/components/ui/background-artifact";

export const metadata: Metadata = {
  title: "Jonas G. Almeida - Portfolio",
  description: "Software Engineer portfolio showcasing projects and experience",
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
        <BackgroundArtifact />
        <Navigation items={navigationItems} />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          {children}
        </main>
        <SocialLinks />
      </body>
    </html>
  );
}
