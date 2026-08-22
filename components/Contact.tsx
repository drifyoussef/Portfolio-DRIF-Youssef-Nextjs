import RevealOnScroll from "./RevealOnScroll";
import Tile, { Sticker } from "./Tile";

const contactLinks = [
  { label: "Téléphone", value: "+33 7 82 97 05 37", href: "tel:+33782970537", dot: "bg-soleil" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/youssefdrif",
    href: "https://www.linkedin.com/in/youssefdrif",
    dot: "bg-azur",
  },
  {
    label: "GitHub",
    value: "github.com/drifyoussef",
    href: "https://github.com/drifyoussef",
    dot: "bg-acide",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t-2 border-encre bg-encre text-creme"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-8 h-40 w-40 rotate-12 rounded-3xl border-2 border-creme/20" />
        <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full border-2 border-creme/20" />
        <div className="absolute right-1/3 bottom-10 h-16 w-16 rounded-full bg-mauve" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        <RevealOnScroll>
          <Sticker fill="acide" className="rotate-2">
            <span className="opacity-60">06</span>
            Contact
          </Sticker>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.25rem,6.5vw,4.25rem)] leading-[0.9] font-black tracking-[-0.04em] uppercase">
            On créer un projet{" "}
            <span className="pop lowercase text-acide">ensemble</span> ?
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-5">
          <RevealOnScroll delay={80} className="md:col-span-3">
            <Tile fill="acide" className="h-full p-7 shadow-[7px_7px_0_0_var(--flame)] md:p-9">
              <p className="text-lg leading-relaxed font-medium">
                Un projet, une mission, une question ? Réponse sous 24 h.
                Disponible en freelance comme en CDI/CDD.
              </p>
              <a
                href="mailto:youssef.drif1@outlook.com"
                className="mt-7 inline-block text-[clamp(1.15rem,3.2vw,2rem)] leading-tight font-black tracking-[-0.03em] break-all underline decoration-4 underline-offset-8 transition-colors hover:text-flame"
              >
                youssef.drif1@outlook.com
              </a>
            </Tile>
          </RevealOnScroll>

          <RevealOnScroll delay={160} className="md:col-span-2">
            <Tile fill="blanc" className="h-full p-3 shadow-[7px_7px_0_0_var(--azur)]">
              <ul>
                {contactLinks.map((c) => (
                  <li
                    key={c.label}
                    className="border-b-2 border-dotted border-encre/20 last:border-0"
                  >
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl px-4 py-4 transition-colors hover:bg-creme"
                    >
                      <span
                        aria-hidden
                        className={`h-3 w-3 shrink-0 rounded-full border-2 border-encre ${c.dot}`}
                      />
                      <span className="min-w-0">
                        <span className="eyebrow block text-encre-doux">{c.label}</span>
                        <span className="block truncate font-bold">{c.value}</span>
                      </span>
                      <span
                        aria-hidden
                        className="ml-auto font-black transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Tile>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
