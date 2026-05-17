interface SectionMarkerProps {
  label: string;
}

export function SectionMarker({ label }: SectionMarkerProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-2 w-2 rotate-45 bg-[var(--primary)]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
        {label}
      </span>
    </div>
  );
}
