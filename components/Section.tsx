import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { Sticker, type Fill } from "./Tile";

/** Bande de section : fond teinté, filet noir épais en haut. */
export default function Band({
  id,
  bg,
  className = "",
  children,
}: {
  id?: string;
  bg: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative border-t-2 border-encre ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">{children}</div>
    </section>
  );
}

/** Étiquette pivotée + titre massif. */
export function SectionHead({
  index,
  label,
  sticker = "acide",
  title,
  tilt = "-rotate-2",
}: {
  index: string;
  label: string;
  sticker?: Fill;
  title: ReactNode;
  tilt?: string;
}) {
  return (
    <RevealOnScroll>
      <header className="mb-12 md:mb-16">
        <Sticker fill={sticker} className={tilt}>
          <span className="opacity-60">{index}</span>
          {label}
        </Sticker>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.25rem,6.5vw,4.25rem)] leading-[0.9] font-black tracking-[-0.04em] uppercase">
          {title}
        </h2>
      </header>
    </RevealOnScroll>
  );
}
