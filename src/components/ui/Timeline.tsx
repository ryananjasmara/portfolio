import type { TimelineEntry } from "@/types/content";

interface TimelineProps {
  items: TimelineEntry[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative flex flex-col gap-8 pl-6">
      {items.map((item, index) => (
        <div
          key={item.title + item.period}
          className={`relative before:absolute before:left-[-24px] before:top-[9px] before:h-3 before:w-3 before:-translate-x-[0.5px] before:rounded-full before:border-2 before:border-accent before:bg-background ${
            index !== items.length - 1
              ? "after:absolute after:left-[-22px] after:top-[20px] after:h-[calc(100%+20px)] after:w-px after:-translate-x-[-3px] after:bg-border"
              : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-base font-medium text-foreground/90">
            {item.subtitle}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>{item.period}</span>
            {item.location && (
              <>
                <span aria-hidden>•</span>
                <span>{item.location}</span>
              </>
            )}
          </div>
          <ul className="mt-2 list-disc pl-4 text-sm">
            {item.descriptions.map((description) => (
              <li key={description} className="mt-1 text-muted">
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
