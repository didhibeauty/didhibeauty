import { BRAND } from "@/config/brand";
import { BUSINESS, instagramUrl } from "@/config/business";
import { IMAGES, OG_IMAGES, type ImageKey } from "@/config/images";
import { TREATMENTS } from "@/config/treatments";
import { ROUTES, otherLang, type Lang, type PageKey } from "@/i18n/routes";
import { translations } from "@/i18n/translations";
import { getRequestOrigin } from "./origin.functions";

/** Site origin: configured siteUrl, else the browser/request origin. */
export async function resolveOrigin(): Promise<string> {
  if (BRAND.siteUrl) return BRAND.siteUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  try {
    return await getRequestOrigin();
  } catch {
    return "";
  }
}

const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_GB" };
const IN_LANGUAGE: Record<Lang, string> = { es: "es-ES", en: "en-GB" };

const absolute = (origin: string, path: string) => (origin ? `${origin}${path}` : path);

/** Real photos of the shop used as the business image in search results. */
const BUSINESS_PHOTOS: ImageKey[] = ["spaceStorefront", "spaceRoom", "spaceReception", "spaceLounge"];

/**
 * Local business structured data (schema.org JSON-LD). Only real, confirmed data:
 * fields left empty in src/config/business.ts (postal code, coordinates, Google
 * Business Profile, Instagram, email) are omitted. Never add ratings or reviews here
 * unless they are genuine and shown on the page.
 */
export function localBusinessJsonLd(lang: Lang, origin: string) {
  const a = BUSINESS.address;
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    streetAddress: `${a.street}, ${a.area}`,
    addressLocality: a.locality,
    addressRegion: a.region,
    addressCountry: a.country,
  };
  if (a.postalCode) address["postalCode"] = a.postalCode;

  const prices = TREATMENTS.flatMap((t) => t.options.map((o) => o.price));
  const offers = TREATMENTS.flatMap((t) =>
    t.options.map((o) => ({
      "@type": "Offer",
      price: o.price,
      priceCurrency: "EUR",
      itemOffered: {
        "@type": "Service",
        name: o.durationMin ? `${t.name[lang]} · ${o.durationMin} min` : t.name[lang],
        description: t.description[lang],
      },
    })),
  );

  const sameAs = [instagramUrl(BUSINESS.instagram), BUSINESS.googleBusinessUrl].filter(Boolean);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": absolute(origin, "/#business"),
    name: BRAND.name,
    description: translations[lang].seo.home.description,
    url: absolute(origin, ROUTES[lang].home),
    image: BUSINESS_PHOTOS.map((k) => absolute(origin, IMAGES[k].src)),
    logo: absolute(origin, BRAND.logo.full),
    telephone: BUSINESS.phone.href,
    address,
    areaServed: [
      { "@type": "Place", name: `${a.area}, ${a.locality}` },
      { "@type": "City", name: a.locality },
    ],
    hasMap: BUSINESS.googleBusinessUrl || BUSINESS.mapsUrl,
    currenciesAccepted: "EUR",
    priceRange: `${Math.min(...prices)} € – ${Math.max(...prices)} €`,
    availableLanguage: ["es", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: translations[lang].treatments.title,
      itemListElement: offers,
    },
  };
  if (BUSINESS.geo) {
    data["geo"] = { "@type": "GeoCoordinates", ...BUSINESS.geo };
  }
  if (BUSINESS.email) data["email"] = BUSINESS.email;
  if (sameAs.length) data["sameAs"] = sameAs;
  return data;
}

export function websiteJsonLd(lang: Lang, origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute(origin, "/#website"),
    name: BRAND.name,
    url: absolute(origin, ROUTES[lang].home),
    inLanguage: IN_LANGUAGE[lang],
    publisher: { "@id": absolute(origin, "/#business") },
  };
}

/** Pages that carry the business JSON-LD (home, prices, contact). */
const BUSINESS_SCHEMA_PAGES: PageKey[] = ["home", "treatments", "contact"];

/** Full head() payload for a page: title, description, OG, canonical, hreflang, JSON-LD. */
export function pageHead({
  lang,
  page,
  origin = "",
  image,
}: {
  lang: Lang;
  page: PageKey;
  origin?: string | undefined;
  image?: ImageKey | undefined;
}) {
  const t = translations[lang].seo;
  const { title, description } = t[page];
  const url = absolute(origin, ROUTES[lang][page]);
  const alt = otherLang(lang);

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "keywords", content: t.keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: BRAND.name },
    { property: "og:locale", content: OG_LOCALE[lang] },
    { property: "og:locale:alternate", content: OG_LOCALE[alt] },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (origin) meta.push({ property: "og:url", content: url });
  if (origin && image) {
    // Prefer the 1200×630 share copy of the page's top photo.
    const og = OG_IMAGES[image];
    const img = absolute(origin, og ?? IMAGES[image].src);
    meta.push(
      { property: "og:image", content: img },
      { property: "og:image:width", content: String(og ? 1200 : IMAGES[image].width) },
      { property: "og:image:height", content: String(og ? 630 : IMAGES[image].height) },
      { property: "og:image:alt", content: IMAGES[image].alt[lang] },
      { name: "twitter:image", content: img },
      { name: "twitter:image:alt", content: IMAGES[image].alt[lang] },
    );
  }

  const links = origin
    ? [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "es", href: absolute(origin, ROUTES.es[page]) },
        { rel: "alternate", hrefLang: "en", href: absolute(origin, ROUTES.en[page]) },
        { rel: "alternate", hrefLang: "x-default", href: absolute(origin, ROUTES.es[page]) },
      ]
    : [];

  const jsonLd: Record<string, unknown>[] = [];
  if (BUSINESS_SCHEMA_PAGES.includes(page)) jsonLd.push(localBusinessJsonLd(lang, origin));
  if (page === "home") jsonLd.push(websiteJsonLd(lang, origin));
  const scripts = jsonLd.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) }));

  return { meta, links, scripts };
}
