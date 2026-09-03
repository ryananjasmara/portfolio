import { Rocket } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { techStack } from "@/data/tech-stack";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Toolbox" title="Tech Stack" icon={Rocket} />

      <div className="flex flex-col gap-8">
        {techStack.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-accent/60"
                >
                  <Image
                    src={`/svgs/tech-stacks/${item.slug}.svg`}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm text-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
