import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "X / Twitter": Twitter,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(600px_circle_at_50%_120%,hsl(199_89%_48%_/_0.12),transparent_70%)]"
      />

      <div className="relative">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title="Let's build something useful."
            description="I'm currently taking on freelance work. Tell me what you're building — I'll reply within a day."
            className="mx-auto text-center [&>p]:mx-auto"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${person.email}`}>
                {person.email}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <ul className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <li key={social.label}>
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} (opens in new tab)`}
                      >
                        {Icon ? (
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : null}
                        {social.label}
                      </a>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
