/**
 * BUSINESS CONFIGURATION
 * ----------------------
 * All contact details live here. Empty strings are shown on the site as
 * "To be confirmed" instead of inventing information.
 */

/** WhatsApp number in international format, digits only (no "+", spaces or dashes). */
export const WHATSAPP_NUMBER = "34610326355";

const MAPS_QUERY = "Didhi Beauty, Avenida Julio Iglesias, Puerto Banús, Marbella";

export const BUSINESS = {
  whatsappNumber: WHATSAPP_NUMBER,

  /** Phone shown on the site and used for tap-to-call. */
  phone: {
    display: "+34 610 32 63 55",
    href: "+34610326355",
  },

  /** Contact email. Empty = not shown yet ("To be confirmed"). */
  email: "",

  /** Instagram handle without "@". Empty = not shown yet. */
  instagram: "",

  /**
   * Link to the official Google Business Profile (Google Maps listing), e.g.
   * "https://maps.app.goo.gl/…" or "https://g.page/…". Empty = not linked yet.
   */
  googleBusinessUrl: "",

  /**
   * Exact map coordinates of the shop, e.g. { latitude: 36.48, longitude: -4.95 }.
   * Leave null until confirmed (copy them from the Google Business Profile).
   */
  geo: null as { latitude: number; longitude: number } | null,

  address: {
    street: "Avenida Julio Iglesias, Casa VX, Local 5",
    area: "Puerto Banús",
    postalCode: "",
    locality: "Marbella",
    region: "Málaga",
    country: "ES",
    countryName: { es: "España", en: "Spain" },
  },

  /** Google Maps embed search query (shown on the contact map). */
  mapQuery: MAPS_QUERY,
  /** "Open in Google Maps" link */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,

  /** Opening hours text per language. */
  hours: {
    es: ["Lunes a viernes: 11:00 – 19:00", "Sábado: 09:00 – 17:00", "Domingo: cerrado"],
    en: ["Monday to Friday: 11:00 – 19:00", "Saturday: 09:00 – 17:00", "Sunday: closed"],
  },
} as const;

export const instagramUrl = (handle: string) =>
  handle ? `https://www.instagram.com/${handle.replace(/^@/, "")}` : "";
