import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { socials } from "../data/socials";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animasi hanya jalan kalau pengguna tidak mematikan animasi di perangkatnya
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            once: true, // jalan sekali saja
          },
        });

        tl.from("[data-anim='title']", { yPercent: 110, duration: 0.9 }).from(
          "[data-anim='text']",
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.5",
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="relative text-white">
      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        {/* Pembungkus overflow-hidden = "topeng" supaya judul muncul dari bawah */}
        <div className="overflow-hidden pb-3">
          <h2
            data-anim="title"
            className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] font-extrabold tracking-tight text-balance"
          >
            Tentang Saya
          </h2>
        </div>

        {/* Kolom kanan: paragraf + tombol */}
        <div>
          <p data-anim="text" className="text-lg leading-relaxed">
            Saya merupakan fresh graduate Teknik Informatika dari Universitas
            Mercu Buana Jakarta yang memiliki ketertarikan pada{" "}
            <strong>Frontend Development dan UI/UX Design</strong>. Saya senang
            membangun antarmuka website yang modern, responsif, dan interaktif
            dengan mengutamakan pengalaman pengguna. Saya juga tertarik
            mengeksplorasi pemanfaatan{" "}
            <strong>Artificial Intelligence (AI)</strong> dalam proses desain
            dan pengembangan produk digital. Dengan semangat belajar dan
            berkembang, saya terus mengasah keterampilan teknis serta mencari
            cara untuk menciptakan solusi digital yang kreatif dan fungsional.
            Saya terbuka terhadap peluang karier, kolaborasi, dan proyek baru
            untuk mengembangkan kemampuan serta memberikan kontribusi dalam tim.
          </p>

          <div
            data-anim="text"
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 z-10"
          >
            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-white bg-white px-7 py-3.5 font-semibold text-black transition-colors hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
            </a>

            <nav aria-label="Tautan sosial">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline decoration-2 underline-offset-4 decoration-white/50 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
