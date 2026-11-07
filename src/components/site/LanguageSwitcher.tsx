import { Link } from "@tanstack/react-router";

import { useLanguage } from "@/i18n/LanguageContext";
import { LANGS, ROUTES } from "@/i18n/routes";
import { cn } from "@/lib/utils";

const LABELS = { es: "Español", en: "English" } as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, page, t } = useLanguage();
  return (
    <nav aria-label={t.nav.language} className={cn("flex items-center gap-2 eyebrow", className)}>
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="opacity-40">/</span>}
          <Link
            to={ROUTES[l][page]}
            hrefLang={l}
            lang={l}
            aria-label={LABELS[l]}
            aria-current={l === lang ? "true" : undefined}
            className={cn(
              "transition-opacity duration-300",
              l === lang ? "opacity-100" : "opacity-55 hover:opacity-100",
            )}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
