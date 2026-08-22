import type { ReactNode } from "react";

/** Fonds disponibles, avec la couleur de texte qui passe le contraste AA. */
export const fills = {
  creme: "bg-creme text-encre",
  blanc: "bg-white text-encre",
  flame: "bg-flame text-encre",
  azur: "bg-azur text-white",
  acide: "bg-acide text-encre",
  mauve: "bg-mauve text-encre",
  soleil: "bg-soleil text-encre",
  encre: "bg-encre text-creme",
  flamePale: "bg-flame-pale text-encre",
  azurPale: "bg-azur-pale text-encre",
  acidePale: "bg-acide-pale text-encre",
  mauvePale: "bg-mauve-pale text-encre",
  soleilPale: "bg-soleil-pale text-encre",
} as const;

export type Fill = keyof typeof fills;

/** Tuile : bordure épaisse + ombre dure décalée. */
export default function Tile({
  fill = "creme",
  className = "",
  children,
}: {
  fill?: Fill;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-encre shadow-[5px_5px_0_0_var(--encre)] ${fills[fill]} ${className}`}
    >
      {children}
    </div>
  );
}

/** Pastille pivotée servant d'étiquette de section. */
export function Sticker({
  fill = "acide",
  className = "",
  children,
}: {
  fill?: Fill;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 rounded-full border-2 border-encre px-4 py-1.5 shadow-[3px_3px_0_0_var(--encre)] ${fills[fill]} ${className}`}
    >
      {children}
    </span>
  );
}
