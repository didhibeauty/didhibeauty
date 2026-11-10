import { IMAGES, type ImageKey } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeading } from "./SectionHeading";

/** Editorial split hero for inner pages: title on cream, photo on the right. */
export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string | undefined;
  intro?: string | undefined;
  image: ImageKey;
}) {
  const { lang } = useLanguage();
  const img = IMAGES[image];
  return (
    <section className="pt-44 md:pt-48 lg:pt-36">
      <div className="container-luxe grid items-end gap-12 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-16">
        <div className="animate-fade-up lg:col-span-7">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} italic={italic} intro={intro} />
        </div>
        <div className="relative animate-fade-in lg:col-span-5">
          <div aria-hidden className="absolute -bottom-5 -left-5 hidden h-3/4 w-3/4 bg-secondary md:block" />
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
            <img
              src={img.src}
              alt={img.alt[lang]}
              width={img.width}
              height={img.height}
              fetchPriority="high"
              className="h-full w-full object-cover animate-slow-zoom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
