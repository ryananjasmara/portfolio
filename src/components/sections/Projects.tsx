"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectType } from "@/types/content";

type Filter = ProjectType | "all";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Mobile Application", value: "mobile" },
  { label: "Web Development", value: "web" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Work" title="Projects" icon={FolderGit2} />

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
