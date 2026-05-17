export function StatusDot({ tone = "positive" }: { tone?: "positive" | "neutral" }) {
  const dot = tone === "positive" ? "bg-[var(--positive)]" : "bg-[var(--ink-muted)]";
  const ring = tone === "positive" ? "bg-[var(--positive)]/40" : "bg-[var(--ink-muted)]/40";
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${ring}`}
      />
      <span
        className={`animate-pulse-dot relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`}
      />
    </span>
  );
}
