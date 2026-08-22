import Band, { SectionHead } from "./Section";
import RevealOnScroll from "./RevealOnScroll";
import Tile, { Sticker, fills, type Fill } from "./Tile";

const experiences: {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  accent: Fill; // bandeau, puces
  chip: string; // fond des étiquettes de stack
  sticker: Fill; // pastille du nom d'entreprise
  dot: string;
  tilt: string;
  tasks: string[];
  stack: string[];
}[] = [
  {
    title: "Développeur full stack",
    company: "YD Development",
    location: "Les Sables-d'Olonne · Remote",
    period: "2025 — 2026",
    current: true,
    accent: "mauve",
    chip: "bg-mauve-pale",
    sticker: "acide",
    dot: "bg-mauve",
    tilt: "md:rotate-1",
    tasks: [
      "Création d'applications web et mobiles en React, Next.js, Node.js et Ionic",
      "Projets menés en freelance, du cadrage à la mise en production",
      "Applications pensées pour être performantes et scalables",
    ],
    stack: ["React", "Next.js", "Node.js", "Ionic", "Freelance"],
  },
  {
    title: "Développeur full stack & chef de projet",
    company: "Beinstore",
    location: "Les Sables-d'Olonne",
    period: "2023 — 2025",
    accent: "flame",
    chip: "bg-flame-pale",
    sticker: "soleil",
    dot: "bg-flame",
    tilt: "md:-rotate-1",
    tasks: [
      "Applications mobiles hybrides en Ionic Capacitor et Angular",
      "Coordination, planification et suivi des projets : délais, budgets, qualité",
      "Mise en place d'outils et de processus de cybersécurité",
      "Livraisons pour le CESER et Réseau Entreprendre",
    ],
    stack: ["Ionic Capacitor", "Angular", "TypeScript", "Cybersécurité", "Gestion de projet"],
  },
  {
    title: "Développeur frontend",
    company: "DIS Transics",
    location: "Alès",
    period: "2021 — 2022",
    accent: "azur",
    chip: "bg-azur-pale",
    sticker: "acide",
    dot: "bg-azur",
    tilt: "md:rotate-1",
    tasks: [
      "Applications web en ReactJS pour le secteur du transport",
      "Écriture des tests unitaires avec Jest",
      "Travail en équipe sur des projets en production",
    ],
    stack: ["ReactJS", "JavaScript", "Jest"],
  },
];

export default function Experience() {
  return (
    <Band id="experience" bg="bg-creme">
      <SectionHead
        index="03"
        label="Expériences"
        sticker="azur"
        title={
          <>
            Trois boîtes,{" "}
            <span className="pop lowercase">quatre ans</span> de terrain
          </>
        }
      />

      <div className="space-y-10 md:space-y-14">
        {experiences.map((exp, i) => (
          <RevealOnScroll key={exp.company} delay={i * 100}>
            <Tile
              fill="blanc"
              className={`overflow-hidden shadow-[8px_8px_0_0_var(--encre)] transition-transform duration-300 hover:rotate-0 ${exp.tilt}`}
            >
              {/* Bandeau de couleur */}
              <div
                className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b-2 border-encre px-6 py-3.5 md:px-9 ${
                  fills[exp.accent]
                }`}
              >
                <span className="eyebrow flex items-center gap-2.5 text-sm">
                  {exp.current && (
                    <span className="relative flex h-2 w-2">
                      <span className="dot-ping absolute inline-flex h-full w-full rounded-full bg-encre" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-encre" />
                    </span>
                  )}
                  {exp.period}
                </span>
                <span className="eyebrow">{exp.location}</span>
              </div>

              <div className="p-6 md:p-9">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="text-[3.5rem] leading-none font-black tracking-[-0.05em] opacity-15">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="max-w-xl text-2xl leading-tight font-black tracking-[-0.03em] md:text-3xl">
                      {exp.title}
                    </h3>
                    <p className="mt-2">
                      <Sticker fill={exp.sticker}>{exp.company}</Sticker>
                    </p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex gap-3 leading-relaxed">
                      <span
                        aria-hidden
                        className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-encre ${exp.dot}`}
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <li
                      key={tech}
                      className={`rounded-full border-2 border-encre px-3.5 py-1 text-xs font-bold ${exp.chip}`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Tile>
          </RevealOnScroll>
        ))}
      </div>
    </Band>
  );
}
