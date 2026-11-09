import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BUSINESS } from "@/config/business";
import { useLanguage } from "@/i18n/LanguageContext";
import { NAV_PAGES } from "@/i18n/routes";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppButton } from "./WhatsAppButton";
import { Wordmark } from "./Wordmark";

/** Sticky header: transparent over the home hero, solid cream once scrolled. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t, href } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !overlay || scrolled || open;
  const close = () => setOpen(false);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-border bg-background/95 text-foreground backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-on-image",
      )}
    >
      <div
        className={cn(
          "container-luxe flex items-center justify-between gap-6 transition-all duration-700",
          solid ? "h-[4.5rem]" : "h-24",
        )}
      >
        <Wordmark onClick={close} className="shrink-0" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 2xl:gap-9">
            {NAV_PAGES.map((p) => (
              <li key={p}>
                <Link
                  to={href(p)}
                  activeOptions={{ exact: true }}
                  className="link-underline pb-1 text-[0.72rem] font-medium uppercase tracking-[0.2em]"
                >
                  {t.nav[p]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher className="hidden sm:flex" />
          <WhatsAppButton
            variant={solid ? "ink" : "outlineCream"}
            size="md"
            label={t.nav.book}
            className="hidden md:inline-flex"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="-mr-2 flex size-11 items-center justify-center xl:hidden"
          >
            {open ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile navigation — outside <header>: its backdrop blur would trap this fixed panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-background text-foreground xl:hidden"
      >
        <div className="container-luxe flex min-h-full flex-col justify-between gap-12 py-10">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV_PAGES.map((p, i) => (
                <li
                  key={p}
                  className="animate-fade-up border-b border-border"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Link
                    to={href(p)}
                    onClick={close}
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "text-olive-deep" }}
                    className="flex items-baseline justify-between py-5 font-serif text-4xl"
                  >
                    {t.nav[p]}
                    <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <WhatsAppButton variant="ink" size="xl" label={t.contact.cta} onClick={close} />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <a href={`tel:${BUSINESS.phone.href}`}>{BUSINESS.phone.display}</a>
              <LanguageSwitcher className="text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
