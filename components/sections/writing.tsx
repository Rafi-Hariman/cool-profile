import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/writing";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export function Writing() {
  return (
    <section id="writing" aria-labelledby="writing-title" className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24">
      <SectionHeading
        id="writing-title"
        index="05"
        eyebrow="Writing"
        title="Notes from the process."
      />

      {articles.length > 0 ? (
        <ul className="mt-10 flex flex-col divide-y divide-white/[0.05]">
          {articles.map((article, i) => (
            <li key={article.title}>
              <Reveal delay={i * 80}>
                <a
                  href={article.href}
                  className="group flex flex-col gap-1.5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {article.title}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="flex items-baseline gap-4 text-sm text-muted-foreground">
                    {article.description}
                    <span className="font-mono text-xs text-metadata">
                      {article.year}
                    </span>
                  </span>
                </a>
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
