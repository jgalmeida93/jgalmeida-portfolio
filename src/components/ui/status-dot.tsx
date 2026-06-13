export function StatusDot() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
      <span className="animate-pulse-dot relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
    </span>
  );
}
