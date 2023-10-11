import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const subTitleVariants = cva("font-medium", {
  variants: {
    variant: {
      h1: "text-2xl",
      h2: "text-xl",
      h3: "text-lg",
      h4: "text-md",
      h5: "text-base",
      h6: "text-base font-medium",
    },
    color: {
      black: "text-black",
      darker: "text-slate-600",
      dark: "text-slate-400",
      light: "text-slate-200",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "h1",
    color: "dark",
  },
});

export interface ISubTitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof subTitleVariants> {}

export default function SubTitle({
  className,
  variant,
  color,
  ...props
}: ISubTitleProps) {
  const Comp = variant ?? "h1";
  return (
    <Comp
      className={cn(subTitleVariants({ variant, color, className }))}
      {...props}
    />
  );
}
