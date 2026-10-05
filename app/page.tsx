import { person } from "@/data/person";
import { SiteShell } from "@/components/layout/site-shell";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <SiteShell>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-white/[0.05] py-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-metadata">
          © {new Date().getFullYear()} {person.name}. Built with Next.js,
          TypeScript, and a small robot.
        </p>
      </footer>
    </SiteShell>
  );
}
