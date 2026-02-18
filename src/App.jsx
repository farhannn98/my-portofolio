import { motion } from "framer-motion"; // Jangan lupa import ini di App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative bg-[#020617] text-white min-h-screen overflow-hidden">
      {/* --- 1. GLOBAL BACKGROUND GRID (Alas Dasar) --- */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* --- 2. GIANT CONNECTING RING (Lingkaran Tembus Hero-About) --- */}
      {/* Lingkaran ini ditaruh di App.jsx supaya bisa menimpa batas antar section */}
      <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] z-0 pointer-events-none opacity-30">
        {/* Lingkaran Putus-putus Luar */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-[2px] border-dashed border-blue-500/20 rounded-full"
        />

        {/* Lingkaran Solid Tipis Dalam */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[100px] border border-purple-500/20 rounded-full"
        />

        {/* Efek Glow Besar */}
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* --- 3. KONTEN UTAMA --- */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
