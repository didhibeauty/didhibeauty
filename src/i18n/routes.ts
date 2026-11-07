/**
 * Language and URL map. Spanish is the default language at the root ("/"),
 * English lives under "/en". Each page has an equivalent URL in both languages.
 */
export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

export type PageKey =
  | "home"
  | "about"
  | "treatments"
  | "experience"
  | "contact"
  | "privacy"
  | "cookies";

export const ROUTES = {
  es: {
    home: "/",
    about: "/sobre-nosotros",
    treatments: "/tratamientos",
    experience: "/experiencia",
    contact: "/contacto",
    privacy: "/privacidad",
    cookies: "/cookies",
  },
  en: {
    home: "/en",
    about: "/en/about",
    treatments: "/en/treatments",
    experience: "/en/experience",
    contact: "/en/contact",
    privacy: "/en/privacy",
    cookies: "/en/cookies",
  },
} as const satisfies Record<Lang, Record<PageKey, string>>;

export type SitePath = (typeof ROUTES)[Lang][PageKey];

export const NAV_PAGES: PageKey[] = ["home", "about", "treatments", "experience", "contact"];

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");
