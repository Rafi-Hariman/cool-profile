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
        title="Frontend work, shaped by practice and continuous learning."
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
            I got into software development through a six-to-eight-month
            internship at BSI UII, working on both backend and frontend
            tasks. That&apos;s where I learned how interfaces, APIs, data,
            and team workflows connect in a real project.
          </p>
          <p>
            After the internship, I stayed on as a contract Frontend
            Developer. Now I turn UI/UX designs into application interfaces,
            build and maintain frontend features, and work alongside backend
            developers and stakeholders.
          </p>
          <p>
            On top of work, I study Informatics in the employee-class
            program at Universitas Mercu Buana Yogyakarta. I also take on
            freelance projects, mostly profile sites, landing pages, and
            simple websites for small businesses.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-sm font-mono text-sm uppercase tracking-[0.1em] text-accent underline-offset-8 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          View selected work
          <ArrowDown
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
            aria-hidden="true"
          />
        </a>
      </Reveal>
    </section>
  );
}
