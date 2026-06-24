"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/types/portfolio";
import { dictionary, type Dictionary, localized } from "@/lib/i18n";

interface AppContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
  L: (value: { en: string; pt: string } | string) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

interface AppProviderProps {
  initialLocale: Locale;
  children: React.ReactNode;
}

export function AppProvider({ initialLocale, children }: AppProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (l: Locale) => {
      if (l === initialLocale) return;
      const stripped = (pathname || "/").replace(/^\/(en|pt)(?=\/|$)/, "");
      router.push(`/${l}${stripped || ""}`);
    },
    [initialLocale, pathname, router]
  );

  const toggleLocale = useCallback(
    () => setLocale(initialLocale === "en" ? "pt" : "en"),
    [initialLocale, setLocale]
  );

  const L = useCallback(
    (value: { en: string; pt: string } | string) =>
      localized(initialLocale, value),
    [initialLocale]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      locale: initialLocale,
      setLocale,
      toggleLocale,
      t: dictionary[initialLocale],
      L,
    }),
    [initialLocale, L, setLocale, toggleLocale]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
