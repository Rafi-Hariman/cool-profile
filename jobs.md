You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
constellation-grid.tsx
    'use client';

    import React, { useEffect, useRef, useState } from 'react';

    interface Node {
        x: number;
        y: number;
        vx: number;
        vy: number;
        baseX: number;
        baseY: number;
        radius: number;
        label: string;
        pulse: number;
    }

    export default function ConstellationGrid() {
        const canvasRef = useRef<HTMLCanvasElement | null>(null);
        const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

        // Sync theme preference
        useEffect(() => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }, []);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d', { alpha: false });
            if (!ctx) return;

            let animationFrameId: number;
            let width = 0;
            let height = 0;

            // Mouse velocity & inertial tracking
            const mouse = {
                x: -1000,
                y: -1000,
                prevX: -1000,
                prevY: -1000,
                vx: 0,
                vy: 0,
                radius: 220,
            };

            let nodes: Node[] = [];

            const handleResize = () => {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                ctx.scale(dpr, dpr);
                initNodes();
            };

            const handleMouseMove = (e: MouseEvent) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            };

            const handleMouseLeave = () => {
                mouse.x = -1000;
                mouse.y = -1000;
            };

            const initNodes = () => {
                nodes = [];
                const spacing = 55; // Tighter grid density for richer visual connections
                const cols = Math.ceil(width / spacing) + 1;
                const rows = Math.ceil(height / spacing) + 1;

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        const x = i * spacing;
                        const y = j * spacing;
                        nodes.push({
                            x,
                            y,
                            vx: 0,
                            vy: 0,
                            baseX: x,
                            baseY: y,
                            radius: Math.random() * 1.2 + 1.2,
                            label: `${(i * 7).toString(16).toUpperCase()}:${(j * 11).toString(16).toUpperCase()}`,
                            pulse: Math.random() * Math.PI * 2,
                        });
                    }
                }
            };

            handleResize();
            window.addEventListener('resize', handleResize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);

            let lastTime = performance.now();

            const render = (now: number) => {
                // Normalize dt across high-refresh displays
                const dt = Math.min((now - lastTime) / 1000, 0.05);
                lastTime = now;

                // Mouse velocity calculation
                mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1);
                mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1);
                mouse.prevX = mouse.x;
                mouse.prevY = mouse.y;

                const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

                // Color paletting for dark/light seamlessness
                const bgColor = isDarkMode ? '#030407' : '#f8fafc';
                const nodeColor = isDarkMode ? '255, 255, 255' : '15, 23, 42';
                const accentColor = isDarkMode ? '56, 189, 248' : '2, 132, 199'; // Sky Cyan Accent

                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);

                // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
                const SPRING_K = 18; // Spring stiffness
                const DAMPING = 0.82; // Velocity resistance

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    n.pulse += dt * 3;

                    // Mouse distance vectors
                    const dx = mouse.x - n.x;
                    const dy = mouse.y - n.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Dynamic shockwave repulsion based on cursor speed
                    if (dist < mouse.radius && dist > 0) {
                        const power = (1 - dist / mouse.radius);
                        const force = power * (1500 + speed * 150);
                        const angle = Math.atan2(dy, dx);

                        // Impulse force pushing node away from cursor
                        n.vx -= Math.cos(angle) * force * dt;
                        n.vy -= Math.sin(angle) * force * dt;
                    }

                    // Calculate restoring force back to home anchor point (baseX, baseY)
                    const homeDx = n.baseX - n.x;
                    const homeDy = n.baseY - n.y;

                    n.vx += homeDx * SPRING_K * dt;
                    n.vy += homeDy * SPRING_K * dt;

                    // Apply Damping
                    n.vx *= DAMPING;
                    n.vy *= DAMPING;

                    // Integrate position
                    n.x += n.vx * dt * 60;
                    n.y += n.vy * dt * 60;
                }

                // Draw Connections (Optimized Distance Culling)
                const MAX_CONN_DIST = 75;
                const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST;

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];

                    for (let j = i + 1; j < nodes.length; j++) {
                        const n2 = nodes[j];
                        const ndx = n.x - n2.x;
                        const ndy = n.y - n2.y;
                        const distSq = ndx * ndx + ndy * ndy;

                        if (distSq < MAX_CONN_DIST_SQ) {
                            const nDist = Math.sqrt(distSq);
                            const alpha = (1 - nDist / MAX_CONN_DIST) * (isDarkMode ? 0.18 : 0.08);

                            ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
                            ctx.lineWidth = 0.7;
                            ctx.beginPath();
                            ctx.moveTo(n.x, n.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                // Render Node Points & Interactive Highlights
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    const dx = mouse.x - n.x;
                    const dy = mouse.y - n.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const isNear = dist < mouse.radius;

                    // Node base opacity pulse
                    const baseAlpha = isNear ? 0.95 : 0.25 + Math.sin(n.pulse) * 0.1;

                    ctx.fillStyle = isNear
                        ? `rgba(${accentColor}, ${baseAlpha})`
                        : `rgba(${nodeColor}, ${baseAlpha})`;

                    const currentRadius = isNear
                        ? n.radius * 2.2
                        : n.radius + Math.sin(n.pulse) * 0.3;

                    ctx.beginPath();
                    ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
                    ctx.fill();

                    // High-tech Spatial Radar Rings on active proximity
                    if (dist < 90) {
                        const pulseRing = ((n.pulse * 20) % 30) + 4;
                        const ringAlpha = (1 - pulseRing / 34) * 0.4;

                        ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
                        ctx.stroke();

                        // Hex Coordinate Readout
                        ctx.font = '8px ui-monospace, SFMono-Regular, Consolas, monospace';
                        ctx.fillStyle = `rgba(${accentColor}, 0.85)`;
                        ctx.fillText(n.label, n.x + 10, n.y - 10);
                    }
                }

                animationFrameId = requestAnimationFrame(render);
            };

            animationFrameId = requestAnimationFrame(render);

            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, [isDarkMode]);

        return (
            <div className="relative w-full h-screen overflow-hidden select-none bg-slate-950 dark:bg-slate-950 light:bg-slate-50">
                <canvas ref={canvasRef} className="absolute inset-0 block cursor-crosshair" />

                {/* Seamless overlay title */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white">
                    <h1 className="font-mono text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                        Constellation
                    </h1>
                    <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-70">
                        High-velocity dynamic mesh. Sweep your cursor quickly across the grid to unleash kinetic shockwaves.
                    </p>
                </div>
            </div>
        );
    }

demo.tsx

// This is a file with a demo for your component
// That's what users will see in the preview
// Create new files in this directory to add more demos

import ConstellationGrid from "@/components/ui/constellation-grid";

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return <ConstellationGrid />;
}

```






// --- Component ---
    'use client';

    import React, { useEffect, useRef, useState } from 'react';

    interface Node {
        x: number;
        y: number;
        vx: number;
        vy: number;
        baseX: number;
        baseY: number;
        radius: number;
        label: string;
        pulse: number;
    }

    export default function ConstellationGrid() {
        const canvasRef = useRef<HTMLCanvasElement | null>(null);
        const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

        // Sync theme preference
        useEffect(() => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }, []);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d', { alpha: false });
            if (!ctx) return;

            let animationFrameId: number;
            let width = 0;
            let height = 0;

            // Mouse velocity & inertial tracking
            const mouse = {
                x: -1000,
                y: -1000,
                prevX: -1000,
                prevY: -1000,
                vx: 0,
                vy: 0,
                radius: 220,
            };

            let nodes: Node[] = [];

            const handleResize = () => {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                ctx.scale(dpr, dpr);
                initNodes();
            };

            const handleMouseMove = (e: MouseEvent) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            };

            const handleMouseLeave = () => {
                mouse.x = -1000;
                mouse.y = -1000;
            };

            const initNodes = () => {
                nodes = [];
                const spacing = 55; // Tighter grid density for richer visual connections
                const cols = Math.ceil(width / spacing) + 1;
                const rows = Math.ceil(height / spacing) + 1;

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        const x = i * spacing;
                        const y = j * spacing;
                        nodes.push({
                            x,
                            y,
                            vx: 0,
                            vy: 0,
                            baseX: x,
                            baseY: y,
                            radius: Math.random() * 1.2 + 1.2,
                            label: `${(i * 7).toString(16).toUpperCase()}:${(j * 11).toString(16).toUpperCase()}`,
                            pulse: Math.random() * Math.PI * 2,
                        });
                    }
                }
            };

            handleResize();
            window.addEventListener('resize', handleResize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);

            let lastTime = performance.now();

            const render = (now: number) => {
                // Normalize dt across high-refresh displays
                const dt = Math.min((now - lastTime) / 1000, 0.05);
                lastTime = now;

                // Mouse velocity calculation
                mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1);
                mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1);
                mouse.prevX = mouse.x;
                mouse.prevY = mouse.y;

                const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

                // Color paletting for dark/light seamlessness
                const bgColor = isDarkMode ? '#030407' : '#f8fafc';
                const nodeColor = isDarkMode ? '255, 255, 255' : '15, 23, 42';
                const accentColor = isDarkMode ? '56, 189, 248' : '2, 132, 199'; // Sky Cyan Accent

                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);

                // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
                const SPRING_K = 18; // Spring stiffness
                const DAMPING = 0.82; // Velocity resistance

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    n.pulse += dt * 3;

                    // Mouse distance vectors
                    const dx = mouse.x - n.x;
                    const dy = mouse.y - n.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Dynamic shockwave repulsion based on cursor speed
                    if (dist < mouse.radius && dist > 0) {
                        const power = (1 - dist / mouse.radius);
                        const force = power * (1500 + speed * 150);
                        const angle = Math.atan2(dy, dx);

                        // Impulse force pushing node away from cursor
                        n.vx -= Math.cos(angle) * force * dt;
                        n.vy -= Math.sin(angle) * force * dt;
                    }

                    // Calculate restoring force back to home anchor point (baseX, baseY)
                    const homeDx = n.baseX - n.x;
                    const homeDy = n.baseY - n.y;

                    n.vx += homeDx * SPRING_K * dt;
                    n.vy += homeDy * SPRING_K * dt;

                    // Apply Damping
                    n.vx *= DAMPING;
                    n.vy *= DAMPING;

                    // Integrate position
                    n.x += n.vx * dt * 60;
                    n.y += n.vy * dt * 60;
                }

                // Draw Connections (Optimized Distance Culling)
                const MAX_CONN_DIST = 75;
                const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST;

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];

                    for (let j = i + 1; j < nodes.length; j++) {
                        const n2 = nodes[j];
                        const ndx = n.x - n2.x;
                        const ndy = n.y - n2.y;
                        const distSq = ndx * ndx + ndy * ndy;

                        if (distSq < MAX_CONN_DIST_SQ) {
                            const nDist = Math.sqrt(distSq);
                            const alpha = (1 - nDist / MAX_CONN_DIST) * (isDarkMode ? 0.18 : 0.08);

                            ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
                            ctx.lineWidth = 0.7;
                            ctx.beginPath();
                            ctx.moveTo(n.x, n.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                // Render Node Points & Interactive Highlights
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    const dx = mouse.x - n.x;
                    const dy = mouse.y - n.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const isNear = dist < mouse.radius;

                    // Node base opacity pulse
                    const baseAlpha = isNear ? 0.95 : 0.25 + Math.sin(n.pulse) * 0.1;

                    ctx.fillStyle = isNear
                        ? `rgba(${accentColor}, ${baseAlpha})`
                        : `rgba(${nodeColor}, ${baseAlpha})`;

                    const currentRadius = isNear
                        ? n.radius * 2.2
                        : n.radius + Math.sin(n.pulse) * 0.3;

                    ctx.beginPath();
                    ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
                    ctx.fill();

                    // High-tech Spatial Radar Rings on active proximity
                    if (dist < 90) {
                        const pulseRing = ((n.pulse * 20) % 30) + 4;
                        const ringAlpha = (1 - pulseRing / 34) * 0.4;

                        ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
                        ctx.stroke();

                        // Hex Coordinate Readout
                        ctx.font = '8px ui-monospace, SFMono-Regular, Consolas, monospace';
                        ctx.fillStyle = `rgba(${accentColor}, 0.85)`;
                        ctx.fillText(n.label, n.x + 10, n.y - 10);
                    }
                }

                animationFrameId = requestAnimationFrame(render);
            };

            animationFrameId = requestAnimationFrame(render);

            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, [isDarkMode]);

        return (
            <div className="relative w-full h-screen overflow-hidden select-none bg-slate-950 dark:bg-slate-950 light:bg-slate-50">
                <canvas ref={canvasRef} className="absolute inset-0 block cursor-crosshair" />

                {/* Seamless overlay title */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white">
                    <h1 className="font-mono text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                        Constellation
                    </h1>
                    <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-70">
                        High-velocity dynamic mesh. Sweep your cursor quickly across the grid to unleash kinetic shockwaves.
                    </p>
                </div>
            </div>
        );
    }

// --- Demo ---
// This is a file with a demo for your component
// That's what users will see in the preview
// Create new files in this directory to add more demos

import ConstellationGrid from "@/components/ui/constellation-grid";

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return <ConstellationGrid />;
}








npx @21st-dev/cli add serafimcloud/gradient-button







You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
splite.tsx
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

demo.tsx
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
```

Copy-paste these files for dependencies:
```tsx
ibelick/spotlight
'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}

```
```tsx
shadcn/card
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

Install NPM dependencies:
```bash
@splinetool/runtime, @splinetool/react-spline, framer-motion
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
