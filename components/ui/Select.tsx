"use client";

import { cn } from "@/lib/utils";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
}

export default function Select({
  label,
  options,
  error,
  className,
  ...props
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <select
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all",
          "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-100",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}