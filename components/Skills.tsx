import Band, { SectionHead } from "./Section";
import RevealOnScroll from "./RevealOnScroll";
import { Sticker, type Fill } from "./Tile";

const skillGroups: { category: string; sticker: Fill; skills: string[] }[] = [
  {
    category: "Frontend",
    sticker: "flame",
    skills: ["ReactJS", "Next.js", "Angular", "VueJS", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend & mobile",
    sticker: "azur",
    skills: ["Node.js", "PHP", "Laravel", "Ionic Capacitor", "Flutter", "C", "C++"],
  },
  {
    category: "Outils & sécurité",
    sticker: "acide",
    skills: ["Docker", "CI/CD", "Jest", "Cybersécurité", "Gestion de projet"],
  },
];

/* Rotations et couleurs alternées : effet planche d'autocollants. */
const tilts = ["-rotate-2", "rotate-1", "rotate-3", "-rotate-1", "rotate-2", "-rotate-3"];
const chips = [
  "bg-white",
  "bg-soleil",
  "bg-flame-pale",
  "bg-acide",
  "bg-azur-pale",
  "bg-mauve-pale",
];

export default function Skills() {
  return (
    <Band id="skills" bg="bg-acide-pale">
      <SectionHead
        index="05"
        label="Compétences"
        sticker="soleil"
        title={
          <>
            La planche{" "}
            <span className="pop lowercase">d&apos;autocollants</span>
          </>
        }
      />

      <div className="space-y-12">
        {skillGroups.map((group, gi) => (
          <RevealOnScroll key={group.category} delay={gi * 110}>
            <div>
              <Sticker fill={group.sticker} className="-rotate-1">
                {group.category}
              </Sticker>

              <ul className="mt-6 flex flex-wrap items-center gap-3 md:gap-4">
                {group.skills.map((skill, si) => (
                  <li
                    key={skill}
                    className={`rounded-2xl border-2 border-encre px-5 py-2.5 text-lg font-bold shadow-[4px_4px_0_0_var(--encre)] transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 md:text-xl ${
                      tilts[(gi * 3 + si) % tilts.length]
                    } ${chips[(gi * 2 + si) % chips.length]}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Band>
  );
}
