import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { useLanguage } from "@/i18n/LanguageContext";
import { NAV_PAGES } from "@/i18n/routes";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppButton } from "./WhatsAppButton";
import { Wordmark } from "./Wordmark";

/**
 * Sticky header: transparent over the home hero, solid cream once scrolled.
 * The page links are always visible (no hamburger menu): on one row from
 * 1024px, and on a second row under the logo on smaller screens.
 */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t, href } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overlay || scrolled;

  const links = (className: string) =>
    NAV_PAGES.map((p) => (
      <li key={p}>
        <Link
          to={href(p)}
          activeOptions={{ exact: true }}
          className={cn("link-underline block whitespace-nowrap pb-1 font-medium uppercase", className)}
        >
          {t.nav[p]}
        </Link>
      </li>
    ));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        solid
          ? "border-b border-border bg-background/95 text-foreground backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-on-image",
      )}
    >
      <div
        className={cn(
          "container-luxe flex items-center justify-between gap-6 transition-all duration-700",
          solid ? "h-[4.5rem]" : "h-20 lg:h-24",
        )}
      >
        <Wordmark className="shrink-0" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8 2xl:gap-9">
            {links("text-[0.7rem] tracking-[0.16em] xl:text-[0.72rem] xl:tracking-[0.2em]")}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <LanguageSwitcher />
          <WhatsAppButton
            variant={solid ? "ink" : "outlineCream"}
            size="md"
            label={t.nav.book}
            className="hidden md:inline-flex lg:hidden xl:inline-flex"
          />
        </div>
      </div>

      {/* Small screens: links on their own row so every page is one tap away */}
      <nav
        aria-label="Mobile"
        className={cn(
          "border-t transition-colors duration-700 lg:hidden",
          solid ? "border-border" : "border-on-image/20",
        )}
      >
        <ul className="container-luxe flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2.5 sm:gap-x-8">
          {links("text-[0.66rem] tracking-[0.14em] sm:text-[0.7rem] sm:tracking-[0.18em]")}
        </ul>
      </nav>
    </header>
  );
}
