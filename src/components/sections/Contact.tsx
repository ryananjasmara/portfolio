import { Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IconLink from "@/components/ui/IconLink";
import { contactLinks } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Get in Touch" title="Contact" icon={Mail} />

      <p className="max-w-lg text-muted">
        I&apos;m always open to new ideas and partnerships. Reach out through
        any of the channels below and let&apos;s connect.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {contactLinks.map((link) => (
          <IconLink key={link.label} link={link} />
        ))}
      </div>
    </section>
  );
}
