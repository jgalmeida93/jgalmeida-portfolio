interface SectionLabelProps {
  number: string;
  title: string;
}

export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-[var(--foreground-subtle)]">
        {number}
      </span>
      <span className="h-px flex-1 max-w-[3rem] bg-[var(--border)]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
        {title}
      </span>
    </div>
  );
}
