"use client";

import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";

const GitHubIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Disponible pour des missions
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up"
            style={{ animationDelay: "350ms" }}
          >
            Youssef <span className="gradient-text">DRIF</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-400 font-light mb-3 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            Développeur Full Stack
          </p>

          <p
            className="text-gray-500 max-w-lg mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "620ms" }}
          >
            Spécialisé en développement web et mobile, gestion de projet et
            cybersécurité. Engagé à livrer des solutions fiables, performantes
            et sécurisées.
          </p>

          <div
            className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up"
            style={{ animationDelay: "740ms" }}
          >
            <a
              href="#experience"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-[#1e1e2e] hover:border-indigo-500/50 text-gray-300 hover:text-white font-medium transition-all duration-200"
            >
              Me contacter
            </a>
          </div>

          <div
            className="flex items-center gap-4 mt-8 justify-center md:justify-start animate-fade-in-up"
            style={{ animationDelay: "860ms" }}
          >
            <a
              href="https://github.com/drifyoussef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/youssefdrif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:youssef.drif1@outlook.com"
              className="text-gray-500 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className="flex-shrink-0 animate-fade-in animate-float"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
            </div>
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#12121a]">
              <Image
                src="/portrait.jpg"
                alt="Youssef DRIF"
                fill
                className="object-cover scale-[1.6] object-[50%_18%]"
                priority
                onError={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce animate-fade-in"
        style={{ animationDelay: "1200ms" }}
      >
        <span>Défiler</span>
        <ChevronDown size={16} strokeWidth={2} />
      </div>
    </section>
  );
}
