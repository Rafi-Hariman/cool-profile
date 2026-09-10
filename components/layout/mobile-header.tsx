import { person } from "@/data/person";
import { navSections } from "@/data/person";

/** Compact header shown below lg — name, role, horizontal section nav. */
export function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.05] bg-background/85 backdrop-blur-md lg:hidden">
      <div className="px-6 py-4 sm:px-8">
        <p className="text-lg font-bold tracking-tight text-foreground">
          {person.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {person.role}
        </p>
      </div>
      <nav aria-label="Sections" className="px-6 pb-3 sm:px-8">
        <ul className="flex gap-5 overflow-x-auto">
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
