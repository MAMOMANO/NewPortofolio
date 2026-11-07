import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";
import LogoLoop from "../components/LogoLoop";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import {
  SiHtml5,
  // SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGreensock,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiFigma,
  SiGit,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GSAP"],
  },
  { title: "Backend", items: ["Laravel", "PHP"] },
  { title: "Database", items: ["PostgreSQL","MySQL"] },
  { title: "Desain & Tools", items: ["Figma", "Git"] },
];

// Satu sumber data: ikon + warna brand
const techMeta = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: FaCss3Alt, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  GSAP: { Icon: SiGreensock, color: "#88CE02" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Git: { Icon: SiGit, color: "#F05032" },
};

// Dibuat otomatis dari techMeta, jadi tidak perlu ditulis dua kali
const logos = Object.entries(techMeta).map(([name, { Icon, color }]) => ({
  node: <Icon />,
  title: name,
  hoverColor: color,
}));

export default function Skills() {
  const root = useReveal();

  return (
    <section
      ref={root}
      id="skills"
      aria-labelledby="skills-title"
      className="relative text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle id="skills-title">Skills</SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {groups.map(({ title, items }) => (
            <div
              key={title}
              data-anim="item"
              className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md"
            >
              <h3 className="text-xl font-extrabold">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => {
                  const meta = techMeta[item];
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1"
                    >
                      {meta && (
                        <meta.Icon
                          aria-hidden="true"
                          style={{ color: meta.color }}
                        />
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Opsional: loop logo di bawah grid */}
        <div
          data-anim="item"
          className="mt-12 overflow-hidden text-4xl text-white/70"
        >
          <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutWidth={0.12}
            ariaLabel="Teknologi yang saya gunakan"
          />
        </div>
      </div>
    </section>
  );
}
