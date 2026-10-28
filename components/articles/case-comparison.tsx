import { fastResponseCases } from "@/data/articles/pju-mati-sleman";

/**
 * Fully-documented comparison cases, shown as an accessible table on larger
 * screens and stacked cards on mobile (docs/11 — tables must not cause
 * horizontal overflow at 320px).
 */
export function CaseComparison() {
  return (
    <figure>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-x-auto rounded-xl border border-article-border sm:block">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Perbandingan kasus dengan rentang waktu yang terdokumentasi
          </caption>
          <thead>
            <tr className="border-b border-article-border font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
              <th scope="col" className="px-4 py-3 font-medium">
                Lokasi
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Rentang waktu
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Rincian
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-article-border">
            {fastResponseCases.map((c) => (
              <tr key={c.id} className="align-top">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-article-foreground"
                >
                  {c.location}
                  <span className="block font-normal text-article-muted">
                    {c.region}
                  </span>
                </th>
                <td className="px-4 py-3 font-mono text-xs leading-relaxed text-article-body">
                  {c.timeline}
                </td>
                <td className="px-4 py-3 leading-relaxed text-article-body">
                  {c.detail}
                  {c.note ? (
                    <span className="mt-1 block text-article-muted">
                      Catatan: {c.note}
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="flex flex-col gap-3 sm:hidden">
        {fastResponseCases.map((c) => (
          <li
            key={c.id}
            className="rounded-xl border border-article-border bg-article-surface p-4"
          >
            <p className="font-medium text-article-foreground">
              {c.location}
              <span className="block font-normal text-article-muted">
                {c.region}
              </span>
            </p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-article-body">
              {c.timeline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-article-body">
              {c.detail}
            </p>
            {c.note ? (
              <p className="mt-2 text-xs leading-relaxed text-article-muted">
                Catatan: {c.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </figure>
  );
}
