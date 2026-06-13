interface MarqueeProps {
  items: string[];
}

/**
 * Slow, low-contrast "credits" strip — serif italic words drifting
 * between hairlines. One quiet gesture, not a shouting banner.
 */
export function Marquee({ items }: MarqueeProps) {
  const seq = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--rule)] py-6"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {seq.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl font-light text-[var(--ink-soft)] md:text-3xl">
              {item}
            </span>
            <span className="text-[var(--accent)]">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
