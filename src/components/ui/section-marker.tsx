interface SectionMarkerProps {
  label: string;
  index?: string;
}

export function SectionMarker({ label, index }: SectionMarkerProps) {
  return (
    <div className="flex items-center gap-4">
      {index && (
        <span className="eyebrow text-[var(--accent)]">{index}</span>
      )}
      <span
        aria-hidden
        className="h-px w-10 bg-[var(--rule-strong)]"
      />
      <span className="eyebrow text-[var(--ink-muted)]">{label}</span>
    </div>
  );
}
