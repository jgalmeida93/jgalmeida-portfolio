"use client";

import { useEffect, useState } from "react";

interface LocalTimeProps {
  timezone: string;
  label?: string;
}

export function LocalTime({ timezone, label }: LocalTimeProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: timezone,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
      {label && <span>{label}</span>}
      <span className="tabular-nums text-[var(--foreground)]">
        {time || "—"}
      </span>
    </span>
  );
}
