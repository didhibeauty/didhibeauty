import { createContext, useContext, type ReactNode } from "react";

import { ROUTES, type Lang, type PageKey } from "./routes";
import { translations, type Dictionary } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  page: PageKey;
  t: Dictionary;
  /** URL of a page in the current language */
  href: (page: PageKey) => (typeof ROUTES)[Lang][PageKey];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  lang,
  page,
  children,
}: {
  lang: Lang;
  page: PageKey;
  children: ReactNode;
}) {
  const value: LanguageContextValue = {
    lang,
    page,
    t: translations[lang],
    href: (p) => ROUTES[lang][p],
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
