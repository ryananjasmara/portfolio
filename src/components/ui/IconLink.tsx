import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";
import type { ContactLink } from "@/types/content";

const icons: Record<ContactLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

interface IconLinkProps {
  link: ContactLink;
  size?: "sm" | "md";
}

export default function IconLink({ link, size = "md" }: IconLinkProps) {
  const Icon = icons[link.icon];
  const isExternal = link.href.startsWith("http");
  const dimensions = size === "md" ? "h-12 w-12" : "h-10 w-10";
  const iconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <a
      href={link.href}
      aria-label={link.label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`flex ${dimensions} items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
    >
      <Icon className={iconSize} />
    </a>
  );
}
