import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSection({ full = false }: { full?: boolean }) {
  const { t, href, lang } = useLanguage();
  const e = t.experience;
  const ritual = IMAGES.ritual;
  const terrace = IMAGES.terrace;

  return (
    <>
      <section className="section-y bg-secondary">
        <div className="container-luxe">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              {full ? (
                <h2 className="display-lg">
                  {e.titleLine1}
                  <br />
                  <em className="font-light italic text-stone">{e.titleLine2}</em>
                </h2>
              ) : (
                <SectionHeading eyebrow={e.eyebrow} title={e.titleLine1} italic={e.titleLine2} />
              )}
              <p className="mt-8 max-w-lg text-base text-muted-foreground md:text-lg">{e.intro}</p>
              {!full && (
                <Button asChild variant="textLink" size="bare" className="mt-10">
                  <Link to={href("experience")}>{e.cta}</Link>
                </Button>
              )}
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={ritual.src}
                  alt={ritual.alt[lang]}
                  width={ritual.width}
                  height={ritual.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {full && (
            <ol className="mt-24 grid gap-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {e.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <li className="list-none">
                    <span className="font-serif text-5xl text-olive">0{i + 1}</span>
                    <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden">
        <img
          src={terrace.src}
          alt={terrace.alt[lang]}
          width={terrace.width}
          height={terrace.height}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-page-hero-overlay" />
        <Reveal className="container-luxe relative py-24 text-center text-on-image">
          <span aria-hidden className="mx-auto block h-12 w-px bg-on-image/60" />
          <blockquote className="display-lg mx-auto mt-8 max-w-4xl font-light italic">“{e.quote}”</blockquote>
        </Reveal>
      </section>
    </>
  );
}
