import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";
import FlexCarousel from "../components/FlexCarousel";

// Ganti dengan sertifikat aslimu. Kosongkan "link" kalau tidak ada.
const certificates = [
  {
    name: "Introduction to Front-End Dev",
    issuer: "Coursera",
    year: "2026",
    link: "",
    gambar: "/serttif/coursera.png",
  },
  {
    name: "Magang Mandiri",
    issuer: "PT. Winnicode Garuda Teknologi",
    year: "2025",
    link: "",
    gambar: "/serttif/magang.png",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Academy",
    year: "2024",
    link: "",
    gambar: "/serttif/ai.png",
  },
  {
    name: "Dasar Pemrograman Javascript",
    issuer: "Dicoding Academy",
    year: "2024",
    link: "",
    gambar: "/serttif/js.png",
  },
  {
    name: "Front-End Web",
    issuer: "Dicoding Academy",
    year: "2025",
    link: "",
    gambar: "/serttif/web.png",
  },
  {
    name: "Front-End React",
    issuer: "HackerRank",
    year: "2024",
    link: "",
    gambar: "/serttif/hacker.png",
  },
  {
    name: "Introduction to React",
    issuer: "Dibimbing",
    year: "2025",
    link: "",
    gambar: "/serttif/dibimbing.png",
  },
];

export default function Sertifikat() {
  const root = useReveal();
  const certificateItems = certificates.map((c) => ({
    src: c.gambar,
    alt: `Sertifikat ${c.name}`,
    title: c.name,
    subtitle: `${c.issuer} · ${c.year}`,
  }));

  return (
    <section
      ref={root}
      id="sertifikat"
      aria-labelledby="sertifikat-title"
      className="relative text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 border-white">
        <SectionTitle id="sertifikat-title">Sertifikat</SectionTitle>

        <div className="relative mt-12 h-[420px] w-full sm:h-[500px] border-2 border-gray-500 rounded-sm bg-black">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-dua/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-900/50 blur-[120px]" />
          </div>
          <FlexCarousel
            items={certificateItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.5}
            gap={12}
            squeeze={0.2}
            focusOnClick
            captions
            fit="natural"
            radius={0}
            lensWidth={0.74}
            lensHeight={1.18}
            tilt={62}
            roundness={1}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.25}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel
          />
        </div>
      </div>
    </section>
  );
}
