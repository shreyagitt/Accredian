"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <textarea
        ref={ref}
        rows={5}
        className={cn(
          "w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all",
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
});

Textarea.displayName = "Textarea";

export default Textarea;