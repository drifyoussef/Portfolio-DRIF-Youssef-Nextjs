"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Variant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";

const base: Record<Variant, string> = {
  fadeUp:    "opacity-0 translate-y-10",
  fadeIn:    "opacity-0",
  fadeLeft:  "opacity-0 -translate-x-10",
  fadeRight: "opacity-0 translate-x-10",
};

const visible: Record<Variant, string> = {
  fadeUp:    "opacity-100 translate-y-0",
  fadeIn:    "opacity-100",
  fadeLeft:  "opacity-100 translate-x-0",
  fadeRight: "opacity-100 translate-x-0",
};

export default function RevealOnScroll({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 600,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${base[variant]} ${isInView ? visible[variant] : ""} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
