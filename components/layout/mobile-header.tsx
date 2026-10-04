"use client";

import { person, navSections } from "@/data/person";
import { useActiveSection } from "@/components/layout/use-active-section";

/**
 * Compact header shown below lg — name, role, horizontal section nav.
 * Reuses the same scroll-spy as the desktop sidebar so the active section
 * is styled and exposed via aria-current on mobile too.
 */
export function MobileHeader() {
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.05] bg-background/85 backdrop-blur-md lg:hidden">
      <div className="px-6 py-4 sm:px-8">
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          {person.name}
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
          {person.role}
        </p>
      </div>
      <nav aria-label="Sections" className="px-6 pb-2 sm:px-8">
        <ul className="flex gap-1 overflow-x-auto">
          {navSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`whitespace-nowrap rounded font-mono text-xs uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "text-accent"
                      : "text-metadata hover:text-foreground"
                  }`}
                >
                  <span className="block px-2 py-2.5">{section.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
