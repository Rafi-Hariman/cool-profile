import { JsonLd } from "@/components/json-ld";
import { business, services } from "@/data/marketing";
import { person } from "@/data/person";
import type { JsonLdObject } from "@/lib/structured-data";

/**
 * Homepage structured data. Deliberately omits priceRange, ratings, review
 * counts, street address, and opening hours — none are verifiable here.
 */
export function MarketingHomeJsonLd() {
  const areaServed = { "@type": "City", name: "Yogyakarta" };

  const professionalService: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${person.siteUrl}/#business`,
    name: business.formalName,
    alternateName: business.brand,
    description: business.description,
    url: `${person.siteUrl}/`,
    logo: `${person.siteUrl}${business.logoPath}`,
    areaServed,
    availableLanguage: ["id-ID"],
    founder: {
      "@type": "Person",
      name: person.shortName,
      url: `${person.siteUrl}/profile`,
    },
    knowsAbout: services.map((service) => service.title),
  };

  const service: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa pembuatan sistem informasi dan aplikasi web custom",
    description:
      "Pembuatan sistem informasi, aplikasi web, aplikasi Android, dashboard, integrasi, dan sistem custom sesuai kebutuhan.",
    serviceType: services.map((service) => service.title),
    provider: { "@id": `${person.siteUrl}/#business` },
    areaServed,
  };

  return <JsonLd data={[professionalService, service]} />;
}
