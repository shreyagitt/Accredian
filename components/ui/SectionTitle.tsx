import Badge from "./Badge";

interface Props {
  badge?: string;

  title: string;

  subtitle?: string;

  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}