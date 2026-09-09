"use client";

import { Suspense, lazy } from "react";

// Lazy-loaded so the WebGL runtime is never pulled into the server bundle.
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
