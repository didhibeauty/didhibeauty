import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Brand variants — uppercase, tracked, square-ish editorial buttons
        ink: "bg-ink text-cream hover:bg-olive-deep tracking-[0.18em] uppercase text-[0.72rem] font-semibold transition-colors duration-500",
        outlineInk:
          "border border-ink/80 text-ink bg-transparent hover:bg-ink hover:text-cream tracking-[0.18em] uppercase text-[0.72rem] font-semibold transition-colors duration-500",
        cream:
          "bg-cream text-ink hover:bg-sand tracking-[0.18em] uppercase text-[0.72rem] font-semibold transition-colors duration-500",
        outlineCream:
          "border border-on-image/70 text-on-image bg-transparent hover:bg-on-image hover:text-ink tracking-[0.18em] uppercase text-[0.72rem] font-semibold transition-colors duration-500",
        olive:
          "bg-olive-deep text-cream hover:bg-ink tracking-[0.18em] uppercase text-[0.72rem] font-semibold transition-colors duration-500",
        textLink:
          "h-auto px-0 text-ink tracking-[0.18em] uppercase text-[0.7rem] font-semibold border-b border-ink/40 rounded-none pb-1 hover:border-ink",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-14 px-8 md:px-10",
        md: "h-11 px-6",
        icon: "h-9 w-9",
        bare: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
