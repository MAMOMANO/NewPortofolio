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

        <div className="relative isolate mt-12 h-105 w-full sm:h-125">
          {/* 1. Layer blob warna (paling belakang) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10"
          >
            <div className="absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-black/30 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/40 blur-[120px]" />
          </div>
          <hr className="w-full border-white/30 mt-4" /> {/* 2. Layer kaca */}
          {/* <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl backdrop-saturate-150"
          > */}
          {/* kilap tipis di sudut atas */}
          {/* <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/15 via-transparent to-transparent" />
          </div> */}
          {/* 3. Carousel (paling depan) */}
          <div className="relative h-full w-full">
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
          <hr className="w-full border-white/30 mt-4" />{" "}
        </div>
      </div>
    </section>
  );
}
