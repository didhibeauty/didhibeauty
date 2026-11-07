import type { ReactNode } from "react";

import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Lang, PageKey } from "@/i18n/routes";
import { translations } from "@/i18n/translations";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({
  lang,
  page,
  overlayHeader = false,
  children,
}: {
  lang: Lang;
  page: PageKey;
  /** Transparent header over a full-screen photo (home page) */
  overlayHeader?: boolean;
  children: ReactNode;
}) {
  return (
    <LanguageProvider lang={lang} page={page}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        {translations[lang].nav.skip}
      </a>
      <Header overlay={overlayHeader} />
      <main id="main">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
