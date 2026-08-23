import Band, { SectionHead } from "./Section";
import RevealOnScroll from "./RevealOnScroll";
import Tile, { Sticker, fills, type Fill } from "./Tile";

/* ------------------------------------------------------------------
   DONNÉES FACTICES — à remplacer par les vrais projets.
   Champs : href à null tant que le projet n'est pas en ligne (la carte
   affiche alors « Bientôt en ligne » au lieu d'un lien mort).
   Pour ajouter un visuel : voir le commentaire dans la zone de couverture.
   ------------------------------------------------------------------ */
const projects: {
  title: string;
  tagline: string;
  year: string;
  status: string;
  cover: Fill;
  chip: string;
  stack: string[];
  href: string | null;
}[] = [
  {
    title: "Amigo",
    tagline:
      "Plateforme de rencontres amicales : profils, matching par centres d'intérêt et messagerie en temps réel.",
    year: "2025",
    status: "Exemple",
    cover: "flame",
    chip: "bg-flame-pale",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    href: null,
  },
  {
    title: "Kanbase",
    tagline:
      "Outil de gestion de projet en kanban, pensé pour les petites équipes : tableaux, échéances et suivi de charge.",
    year: "2025",
    status: "Exemple",
    cover: "azur",
    chip: "bg-azur-pale",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: null,
  },
  {
    title: "Scanly",
    tagline:
      "Application mobile d'inventaire par scan de codes-barres, avec synchronisation hors ligne.",
    year: "2024",
    status: "Exemple",
    cover: "acide",
    chip: "bg-acide-pale",
    stack: ["Ionic Capacitor", "Angular", "SQLite"],
    href: null,
  },
  {
    title: "Sentinel",
    tagline:
      "Tableau de bord de supervision : collecte des vulnérabilités connues et alertes par criticité.",
    year: "2024",
    status: "Exemple",
    cover: "mauve",
    chip: "bg-mauve-pale",
    stack: ["Node.js", "Docker", "CI/CD"],
    href: null,
  },
];

export default function Projects() {
  return (
    <Band id="projects" bg="bg-soleil-pale">
      <SectionHead
        index="02"
        label="Projets"
        sticker="soleil"
        title={
          <>
            Ce que je <span className="pop lowercase">construis</span>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <RevealOnScroll key={p.title} delay={(i % 2) * 90} className="h-full">
            <Tile
              fill="blanc"
              className="flex h-full flex-col overflow-hidden p-0 shadow-[6px_6px_0_0_var(--encre)] transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Couverture — remplacer le bloc par une <Image fill … /> le moment venu */}
              <div
                className={`relative flex aspect-16/9 items-center justify-center border-b-2 border-encre ${
                  fills[p.cover]
                }`}
              >
                <span className="text-7xl leading-none font-black tracking-[-0.05em] opacity-25 md:text-8xl">
                  0{i + 1}
                </span>
                <Sticker fill="blanc" className="absolute top-4 left-4 -rotate-3">
                  {p.status}
                </Sticker>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-2xl leading-tight font-black tracking-[-0.03em]">
                    {p.title}
                  </h3>
                  <span className="eyebrow text-encre-doux">{p.year}</span>
                </div>

                <p className="mt-3 leading-relaxed text-encre-doux">{p.tagline}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className={`rounded-full border-2 border-encre px-3 py-1 text-xs font-bold ${p.chip}`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-bold"
                    >
                      Voir le projet
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="eyebrow text-encre-doux">Bientôt en ligne</span>
                  )}
                </div>
              </div>
            </Tile>
          </RevealOnScroll>
        ))}
      </div>
    </Band>
  );
}
