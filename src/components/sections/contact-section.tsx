"use client";

import { motion } from "framer-motion";
import { ContactInfo, LocalizedText } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";
import { StatusDot } from "@/components/ui/status-dot";

interface ContactSectionProps {
  contact: ContactInfo;
  availability: LocalizedText;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection({ contact, availability }: ContactSectionProps) {
  const { t, L } = useApp();

  const links = [
    { label: t.contact.labels.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: t.contact.labels.github, value: "github.com/jgalmeida93", href: contact.github },
    { label: t.contact.labels.linkedin, value: "in/jgalmeida93", href: contact.linkedin },
    ...(contact.twitter
      ? [{ label: t.contact.labels.twitter, value: "@jgalmeida93", href: contact.twitter }]
      : []),
  ];

  return (
    <section id="contact" className="relative w-full px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
        >
          <SectionMarker index="04" label={t.contact.tag} />
          <h2 className="mt-7 font-display text-[clamp(2.8rem,9vw,8rem)] font-light leading-[0.94] text-[var(--ink)]">
            {t.contact.heading}{" "}
            <span className="text-[var(--accent)]">
              {t.contact.headingEm}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          viewport={{ once: true }}
          className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex flex-wrap items-baseline gap-x-4 gap-y-2"
            >
              <span className="font-display text-2xl text-[var(--ink-muted)] md:text-3xl">
                {t.contact.writeTo}
              </span>
              <span className="link-underline font-display text-[clamp(1.8rem,5vw,3.2rem)] font-light leading-none text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                {contact.email}
              </span>
            </a>

            <div className="mt-9 inline-flex items-center gap-2.5 eyebrow text-[var(--ink-soft)]">
              <StatusDot /> {L(availability)}
            </div>

            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-[var(--ink-muted)]">
              {t.contact.blurb}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="border-t border-[var(--rule)]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[var(--rule)] py-4 transition-colors"
                >
                  <span className="eyebrow text-[10px] text-[var(--ink-faint)]">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-2.5 font-display text-lg text-[var(--ink-soft)] transition-colors group-hover:text-[var(--accent)]">
                    {link.value}
                    <span className="text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      &#8599;
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
