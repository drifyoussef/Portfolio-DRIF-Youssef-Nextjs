"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Expériences", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 animate-fade-in-down">
      <div
        className={`rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border border-[#1e1e2e] shadow-lg shadow-black/30"
            : "bg-[#0a0a0f]/40 backdrop-blur-md border border-white/5"
        }`}
      >
        <div className="px-5 py-3.5 flex items-center justify-between">
          <a href="#hero" className="text-lg font-bold gradient-text">
            YD
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            Me contacter
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-5 py-4">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
