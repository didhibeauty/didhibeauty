import type { ReactNode } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BUSINESS, instagramUrl } from "@/config/business";
import { useLanguage } from "@/i18n/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const ig = instagramUrl(BUSINESS.instagram);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&z=13&output=embed`;
  const a = BUSINESS.address;

  const rows: { label: string; value: ReactNode }[] = [
    {
      label: c.labels.address,
      value: (
        <>
          {a.street ? `${a.street}${a.postalCode ? `, ${a.postalCode}` : ""}` : c.addressPending}
          <br />
          {a.locality}, {a.region} · {a.countryName[lang]}
        </>
      ),
    },
    {
      label: c.labels.whatsapp,
      value: (
        <a
          href={buildWhatsAppUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          data-booking="contact-row"
          className="link-underline pb-0.5"
        >
          {BUSINESS.phone.display}
        </a>
      ),
    },
    {
      label: c.labels.phone,
      value: (
        <a href={`tel:${BUSINESS.phone.href}`} className="link-underline pb-0.5">
          {BUSINESS.phone.display}
        </a>
      ),
    },
    {
      label: c.labels.email,
      value: BUSINESS.email ? (
        <a href={`mailto:${BUSINESS.email}`} className="link-underline pb-0.5">
          {BUSINESS.email}
        </a>
      ) : (
        <span className="text-muted-foreground">{c.pending}</span>
      ),
    },
    {
      label: c.labels.instagram,
      value: ig ? (
        <a href={ig} target="_blank" rel="noopener noreferrer" className="link-underline pb-0.5">
          @{BUSINESS.instagram}
        </a>
      ) : (
        <span className="text-muted-foreground">{c.pending}</span>
      ),
    },
    {
      label: c.labels.hours,
      value: (
        <>
          {BUSINESS.hours[lang].map((h) => (
            <span key={h} className="block">
              {h}
            </span>
          ))}
        </>
      ),
    },
  ];

  return (
    <section className="section-y">
      <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          {showHeading && <SectionHeading eyebrow={c.eyebrow} title={c.title} intro={c.intro} />}
          {!showHeading && <p className="max-w-xl text-base text-muted-foreground md:text-lg">{c.intro}</p>}

          <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.label}>
                <dt className="eyebrow text-olive-deep">{r.label}</dt>
                <dd className="mt-3 text-[0.95rem] leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>

          <WhatsAppButton variant="ink" size="xl" label={c.cta} className="mt-12" />
        </Reveal>

        <Reveal className="lg:col-span-6" delay={120}>
          <div className="relative h-[420px] overflow-hidden bg-secondary lg:h-full lg:min-h-[560px]">
            <iframe
              title={c.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-muted absolute inset-0 h-full w-full border-0"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{c.mapNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
