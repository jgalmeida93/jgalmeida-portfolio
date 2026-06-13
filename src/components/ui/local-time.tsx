"use client";

import { useEffect, useState } from "react";

interface LocalTimeProps {
  timezone: string;
  className?: string;
}

export function LocalTime({ timezone, className = "" }: LocalTimeProps) {
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
    <span className={`tnum ${className}`}>
      {time || "--:--:--"}
      <span className="ml-0.5 animate-blink text-[var(--accent)]">_</span>
    </span>
  );
}
