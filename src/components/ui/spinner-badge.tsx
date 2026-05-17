"use client";

interface SpinnerBadgeProps {
  text: string;
  size?: number;
}

export function SpinnerBadge({ text, size = 140 }: SpinnerBadgeProps) {
  const repeated = `${text} • ${text} • ${text} • `;
  const chars = repeated.split("");
  const radius = size / 2 - 10;
  const angleStep = 360 / chars.length;

  return (
    <div
      className="relative inline-block animate-spin-slow"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {chars.map((char, i) => {
        const angle = i * angleStep;
        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink)]"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
      <span className="absolute left-1/2 top-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary)]" />
    </div>
  );
}
