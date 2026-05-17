"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "@/types/portfolio";
import { SectionLabel } from "@/components/ui/section-label";
import { StatusPill } from "@/components/ui/status-pill";

interface ContactSectionProps {
  contact: ContactInfo;
  availability?: string;
}

export function ContactSection({ contact, availability }: ContactSectionProps) {
  const links = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: "GitHub",
      value: "@jgalmeida93",
      href: contact.github,
    },
    {
      label: "LinkedIn",
      value: "/in/jgalmeida93",
      href: contact.linkedin,
    },
    ...(contact.twitter
      ? [
          {
            label: "X / Twitter",
            value: "@jgalmeida93",
            href: contact.twitter,
          },
        ]
      : []),
  ];

  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel number="04" title="Contact" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-[-0.02em] text-[var(--foreground)]"
        >
          Have something <em className="text-[var(--accent)]">good</em>
          <br />
          to build?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-10 md:grid-cols-12 md:mt-16"
        >
          <div className="md:col-span-7">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-2xl text-[var(--foreground)] md:text-4xl"
            >
              <span className="italic text-[var(--foreground-muted)]">
                Write to
              </span>
              <span className="link transition-colors group-hover:text-[var(--accent)]">
                {contact.email}
              </span>
              <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {availability && (
              <div className="mt-8">
                <StatusPill label={availability} />
              </div>
            )}

            <p className="mt-8 max-w-lg font-serif text-lg italic leading-snug text-[var(--foreground-muted)]">
              Open to senior engineering roles, focused freelance, and small
              collaborations where the brief is interesting and the team is
              kind.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border-t border-[var(--border-subtle)]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[var(--border-subtle)] py-4 transition-colors"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-subtle)]">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-3 text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    <span className="font-serif italic">{link.value}</span>
                    <span className="font-mono text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
