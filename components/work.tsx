import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 90}>
      <a
        href={project.href}
        className="group relative block overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-12 md:items-center">
          {/* Accent glow bled from the grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(560px circle at 12% 0%, ${project.accent}14, transparent 60%)`,
            }}
          />
          <div className="md:col-span-3">
            <div className="flex items-baseline justify-between gap-4 md:block">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">
                0{index + 1} — {project.year}
              </p>
            </div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:mt-3">
              {project.title}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
            {project.description}
          </p>

          <div className="flex flex-col gap-4 md:col-span-3 md:items-end">
            <ul className="flex flex-wrap gap-1.5 md:justify-end">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="gradient-border rounded-full border border-transparent bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <span
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-white/40 transition-colors duration-300 group-hover:text-white"
              aria-hidden="true"
            >
              Case study
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="Selected Work"
          title="Things I've built that still feel fast."
          description="A short, honest slice of recent work — shipped products and sharpened tools. Every row is a real build, hover for the spark."
        />
        <ul className="mt-14 flex flex-col gap-4">
          {projects.map((project, i) => (
            <li key={project.title}>
              <ProjectRow project={project} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
