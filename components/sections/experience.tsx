import { experience, currentFocus } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24">
      <SectionHeading
        id="experience-title"
        index="02"
        eyebrow="Experience"
        title="My professional journey."
      />

      <ol className="mt-10 flex flex-col">
        {experience.map((job, i) => (
          <li key={`${job.organization}-${job.role}`}>
            <Reveal delay={i * 80}>
              <article className="grid gap-3 border-l border-white/[0.08] py-6 pl-6 sm:grid-cols-12 sm:gap-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-metadata sm:col-span-3">
                  {job.period}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}{" "}
                    <span className="text-muted-foreground">
                      · {job.organization}
                    </span>
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {job.type}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.summary}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {job.points.map((point, j) => (
                      <li
                        key={`${job.organization}-${j}`}
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
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={experience.length * 80}>
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            <span aria-hidden="true" className="h-px w-6 bg-accent/50" />
            {currentFocus.label}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {currentFocus.summary}
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              {currentFocus.education}
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              {currentFocus.freelance}
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
