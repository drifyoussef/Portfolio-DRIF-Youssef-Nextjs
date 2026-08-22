import Band, { SectionHead } from "./Section";
import RevealOnScroll from "./RevealOnScroll";
import Tile, { Sticker, type Fill } from "./Tile";

const education: {
  degree: string;
  level: string;
  school: string;
  location: string;
  period: string;
  fill: Fill;
  badge: Fill;
  offset: string;
  tilt: string;
  highlights: string[];
}[] = [
  {
    degree: "Expert en système d'information et sécurité",
    level: "BAC+5",
    school: "Cloud Campus",
    location: "Les Sables-d'Olonne",
    period: "2025 — 2026",
    fill: "mauvePale",
    badge: "mauve",
    offset: "md:mt-0",
    tilt: "md:-rotate-2",
    highlights: [
      "Gestion de projet et méthodes agiles",
      "Méthodes de gestion d'entreprise",
      "Sécurisation d'un projet, cybersécurité avancée",
    ],
  },
  {
    degree: "Développeur web full stack",
    level: "BAC+4",
    school: "Cloud Campus",
    location: "Les Sables-d'Olonne",
    period: "2023 — 2025",
    fill: "acidePale",
    badge: "acide",
    offset: "md:mt-10",
    tilt: "md:rotate-1",
    highlights: [
      "Développement backend approfondi et frameworks",
      "Node.js et déploiement d'applications",
      "Projet de fin d'études : site de rencontres amicales, React et Node.js",
    ],
  },
  {
    degree: "Licence pro informatique · Analyste en cybersécurité",
    level: "BAC+3",
    school: "Campus Digit'Alès",
    location: "Alès",
    period: "2021 — 2022",
    fill: "soleilPale",
    badge: "soleil",
    offset: "md:mt-20",
    tilt: "md:-rotate-1",
    highlights: [
      "Formation orientée cybersécurité",
      "Analyse des menaces et des vulnérabilités",
      "Frontend en ReactJS et tests unitaires",
    ],
  },
];

export default function Education() {
  return (
    <Band id="education" bg="bg-white">
      <SectionHead
        index="04"
        label="Formation"
        sticker="mauve"
        title={
          <>
            Trois diplômes,{" "}
            <span className="pop lowercase">une trajectoire</span>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-3 md:pb-20">
        {education.map((edu, i) => (
          <RevealOnScroll
            key={edu.degree}
            delay={i * 110}
            className={`${edu.offset} h-full`}
          >
            <Tile
              fill={edu.fill}
              className={`flex h-full flex-col p-7 transition-transform duration-300 hover:rotate-0 ${edu.tilt}`}
            >
              <div className="flex items-center justify-between gap-3">
                <Sticker fill={edu.badge}>{edu.level}</Sticker>
                <span className="eyebrow text-encre-doux">{edu.period}</span>
              </div>

              <h3 className="mt-6 text-xl leading-snug font-black tracking-[-0.02em]">
                {edu.degree}
              </h3>
              <p className="mt-2 text-lg">
                <span className="pop">{edu.school}</span>
                <span className="text-encre-doux"> · {edu.location}</span>
              </p>

              <ul className="mt-6 space-y-2.5 border-t-2 border-dotted border-encre/25 pt-5 text-sm leading-relaxed">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span aria-hidden className="font-black">
                      →
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Tile>
          </RevealOnScroll>
        ))}
      </div>
    </Band>
  );
}
