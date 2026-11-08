/**
 * Page compositions shared by the Spanish and English routes.
 * Each route file only chooses the language and SEO metadata.
 */
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingBand } from "@/components/sections/BookingBand";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HomeHero } from "@/components/sections/HomeHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { PageHero } from "@/components/site/PageHero";
import { SiteLayout } from "@/components/site/SiteLayout";
import type { Lang } from "@/i18n/routes";
import { translations } from "@/i18n/translations";

type P = { lang: Lang };

export function HomePage({ lang }: P) {
  return (
    <SiteLayout lang={lang} page="home" overlayHeader>
      <HomeHero />
      <AboutSection />
      <SpaceSection />
      <TreatmentsSection featuredOnly />
      <ExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </SiteLayout>
  );
}

export function AboutPage({ lang }: P) {
  const t = translations[lang];
  return (
    <SiteLayout lang={lang} page="about">
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.lead} image="spaceRoom" />
      <AboutSection full />
      <SpaceSection />
      <BookingBand />
    </SiteLayout>
  );
}

export function TreatmentsPage({ lang }: P) {
  const t = translations[lang];
  return (
    <SiteLayout lang={lang} page="treatments">
      <PageHero
        eyebrow={t.treatments.eyebrow}
        title={t.treatments.title}
        intro={t.treatments.intro}
        image="hotStone"
      />
      <TreatmentsSection />
      <BookingBand />
    </SiteLayout>
  );
}

export function ExperiencePage({ lang }: P) {
  const t = translations[lang];
  return (
    <SiteLayout lang={lang} page="experience">
      <PageHero
        eyebrow={t.experience.eyebrow}
        title={t.experience.titleLine1}
        italic={t.experience.titleLine2}
        image="aromatherapy"
      />
      <ExperienceSection full />
      <GallerySection />
      <TestimonialsSection />
      <BookingBand />
    </SiteLayout>
  );
}

export function ContactPage({ lang }: P) {
  const t = translations[lang];
  return (
    <SiteLayout lang={lang} page="contact">
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} image="spaceStorefront" />
      <ContactSection showHeading={false} />
    </SiteLayout>
  );
}

export function LegalPage({ lang, kind }: P & { kind: "privacy" | "cookies" }) {
  return (
    <SiteLayout lang={lang} page={kind}>
      <LegalContent kind={kind} />
    </SiteLayout>
  );
}
