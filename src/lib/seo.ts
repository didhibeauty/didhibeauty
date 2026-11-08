import { BRAND } from "@/config/brand";
import { BUSINESS, instagramUrl } from "@/config/business";
import { IMAGES, type ImageKey } from "@/config/images";
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

const absolute = (origin: string, path: string) => (origin ? `${origin}${path}` : path);

export function localBusinessJsonLd(lang: Lang, origin: string) {
  const ig = instagramUrl(BUSINESS.instagram);
  const a = BUSINESS.address;
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: a.locality,
    addressRegion: a.region,
    addressCountry: a.country,
  };
  if (a.street) address["streetAddress"] = `${a.street}, ${a.area}`;
  if (a.postalCode) address["postalCode"] = a.postalCode;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: BRAND.name,
    description: translations[lang].seo.home.description,
    url: absolute(origin, ROUTES[lang].home),
    image: origin ? absolute(origin, IMAGES.hero.src) : undefined,
    telephone: BUSINESS.phone.href,
    address,
    areaServed: { "@type": "City", name: "Marbella" },
    availableLanguage: ["es", "en"],
    hasMap: BUSINESS.mapsUrl,
  };
  if (BUSINESS.email) data["email"] = BUSINESS.email;
  if (ig) data["sameAs"] = [ig];
  return data;
}

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
    const img = absolute(origin, IMAGES[image].src);
    meta.push(
      { property: "og:image", content: img },
      { property: "og:image:alt", content: IMAGES[image].alt[lang] },
      { name: "twitter:image", content: img },
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

  const scripts =
    page === "home" || page === "contact"
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(localBusinessJsonLd(lang, origin)),
          },
        ]
      : [];

  return { meta, links, scripts };
}
