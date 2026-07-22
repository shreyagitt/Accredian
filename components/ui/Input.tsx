"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
        </label>

        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all",
            "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;