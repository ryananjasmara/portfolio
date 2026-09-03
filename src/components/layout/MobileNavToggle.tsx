"use client";

import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

interface MobileNavToggleProps {
  activeId: string;
}

const closeMenu = () => {
  const checkbox = document.getElementById("nav-toggle") as HTMLInputElement | null;
  if (checkbox) checkbox.checked = false;
};

export default function MobileNavToggle({ activeId }: MobileNavToggleProps) {
  return (
    <div className="relative md:hidden">
      <input type="checkbox" id="nav-toggle" className="peer sr-only" />

      <label
        htmlFor="nav-toggle"
        aria-label="Open navigation menu"
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-foreground peer-checked:hidden"
      >
        <Menu className="h-5 w-5" />
      </label>

      <label
        htmlFor="nav-toggle"
        aria-label="Close navigation menu"
        className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-accent text-accent peer-checked:flex"
      >
        <X className="h-5 w-5" />
      </label>

      <nav className="absolute inset-x-0 top-full hidden flex-col gap-1 border-b border-border bg-surface px-4 py-3 peer-checked:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeId === item.id
                ? "bg-surface-hover text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
