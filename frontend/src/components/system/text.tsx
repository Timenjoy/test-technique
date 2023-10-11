import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("font-regular cursor-default", {
  variants: {
    variant: {
      h1: "text-xl",
      h2: "text-lg",
      h3: "text-md",
      h4: "text-base",
      h5: "text-sm",
      h6: "text-xs",
    },
    color: {
      dark: "text-slate-800",
      light: "text-white",
      error: "text-red-500",
    },
  },
  defaultVariants: {
    variant: "h4",
    color: "dark",
  },
});
export interface ITextProps
  extends Omit<
      React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement | HTMLPreElement | HTMLUListElement>,
      "color"
    >,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "pre" | "ul";
}

export default function Text({
  className,
  variant,
  color,
  as = "p",
  ...props
}: ITextProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(textVariants({ variant, color, className }))}
      {...props}
    />
  );
}
