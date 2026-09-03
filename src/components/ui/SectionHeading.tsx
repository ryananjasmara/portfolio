import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}

export default function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
        <Icon className="h-6 w-6 text-muted" />
      </div>
      <div className="h-px w-16 bg-accent" />
    </div>
  );
}
