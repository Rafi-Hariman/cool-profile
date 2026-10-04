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
        title="Things I've built that still feel fast."
      />

      <ul className="mt-10 flex flex-col gap-4">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 90}>
              <a
                href={project.href}
                className="group block rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-7"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-metadata">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.tech.map((tag) => (
                        <li key={tag}>
                          <Badge variant="outline">{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                    <span
                      aria-hidden="true"
                      className="inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-widest text-metadata transition-colors group-hover:text-foreground"
                    >
                      View
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
