import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = VariantProps<typeof buttonVariants> & {
  /** Treatment name to include in the booking message */
  treatment?: string;
  label?: string;
  ariaLabel?: string;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

/** Reusable booking button: opens WhatsApp in a new tab with a pre-filled message. */
export function WhatsAppButton({
  treatment,
  label,
  ariaLabel,
  showIcon = true,
  variant = "ink",
  size = "md",
  className,
  onClick,
}: Props) {
  const { lang, t } = useLanguage();
  return (
    <a
      href={buildWhatsAppUrl(lang, treatment)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-booking={treatment ?? "general"}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {showIcon && <WhatsAppIcon className="size-4" />}
      <span>{label ?? t.nav.book}</span>
    </a>
  );
}
