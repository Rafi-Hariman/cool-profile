import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Plain input — no Radix primitive needed. Styled with the site's semantic
 * tokens so it matches the deep-space surfaces used elsewhere.
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-10 w-full rounded-lg border border-border/60 bg-white/[0.02] px-3 py-2 text-sm text-foreground transition-colors",
      "placeholder:text-muted-foreground",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "hover:border-white/15",
      "focus-visible:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
