import { SiteShell } from "@/components/layout/site-shell";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <SiteShell>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Writing />
      <Contact />
      <footer className="border-t border-white/[0.05] py-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
          © {new Date().getFullYear()} — built with Next.js, Tailwind & a
          small robot
        </p>
      </footer>
    </SiteShell>
  );
}
