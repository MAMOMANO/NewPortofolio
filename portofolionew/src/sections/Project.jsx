import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

// Label: "Freelance" | "Tugas Akhir" | "Personal"
const projects = [
  {
    title: "GoGalon",
    label: "Tugas Akhir",
    description:
      "Sistem pemesanan galon air berbasis web, dibangun dengan Laravel dan PostgreSQL.",
    stack: ["Laravel", "PostgreSQL"],
    role: "TODO: Frontend & ui/ux",
    image: "/img/destinasi.png", // contoh: "/projects/gogalon.png" (file di folder public)
    demo: "https://exploreindonesia-mamo5.vercel.app/",
    repo: "https://github.com/MAMOMANO/Exlpore_Indonesia",
  },
  {
    title: "Undangan Pernikahan 3D",
    label: "Personal",
    description: "Undangan pernikahan digital interaktif dengan elemen 3D.",
    stack: ["React"], // TODO: tambahkan library 3D yang kamu pakai
    role: "TODO: peran kamu",
    image: "",
    demo: "",
    repo: "",
  },
  {
    title: "Digital Printing Web",
    label: "Personal", // ganti "Freelance" kalau memang untuk klien
    description: "TODO: satu atau dua kalimat tentang proyek ini.",
    stack: [],
    role: "TODO: peran kamu",
    image: "",
    demo: "",
    repo: "",
  },
];

const linkClass =
  "font-semibold underline decoration-2 underline-offset-4 decoration-white/40 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Project() {
  const root = useReveal();

  return (
    <section
      ref={root}
      id="project"
      aria-labelledby="project-title"
      className="relative text-white z-10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle id="project-title">Project</SectionTitle>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} data-anim="item">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md transition-colors hover:border-white/50">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Tangkapan layar ${p.title}`}
                    className="aspect-video w-full border-b border-white/20 object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex aspect-video w-full items-center justify-center border-b border-white/20 bg-white/5 font-display text-5xl font-extrabold"
                  >
                    {p.title.charAt(0)}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full border border-white/40 px-3 py-0.5 text-xs font-semibold tracking-wide uppercase">
                    {p.label}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm text-white/70">Peran: {p.role}</p>

                  {p.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-white/30 px-3 py-0.5 text-sm"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(p.demo || p.repo) && (
                    <div className="mt-6 flex gap-6">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Lihat Demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Kode
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
