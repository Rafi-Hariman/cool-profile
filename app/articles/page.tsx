import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/writing";

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

function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const m = Number(month);
  if (!year || !m || Number.isNaN(m) || m < 1 || m > 12) return iso;
  return `${MONTHS[m - 1]} ${year}`;
}

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles and analysis by Rafi Hariman on interfaces, systems, engineering, and public services.",
  alternates: { canonical: "/articles" },
  openGraph: {
    type: "website",
    title: "Articles",
    description:
      "Articles and analysis by Rafi Hariman on interfaces, systems, engineering, and public services.",
  },
  twitter: {
    card: "summary",
    title: "Articles",
    description:
      "Articles and analysis by Rafi Hariman on interfaces, systems, engineering, and public services.",
  },
};

export default function ArticlesPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];

  return (
    <div className="pt-12 sm:pt-16">
      <header>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-article-accent">
          <span aria-hidden="true" className="text-article-muted">
            05
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-article-accent/50" />
          Writing
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-article-foreground sm:text-4xl md:text-5xl">
          Articles
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-article-body">
          Articles and analysis by Rafi Hariman on interfaces, systems,
          engineering, and public services.
        </p>
      </header>

      {featured ? (
        <Link
          href={featured.href}
          className="group mt-10 grid gap-6 rounded-xl border border-article-border bg-article-surface p-6 transition-colors hover:border-article-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
        >
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-article-muted">
              <span className="rounded-full border border-article-border px-3 py-1 uppercase tracking-wider">
                {featured.category}
              </span>
              <span>{formatMonthYear(featured.publishedAt)}</span>
              <span>{featured.readingTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-article-foreground transition-colors group-hover:text-article-accent">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-prose text-article-body">
              {featured.description}
            </p>
          </div>
          <ArrowUpRight
            className="hidden h-6 w-6 shrink-0 text-article-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-article-accent sm:block"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <p className="mt-10 text-article-muted">
          No articles yet — writing in progress.
        </p>
      )}
    </div>
  );
}
