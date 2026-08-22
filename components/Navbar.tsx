"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b-2 border-encre bg-creme/95 backdrop-blur" : "border-b-2 border-transparent"
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
            <li className="ml-2">
              <a
                href="#contact"
                className="rounded-full border-2 border-encre bg-encre px-5 py-2 text-sm font-bold text-creme shadow-[3px_3px_0_0_var(--flame)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--flame)]"
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
