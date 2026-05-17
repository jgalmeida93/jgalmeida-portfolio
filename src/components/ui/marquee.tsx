interface MarqueeProps {
  items: string[];
  separator?: string;
}

export function Marquee({ items, separator = "✦" }: MarqueeProps) {
  const seq = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--border-subtle)] py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {seq.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif text-3xl leading-none text-[var(--foreground)] md:text-5xl"
          >
            {item}
            <span className="ml-10 text-[var(--accent)]/70">{separator}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
    </div>
  );
}
