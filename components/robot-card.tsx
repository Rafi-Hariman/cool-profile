"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

// WebGL runtime stays out of the server bundle and out of the initial
// client chunk (docs/07-PERFORMANCE: desktop-only + lazy).
const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

interface RobotCardProps {
  className?: string;
}

/**
 * The site's signature element: a compact interactive 3D robot with a
 * cursor spotlight, contained in a card (docs/10-MOTION sanctioned
 * exception). Rendered desktop-only by its usage site; also skips the
 * heavy scene on touch devices, which cannot hover anyway.
 */
export default function RobotCard({ className }: RobotCardProps) {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Coarse pointer (touch) or reduced motion → skip the WebGL scene,
    // keep a quiet static card. Also avoids the mobile runtime download.
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compute = () => !coarse.matches && !reduced.matches;
    setCanHover(compute());
    const onChange = () => setCanHover(compute());
    coarse.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);
    return () => {
      coarse.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <Card
      className={cn(
        "relative h-[280px] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#04060c]",
        className
      )}
    >
      {/* Static fallback: visible before (or instead of) the scene */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,hsl(199_89%_48%_/_0.1),transparent_60%)]"
      />

      {canHover ? (
        <>
          <Spotlight size={280} springOptions={{ bounce: 0 }} />
          <div className="relative h-full w-full">
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
                </div>
              }
            >
              <Spline scene={SCENE_URL} className="h-full w-full" />
            </Suspense>
          </div>
        </>
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
            Interactive 3D
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent/70">
            available on desktop
          </span>
        </div>
      )}

      {/* Fade the scene floor into the card's own background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#04060c] to-transparent"
      />
    </Card>
  );
}
