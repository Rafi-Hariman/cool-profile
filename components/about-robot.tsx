"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

interface AboutRobotProps {
  className?: string;
  scene?: string;
}

const DEFAULT_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function AboutRobot({
  className,
  scene = DEFAULT_SCENE,
}: AboutRobotProps) {
  return (
    <Card
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#04060c]/80",
        "h-[380px] sm:h-[460px] md:h-[540px] lg:h-[620px]",
        className
      )}
    >
      <Spotlight
        className="-top-24 left-0 md:left-40 md:-top-10"
        size={340}
        springOptions={{ bounce: 0 }}
      />

      {/* Soft accent halo bleeding down from the top of the robot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,hsl(199_89%_48%_/_0.12),transparent_60%)]"
      />

      <div className="relative h-full w-full">
        <SplineScene scene={scene} className="h-full w-full" />
      </div>

      {/* Fade the robot's feet into the page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020409] to-transparent"
      />
    </Card>
  );
}
