import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";
import AboutRobot from "@/components/about-robot";

const highlights = [
  {
    figure: "8+",
    label: "Years shipping",
  },
  {
    figure: "50+",
    label: "Interfaces in production",
  },
  {
    figure: "~1ms",
    label: "Happiness per frame",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — about copy */}
          <Reveal className="lg:col-span-6">
            <SectionHeading
              index="02"
              eyebrow="About"
              title="I build interfaces that feel like instruments."
            />

            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m <span className="font-semibold text-foreground">{site.name}</span> — a
                creative developer based in {site.location}. For the last several years I&apos;ve
                lived at the seam between design and engineering: the place where motion,
                typography, and data meet a shipping deadline.
              </p>
              <p>
                That means I care about the details other people scroll past — frame budgets,
                spring curves, token discipline, and interfaces that hold up in both modes of a
                light switch. When something feels off but you can&apos;t say why, that&apos;s the
                problem I like to chase down.
              </p>
              <p>
                Right now I&apos;m most interested in real-time graphics, developer tooling, and
                the quiet craft of making complex things feel simple.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="font-mono text-sm text-foreground/70">{site.location}</span>
                <span aria-hidden="true" className="mx-2 text-white/20">
                  /
                </span>
                <Badge variant="accent">{site.availability}</Badge>
              </div>
            </div>
          </Reveal>

          {/* Right — interactive 3D robot */}
          <Reveal delay={150} className="lg:col-span-6">
            <AboutRobot />
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-10 sm:mt-20">
          {highlights.map((h) => (
            <li key={h.label}>
              <p className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {h.figure}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {h.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
