import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        This page drifted off the map.
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        The page you were looking for doesn&apos;t exist — or was moved
        during a refactor.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back home
      </Link>
    </main>
  );
}
