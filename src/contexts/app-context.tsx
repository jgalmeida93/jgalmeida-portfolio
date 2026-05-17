"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "@/types/portfolio";
import {
  dictionary,
  defaultLocale,
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

const LOCALE_KEY = "jg-portfolio-locale";
const THEME_KEY = "jg-portfolio-theme";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null;
      const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      if (storedLocale === "en" || storedLocale === "pt") {
        setLocaleState(storedLocale);
      } else {
        const nav =
          typeof navigator !== "undefined" ? navigator.language : "en";
        if (nav?.toLowerCase().startsWith("pt")) setLocaleState("pt");
      }
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
      }
    } catch {
      // localStorage unavailable; keep defaults
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

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(LOCALE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, hydrated]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleLocale = useCallback(
    () => setLocaleState((l) => (l === "en" ? "pt" : "en")),
    []
  );
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const L = useCallback(
    (value: { en: string; pt: string } | string) => localized(locale, value),
    [locale]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      theme,
      setTheme,
      toggleTheme,
      t: dictionary[locale],
      L,
    }),
    [locale, theme, L, setLocale, setTheme, toggleLocale, toggleTheme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
