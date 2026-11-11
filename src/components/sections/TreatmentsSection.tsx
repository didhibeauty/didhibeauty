import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMAGES } from "@/config/images";
import { TREATMENTS, type Treatment } from "@/config/treatments";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

function TreatmentCard({
  treatment,
  index,
  headingLevel,
}: {
  treatment: Treatment;
  index: number;
  headingLevel: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const { t, lang } = useLanguage();
  const img = IMAGES[treatment.image];
  const name = treatment.name[lang];
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={img.src}
          alt={img.alt[lang]}
          width={img.width}
          height={img.height}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        <span className="eyebrow absolute left-5 top-5 bg-background/90 px-3 py-2 text-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-7">
        <Heading className="font-serif text-[1.85rem] leading-tight">{name}</Heading>
        <ul className="mt-4 divide-y divide-border border-y border-border text-sm">
          {treatment.options.map((o) => (
            <li key={`${o.durationMin ?? "session"}-${o.price}`} className="flex items-center justify-between py-3">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4" strokeWidth={1.25} aria-hidden />
                {o.durationMin ? `${o.durationMin} ${t.treatments.minutes}` : t.treatments.session}
              </span>
              <span className="font-serif text-xl">{t.treatments.price(o.price)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex-1 text-[0.95rem] text-muted-foreground">{treatment.description[lang]}</p>
        <WhatsAppButton
          treatment={name}
          label={t.treatments.book}
          ariaLabel={t.treatments.bookAria(name)}
          variant="outlineInk"
          size="md"
          className="mt-7 self-start"
        />
      </div>
    </article>
  );
}

export function TreatmentsSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const { t, href } = useLanguage();
  const items = featuredOnly ? TREATMENTS.filter((x) => x.featured) : TREATMENTS;

  return (
    <section className={cn("section-y", featuredOnly && "border-t border-border")}>
      <div className="container-luxe">
        {featuredOnly && (
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t.treatments.eyebrow} title={t.treatments.title} intro={t.treatments.intro} />
            <Button asChild variant="textLink" size="bare" className="self-start md:self-end">
              <Link to={href("treatments")}>{t.treatments.viewAll}</Link>
            </Button>
          </div>
        )}

        <div
          className={cn(
            "grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-x-10",
            featuredOnly ? "mt-16 md:mt-20 lg:grid-cols-3" : "lg:grid-cols-3",
          )}
        >
          {items.map((tr, i) => (
            <Reveal key={tr.id} delay={(i % 4) * 90}>
              <TreatmentCard
                treatment={tr}
                index={TREATMENTS.indexOf(tr)}
                // Under the page's H1 on the treatments page; under the section H2 on home.
                headingLevel={featuredOnly ? "h3" : "h2"}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-muted-foreground">{t.treatments.moreNote}</p>
          <WhatsAppButton variant="ink" size="md" label={t.contact.cta} />
        </div>
      </div>
    </section>
  );
}
