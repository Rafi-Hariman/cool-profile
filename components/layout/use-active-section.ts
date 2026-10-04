"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/data/person";

/**
 * Scroll-spy shared by the desktop sidebar nav and the compact mobile
 * header nav. Tracks the section currently in view via IntersectionObserver
 * (no scroll listeners) so the active item can be styled and exposed to
 * screen readers through aria-current.
 */
export function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}
