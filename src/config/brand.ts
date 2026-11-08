/**
 * BRAND CONFIGURATION
 * -------------------
 * Change the brand name or logo here and it updates everywhere on the site
 * (header, footer, SEO titles, structured data, WhatsApp texts…).
 */
import logoFull from "@/assets/logo-tree-full.png";
import logoFullLight from "@/assets/logo-tree-full-light.png";
import logoMark from "@/assets/logo-tree-mark.png";

export const BRAND: {
  name: string;
  wordmark: { primary: string; secondary: string };
  tagline: { es: string; en: string };
  city: string;
  siteUrl: string;
  logo: { full: string; fullLight: string; mark: string };
} = {
  /** Full brand name used in titles, SEO and structured data */
  name: "Didhi Beauty",
  /** Wordmark split into two lines/weights next to the logo */
  wordmark: { primary: "Didhi", secondary: "Beauty" },
  tagline: { es: "Centro de masajes & estética", en: "Massage & beauty center" },
  /** City shown next to the brand */
  city: "Marbella",
  /**
   * Public website address, e.g. "https://www.yourdomain.com" (no trailing slash).
   * Leave empty to detect it automatically from the visitor's request.
   */
  siteUrl: "",
  /** Logo files: full (dark text), full on dark backgrounds, and the symbol only */
  logo: { full: logoFull, fullLight: logoFullLight, mark: logoMark },
};
