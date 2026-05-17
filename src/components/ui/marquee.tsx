interface MarqueeProps {
  items: string[];
  variant?: "primary" | "ink";
}

export function Marquee({ items, variant = "primary" }: MarqueeProps) {
  const seq = [...items, ...items, ...items];

  const bg =
    variant === "primary"
      ? "bg-[var(--primary)] text-[var(--paper)]"
      : "bg-[var(--ink)] text-[var(--bg)]";

  return (
    <div className={`relative overflow-hidden ${bg}`}>
      <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap py-5 font-display text-3xl font-extrabold uppercase tracking-[0.04em] md:text-4xl">
        {seq.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-12">
            <span>{item}</span>
            <span
              className="text-current opacity-80"
              aria-hidden
            >
              ✸
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
