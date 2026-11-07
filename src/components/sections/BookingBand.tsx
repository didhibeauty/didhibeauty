import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export function BookingBand() {
  const { t, lang } = useLanguage();
  const img = IMAGES.candles;
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={img.src}
        alt={img.alt[lang]}
        width={img.width}
        height={img.height}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div aria-hidden className="absolute inset-0 bg-page-hero-overlay" />
      <Reveal className="container-luxe relative py-28 text-center text-on-image md:py-36">
        <p className="eyebrow">{t.bookingBand.eyebrow}</p>
        <h2 className="display-lg mt-6 italic">{t.bookingBand.title}</h2>
        <p className="mx-auto mt-6 max-w-md text-on-image-muted">{t.bookingBand.text}</p>
        <WhatsAppButton variant="cream" size="xl" label={t.bookingBand.cta} className="mt-10" />
      </Reveal>
    </section>
  );
}
