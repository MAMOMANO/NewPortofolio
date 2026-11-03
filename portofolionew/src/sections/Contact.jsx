import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";
import { socials } from "../data/socials";

const EMAIL = "marnojuluk@gmail.com"; // TODO: ganti email aslimu

// const socials = [
//   { label: "GitHub", href: "https://github.com/MAMOMANO" },
//   { label: "LinkedIn", href: "https://linkedin.com/in/USERNAME" },
//   { label: "Instagram", href: "https://instagram.com/USERNAME" },
// ];

export default function Contact() {
  const root = useReveal();

  return (
    <section
      ref={root}
      id="contact"
      aria-labelledby="contact-title"
      className="relative text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle id="contact-title">Hubungi Saya</SectionTitle>

        <p
          data-anim="item"
          className="mt-8 max-w-[48ch] text-lg leading-relaxed text-white/80"
        >
          Punya proyek, ide kolaborasi, atau sekadar ingin menyapa? Kirim pesan
          kapan saja.
        </p>

        <a
          data-anim="item"
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-block text-[clamp(1.5rem,5vw,3.5rem)] font-extrabold break-all underline decoration-2 underline-offset-8 decoration-white/40 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {EMAIL}
        </a>

        <nav data-anim="item" aria-label="Tautan sosial" className="mt-12">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-2 underline-offset-4 decoration-white/40 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-20 border-t border-white/20 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Mariano Antonino Mingga Juluk
        </p>
      </div>
    </section>
  );
}
