import { Star } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TESTIMONIALS, TESTIMONIALS_ARE_DEMO } from "@/config/testimonials";
import { useLanguage } from "@/i18n/LanguageContext";

export function TestimonialsSection() {
  const { t, lang } = useLanguage();
  const tt = t.testimonials;
  return (
    <section className="section-y border-t border-border">
      <div className="container-luxe">
        <SectionHeading eyebrow={tt.eyebrow} title={tt.title} align="center">
          {TESTIMONIALS_ARE_DEMO && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <span className="eyebrow border border-olive px-4 py-2 text-olive-deep">{tt.demoBadge}</span>
              <p className="max-w-md text-sm text-muted-foreground">{tt.demoNote}</p>
            </div>
          )}
        </SectionHeading>

        <ul className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <li className="flex h-full list-none flex-col bg-card p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-olive" role="img" aria-label={tt.rating(r.rating)}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4"
                        strokeWidth={1.25}
                        fill={s < r.rating ? "currentColor" : "none"}
                        aria-hidden
                      />
                    ))}
                  </div>
                  {TESTIMONIALS_ARE_DEMO && (
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Demo
                    </span>
                  )}
                </div>
                <blockquote className="mt-8 flex-1 font-serif text-xl italic leading-snug md:text-2xl">
                  “{r.text[lang]}”
                </blockquote>
                <p className="eyebrow mt-8 text-muted-foreground">{r.name}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
