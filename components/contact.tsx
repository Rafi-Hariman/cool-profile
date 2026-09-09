import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import Reveal from "@/components/reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Soft horizon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(600px_circle_at_50%_120%,hsl(199_89%_48%_/_0.14),transparent_70%)]"
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Contact"
            title="Have a project that needs a pulse?"
            description={`I'm currently taking on freelance work. Tell me what you're building — I'll reply within a day, usually faster.`}
            className="mx-auto text-center [&>p]:mx-auto"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>
                {site.email}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <ul className="flex items-center gap-2">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in new tab)`}
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
