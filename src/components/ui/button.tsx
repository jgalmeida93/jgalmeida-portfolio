import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const baseClasses = clsx(
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-white text-zinc-950 hover:bg-zinc-100": variant === "primary",
        "bg-zinc-900 text-white hover:bg-zinc-800": variant === "secondary",
        "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800":
          variant === "outline",
        "text-zinc-300 hover:text-white hover:bg-zinc-800": variant === "ghost",
      },
      {
        "h-8 px-3 text-sm": size === "sm",
        "h-10 px-4": size === "md",
        "h-12 px-6 text-lg": size === "lg",
      },
      className
    );

    if (asChild) {
      return (
        <span className={baseClasses} {...(props as any)} ref={ref as any} />
      );
    }

    return <button className={baseClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
