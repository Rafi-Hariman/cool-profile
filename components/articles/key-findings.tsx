import { keyFindings } from "@/data/articles/pju-mati-sleman";

/**
 * Four headline findings that summarize the article. Each links back to the
 * source or the section that explains it.
 */
export function KeyFindings() {
  return (
    <section aria-labelledby="key-findings-title" className="my-10">
      <h2
        id="key-findings-title"
        className="font-mono text-xs uppercase tracking-[0.2em] text-article-muted"
      >
        Temuan utama
      </h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {keyFindings.map((finding, i) => (
          <li
            key={finding.title}
            className="flex flex-col rounded-xl border border-article-border bg-article-surface p-5"
          >
            <span className="font-mono text-xs text-article-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-medium leading-snug text-article-foreground">
              {finding.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-article-body">
              {finding.body}
            </p>
            <a
              href={finding.href}
              className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-article-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
            >
              {finding.hrefLabel}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
