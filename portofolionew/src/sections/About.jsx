import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { socials } from "../data/socials";
import ProfilleCard from "../components/ProfilleCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            once: true,
          },
        });

        tl.from("[data-anim='title']", {
          y: 50,
          opacity: 0,
          duration: 0.9,
        })
          .from(
            "[data-anim='card']",
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.5",
          )
          .from(
            "[data-anim='text']",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.15,
            },
            "-=0.5",
          );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={root}
      id="about"
      className="relative overflow-hidden text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* LEFT COLUMN */}
        <div>
          <div className="mb-8 overflow-hidden">
            <span
              data-anim="title"
              className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-white"
            >
              Get to know me
            </span>

            <h2
              data-anim="title"
              className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              Tentang
              <br />
              <span className=" text-white">
                Saya.
              </span>
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
              enableTilt={true}
              intro
              showUserInfo
              enableMobileTilt={false}
              theme="dark"
              onContactClick={scrollToContact}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center">
          <div data-anim="text">
            <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.25em] text-white">
              About Me
            </span>

            <p className="text-base leading-[1.9] text-white/65 sm:text-lg">
              Saya merupakan fresh graduate Teknik Informatika dari Universitas
              Mercu Buana Jakarta yang memiliki ketertarikan pada{" "}
              <strong className="font-semibold text-white">
                Frontend Development dan UI/UX Design
              </strong>
              . Saya senang membangun antarmuka website yang modern, responsif,
              dan interaktif dengan mengutamakan pengalaman pengguna. Saya juga
              tertarik mengeksplorasi pemanfaatan{" "}
              <strong className="font-semibold text-white">
                Artificial Intelligence (AI)
              </strong>{" "}
              dalam proses desain dan pengembangan produk digital. Dengan
              semangat belajar dan berkembang, saya terus mengasah keterampilan
              teknis serta mencari cara untuk menciptakan solusi digital yang
              kreatif dan fungsional. Saya terbuka terhadap peluang karier,
              kolaborasi, dan proyek baru untuk mengembangkan kemampuan serta
              memberikan kontribusi dalam tim.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div
            data-anim="text"
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="/cv.pdf"
              download
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-purple-400 hover:text-white hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
            >
              <span>Download CV</span>
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
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
            </a>

            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-400/10 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
            >
              Let's Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <nav
            data-anim="text"
            aria-label="Tautan sosial"
            className="mt-12 border-t border-white/10 pt-7"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Find me on
            </p>

            <ul className="flex flex-wrap gap-x-7 gap-y-4">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/60 transition-all duration-300 hover:text-purple-400 hover:underline hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
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
