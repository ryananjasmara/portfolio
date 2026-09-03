"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectItem } from "@/types/content";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      layout
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-3 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/images/portfolio/${project.image}`}
          alt={project.title}
          width={400}
          height={160}
          quality={100}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-foreground">{project.title}</h3>
        <p className="text-sm capitalize text-muted">{project.type}</p>
      </div>
    </motion.a>
  );
}
