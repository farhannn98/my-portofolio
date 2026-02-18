import { motion } from "framer-motion";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-20 py-4 flex justify-between items-center backdrop-blur-md bg-[#020617]/40 border-b border-blue-500/10"
    >
      {/* 1. LOGO DENGAN EFEK SCANNER */}
      <div className="relative group cursor-pointer">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-1">
          <span className="text-blue-500 group-hover:text-cyan-400 transition-colors">
            MY
          </span>
          <span className="text-white">PORTFOLIO</span>
        </div>
        {/* Garis dekoratif bawah logo */}
        <motion.div
          className="absolute -bottom-1 left-0 h-[2px] bg-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* 2. MENU LINKS DENGAN INDIKATOR AKTIF */}
      <ul className="hidden md:flex gap-8 items-center bg-white/5 px-6 py-2 pb-3 rounded-full border border-white/5 backdrop-blur-2xl">
        {NAV_LINKS.map((link, index) => (
          <li key={index} className="relative group">
            <a
              href={link.link}
              className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-400 transition-all"
            >
              {link.name}
            </a>
            {/* Dot Animation on Hover */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
          </li>
        ))}
      </ul>

      {/* 3. TOMBOL 'HIRE ME' DENGAN TEMA TECH */}
      <div className="flex items-center gap-4">
        {/* Status System (Dekorasi) */}
        <div className="hidden lg:flex flex-col items-end font-mono text-[8px] text-blue-500/50 leading-none">
          <span>SYSTEM: ACTIVE</span>
          <span>UPTIME: 99.9%</span>
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden bg-blue-600/10 border border-blue-500 text-blue-400 px-6 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all hover:bg-blue-600 hover:text-white"
        >
          <span className="relative z-10">Hire_Me</span>
          {/* Efek kilatan cahaya saat di-hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></div>
        </motion.button>
      </div>

      {/* 4. GLOW LINE DI BAWAH NAVBAR */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </motion.nav>
  );
};

export default Navbar;
