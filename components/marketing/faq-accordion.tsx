"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/marketing";
import { cn } from "@/lib/utils";

/**
 * Accessible single-open accordion with a smooth grid-rows open/close
 * animation. Button + aria-expanded + region semantics keep it keyboard and
 * screen-reader friendly; answers are plain text so no focus-trap is needed.
 */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-brand-line border-t border-brand-line">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-brand-ink focus-brand sm:text-lg"
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-muted transition-transform duration-200 motion-reduce:transition-none",
                  open && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-prose pb-6 pr-8 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
