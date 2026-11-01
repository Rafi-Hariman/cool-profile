import {
  serializeJsonLd,
  type JsonLdObject,
} from "@/lib/structured-data";

/**
 * Renders schema.org data that must mirror visible page content. Use only
 * fields that are verifiable from this repository.
 */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
