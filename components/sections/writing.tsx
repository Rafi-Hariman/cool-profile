import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/writing";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

/**
 * Renders only when there are articles to show (docs/03-UI-UX: no empty
 * UI). While `data/writing.ts` holds only the SAMPLE entry, the section
 * stays visible so the layout can be reviewed — remove the sample to hide
 * it entirely.
 */
export function Writing() {
  if (articles.length === 0) return null;

  return (
    <section id="writing" className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24">
      <SectionHeading
        index="05"
        eyebrow="Writing"
        title="Notes from the build."
      />

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
    </section>
  );
}
