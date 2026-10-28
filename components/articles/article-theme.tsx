"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "rafihariman-articles-theme";

interface ArticleThemeValue {
  theme: Theme;
  toggle: () => void;
}

const ArticleThemeContext = createContext<ArticleThemeValue>({
  theme: "light",
  toggle: () => {},
});

export function useArticleTheme() {
  return useContext(ArticleThemeContext);
}

/**
 * Scoped light/dark theme for the /articles subtree. The wrapper carries a
 * `data-article-theme` attribute consumed by the scoped CSS tokens in
 * globals.css — the homepage tokens are never touched.
 *
 * Light is the editorial default. `prefers-color-scheme` is intentionally NOT
 * used to pick the initial theme; the only inputs are a stored manual choice
 * and, absent one, light. Server and first client render are both `light`, so
 * there is no hydration mismatch; a stored `dark` preference is applied on
 * mount (a brief light frame for returning dark-mode users is the accepted
 * trade-off).
 */
export function ArticleThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <ArticleThemeContext.Provider value={{ theme, toggle }}>
      <div
        data-article-theme={theme}
        className="min-h-screen bg-article-background text-article-foreground antialiased"
      >
        {children}
      </div>
    </ArticleThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useArticleTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-article-border bg-article-surface text-article-muted transition-colors hover:text-article-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent focus-visible:ring-offset-2 focus-visible:ring-offset-article-background"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
