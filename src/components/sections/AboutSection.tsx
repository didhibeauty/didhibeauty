import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutSection({ full = false }: { full?: boolean }) {
  const { t, href, lang } = useLanguage();
  const a = t.about;
  const img = IMAGES.about;

  return (
    <>
      <section className="section-y overflow-hidden">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-5">
            <div aria-hidden className="absolute -bottom-6 -right-6 h-2/3 w-2/3 bg-secondary" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt[lang]}
                width={img.width}
                height={img.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            {full ? (
              <h2 className="display-lg">{a.title}</h2>
            ) : (
              <SectionHeading eyebrow={a.eyebrow} title={a.title} />
            )}
            <p className="mt-8 font-serif text-2xl italic leading-snug text-stone md:text-[1.75rem]">
              {a.lead}
            </p>
            <div className="mt-6 space-y-5 text-muted-foreground">
              {a.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-olive-deep">{a.therapistLabel}</p>
                <p className="mt-3 font-serif text-2xl">{a.therapistName}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a.therapistBio}</p>
              </div>
              {full && (
                <div>
                  <p className="eyebrow text-olive-deep">{a.experienceLabel}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{a.experienceText}</p>
                </div>
              )}
            </div>

            {!full && (
              <Button asChild variant="textLink" size="bare" className="mt-10">
                <Link to={href("about")}>{a.cta}</Link>
              </Button>
            )}
          </Reveal>
        </div>
      </section>

      {full && (
        <section className="section-y bg-secondary">
          <div className="container-luxe">
            <SectionHeading eyebrow={a.philosophyEyebrow} title={a.philosophyTitle} />
            <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
              {a.pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="bg-secondary p-8 lg:p-10">
                  <span className="font-serif text-4xl text-olive">0{i + 1}</span>
                  <h3 className="mt-8 font-serif text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
