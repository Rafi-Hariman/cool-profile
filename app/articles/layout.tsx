import type { ReactNode } from "react";
import { ArticleThemeProvider } from "@/components/articles/article-theme";
import { ArticlesShell } from "@/components/articles/articles-shell";

/**
 * Scoped layout for /articles: the light/dark theme is applied only here via
 * the provider's data-article-theme wrapper, and the shell supplies a quiet
 * header/footer instead of the two-column SiteShell. The homepage layout and
 * tokens are untouched.
 */
export default function ArticlesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ArticleThemeProvider>
      <ArticlesShell>{children}</ArticlesShell>
    </ArticleThemeProvider>
  );
}
