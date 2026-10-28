import { person } from "@/data/person";
import { socials } from "@/data/social";
import { articleMeta } from "@/data/articles/pju-mati-sleman";

export function AuthorCard() {
  const github = socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href;

  const links = [
    { href: "/", label: "Home" },
    ...(github ? [{ href: github, label: "GitHub" }] : []),
    ...(linkedin ? [{ href: linkedin, label: "LinkedIn" }] : []),
  ];

  return (
    <aside className="my-12 rounded-xl border border-article-border bg-article-surface p-6 sm:p-7">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-article-muted">
        Ditulis oleh
      </p>
      <p className="mt-3 text-lg font-semibold text-article-foreground">
        {articleMeta.author.name}
      </p>
      <p className="mt-1 text-sm text-article-body">{person.role}</p>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-article-muted">
        {person.tagline}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("/") ? undefined : "_blank"}
            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
            className="font-mono text-xs uppercase tracking-[0.1em] text-article-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
