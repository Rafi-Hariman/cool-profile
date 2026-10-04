import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-12 lg:pt-24">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Engineer first, pixel-second."
      />
      <Reveal className="mt-8">
        <div className="flex max-w-prose flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
    </section>
  );
}
