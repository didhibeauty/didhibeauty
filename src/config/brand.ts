/**
 * BRAND CONFIGURATION
 * -------------------
 * Change the brand name here and it updates everywhere on the site
 * (header, footer, SEO titles, structured data, WhatsApp texts…).
 *
 * "MAISON WELLNESS" is a TEMPORARY name until the final brand is chosen.
 */
export const BRAND = {
  /** Full brand name used in titles, SEO and structured data */
  name: "Maison Wellness",
  /** Wordmark split into two lines/weights for the logo */
  wordmark: { primary: "Maison", secondary: "Wellness" },
  /** City shown next to the brand */
  city: "Marbella",
  /**
   * Public website address, e.g. "https://www.yourdomain.com" (no trailing slash).
   * Leave empty to detect it automatically from the visitor's request.
   * Used for canonical URLs, language alternates and social previews.
   */
  siteUrl: "",
} as const;
