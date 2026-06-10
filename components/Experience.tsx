import RevealOnScroll from "./RevealOnScroll";

const experiences = [
  {
    title: "Développeur Full Stack & Chef de projet",
    company: "Beinstore",
    location: "Les Sables d'Olonne",
    period: "2023 — 2025",
    description:
      "Développement d'applications mobiles hybrides et gestion de projet end-to-end dans un environnement professionnel exigeant.",
    tasks: [
      "Développement d'applications mobiles en Ionic Capacitor (Angular)",
      "Responsable de la coordination, planification et suivi des projets (délais, budgets, qualité)",
      "Mise en place d'outils et de processus de cybersécurité",
      "Livraisons pour le CESER et Réseau Entreprendre",
    ],
    tags: ["Ionic Capacitor", "Angular", "TypeScript", "Cybersécurité", "Gestion de projet"],
  },
  {
    title: "Développeur Frontend",
    company: "DIS Transics",
    location: "Alès",
    period: "2021 — 2022",
    description:
      "Développement d'interfaces utilisateur modernes pour des applications web dans le secteur du transport.",
    tasks: [
      "Développement d'applications web en ReactJS",
      "Développement de tests unitaires avec Jest",
      "Collaboration en équipe sur des projets en production",
    ],
    tags: ["ReactJS", "JavaScript", "Jest", "Tests unitaires"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">
              Expériences
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Parcours <span className="gradient-text">professionnel</span>
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={i} variant="fadeLeft" delay={i * 150}>
                <div className="md:pl-24 relative">
                  <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full bg-[#0d0d15] border-2 border-indigo-500 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>

                  <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="font-medium text-indigo-400">{exp.company}</span>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono bg-[#1e1e2e] text-gray-400 px-3 py-1.5 rounded-lg">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2 mb-6">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
