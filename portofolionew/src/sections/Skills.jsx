import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

// Hapus yang belum benar-benar kamu kuasai, tambahkan yang kurang
const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GSAP"],
  },
  { title: "Backend", items: ["Laravel", "PHP"] },
  { title: "Database", items: ["PostgreSQL"] },
  { title: "Desain & Tools", items: ["Figma", "Git"] },
];

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
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/30 px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
