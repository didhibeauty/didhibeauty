import { WHATSAPP_NUMBER } from "@/config/business";
import type { Lang } from "@/i18n/routes";
import { translations } from "@/i18n/translations";

/** Booking message in the visitor's language, optionally naming a treatment. */
export function buildWhatsAppMessage(lang: Lang, treatment?: string): string {
  const t = translations[lang].whatsapp;
  return treatment ? t.treatment(treatment) : t.generic;
}

/** wa.me link that opens WhatsApp with the booking message pre-filled. */
export function buildWhatsAppUrl(
  lang: Lang,
  treatment?: string,
  number: string = WHATSAPP_NUMBER,
): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(buildWhatsAppMessage(lang, treatment))}`;
}
