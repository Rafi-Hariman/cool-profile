import { Sidebar } from "@/components/layout/sidebar";
import { MobileHeader } from "@/components/layout/mobile-header";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

/**
 * Two-column architecture (docs/03-UI-UX): sticky identity panel on the
 * left, scrolling portfolio narrative on the right. Below lg the sidebar
 * collapses into a compact header.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* First focusable element — keyboard users can jump past the nav */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-foreground focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <MobileHeader />

      {/* Aurora shader background framing the left + right margins (xl+) —
          symmetric strips that pull the eye toward the centered content
          column. Decorative only, never intercepts the cursor; fixed so
          each strip persists the whole scroll length. Each strip fades
          toward the content column (docs/10-MOTION exception #3). */}
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 z-0 hidden h-screen w-[calc((100%-72rem)/2)] xl:block ${side}-0 ${
            side === "left" ? "shader-fade-l" : "shader-fade-r"
          }`}
        >
          <AnimatedShaderBackground className="opacity-35" />
        </div>
      ))}

      <div className="mx-auto flex w-full max-w-6xl px-6 sm:px-8 lg:gap-0">
        {/* Sticky identity panel — desktop */}
        <aside className="hidden w-[320px] shrink-0 lg:block xl:w-[380px]">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* Portfolio narrative */}
        <main id="content" className="min-w-0 flex-1 pb-24 lg:border-l lg:border-white/[0.05] lg:pl-10 lg:py-0">
          {children}
        </main>
      </div>
    </>
  );
}
