interface StatusPillProps {
  label: string;
  tone?: "positive" | "neutral";
}

export function StatusPill({ label, tone = "positive" }: StatusPillProps) {
  const dot = tone === "positive" ? "bg-[var(--positive)]" : "bg-stone-400";
  const ring =
    tone === "positive" ? "bg-[var(--positive)]/30" : "bg-stone-400/30";

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elev)]/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--foreground-muted)] backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${ring}`}
        />
        <span
          className={`animate-pulse-dot relative inline-flex h-2 w-2 rounded-full ${dot}`}
        />
      </span>
      {label}
    </span>
  );
}
