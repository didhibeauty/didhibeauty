import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  italic,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Optional second line set in italic */
  italic?: string | undefined;
  intro?: string | undefined;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p className={cn("eyebrow flex items-center gap-4 text-olive-deep", align === "center" && "justify-center")}>
        <span aria-hidden className="h-px w-10 bg-olive" />
        {eyebrow}
      </p>
      <Tag className={cn("mt-6", Tag === "h1" ? "display-xl" : "display-lg")}>
        {title}
        {italic && (
          <>
            <br />
            <em className="font-light italic text-stone">{italic}</em>
          </>
        )}
      </Tag>
      {intro && (
        <p className={cn("mt-6 max-w-xl text-base text-muted-foreground md:text-lg", align === "center" && "mx-auto")}>
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
