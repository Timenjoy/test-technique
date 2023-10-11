import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleVariants = cva("font-semibold", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
    color: {
      dark: "text-slate-800",
      light: "text-white",
    },
  },
  defaultVariants: {
    variant: "h1",
    color: "dark",
  },
} as const);

export interface ITitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
  VariantProps<typeof titleVariants> { }

export default function Title({
  className,
  variant,
  color,
  ...props
}: ITitleProps) {
  const Comp = variant ?? "h1";
  return (
    <Comp
      className={cn(titleVariants({ variant, color }), className)}
      {...props}
    />
  );
}
