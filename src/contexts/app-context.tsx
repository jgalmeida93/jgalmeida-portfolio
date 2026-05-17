"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/types/portfolio";
import {
  dictionary,
  defaultTheme,
  type Dictionary,
  type Theme,
  localized,
} from "@/lib/i18n";

interface AppContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  t: Dictionary;
  L: (value: { en: string; pt: string } | string) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

const THEME_KEY = "jg-portfolio-theme";

interface AppProviderProps {
  initialLocale: Locale;
  children: React.ReactNode;
}

export function AppProvider({ initialLocale, children }: AppProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
      }
    } catch {
      /* localStorage unavailable */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme, hydrated]);

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

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    []
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
      theme,
      setTheme,
      toggleTheme,
      t: dictionary[initialLocale],
      L,
    }),
    [initialLocale, theme, L, setLocale, setTheme, toggleLocale, toggleTheme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
