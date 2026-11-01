import { useEffect, useRef } from "react";
import gsap from "gsap";

const MIN_MS = 800; 
const TIMEOUT_MS = 8000; 

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const windowLoaded = () =>
  new Promise((resolve) => {
    if (document.readyState === "complete") return resolve();
    window.addEventListener("load", resolve, { once: true });
  });

const fontsReady = () =>
  document.fonts ? document.fonts.ready : Promise.resolve();

const videosReady = () =>
  Promise.all(
    [...document.querySelectorAll("video")].map(
      (video) =>
        new Promise((resolve) => {
          if (video.readyState >= 3) return resolve();
          video.addEventListener("canplay", resolve, { once: true });
          video.addEventListener("error", resolve, { once: true });
        }),
    ),
  );

export default function Loader({ onReady, onDone }) {
  const root = useRef(null);
  const bar = useRef(null);
  const num = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const html = document.documentElement;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    html.style.overflow = "hidden"; 

    const tasks = [windowLoaded(), fontsReady(), videosReady(), wait(MIN_MS)];
    const progress = { value: 0 };
    let finished = 0;

    const render = () => {
      if (num.current) num.current.textContent = Math.round(progress.value);
      if (bar.current) bar.current.style.width = `${progress.value}%`;
    };

    const exit = () => {
      if (cancelled) return;
      html.style.overflow = "";
      onReady?.();
      if (reduce) return onDone?.();
      gsap.to(root.current, {
        yPercent: -100,
        duration: 0.9,
        delay: 0.15,
        ease: "power4.inOut",
        onComplete: () => onDone?.(),
      });
    };


    tasks.forEach((task) =>
      task.then(() => {
        if (cancelled) return;
        finished += 1;
        gsap.to(progress, {
          value: (finished / tasks.length) * 100,
          duration: 0.5,
          ease: "power1.out",
          overwrite: "auto",
          onUpdate: render,
        });
      }),
    );

  
    Promise.race([Promise.all(tasks), wait(TIMEOUT_MS)]).then(() => {
      if (cancelled) return;
      gsap.to(progress, {
        value: 100,
        duration: 0.3,
        overwrite: "auto",
        onUpdate: render,
        onComplete: exit,
      });
    });

    return () => {
      cancelled = true;
      html.style.overflow = "";
      gsap.killTweensOf([progress, root.current]);
    };
   
  }, []);

  return (
    <div
      ref={root}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-100 grid place-items-center bg-dua text-satu"
    >
      <div className="flex flex-col items-center gap-5">
        <p className="font-display text-[clamp(3rem,12vw,7rem)] leading-none font-extrabold tabular-nums">
          <span ref={num}>0</span>%
        </p>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-satu/20">
          <div ref={bar} className="h-full w-0 bg-tiga" />
        </div>
        <span className="sr-only">Memuat halaman</span>
      </div>
    </div>
  );
}