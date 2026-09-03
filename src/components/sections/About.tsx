import { AppWindow, Smartphone, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const expertise = [
  {
    title: "Mobile Application",
    description:
      "Designing, developing, and optimizing high-performance mobile applications for Android and iOS.",
    icon: Smartphone,
  },
  {
    title: "Web Development",
    description:
      "Designing, building, and maintaining responsive, high-performance websites and web applications using modern technologies.",
    icon: AppWindow,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Introduction" title="About Me" icon={User} />

      <div className="flex flex-col gap-4 text-muted">
        <p>
          Hi, my name is Ryan Anjasmara. I&apos;m a passionate Software
          Engineer with a strong eagerness to learn and adapt. With expertise
          in front-end and mobile development, I specialize in React Native,
          ReactJS and Next.js. I have experience building scalable web and
          mobile applications, integrating APIs, and optimizing performance.
          Beyond coding, I enjoy exploring new technologies, mentoring, and
          continuously improving my skills.
        </p>
        <p>
          If you&apos;re interested in collaborating or have any questions,
          feel free to reach out. I&apos;m always open to new ideas and
          partnerships. Let&apos;s connect and create something great
          together!
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {expertise.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5"
          >
            <Icon className="h-8 w-8 shrink-0 text-accent" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
