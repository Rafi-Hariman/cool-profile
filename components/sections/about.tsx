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
        title="Growing through work, study, and real projects."
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
            I began my professional journey as an intern at BSI UII,
            contributing to both backend and frontend development. That
            experience helped me understand how application interfaces,
            APIs, data, and team workflows connect in real software
            projects.
          </p>
          <p>
            After completing the internship, I continued at BSI UII as a
            contract employee focused on frontend development. My current
            work involves translating UI/UX designs into maintainable
            interfaces, developing and improving web applications, and
            supporting ongoing application maintenance.
          </p>
          <p>
            Alongside my professional role, I am pursuing a bachelor&apos;s
            degree in Informatics through the employee-class program at
            Universitas Mercu Buana Yogyakarta. I also take selected
            freelance projects to broaden my experience and build practical
            digital solutions for individuals, UMKM, and local businesses.
          </p>
          <p>
            This portfolio documents my professional journey, selected
            projects, technical growth, and the lessons I continue to learn
            across work, study, and freelance practice.
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
