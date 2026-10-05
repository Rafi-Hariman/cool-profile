import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/social";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const githubUrl = socials.find((s) => s.label === "GitHub")?.href;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(600px_circle_at_50%_120%,hsl(199_89%_48%_/_0.12),transparent_70%)]"
      />

      <div className="relative">
        <Reveal>
          <SectionHeading
            id="contact-title"
            index="05"
            eyebrow="Contact"
            title="Have a project or frontend problem to discuss?"
            description="You can find my public projects and current experiments on GitHub."
            className="mx-auto text-center [&>p]:mx-auto"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="accent">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
