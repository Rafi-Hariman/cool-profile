import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          © {year} {site.name}
        </p>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Designed &amp; built in the constellation
        </p>
      </div>
    </footer>
  );
}
