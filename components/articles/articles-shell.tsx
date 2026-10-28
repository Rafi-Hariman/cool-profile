import type { ReactNode } from "react";
import { person } from "@/data/person";
import { ThemeToggle } from "@/components/articles/article-theme";

const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
] as const;

/**
 * Shared chrome for the /articles subtree: a quiet header (identity + a few
 * homepage links + the scoped theme toggle), a main column, and a minimal
 * personal footer. Deliberately NOT the two-column SiteShell — articles read
 * as a single centered editorial column.
 */
export function ArticlesShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 sm:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-article-border py-5">
        <a
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
        >
          <span className="font-mono text-sm font-semibold tracking-tight text-article-accent">
            RH
          </span>
          <span className="hidden font-medium text-article-foreground sm:inline">
            {person.shortName}
          </span>
        </a>

        <nav aria-label="Article navigation">
          <ul className="flex items-center gap-1">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded px-2.5 py-2 font-mono text-xs uppercase tracking-[0.12em] text-article-muted transition-colors hover:text-article-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <footer className="border-t border-article-border py-10">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-article-muted">
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-article-muted">
          Notes and analysis on interfaces, systems, and public services.
        </p>
      </footer>
    </div>
  );
}
