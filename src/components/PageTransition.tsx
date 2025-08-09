"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Don't run the animation on initial load
    if (displayChildren === children) return;

    // Start the exit animation
    setIsTransitioning(true);

    // After exit animation completes, update the children and start entrance animation
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300); // This should match the CSS transition duration

    return () => clearTimeout(timer);
  }, [children, displayChildren]);

  // When pathname changes, trigger the transition
  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`page-transition ${isTransitioning ? "transitioning" : ""}`}
    >
      {displayChildren}
    </div>
  );
}
