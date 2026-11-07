import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GALLERY, IMAGES } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const SIZE_CLASS = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
} as const;

export function GallerySection() {
  const { t, lang } = useLanguage();
  return (
    <section className="section-y">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} align="center" />
        <Reveal className="mt-16 md:mt-20">
          <ul className="grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4 lg:auto-rows-[260px]">
            {GALLERY.map(({ image, size }) => {
              const img = IMAGES[image];
              return (
                <li key={image} className={cn("group overflow-hidden bg-secondary", SIZE_CLASS[size])}>
                  <img
                    src={img.src}
                    alt={img.alt[lang]}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="img-zoom h-full w-full object-cover"
                  />
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
