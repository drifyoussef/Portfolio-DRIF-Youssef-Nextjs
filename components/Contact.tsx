import type { ReactNode } from "react";
import { Mail, Phone, ArrowRight, MessageSquare, Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const LinkedInIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const contactLinks: { label: string; value: string; href: string; icon: ReactNode }[] = [
  {
    label: "Email",
    value: "youssef.drif1@outlook.com",
    href: "mailto:youssef.drif1@outlook.com",
    icon: <Mail size={18} strokeWidth={1.5} />,
  },
  {
    label: "Téléphone",
    value: "+33 7 82 97 05 37",
    href: "tel:+33782970537",
    icon: <Phone size={18} strokeWidth={1.5} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/youssefdrif",
    href: "https://www.linkedin.com/in/youssefdrif",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/drifyoussef",
    href: "https://github.com/drifyoussef",
    icon: <GitHubIcon />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">
              Contact
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <RevealOnScroll delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Travaillons <span className="gradient-text">ensemble</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-gray-400 leading-relaxed mb-8">
                Vous avez un projet en tête ? Une opportunité à partager ? N&apos;hésitez
                pas à me contacter. Je suis disponible pour des missions freelance,
                des collaborations ou des opportunités d&apos;emploi.
              </p>
            </RevealOnScroll>

            <div className="space-y-4">
              {contactLinks.map(({ label, value, href, icon }, i) => (
                <RevealOnScroll key={label} variant="fadeLeft" delay={300 + i * 100}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/50 hover:bg-[#15151f] group transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors">
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-0.5">{label}</div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {value}
                      </div>
                    </div>
                    <ArrowRight size={16} strokeWidth={1.5} className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors" />
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <RevealOnScroll variant="fadeRight" delay={200}>
            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                <MessageSquare size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Prêt à démarrer ?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Développeur full stack polyvalent avec une solide expérience en
                applications web, mobiles et en cybersécurité. Disponible rapidement
                pour vos projets.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Réponse sous 24h",
                  "Disponible pour missions freelance",
                  "Open aux opportunités CDI/CDD",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check size={16} strokeWidth={2} className="text-indigo-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:youssef.drif1@outlook.com"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Envoyer un message
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#1e1e2e] flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
        <span>© 2025 Youssef DRIF. Tous droits réservés.</span>
        <span>Développé avec Next.js & Tailwind CSS</span>
      </div>
    </section>
  );
}
