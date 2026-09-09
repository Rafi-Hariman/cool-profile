import { skillGroups } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-white/[0.05] py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Stack"
          title="Tools I reach for without thinking."
          description="The layers I'm fluent in — grouped by how I think about them, not by marketing category."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <li key={group.label}>
              <Reveal delay={i * 100}>
                <div className="flex h-full flex-col rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.16]">
                  <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    <span aria-hidden="true" className="text-white/30">
                      0{i + 1}
                    </span>
                    {group.label}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-white/25 transition-colors"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
