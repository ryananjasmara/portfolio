export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  descriptions: string[];
}

export type EducationItem = TimelineEntry;
export type ExperienceItem = TimelineEntry;

export type ProjectType = "web" | "mobile";

export interface ProjectItem {
  title: string;
  type: ProjectType;
  image: string;
  link: string;
}

export interface TechStackItem {
  name: string;
  slug: string;
}

export interface TechStackGroup {
  category: string;
  items: TechStackItem[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface NavItem {
  id: string;
  label: string;
}
