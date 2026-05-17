"use client";

import { motion } from "framer-motion";
import { ContactInfo, LocalizedText } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";
import { Sticker } from "@/components/ui/sticker";
import { StatusDot } from "@/components/ui/status-dot";

interface ContactSectionProps {
  contact: ContactInfo;
  availability: LocalizedText;
}

export function ContactSection({ contact, availability }: ContactSectionProps) {
  const { t, L } = useApp();

  const links = [
    { label: t.contact.labels.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: t.contact.labels.github, value: "@jgalmeida93", href: contact.github },
    { label: t.contact.labels.linkedin, value: "/in/jgalmeida93", href: contact.linkedin },
    ...(contact.twitter
      ? [{ label: t.contact.labels.twitter, value: "@jgalmeida93", href: contact.twitter }]
      : []),
  ];

  return (
    <section
      id="contact"
      className="relative w-full px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionMarker label={t.contact.tag} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(3rem,10.5vw,10.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-[var(--ink)]"
        >
          {t.contact.heading}{" "}
          <span className="italic font-serif font-normal lowercase tracking-[-0.01em] text-[var(--primary)]">
            {t.contact.headingEm}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-10 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-2xl text-[var(--ink)] md:text-4xl"
            >
              <span className="italic text-[var(--ink-muted)]">
                {t.contact.writeTo}
              </span>
              <span className="link-quiet transition-colors group-hover:text-[var(--primary)]">
                {contact.email}
              </span>
              <span className="text-[var(--primary)] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="mt-8">
              <Sticker tone="accent" rotate={-2}>
                <StatusDot /> {L(availability)}
              </Sticker>
            </div>

            <p className="mt-8 max-w-lg font-serif text-lg italic leading-snug text-[var(--ink-muted)]">
              {t.contact.blurb}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-sm border-2 border-[var(--ink)] bg-[var(--bg-elev)] p-2 shadow-[6px_6px_0_var(--accent)]">
              <div className="border border-dashed border-[var(--rule)] p-2">
                {links.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between px-4 py-3 transition-colors hover:bg-[var(--bg)] ${
                      i < links.length - 1
                        ? "border-b border-dashed border-[var(--rule)]"
                        : ""
                    }`}
                  >
                    <span className="mono text-[var(--ink-muted)]">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-3 font-serif text-base italic text-[var(--ink)] transition-colors group-hover:text-[var(--primary)] md:text-lg">
                      {link.value}
                      <span className="font-mono text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
