import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";

export function LegalContent({ kind }: { kind: "privacy" | "cookies" }) {
  const { t } = useLanguage();
  const doc = t.legal[kind];
  return (
    <section className="pb-24 pt-48 md:pb-32 md:pt-52 lg:pt-44">
      <div className="container-luxe max-w-3xl">
        <SectionHeading as="h1" eyebrow={doc.eyebrow} title={doc.title} />
        <div className="mt-14 space-y-12">
          {doc.sections.map((s) => (
            <div key={s.title}>
              <h2 className="display-md">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xs text-muted-foreground">{t.legal.updated}</p>
      </div>
    </section>
  );
}
