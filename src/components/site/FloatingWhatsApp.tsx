import { useLanguage } from "@/i18n/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const { lang, t } = useLanguage();
  return (
    <a
      href={buildWhatsAppUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floating}
      data-booking="floating"
      className="group fixed bottom-5 right-5 z-30 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-olive-deep pl-4 pr-4 text-cream shadow-soft transition-all duration-500 hover:bg-ink md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="eyebrow max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:max-w-56 group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-56 group-focus-visible:opacity-100">
        {t.whatsapp.floating}
      </span>
    </a>
  );
}
