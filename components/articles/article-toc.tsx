import { articleSections } from "@/data/articles/pju-mati-sleman";

/**
 * Simple anchor-based table of contents. No scroll-spy here on purpose —
 * native anchor links keep keyboard and screen-reader behavior predictable
 * (docs/11, quality-gate). Sticky only on desktop where a sidebar exists.
 */
export function ArticleToc() {
  return (
    <nav
      aria-label="Daftar isi"
      className="lg:sticky lg:top-10 lg:self-start"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-article-muted">
        Daftar isi
      </p>
      <ol className="mt-4 flex flex-col gap-2 border-l border-article-border">
        {articleSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group -ml-px flex items-baseline gap-2.5 border-l border-transparent py-0.5 pl-4 text-sm leading-snug text-article-muted transition-colors hover:border-article-accent hover:text-article-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
            >
              <span className="font-mono text-xs text-article-accent">
                {section.number}
              </span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
