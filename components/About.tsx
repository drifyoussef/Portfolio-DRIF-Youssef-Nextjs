import Band, { SectionHead } from "./Section";
import RevealOnScroll from "./RevealOnScroll";
import Tile from "./Tile";

const paragraphs = [
  "Développeur full stack basé aux Sables-d'Olonne, j'ai développé des applications mobiles en Ionic/Capacitor et Angular, livrées notamment pour le CESER et Réseau Entreprendre.",
  "J'ai ensuite pris la gestion de projet de bout en bout : planification, suivi des délais et du budget, jusqu'à la livraison, avec des exigences de qualité et de sécurité élevées.",
  "Depuis fin 2025, je développe en freelance sous YD Development : applications web et mobiles en React, Next.js, Node.js et Ionic, du cadrage à la mise en production.",
  "En parallèle, ma formation Expert en système d'information et sécurité associe la pratique du développement à une vision plus large de l'architecture et du risque.",
];

export default function About() {
  return (
    <Band id="about" bg="bg-azur-pale">
      <SectionHead
        index="01"
        label="À propos"
        sticker="acide"
        title={
          <>
            Je code, je cadre,{" "}
            <span className="pop lowercase">je livre</span>
          </>
        }
      />

      <div className="grid gap-5 md:grid-cols-6">
        <RevealOnScroll className="md:col-span-4 md:row-span-2">
          <Tile fill="blanc" className="h-full p-7 md:p-9">
            <div className="space-y-4 text-lg leading-relaxed">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </Tile>
        </RevealOnScroll>

        <RevealOnScroll delay={80} className="md:col-span-2">
          <Tile fill="mauve" className="h-full p-7">
            <span className="eyebrow">En cours</span>
            <p className="mt-3 text-4xl leading-none font-black tracking-[-0.04em]">
              BAC+5
            </p>
            <p className="mt-3 leading-snug font-medium">
              Expert en système d&apos;information et sécurité
            </p>
          </Tile>
        </RevealOnScroll>

        <RevealOnScroll delay={140} className="md:col-span-2">
          <Tile fill="creme" className="h-full p-7">
            <span className="eyebrow">Langues</span>
            <ul className="mt-3 space-y-2 font-medium">
              <li className="flex items-baseline justify-between gap-3">
                Français <span className="eyebrow text-encre-doux">natif</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-t-2 border-dotted border-encre/25 pt-2">
                Anglais <span className="eyebrow text-encre-doux">B1</span>
              </li>
            </ul>
          </Tile>
        </RevealOnScroll>

        {[
          { value: "4", unit: "ans", label: "d'expérience", fill: "flame" as const },
          { value: "3", unit: "", label: "expériences", fill: "acide" as const },
          { value: "20", unit: "+", label: "technologies", fill: "soleil" as const },
        ].map((s, i) => (
          <RevealOnScroll key={s.label} delay={200 + i * 70} className="md:col-span-2">
            <Tile fill={s.fill} className="flex h-full items-baseline gap-3 p-7">
              <span className="text-5xl leading-none font-black tracking-[-0.05em]">
                {s.value}
                {s.unit && <span className="ml-2 text-2xl">{s.unit}</span>}
              </span>
              <span className="font-bold">{s.label}</span>
            </Tile>
          </RevealOnScroll>
        ))}
      </div>
    </Band>
  );
}
