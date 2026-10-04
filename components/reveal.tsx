"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "li" | "span";
}

/**
 * Subtle scroll-in. Progressive enhancement: content is rendered visible
 * (and stays visible without JS, without IntersectionObserver, and under
 * prefers-reduced-motion). The hidden state is only applied on the client,
 * synchronously before paint, so a supported browser reveals on scroll.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // stay visible, no movement
    }
    if (!("IntersectionObserver" in window)) {
      return; // stay visible — never hide what we can't reveal
    }

    setHidden(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out will-change-transform",
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
        className
      )}
    >
      {children}
    </Tag>
  );
}
