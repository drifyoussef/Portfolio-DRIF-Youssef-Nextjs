import { ShieldCheck, Code2, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const education: {
  degree: string;
  level: string;
  school: string;
  location: string;
  period: string;
  highlights: string[];
  Icon: LucideIcon;
}[] = [
  {
    degree: "Expert en système d'information et sécurité",
    level: "BAC+5",
    school: "Cloud Campus",
    location: "Les Sables d'Olonne",
    period: "2025 — 2026",
    highlights: [
      "Introduction de la gestion de projet et méthodes agiles",
      "Apprentissage de différentes méthodes de gestion d'entreprise",
      "Mise en place des outils pour sécuriser un projet (cybersécurité avancée)",
    ],
    Icon: ShieldCheck,
  },
  {
    degree: "Développeur Web Full Stack",
    level: "BAC+4",
    school: "Cloud Campus",
    location: "Les Sables d'Olonne",
    period: "2023 — 2025",
    highlights: [
      "Développement backend approfondi et différents frameworks",
      "Découverte de Node.JS et déploiement d'applications",
      "Projet de fin d'études : site de rencontres amicales en React.js et Node.js",
    ],
    Icon: Code2,
  },
  {
    degree: "Licence Pro Informatique & Certificat Analyste en Cybersécurité",
    level: "BAC+3",
    school: "Campus Digit'Alès",
    location: "Alès",
    period: "2021 — 2022",
    highlights: [
      "Formation orientée cybersécurité",
      "Compétences en analyse des menaces et vulnérabilités",
      "Développement frontend en ReactJS et tests unitaires",
    ],
    Icon: Lock,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">
              Formation
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Parcours <span className="gradient-text">académique</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <RevealOnScroll key={i} delay={i * 150}>
              <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-7 card-hover flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5">
                  <edu.Icon size={20} strokeWidth={1.5} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400">
                    {edu.level}
                  </span>
                  <span className="text-xs font-mono text-gray-600">{edu.period}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
                <div className="text-sm text-indigo-400 mb-1">{edu.school}</div>
                <div className="text-xs text-gray-600 mb-5">{edu.location}</div>

                <ul className="space-y-2 mt-auto">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
