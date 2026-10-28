import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutKind = "case" | "analysis" | "limitation";

const labelByKind: Record<CalloutKind, string> = {
  case: "Data kasus",
  analysis: "Analisis",
  limitation: "Batasan data",
};

const kindStyles: Record<CalloutKind, string> = {
  case: "border-article-accent/30 bg-article-accent/[0.06]",
  analysis: "border-article-border bg-article-surface-muted",
  limitation:
    "border-article-border bg-article-surface border-dashed text-article-body",
};

const labelStyles: Record<CalloutKind, string> = {
  case: "text-article-accent",
  analysis: "text-article-foreground",
  limitation: "text-article-muted",
};

/**
 * Visually distinguishes three kinds of information inside the article body:
 * verified case facts, the author's analysis, and explicit data limitations.
 * The text label (not color alone) carries the distinction for assistive tech.
 */
export function EvidenceCallout({
  kind,
  title,
  children,
  className,
}: {
  kind: CalloutKind;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl border px-5 py-4 sm:px-6",
        kindStyles[kind],
        className
      )}
    >
      <p
        className={cn(
          "font-mono text-[0.65rem] uppercase tracking-[0.2em]",
          labelStyles[kind]
        )}
      >
        {labelByKind[kind]}
      </p>
      {title ? (
        <p className="mt-2 font-medium text-article-foreground">{title}</p>
      ) : null}
      <div className="article-prose mt-2 text-article-body">
        {children}
      </div>
    </aside>
  );
}
