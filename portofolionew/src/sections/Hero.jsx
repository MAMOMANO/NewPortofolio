import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero({ ready = true }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (!ready) return; // tunggu loader selesai dulu
      const mm = gsap.matchMedia();

      // Dilewati kalau pengguna mematikan animasi di perangkatnya
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          delay: 0.35, // dimulai saat tirai loader mulai naik
          defaults: { ease: "power3.out" },
        });

        tl.from("[data-hero='title']", { yPercent: 110, duration: 1 }).from(
          "[data-hero='fade']",
          { y: 30, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.6",
        );
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [ready] },
  );

  return (
    <section ref={root} id="home" className="relative isolate text-white">
      {/* object-[50%_85%] = posisi crop video; naikkan angkanya untuk menaikkan kepala */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_85%] mask-[linear-gradient(to_bottom,black_70%,transparent)]"
        src="/metal-human.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto flex min-h-svh max-w-7xl flex-col px-6 py-10 sm:px-10">
        {/* TENGAH: role kiri & kanan, sejajar kepala */}
        <div className="flex flex-1 items-center pb-[12svh] lg:pb-[24svh]">
          <div
            data-hero="fade"
            className="grid w-full grid-cols-1 items-center gap-6 text-center font-semibold lg:grid-cols-[1fr_auto_1fr] lg:gap-0"
          >
            <p className="text-4xl lg:text-right xl:text-5xl">
              FRONTEND DEVELOPER
            </p>

            {/* Ruang kosong tempat kepala di video; lebarkan untuk menjauhkan teks */}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:w-[42vw] lg:max-w-xl"
            />

            <p className="text-4xl lg:text-left xl:text-5xl">UI/UX Designer</p>
          </div>
        </div>

        {/* BAWAH: nama, tepat di tengah */}
        <div className="overflow-hidden pb-3">
          <h1
            data-hero="title"
            className="font-display text-center text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] font-extrabold tracking-tight text-balance"
          >
            MARIANO ANTONINO
          </h1>
        </div>
      </div>
    </section>
  );
}
