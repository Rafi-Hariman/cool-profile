import { reportFlow } from "@/data/articles/pju-mati-sleman";

/**
 * The path a report takes from submission to a confirmed fix. Rendered as a
 * vertical rail so it reads top-to-bottom on every viewport (docs/11).
 */
export function ProcessFlow() {
  return (
    <ol className="flex flex-col">
      {reportFlow.map((step, i) => (
        <li key={step.id} className="relative flex gap-4 pb-5 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-article-border bg-article-surface font-mono text-xs text-article-accent">
              {i + 1}
            </span>
            {i < reportFlow.length - 1 ? (
              <span
                aria-hidden="true"
                className="mt-1 w-px flex-1 bg-article-border"
              />
            ) : null}
          </div>
          <div className="pt-0.5">
            <p className="font-medium text-article-foreground">{step.label}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-article-body">
              {step.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
