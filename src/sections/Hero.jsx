import { motion } from "framer-motion";
// Pastikan file gambar ada di folder assets
import MyPhoto from "../assets/fotomy.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 md:px-20 pt-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* KOLOM KIRI: TEKS & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="overflow-hidden whitespace-nowrap bg-blue-500/10 border border-blue-500/30 px-3 py-1 pb-2 rounded-md mb-4"
          >
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase">
              System Ready: Developer_Profile
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Farhan Ariyadi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
              Web Developer
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg md:text-xl max-w-lg font-light leading-relaxed">
            Membangun masa depan digital dengan kode yang bersih dan desain yang
            presisi. Terfokus pada{" "}
            <span className="text-white font-medium">React Ecosystem</span> &{" "}
            <span className="text-white font-medium">Visual Motion</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group relative bg-blue-600 px-8 py-3 rounded-lg font-bold transition-all overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] uppercase tracking-widest text-sm text-white">
              <span className="relative z-10">INITIALIZE PROJECT</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>
            <button className="border border-blue-500/30 hover:bg-blue-500/5 text-blue-400 px-8 py-3 rounded-lg font-bold transition-all font-mono text-sm uppercase">
              {"< VIEW_CODE />"}
            </button>
          </div>
        </motion.div>

        {/* KOLOM KANAN: FOTO PROFIL (VERTIKAL & GLOW PULSE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Frame Utama (Tetap Vertikal) */}
          <motion.div
            animate={{
              y: [0, -10, 0], // Efek mengambang vertikal yang halus
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative p-1 rounded-3xl"
          >
            {/* Efek Cahaya Pulse di Belakang Frame */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500/30 blur-xl rounded-3xl"
            ></motion.div>

            {/* Container Foto */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl bg-[#020617] border border-white/10 z-10">
              <img
                src={MyPhoto}
                alt="Farhan Profil"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay Grid Tipis di Atas Foto */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            </div>

            {/* Corner Ornaments (Siku-siku Statis) */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-purple-500 rounded-br-lg"></div>

            {/* Decorative Scanning Bar (Bergerak Naik Turun) */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-blue-400/50 shadow-[0_0_8px_#3b82f6] z-20 pointer-events-none"
            />
          </motion.div>

          {/* Floating Data Tags */}
          <div className="absolute top-10 -left-10 hidden md:block">
            <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 border-l-2 border-blue-500 text-[10px] font-mono text-blue-400">
              STATUS: ONLINE
            </div>
          </div>
          <div className="absolute bottom-10 -right-10 hidden md:block">
            <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 border-r-2 border-purple-500 text-[10px] font-mono text-purple-400 text-right">
              ID: DEV_FRH_26
            </div>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 blur-[150px] rounded-full"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Hero;
