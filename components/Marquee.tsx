const items = [
  "ReactJS",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "Ionic Capacitor",
  "Laravel",
  "Docker",
  "CI/CD",
  "Cybersécurité",
  "Gestion de projet",
];

const dots = ["bg-flame", "bg-acide", "bg-azur", "bg-soleil", "bg-mauve"];

/** Bandeau encre défilant, calé en bas du hero. */
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-encre bg-encre py-3.5 text-creme">
      <div className="marquee-track" aria-hidden>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <li key={item} className="flex items-center whitespace-nowrap">
                <span className="eyebrow px-5 text-sm">{item}</span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${dots[i % dots.length]}`}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <span className="sr-only">Technologies : {items.join(", ")}.</span>
    </div>
  );
}
