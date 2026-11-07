import { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SpotlightCard from "../components/SpotlightCard";
import useReveal from "../hooks/useReveal";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Label: "Freelance" | "Tugas Akhir" | "Personal"
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400";

// const kicker =
//   "block text-sm font-semibold uppercase tracking-[0.25em] text-white";
const primaryBtn = `group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-purple-400 hover:text-white hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)] active:translate-y-0 active:scale-95 ${focusRing}`;

const projects = [
  {
    title: "Sistem Manajemen Workspace & HR (Web App)",
    label: "Freelance",
    description:
      "Dashboard ERP untuk mengelola beberapa perusahaan dalam satu workspace.",
    masalah:
      "Proses kepegawaian seperti absensi, izin/cuti, pinjaman, reimburse, lembur, dan penggajian sering tersebar di banyak tempat sehingga sulit dikelola.",
    solusi:
      "merancang dua sisi antarmuka, admin dan user, lengkap dengan prototype klik untuk masing-masing role Admin: dashboard, absensi, approval, pinjaman, reimburse, gaji, lembur, jadwal, daftar user, dan pengaturan. User: absensi dengan pengenalan wajah, approval, pinjaman, reimburse, gaji, lembur, profil, dan jadwal.",
    stack: ["Figma"],
    role: "UI/UX Designer · Figma",
    image: "/img/erp.png",
    demo: "https://www.figma.com/design/QJLpOo7UYM7XrSniGXnanP/ERP-PROJECT?t=K5mo6TTKdzUKSJml-1",
    // repo: "https://github.com/MAMOMANO/ABSENSI",
  },
  {
    title: "GoGalon",
    label: "Tugas Akhir",
    description:
      "Sistem pemesanan galon dengan tracking pesanan dan chat real-time.",
    masalah:
      "Pemesanan galon sering dilakukan manual lewat chat atau telepon, sehingga urutan pesanan dan statusnya mudah tercecer.",
    solusi:
      "Website pemesanan galon dengan antrean pesanan First Come First Served (FCFS) dan notifikasi real-time, Chat antara kurir dan pelanggan, sehingga pesanan diproses sesuai urutan dan pengguna tahu statusnya",
    stack: [
      "Laravel",
      "PostgreSQL",
      "Tailwindcss",
      "Enggine Ngrok",
      "Websocket",
    ],
    role: "Pengembangan sistem dan perancangan UI/UX",
    image: "/img/galon.png",
    // demo: "LocallHost",
    repo: "https://github.com/hilmyhafizhhh/go-galon-project",
  },
  {
    title: "Undangan Pernikahan",
    label: "Freelance",
    description:
      "Undangan digital interaktif dengan desain modern dan animasi.",
    masalah:
      "Undangan digital sering terasa statis dan tamu kesulitan mengonfirmasi kehadiran.",
    solusi:
      "Merancang Wireframe di Figma, lalu membangunnya menjadi website responsif dengan React dan Tailwind CSS. Animasi scroll memakai GSAP agar pengalaman membuka undangan terasa hidup, dan fitur RSVP membuat tamu bisa mengonfirmasi kehadiran serta mengirim ucapan.",
    stack: ["Figma", "React", "Firebase", "GSAP"],
    role: "UI/UX Designer & Front-End Developer",
    image: "/img/wedding.png",
    demo: "https://wedding-invitation-mau9.vercel.app/",
    repo: "https://github.com/MAMOMANO/Wedding-Invitation",
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
    title: "Website Koperasi Rajeg Mandiri (Proyek Tim)",
    label: "Freelance",
    description:
      "Website Koperasi Internal yang dilengkapi dengan fitur Simpan Pinjam, Rekap dan Laporan Keuangan, dll",
    masalah:
      "Masih Melakukan rekap dan laporan secara manual belum ada sistem terpusat.",
    solusi:
      "Merancang antarmuka website koperasi di Figma, prototype, dengan fitur fitur yang bisa menyelesaikan masalah yang ada di koperasi",

    stack: ["Figma"],
    role: "UI/UX Designer · Figma",
    image: "/img/koperasi.png",
    demo: "https://www.figma.com/design/PFhZ0sh7FmVyxElZdoQ1Vh/Digital-Printing?t=K5mo6TTKdzUKSJml-1",
    // repo: "https://github.com/MAMOMANO/ABSENSI",
  },
  {
    title: "Winnicode Absensi",
    label: "Magang",
    description:
      "Sistem absensi karyawan berbasis pengenalan wajah, QR Code, dan lokasi.",
    masalah:
      "Karyawan yang bekerja online/remote perlu cara absen yang akurat dan sulit dimanipulasi dan masih menggunakan loogbook",
    solusi:
      "Sistem absensi dengan tiga lapis validasi: QR Code, pengenalan wajah (face recognition), dan lokasi (geolocation), agar kehadiran tercatat akurat dan sesuai lokasi kerja.",
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
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const visibleProjects = isShow ? projects : projects.slice(0, 5);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          y: 24,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        },
      );
    });

    return () => ctx.revert();
  }, [isOpen, selectedProject]);

  function handleShow() {
    const sedangMembuka = !isShow;
    const scrollSebelum = window.scrollY;

    setIsShow(sedangMembuka);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sedangMembuka) {
          // Lihat Semua: pertahankan posisi
          window.scrollTo({ top: scrollSebelum, behavior: "instant" });
        } else {
          // Lihat Sedikit: kembali ke awal section Project
          document.getElementById("project")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  function handleClick(project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function handleClose() {
    if (!modalRef.current || isClosing) return;

    setIsClosing(true);

    gsap.to(modalRef.current, {
      opacity: 0,
      y: 24,
      scale: 0.97,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setIsOpen(false);
        setIsClosing(false);
      },
    });
  }

  return (
    <section
      ref={root}
      id="project"
      aria-labelledby="project-title"
      className="relative text-white z-10 overflow-anchor-none"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle id="project-title">Project</SectionTitle>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {visibleProjects.map((p) => (
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
                    <div className="mt-6 flex gap-6">
                      <button
                        className={primaryBtn}
                        onClick={() => handleClick(p)}
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </li>
          ))}
        </ul>

        {isOpen && selectedProject && (
          <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/20 bg-[#111111]/95 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol tutup */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup detail project"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                &times;
              </button>

              {/* Gambar project */}
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={`Tangkapan layar ${selectedProject.title}`}
                  className="aspect-video w-full border-b border-white/10 object-cover"
                />
              )}

              {/* Isi detail */}
              <div className="p-6 sm:p-8">
                <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {selectedProject.label}
                </span>
                <h2
                  id="modal-title"
                  className="mt-4 text-2xl font-extrabold sm:text-3xl"
                >
                  {selectedProject.title}
                </h2>
                <p className="mt-4 leading-7 text-white/70">
                  {selectedProject.description}
                </p>
                <hr className="w-full border-white/30 mt-4" />{" "}
                <h3 className="mt-4 font-bold text-white">Masalah</h3>
                <p className="mt-4 leading-7 text-white/70">
                  {selectedProject.masalah}
                </p>
                <hr className="w-full border-white/30 mt-4" />{" "}
                <p className="mt-4 leading-7 text-white/70">
                  {selectedProject.solusi}
                </p>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                    Peran Saya
                  </h3>
                  <p className="mt-2 text-white/90">{selectedProject.role}</p>
                </div>
                {selectedProject.stack.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                      Teknologi
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-8 flex justify-start gap-6">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={primaryBtn}
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={primaryBtn}
                    >
                      Github
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={handleClose}
                    className={primaryBtn}
                  >
                    Tutup Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto flex justify-center p-6">
          <button type="button" className={primaryBtn} onClick={handleShow}>
            {isShow ? "Lihat Sedikit →" : "Lihat Semua →"}
          </button>
        </div>
      </div>
    </section>
  );
}
