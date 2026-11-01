import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Topography from "./components/Topography";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Sertifikat from "./sections/Sertifikat";
import Contact from "./sections/Contact";

export default function App() {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="relative isolate bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <Topography color="#ffffff" opacity={0.4} speed={0.2} />
      </div>
      {showLoader && (
        <Loader
          onReady={() => setReady(true)}
          onDone={() => setShowLoader(false)}
        />
      )}
      <Navbar />
      <Hero ready={ready} />
      <About />
      <Project />
      <Skills />
      <Sertifikat />
      <Contact />
    </div>
  );
}
