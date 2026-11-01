export type JsonLdObject = Record<string, unknown>;

/**
 * Serialize JSON-LD safely for inline <script> tags: escaping "<" prevents a
 * value from closing the script element.
 */
export function serializeJsonLd(data: JsonLdObject | JsonLdObject[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
