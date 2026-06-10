import { Monitor, Server, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const skillGroups: { category: string; Icon: LucideIcon; skills: string[] }[] = [
  {
    category: "Frontend",
    Icon: Monitor,
    skills: ["ReactJS", "Angular", "VueJS", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js"],
  },
  {
    category: "Backend & Mobile",
    Icon: Server,
    skills: ["Node.js", "PHP", "Laravel", "Ionic Capacitor", "Flutter", "C", "C++"],
  },
  {
    category: "DevOps & Sécurité",
    Icon: ShieldCheck,
    skills: ["Docker", "CI/CD", "Cybersécurité", "Gestion de projet", "Jest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">
              Compétences
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Stack <span className="gradient-text">technique</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(({ category, Icon, skills }, i) => (
            <RevealOnScroll key={category} delay={i * 150}>
              <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-7 card-hover h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm bg-[#1a1a2e] border border-[#2a2a3e] text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
