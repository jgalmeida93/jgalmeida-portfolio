"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/types/portfolio";

interface ContactSectionProps {
  contact: ContactInfo;
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}

function SocialLink({ href, label, icon, index }: SocialLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Button variant="outline" size="lg" asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          {icon}
          <span className="ml-2">{label}</span>
        </a>
      </Button>
    </motion.div>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  const socialLinks = [
    {
      href: `mailto:${contact.email}`,
      label: "Email",
      icon: <EnvelopeIcon className="h-5 w-5" />,
    },
    {
      href: contact.github,
      label: "GitHub",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: contact.linkedin,
      label: "LinkedIn",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Contact
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s connect.
          </p>
        </motion.div>

        <div className="flex flex-col w-full gap-3 items-center justify-center md:flex-row md:gap-4 md:w-auto">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
