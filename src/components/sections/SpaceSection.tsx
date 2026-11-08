import { MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BUSINESS } from "@/config/business";
import { IMAGES, type ImageKey } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

function Photo({ image, className }: { image: ImageKey; className?: string }) {
  const { lang } = useLanguage();
  const img = IMAGES[image];
  return (
    <div className={cn("group overflow-hidden bg-secondary", className)}>
      <img
        src={img.src}
        alt={img.alt[lang]}
        width={img.width}
        height={img.height}
        loading="lazy"
        decoding="async"
        className="img-zoom h-full w-full object-cover"
      />
    </div>
  );
}

/** Real photos of the Didhi Beauty space in Puerto Banús. */
export function SpaceSection() {
  const { t } = useLanguage();
  const a = BUSINESS.address;
  return (
    <section className="section-y bg-secondary">
      <div className="container-luxe">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t.space.eyebrow} title={t.space.title} intro={t.space.intro} />
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <p className="flex items-start gap-2 text-sm text-muted-foreground md:justify-end">
              <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.25} aria-hidden />
              <span>
                {a.street}
                <br />
                {a.area}, {a.locality}
              </span>
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outlineInk", size: "md" }), "self-start md:self-end")}
            >
              {t.space.cta}
            </a>
          </div>
        </div>

        <Reveal className="mt-14 grid gap-3 md:mt-20 md:grid-cols-12 md:gap-4">
          <Photo image="spaceStorefront" className="aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto" />
          <Photo image="spaceRoom" className="aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto md:min-h-[560px]" />
          <Photo image="spaceReception" className="aspect-[4/3] md:col-span-6" />
          <Photo image="spaceLounge" className="aspect-[4/3] md:col-span-6" />
        </Reveal>
      </div>
    </section>
  );
}
