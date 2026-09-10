import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've worked."
      />

      <ol className="mt-10 flex flex-col">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`}>
            <Reveal delay={i * 80}>
              <article className="grid gap-3 border-l border-white/[0.08] py-6 pl-6 sm:grid-cols-12 sm:gap-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 sm:col-span-3">
                  {job.period}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}{" "}
                    <span className="text-muted-foreground">
                      · {job.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.summary}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {job.points.map((point, j) => (
                      <li
                        key={`${job.company}-${j}`}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <li key={t}>
                        <Badge variant="outline">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
