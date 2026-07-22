"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "gradient";

  size?: "sm" | "md" | "lg";

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-300",

      secondary:
        "bg-slate-900 text-white hover:bg-slate-800",

      outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-50",

      ghost:
        "text-slate-700 hover:bg-slate-100",

      gradient:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:opacity-90 shadow-lg hover:shadow-cyan-300",
    };

    const sizes = {
      sm: "h-10 px-4 text-sm",

      md: "h-12 px-6",

      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-60",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="mr-2">
                {leftIcon}
              </span>
            )}

            {children}

            {rightIcon && (
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;