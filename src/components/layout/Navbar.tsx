"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { navItems, site } from "@/data/site";
import MobileNavToggle from "./MobileNavToggle";

const observedIds = ["hero", ...navItems.map((item) => item.id)];

export default function Navbar() {
  const activeId = useActiveSection(observedIds);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-sm font-semibold text-foreground">
          {site.name}
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeId === item.id && (
                    <span className="absolute inset-x-0 -bottom-[1px] h-px bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavToggle activeId={activeId} />
      </div>
    </header>
  );
}
