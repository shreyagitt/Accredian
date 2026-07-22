import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;

  className?: string;

  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300",
        hover &&
          "hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}