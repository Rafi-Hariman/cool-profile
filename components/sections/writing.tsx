import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/writing";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatPublishedAt(iso: string): string {
  const [year, month] = iso.split("-");
  const m = Number(month);
  if (!year || !m || Number.isNaN(m) || m < 1 || m > 12) return iso;
  return `${MONTHS[m - 1]} ${year}`;
}

export function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24"
    >
      <SectionHeading
        id="writing-title"
        index="05"
        eyebrow="Writing"
        title="Notes from the process."
        description="Analysis on interfaces, systems, and public services."
      />

      {articles.length > 0 ? (
        <ul className="mt-10 flex flex-col divide-y divide-white/[0.05]">
          {articles.map((article, i) => (
            <li key={article.slug}>
              <Reveal delay={i * 80}>
                <Link
                  href={article.href}
                  className="group flex flex-col gap-3 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="font-mono text-xs text-metadata">
                      {formatPublishedAt(article.publishedAt)}
                    </span>
                    <span className="font-mono text-xs text-metadata">
                      {article.readingTime}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {article.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {article.description}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <Reveal className="mt-10">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Writing in progress — technical notes on the projects above and
              the lessons behind them are being prepared. This section will
              appear once there is something real to share.
            </p>
          </div>
        </Reveal>
      )}
    </section>
  );
}
