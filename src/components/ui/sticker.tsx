interface StickerProps {
  children: React.ReactNode;
  rotate?: number;
  tone?: "accent" | "primary" | "ink";
  className?: string;
}

export function Sticker({
  children,
  rotate = -2,
  tone = "accent",
  className = "",
}: StickerProps) {
  const styles =
    tone === "primary"
      ? "bg-[var(--primary)] text-[var(--paper)]"
      : tone === "ink"
        ? "bg-[var(--ink)] text-[var(--bg)]"
        : "bg-[var(--accent)] text-[#1a130e]";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] shadow-[2px_2px_0_var(--ink)] ${styles} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
