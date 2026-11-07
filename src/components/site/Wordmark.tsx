import { Link } from "@tanstack/react-router";

import { BRAND } from "@/config/brand";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function Wordmark({ className, onClick }: { className?: string; onClick?: () => void }) {
  const { href } = useLanguage();
  return (
    <Link
      to={href("home")}
      onClick={onClick}
      aria-label={BRAND.name}
      className={cn("flex flex-col items-start leading-none", className)}
    >
      <span className="font-serif text-[1.65rem] uppercase tracking-[0.24em] md:text-[1.85rem]">
        {BRAND.wordmark.primary}
      </span>
      <span className="mt-1 pl-[0.15em] text-[0.55rem] font-semibold uppercase tracking-[0.62em]">
        {BRAND.wordmark.secondary}
      </span>
    </Link>
  );
}
