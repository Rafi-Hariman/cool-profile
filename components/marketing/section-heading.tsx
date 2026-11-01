import { cn } from "@/lib/utils";

interface MarketingSectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  /** Highlighted tail of the title (accent color), matching the reference. */
  accent?: string;
  description?: string;
  align?: "left" | "center";
  /** Use light text for headings placed on blue/navy surfaces. */
  onDark?: boolean;
  className?: string;
}

/**
 * Section heading for the marketing homepage. The eyebrow is decorative
 * context; the h2 carries the section label for assistive tech.
 */
export function MarketingSectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  onDark = false,
  className,
}: MarketingSectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "font-mono text-xs font-medium uppercase tracking-[0.16em]",
          onDark ? "text-brand-cyan" : "text-brand-blue",
          centered && "text-center"
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 text-balance text-3xl font-bold leading-[1.14] tracking-[-0.02em] sm:text-4xl lg:text-[2.6rem]",
          onDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
        {accent ? (
          <span className={onDark ? "text-brand-cyan" : "text-brand-blue"}>
            {" "}
            {accent}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onDark ? "text-white/75" : "text-brand-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
