import type { Metadata } from "next";
import { faqs, getSiteUrl, programs, site, toE164 } from "@/lib/site";

export const SITE_URL = getSiteUrl();

export function buildMetadata(): Metadata {
  const title = {
    default: site.seo.title,
    template: `%s | ${site.shortName}`,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: site.seo.description,
    keywords: [...site.seo.keywords],
    applicationName: site.shortName,
    authors: [{ name: site.name, url: SITE_URL }],
    creator: site.name,
    publisher: site.name,
    category: "sports",
    classification: "Martial Arts / Shotokan Karate Club",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-PK": "/",
        en: "/",
      },
    },
    openGraph: {
      type: "website",
      locale: site.seo.locale,
      url: SITE_URL,
      siteName: site.name,
      title: site.seo.socialTitle,
      description: site.seo.shortDescription,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.socialTitle,
      description: site.seo.shortDescription,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.png", type: "image/png", sizes: "48x48" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
      shortcut: "/favicon.ico",
    },
    other: {
      "geo.region": "PK-PB",
      "geo.placename": "Sheikhupura",
      "geo.position": "31.7131;73.9783",
      ICBM: "31.7131, 73.9783",
    },
  };
}

/** SportsClub / LocalBusiness + FAQ + WebSite JSON-LD graph */
export function buildJsonLd() {
  const url = SITE_URL;
  const phone = toE164(site.phones[0]);
  const sameAs: string[] = []; // add social profiles when available

  const organization = {
    "@type": ["SportsClub", "SportsActivityLocation", "LocalBusiness"],
    "@id": `${url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    description: site.seo.description,
    url,
    email: site.email,
    telephone: phone,
    image: [`${url}/images/og.jpg`, `${url}/images/logo.png`],
    logo: {
      "@type": "ImageObject",
      url: `${url}/images/logo.png`,
    },
    slogan: site.tagline,
    foundingDate: String(new Date().getFullYear() - site.yearsActive),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.7131,
      longitude: 73.9783,
    },
    areaServed: {
      "@type": "City",
      name: "Sheikhupura",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: site.schedule.opens,
        closes: site.schedule.closes,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
      ...site.phones.slice(1).map((p) => ({
        "@type": "ContactPoint",
        telephone: toE164(p),
        contactType: "customer service",
        areaServed: "PK",
      })),
    ],
    priceRange: "PKR",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash",
    knowsAbout: [
      "Shotokan Karate",
      "Self Defense",
      "Kata",
      "Kumite",
      "Kids Martial Arts",
      ...programs.map((p) => p.title),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Karate Programs",
      itemListElement: programs.map((p, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.intro,
        },
      })),
    },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: site.name,
    description: site.seo.shortDescription,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: site.seo.language,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, faqPage, breadcrumb],
  };
}
