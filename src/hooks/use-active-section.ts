"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids currently sits in the vertical
 * center band of the viewport, so a sticky nav can highlight it.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const topMatch = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (topMatch) {
          setActiveId(topMatch.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
