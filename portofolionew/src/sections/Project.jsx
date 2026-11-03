import SectionTitle from "../components/SectionTitle";
import SpotlightCard from "../components/SpotlightCard";
import useReveal from "../hooks/useReveal";

// Label: "Freelance" | "Tugas Akhir" | "Personal"
const projects = [
  {
    title: "GoGalon",
    label: "Tugas Akhir",
    description:
      "Sistem pemesanan galon dengan tracking pesanan dan chat real-time.",

    stack: [
      "Laravel",
      "PostgreSQL",
      "Tailwindcss",
      "Enggine Ngrok",
      "Websocket",
    ],
    role: "Frontend & ui/ux",
    image: "/img/galon.png",
    // demo: "LocallHost",
    repo: "https://github.com/hilmyhafizhhh/go-galon-project",
  },
  {
    title: "Undangan Pernikahan",
    label: "Freelance",
    description:
      "Undangan digital interaktif dengan desain modern dan animasi.",

    stack: ["React", "Firebase", "GSAP"],
    role: "Frontend Developer",
    image: "/img/wedding.png",
    demo: "https://wedding-invitation-mau9.vercel.app/",
    repo: "https://github.com/MAMOMANO/Wedding-Invitation",
  },
  {
    title: "Winnicode Absensi",
    label: "Magang",
    description:
      "Sistem absensi karyawan berbasis pengenalan wajah, QR Code, dan lokasi.",

    stack: [
      "HTML",
      "Tailwindcss",
      "Javascript",
      "Node Js",
      "Express Js",
      "Python",
      "MYSQL",
    ],
    role: "Fullstack Developer",
    image: "/img/absensi.png",
    // demo: "LocallHost",
    repo: "https://github.com/MAMOMANO/ABSENSI",
  },
  {
    title: "Company Profile & Pemesanan Online",
    label: "Freelance",
    description:
      "Website company profile dengan katalog produk dan alur pemesanan hingga pembayaran.",

    stack: ["Figma"],
    role: "UI/UX Designer · Figma",
    image: "/img/cetak.png",
    demo: "https://www.figma.com/design/PFhZ0sh7FmVyxElZdoQ1Vh/Digital-Printing?t=K5mo6TTKdzUKSJml-1",
    // repo: "https://github.com/MAMOMANO/ABSENSI",
  },
  {
    title: "ERP Web App dengan Manajemen Workspace",
    label: "Freelance",
    description:
      "Dashboard ERP untuk mengelola beberapa perusahaan dalam satu workspace.",

    stack: ["Figma"],
    role: "UI/UX Designer · Figma",
    image: "/img/erp.png",
    demo: "https://www.figma.com/design/QJLpOo7UYM7XrSniGXnanP/ERP-PROJECT?t=K5mo6TTKdzUKSJml-1",
    // repo: "https://github.com/MAMOMANO/ABSENSI",
  },
  {
    title: "Weather App",
    label: "Proyek Pribadi",
    description:
      "Aplikasi cuaca untuk menampilkan informasi cuaca berdasarkan kota.",

    stack: ["React", "Tailwindcss"],
    role: "Frontend Developer",
    image: "/img/weather.png",
    demo: "https://weather-web-app-lovat-xi.vercel.app/",
    repo: "https://github.com/MAMOMANO/Weather-Web-App",
  },
  {
    title: "Quizz App",
    label: "Proyek Pribadi",
    description: "Aplikasi kuis interaktif untuk menguji pengetahuan pengguna.",

    stack: ["React", "Tailwindcss"],
    role: "Frontend Developer",
    image: "/img/weather.png",
    demo: "https://quizz-app-sigma-navy.vercel.app/",
    repo: "https://github.com/MAMOMANO/Quizz-App",
  },
  {
    title: "Random Repository",
    label: "Proyek Pribadi",
    description: "Aplikasi untuk menemukan repository GitHub secara acak.",

    stack: ["React", "Tailwindcss"],
    role: "Frontend Developer",
    image: "/img/random.png",
    demo: "https://randomrepo-two.vercel.app/",
    repo: "https://github.com/MAMOMANO/Github-Random-Repository",
  },
  {
    title: "Explore Indonesia",
    label: "Proyek Pribadi",
    description:
      "Website eksplorasi destinasi wisata Indonesia menggunakan data JSON.",
    stack: ["HTML", "Css", "Javascript"],
    role: "Frontend Developer",
    image: "/img/destinasi.png",
    demo: "https://exploreindonesia-sigma.vercel.app/",
    repo: "https://github.com/MAMOMANO/Exlpore_Indonesia",
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

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} data-anim="item">
              <SpotlightCard
                theme="dark"
                spotlightColor="#ffffff"
                intensity={0.15}
                spotlightSize={240}
                softness={0.7}
                shape="circle"
                borderGlow={0.6}
                proximity={80}
                smoothing={0.3}
                grain={0}
                ambient={false}
                flare
                className="h-full overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md transition-colors hover:border-white/50"
              >
                <article className="flex h-full flex-col">
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

                    <p className="mt-3 text-sm text-white/70">
                      Peran: {p.role}
                    </p>

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
                            Lihat
                          </a>
                        )}

                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                          >
                            Github
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
