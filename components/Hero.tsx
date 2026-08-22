import Image from "next/image";
import Marquee from "./Marquee";
import Tile, { Sticker } from "./Tile";

const socials = [
  { label: "GitHub", href: "https://github.com/drifyoussef" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youssefdrif" },
  { label: "Email", href: "mailto:youssef.drif1@outlook.com" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Formes décoratives, tranchées et non floutées */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full border-2 border-encre bg-acide md:h-80 md:w-80" />
        <div className="absolute top-1/2 -left-24 h-40 w-40 rotate-12 rounded-3xl border-2 border-encre bg-mauve-pale md:h-52 md:w-52" />
        <div className="absolute right-1/4 bottom-28 hidden h-20 w-20 rounded-full border-2 border-encre bg-azur lg:block" />
      </div>

      <div className="relative flex flex-1 items-center px-5 pt-28 pb-10 sm:px-6 md:pt-32">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Bloc titre */}
          <div className="lg:col-span-7">
            <Sticker fill="acide" className="-rotate-2">
              <span className="relative flex h-2 w-2">
                <span className="dot-ping absolute inline-flex h-full w-full rounded-full bg-encre" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-encre" />
              </span>
              Disponible pour des missions
            </Sticker>

            <h1 className="mt-6 text-[clamp(3.5rem,13vw,8.5rem)] leading-[0.82] font-black tracking-[-0.05em] uppercase">
              Youssef
              <br />
              <span className="text-flame">Drif</span>
            </h1>

            <p className="mt-7 max-w-xl text-2xl leading-snug font-medium md:text-3xl">
              Développeur{" "}
              <span className="marker" style={{ "--c": "var(--soleil)" } as React.CSSProperties}>
                full stack
              </span>
              , chef de projet, et un faible assumé pour la{" "}
              <span className="marker" style={{ "--c": "var(--acide)" } as React.CSSProperties}>
                cybersécurité
              </span>
              .
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full border-2 border-encre bg-flame px-7 py-3.5 font-bold shadow-[4px_4px_0_0_var(--encre)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--encre)]"
              >
                Me contacter
              </a>
              <a
                href="#experience"
                className="rounded-full border-2 border-encre bg-white px-7 py-3.5 font-bold shadow-[4px_4px_0_0_var(--encre)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--encre)]"
              >
                Mon parcours
              </a>
              <span className="flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-full border-2 border-encre px-4 py-2 text-sm font-bold transition-colors hover:bg-encre hover:text-creme"
                  >
                    {s.label}
                  </a>
                ))}
              </span>
            </div>
          </div>

          {/* Collage portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[20rem] lg:mr-0 lg:ml-auto">
              <Tile fill="azur" className="rotate-3 p-2.5 shadow-[8px_8px_0_0_var(--encre)]">
                <div className="relative aspect-4/5 overflow-hidden rounded-xl border-2 border-encre">
                  <Image
                    src="/portrait.jpg"
                    alt="Portrait de Youssef Drif"
                    fill
                    sizes="(min-width: 1024px) 20rem, 80vw"
                    priority
                    className="object-cover object-[50%_18%]"
                  />
                </div>
              </Tile>

              <Tile
                fill="soleil"
                className="absolute -top-5 -left-6 -rotate-6 px-4 py-2.5 sm:-left-10"
              >
                <span className="text-2xl font-black">4</span>
                <span className="eyebrow ml-1.5">ans d&apos;XP</span>
              </Tile>

              <Tile
                fill="blanc"
                className="absolute -right-3 -bottom-6 rotate-3 px-4 py-2.5 sm:-right-6"
              >
                <span className="eyebrow">Les Sables d&apos;Olonne</span>
              </Tile>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
