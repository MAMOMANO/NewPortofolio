import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

// Ganti dengan sertifikat aslimu. Kosongkan "link" kalau tidak ada.
const certificates = [
  {
    name: "TODO: nama sertifikat",
    issuer: "TODO: penerbit",
    year: "2026",
    link: "",
  },
  {
    name: "TODO: nama sertifikat",
    issuer: "TODO: penerbit",
    year: "2025",
    link: "",
  },
];

export default function Sertifikat() {
  const root = useReveal();

  return (
    <section
      ref={root}
      id="sertifikat"
      aria-labelledby="sertifikat-title"
      className="relative text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle id="sertifikat-title">Sertifikat</SectionTitle>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              data-anim="item"
              className="flex flex-col rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md transition-colors hover:border-white/50"
            >
              <span className="w-fit rounded-full border border-white/40 px-3 py-0.5 text-xs font-semibold tracking-wide">
                {c.year}
              </span>
              <h3 className="mt-4 text-lg font-extrabold">{c.name}</h3>
              <p className="mt-1 text-white/70">{c.issuer}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-fit font-semibold underline decoration-2 underline-offset-4 decoration-white/40 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Lihat sertifikat
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
