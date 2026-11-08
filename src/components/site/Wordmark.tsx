import { Link } from "@tanstack/react-router";

import { BRAND } from "@/config/brand";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

/** Logo symbol + brand name, linking home. */
export function Wordmark({ className, onClick }: { className?: string; onClick?: () => void }) {
  const { href } = useLanguage();
  return (
    <Link
      to={href("home")}
      onClick={onClick}
      aria-label={BRAND.name}
      className={cn("flex items-center gap-3 leading-none", className)}
    >
      <img src={BRAND.logo.mark} alt="" width={144} height={160} className="h-11 w-auto md:h-12" />
      <span className="flex flex-col items-start">
        <span className="font-serif text-[1.45rem] uppercase tracking-[0.2em] md:text-[1.6rem]">
          {BRAND.wordmark.primary}
        </span>
        <span className="mt-1 pl-[0.1em] text-[0.55rem] font-semibold uppercase tracking-[0.55em]">
          {BRAND.wordmark.secondary}
        </span>
      </span>
    </Link>
  );
}
