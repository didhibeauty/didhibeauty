import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";

import { BRAND } from "@/config/brand";
import { BUSINESS, instagramUrl } from "@/config/business";
import { useLanguage } from "@/i18n/LanguageContext";
import { NAV_PAGES } from "@/i18n/routes";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const { t, href, lang } = useLanguage();
  const ig = instagramUrl(BUSINESS.instagram);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="container-luxe grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 md:py-24">
        <div className="lg:col-span-4">
          <Wordmark />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/70">{t.footer.description}</p>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <h2 className="eyebrow text-cream/50">{t.footer.navTitle}</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV_PAGES.map((p) => (
              <li key={p}>
                <Link to={href(p)} className="link-underline pb-0.5 text-cream/85 hover:text-cream">
                  {t.nav[p]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-cream/50">{t.footer.contactTitle}</h2>
          <ul className="mt-6 space-y-4 text-sm text-cream/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.25} />
              <span>
                {BUSINESS.address.street || t.contact.addressPending}
                <br />
                {BUSINESS.address.locality}, {BUSINESS.address.region}
              </span>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                data-booking="footer"
                className="flex gap-3 hover:text-cream"
              >
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0" />
                WhatsApp · {BUSINESS.phone.display}
              </a>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phone.href}`} className="flex gap-3 hover:text-cream">
                <Phone className="mt-0.5 size-4 shrink-0" strokeWidth={1.25} />
                {BUSINESS.phone.display}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-cream/50">{t.footer.followTitle}</h2>
          <div className="mt-6 text-sm text-cream/85">
            {ig ? (
              <a href={ig} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-cream">
                <Instagram className="size-4" strokeWidth={1.25} />@{BUSINESS.instagram}
              </a>
            ) : (
              <span className="flex gap-3 text-cream/60">
                <Instagram className="size-4" strokeWidth={1.25} />
                {t.contact.pending}
              </span>
            )}
          </div>
          <h2 className="eyebrow mt-10 text-cream/50">{t.nav.language}</h2>
          <LanguageSwitcher className="mt-4" />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-luxe flex flex-col gap-4 py-8 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {BRAND.name} · {BRAND.city}. {t.footer.rights}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link to={href("privacy")} className="hover:text-cream">
                {t.nav.privacy}
              </Link>
            </li>
            <li>
              <Link to={href("cookies")} className="hover:text-cream">
                {t.nav.cookies}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
