import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export function HomeHero() {
  const { t, href, lang } = useLanguage();
  const img = IMAGES.hero;
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <img
        src={img.src}
        alt={img.alt[lang]}
        width={img.width}
        height={img.height}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div aria-hidden className="absolute inset-0 bg-hero-overlay" />

      <div className="container-luxe relative pb-20 pt-40 text-on-image md:pb-28">
        <p className="eyebrow flex animate-fade-up items-center gap-4">
          <span aria-hidden className="h-px w-10 bg-on-image/70" />
          {t.hero.eyebrow}
        </p>
        <h1 className="display-xl mt-7 max-w-5xl animate-fade-up [animation-delay:150ms]">
          {t.hero.titleLine1}
          <br />
          <em className="font-light italic">{t.hero.titleLine2}</em>
        </h1>
        <p className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-on-image-muted [animation-delay:300ms] md:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-11 flex animate-fade-up flex-col gap-4 [animation-delay:450ms] sm:flex-row">
          <Button asChild variant="cream" size="xl">
            <Link to={href("treatments")}>{t.hero.ctaTreatments}</Link>
          </Button>
          <WhatsAppButton variant="outlineCream" size="xl" label={t.hero.ctaBook} />
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden animate-fade-in flex-col items-center gap-4 text-on-image [animation-delay:900ms] lg:flex">
        <span className="eyebrow [writing-mode:vertical-rl]">{t.hero.location}</span>
        <span aria-hidden className="h-16 w-px bg-on-image/60" />
      </div>
    </section>
  );
}
