import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Judul naik dari bawah, lalu item-item muncul berurutan
export default function useReveal() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            once: true,
          },
        });

        tl.from("[data-anim='title']", { yPercent: 110, duration: 0.9 }).from(
          "[data-anim='item']",
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.5",
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return root;
}
