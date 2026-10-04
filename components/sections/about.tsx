import { ArrowDown } from "lucide-react";
import { person } from "@/data/person";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-16 sm:py-24 lg:py-12 lg:pt-24">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow="About"
        title="Engineer first, pixel-second."
      />

      {person.summary ? (
        <Reveal className="mt-6">
          <p className="max-w-prose text-xl leading-relaxed text-foreground sm:text-2xl">
            {person.summary}
          </p>
        </Reveal>
      ) : null}

      <Reveal className="mt-8">
        <div className="flex max-w-prose flex-col gap-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a frontend engineer who cares about the details other
            people scroll past — frame budgets, spring curves, token
            discipline, and interfaces that hold up under real users.
          </p>
          <p>
            I work at the seam between design and engineering: the place
            where motion, typography, and data meet a shipping deadline.
            When something feels off but you can&apos;t say why, that&apos;s
            the problem I like to chase down.
          </p>
          <p>
            Lately I&apos;m most interested in real-time graphics,
            developer tooling, and the quiet craft of making complex things
            feel simple.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-sm font-mono text-sm uppercase tracking-[0.1em] text-accent underline-offset-8 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Selected work
          <ArrowDown
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
            aria-hidden="true"
          />
        </a>
      </Reveal>
    </section>
  );
}
