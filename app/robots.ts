import type { MetadataRoute } from "next";
import { person } from "@/data/person";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Scratch routes kept in the repo for design experiments. They are also
      // noindex'd at the route level; this keeps them out of crawling entirely.
      disallow: ["/mobile", "/new-page"],
    },
    sitemap: `${person.siteUrl}/sitemap.xml`,
    host: person.siteUrl,
  };
}
