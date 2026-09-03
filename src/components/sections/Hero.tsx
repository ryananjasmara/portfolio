"use client";

import { motion } from "framer-motion";
import { Download, FolderGit2 } from "lucide-react";
import { contactLinks } from "@/data/contact";
import { site } from "@/data/site";
import IconLink from "@/components/ui/IconLink";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/2 h-[32rem] w-[32rem] translate-x-1/2 rounded-full bg-accent/10 blur-3xl md:right-0 md:translate-x-1/4"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:px-6">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-sm font-medium uppercase tracking-widest text-accent"
        >
          {site.role}
        </motion.span>

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl text-base text-muted sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </a>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <div className="flex items-center gap-3 pl-2">
            {contactLinks.map((link) => (
              <IconLink key={link.label} link={link} size="sm" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
