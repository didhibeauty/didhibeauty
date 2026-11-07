/**
 * BUSINESS CONFIGURATION
 * ----------------------
 * All contact details live here. Replace every placeholder with the real
 * business information before publishing. Empty strings are shown on the
 * site as "To be confirmed" instead of inventing information.
 */

/**
 * WhatsApp number in international format, digits only (no "+", spaces or dashes).
 * PLACEHOLDER — replace with the real business number.
 */
export const WHATSAPP_NUMBER = "34600000000";

export const BUSINESS = {
  whatsappNumber: WHATSAPP_NUMBER,

  /** Phone shown on the site and used for tap-to-call. PLACEHOLDER. */
  phone: {
    display: "+34 600 000 000",
    href: "+34600000000",
  },

  /** Contact email. Empty = not shown yet ("To be confirmed"). */
  email: "",

  /** Instagram handle without "@". Empty = not shown yet. */
  instagram: "",

  /**
   * Address. Street and postal code are intentionally empty until the real
   * address is confirmed — never publish an invented address.
   */
  address: {
    street: "",
    postalCode: "",
    locality: "Marbella",
    region: "Málaga",
    country: "ES",
    countryName: { es: "España", en: "Spain" },
  },

  /**
   * Google Maps embed search query. Replace with the exact business
   * address (or a Google Maps "place" embed URL) once confirmed.
   */
  mapQuery: "Marbella, Málaga, Spain",

  /** Opening hours text per language. Replace with real hours. */
  hours: {
    es: ["Solo con cita previa", "Horario por confirmar"],
    en: ["By appointment only", "Opening hours to be confirmed"],
  },
} as const;

export const instagramUrl = (handle: string) =>
  handle ? `https://www.instagram.com/${handle.replace(/^@/, "")}` : "";
