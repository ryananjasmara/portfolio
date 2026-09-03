import type { TechStackGroup } from "@/types/content";

export const techStack: TechStackGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "PHP", slug: "php" },
      { name: "Python", slug: "python" },
      { name: "Golang", slug: "go" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Vue.js", slug: "vuejs" },
      { name: "Refine.js", slug: "refinejs" },
      { name: "CodeIgniter", slug: "codeigniter" },
      { name: "Laravel", slug: "laravel" },
      { name: "Redux", slug: "redux" },
      { name: "React Query", slug: "reactquery" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Jest", slug: "jest" },
    ],
  },
  {
    category: "Backend & Messaging",
    items: [
      { name: "Nest.js", slug: "nestjs" },
      { name: "Kafka", slug: "kafka" },
      { name: "RabbitMQ", slug: "rabbitmq" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    category: "Monitoring & Analytics",
    items: [
      { name: "Sentry", slug: "sentry" },
      { name: "MoEngage", slug: "moengage" },
      { name: "Firebase", slug: "firebase" },
    ],
  },
  {
    category: "Tooling & Infrastructure",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "aws" },
      { name: "Google Cloud Platform", slug: "gcp" },
    ],
  },
];
