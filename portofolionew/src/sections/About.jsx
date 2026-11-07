import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { socials } from "../data/socials";
import ProfilleCard from "../components/ProfilleCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400";

const kicker =
  "block text-sm font-semibold uppercase tracking-[0.25em] text-white";

const primaryBtn = `group inline-flex items-center gap-3 rounded-full
  bg-white px-7 py-4 font-semibold text-black
  transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:bg-purple-400 hover:text-white
  hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)]
  active:scale-95 ${focusRing}`;

const secondaryBtn = `group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-400/10 active:translate-y-0 active:scale-95 ${focusRing}`;

const Highlight = ({ children }) => (
  <strong className="font-semibold text-white">{children}</strong>
);

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-y-1"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export default function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animasi dilewati kalau pengguna mematikan animasi di perangkatnya
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            once: true,
          },
        });

        tl.from("[data-anim='title']", { y: 50, opacity: 0, duration: 0.9 })
          .from(
            "[data-anim='card']",

            { y: 40, opacity: 0, duration: 0.8, clearProps: "transform" },
            "-=0.5",
          )
          .from(
            "[data-anim='text']",
            { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 },
            "-=0.5",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );
  console.trace("scrollToContact dipanggil dari:");

  const scrollToContact = () => {
    console.log("TOMBOL PROJECT DIKLIK");

    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={root}
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden text-white"
    >
      {/* Dekorasi latar */}
      {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      </div> */}

      <div className="relative z-10 mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* KOLOM KIRI: judul + kartu profil */}
        <div>
          <div className="mb-8">
            <span data-anim="title" className={`${kicker} mb-4`}>
              Get to know me
            </span>

            <h2
              id="about-title"
              data-anim="title"
              className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight"
            >
              Tentang
              <br />
              Saya.
            </h2>
          </div>

          <div
            data-anim="card"
            className="flex justify-center lg:justify-start"
          >
            <ProfilleCard
              name="Mariano Antonino"
              title="Frontend Developer & UI/UX Designer"
              handle="marnojuluk@gmail.com"
              status="Available for work"
              avatarUrl="/3x4.png"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt
              enableMobileTilt={false}
              intro
              showUserInfo
              theme="dark"
              onContactClick={scrollToContact}
            />
          </div>
        </div>

        {/* KOLOM KANAN: deskripsi, tombol, sosial */}
        <div className="flex flex-col justify-center">
          <div data-anim="text">
            <span className={`${kicker} mb-5`}>About Me</span>

            <p className="text-base leading-[1.9] text-white/70 sm:text-lg">
              Fresh graduate Teknik Informatika Universitas Mercu Buana Jakarta
              yang berfokus pada{" "}
              <Highlight>Frontend Development dan UI/UX Design</Highlight>. Saya
              membangun antarmuka web yang modern, responsif, dan nyaman
              dipakai, serta tertarik memanfaatkan{" "}
              <Highlight>Artificial Intelligence (AI)</Highlight> dalam proses
              desain dan pengembangan. Terbuka untuk peluang karier dan
              kolaborasi.
            </p>
          </div>

          <div
            data-anim="text"
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="/CV Mariano Antonino-UI/UX.pdf"
              download
              className={primaryBtn}
            >
              Download CV
              <DownloadIcon />
            </a>

            <a href="#contact" className={secondaryBtn}>
              Let&apos;s Talk
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <nav
            data-anim="text"
            aria-label="Tautan sosial"
            className="mt-12 border-t border-white/10 pt-7"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Find me on
            </p>

            <ul className="flex flex-wrap gap-x-7 gap-y-4">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium text-white/70 transition-colors duration-300 hover:text-purple-400 hover:underline hover:underline-offset-8 ${focusRing}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
