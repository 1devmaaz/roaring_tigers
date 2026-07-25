import { buildJsonLd } from "@/lib/seo";

/** Server-rendered JSON-LD for search engines and rich results. */
export function JsonLd() {
  const data = buildJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
