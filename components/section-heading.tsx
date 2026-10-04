import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** id for the heading, referenced by the section's aria-labelledby */
  id?: string;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-accent">
        <span aria-hidden="true" className="text-metadata">
          {index}
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
