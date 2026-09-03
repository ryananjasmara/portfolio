import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import { educations, experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Career"
        title="Experience & Education"
        icon={Briefcase}
      />

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">
            Work Experience
          </h3>
          <Timeline items={experiences} />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
          <Timeline items={educations} />
        </div>
      </div>
    </section>
  );
}
