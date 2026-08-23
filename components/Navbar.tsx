"use client";

import { useEffect, useState } from "react";

/** Hauteur de la barre fixe, en px. */
const HEADER_HEIGHT = 72;

const links = [
  { label: "À propos", href: "#about", hover: "hover:bg-flame" },
  { label: "Projets", href: "#projects", hover: "hover:bg-azur hover:text-white" },
  { label: "Expériences", href: "#experience", hover: "hover:bg-soleil" },
  { label: "Formation", href: "#education", hover: "hover:bg-mauve" },
  { label: "Compétences", href: "#skills", hover: "hover:bg-acide" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Le CTA n'apparaît dans la nav qu'au moment où celui du hero sort de vue :
  // il y en a toujours exactement un de visible, jamais deux, jamais zéro.
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");

    const update = () => {
      setScrolled(window.scrollY > 24);
      // Relais quand le bas du bouton du hero passe sous la barre fixe.
      // Sans repère (hero absent), on affiche : mieux vaut un CTA de trop.
      const bottom = heroCta?.getBoundingClientRect().bottom ?? 0;
      setShowCta(bottom <= HEADER_HEIGHT);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b-2 border-encre bg-creme/95 backdrop-blur p-2" : "border-b-2 border-transparent p-2"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <a
          href="#top"
          className="text-base font-black tracking-[-0.03em] uppercase"
        >
          Youssef Drif
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rounded-full border-2 border-transparent px-3.5 py-1.5 text-sm font-bold transition-colors hover:border-encre ${l.hover}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {/* Le padding réserve la place de l'ombre portée, que overflow-hidden
                couperait sinon ; la marge négative annule son effet sur la hauteur. */}
            <li
              inert={!showCta}
              className={`-mb-1 overflow-hidden pr-1 pb-1 transition-[max-width,opacity,transform,margin-left] duration-300 ease-out ${
                showCta
                  ? "ml-2 max-w-[14rem] translate-y-0 opacity-100"
                  : "ml-0 max-w-0 -translate-y-1 opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="inline-block rounded-full border-2 border-encre bg-flame px-5 py-2 text-sm font-bold whitespace-nowrap shadow-[4px_4px_0_0_var(--encre)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--encre)]"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="eyebrow rounded-full border-2 border-encre px-4 py-2 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav id="menu-mobile" className="border-t-2 border-encre bg-creme lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-6">
            {[...links, { label: "Contact", href: "#contact", hover: "" }].map((l) => (
              <li key={l.href} className="border-b-2 border-dotted border-encre/25 last:border-0">
                <a
                  href={l.href}
                  className="block py-3.5 font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
