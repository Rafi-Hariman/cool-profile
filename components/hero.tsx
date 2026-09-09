import ConstellationGrid from "@/components/ui/constellation-grid";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] w-full overflow-hidden"
      aria-label="Introduction"
    >
      {/* Fixed star-field + kinetic hero, full-bleed behind everything */}
      <ConstellationGrid title={site.handle} subtitle={site.role} />

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
