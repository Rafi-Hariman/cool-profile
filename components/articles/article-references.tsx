import { references } from "@/data/articles/pju-mati-sleman";

const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  const m = Number(month);
  if (!year || !m || !day || Number.isNaN(m) || m < 1 || m > 12) return iso;
  return `${Number(day)} ${MONTHS[m - 1]} ${year}`;
}

/**
 * Ordered reference list. Inline markers [1]…[N] in the body link to the
 * matching #ref-<index> id below. Government pages and media are grouped with
 * a label so the two kinds of source stay distinguishable.
 */
export function ArticleReferences() {
  return (
    <section aria-labelledby="references-title" className="my-12">
      <h2
        id="references-title"
        className="font-mono text-xs uppercase tracking-[0.2em] text-article-muted"
      >
        Referensi
      </h2>
      <ol className="mt-5 flex flex-col gap-4">
        {references.map((ref, i) => (
          <li
            key={ref.id}
            id={`ref-${i + 1}`}
            className="scroll-mt-24 font-mono text-sm leading-relaxed text-article-muted"
          >
            <span className="font-mono text-article-accent">[{i + 1}]</span>{" "}
            {ref.publisher}.{" "}
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-base text-article-foreground underline decoration-article-border underline-offset-2 transition-colors hover:text-article-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
            >
              “{ref.title}.”
            </a>
            {"publishedAt" in ref
              ? ` ${formatDate(ref.publishedAt)}.`
              : ""}{" "}
            Diakses{" "}
            {formatDate(ref.accessedAt)}.
          </li>
        ))}
      </ol>
    </section>
  );
}
