import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-t border-white/[0.05] py-16 sm:py-24">
      <SectionHeading
        id="projects-title"
        index="03"
        eyebrow="Selected Work"
        title="Projects that show how I build and learn."
        description="A selection of reusable foundations, interface prototypes, and learning projects from my GitHub."
      />

      <ul className="mt-10 flex flex-col gap-4">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 90}>
              <article className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.16] sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-metadata">
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.summary}
                </p>

                {project.contribution ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.contribution}
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline">{tag}</Badge>
                    </li>
                  ))}
                </ul>

                {(project.liveUrl || project.repositoryUrl) && (
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-sm font-mono text-sm uppercase tracking-[0.1em] text-accent underline-offset-8 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        View live demo
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : null}
                    {project.repositoryUrl ? (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-sm font-mono text-sm uppercase tracking-[0.1em] text-accent underline-offset-8 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        View repository
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : null}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
