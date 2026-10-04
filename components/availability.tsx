import { person } from "@/data/person";
import { Button } from "@/components/ui/button";

/**
 * Availability status + primary conversion CTA. The status dot is the only
 * "color + shape" cue that reads as a live indicator; the text label is
 * redundant so it is not communicated by color alone.
 */
export function Availability() {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-metadata">
        <span aria-hidden="true" className="relative flex h-2 w-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
        </span>
        {person.availability}
      </p>
      <Button asChild variant="accent" className="w-full">
        <a href="#contact">{person.ctaLabel}</a>
      </Button>
    </div>
  );
}
