import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { value: "4+", label: "ans d'expérience" },
  { value: "BAC+5", label: "niveau d'études" },
  { value: "10+", label: "technologies" },
  { value: "2", label: "entreprises" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">
              À propos
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Passionné par le{" "}
                <span className="gradient-text">code et la sécurité</span>
              </h2>
            </RevealOnScroll>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              {[
                "Développeur full stack basé à Les Sables d'Olonne, j'ai développé des applications mobiles en Ionic/Cordova et Capacitor Angular pour le CESER et Réseau Entreprendre.",
                "J'ai ensuite participé à la mise en place d'un plan de gestion de projet complet : de la planification jusqu'à la délivrance, tout en maintenant des exigences de qualité et de sécurité élevées.",
                "Actuellement en formation Expert en Système d'Information et Sécurité (BAC+5), je combine expertise technique et vision stratégique pour livrer des solutions robustes.",
              ].map((text, i) => (
                <RevealOnScroll key={i} delay={200 + i * 120}>
                  <p>{text}</p>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={560}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Les Sables d'Olonne", "Français natif", "English B1"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#12121a] border border-[#1e1e2e] text-gray-400 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} variant="fadeUp" delay={150 + i * 100}>
                <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 card-hover h-full">
                  <div className="text-4xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
