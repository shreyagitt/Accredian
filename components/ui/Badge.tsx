import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;

  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger";

  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary:
      "bg-blue-100 text-blue-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}