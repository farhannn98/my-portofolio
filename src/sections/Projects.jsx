import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    // Kita pastikan bg-transparent agar grid di App.jsx terlihat jelas
    <section
      id="projects"
      className="relative py-20 px-8 md:px-20 bg-transparent overflow-hidden"
    >
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Efek Radar Pulse (Satu Tema dengan Hero) */}
        <motion.div
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.2, 0.1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full"
        />

        {/* 2. Floating Code Bits (Partikel Teknologi yang Melayang) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              y: [0, -200],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 7 + 5,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute font-mono text-[10px] text-blue-400/30"
            style={{ left: `${i * 18}%`, bottom: "0%" }}
          >
            {`0x${Math.random().toString(16).slice(2, 6).toUpperCase()}_LOG`}
          </motion.div>
        ))}

        {/* 3. Soft Glow (Agar grid terlihat lebih dalam) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black inline-flex items-center gap-4">
            <span className="text-blue-500 font-mono text-2xl">02.</span>
            My Projects
            <div className="h-[1px] w-20 md:w-40 bg-blue-500/30"></div>
          </h2>
          <p className="text-slate-500 mt-2 font-mono text-xs uppercase tracking-[0.3em]">
            {"// Initializing_Gallery.sys"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-blue-500/50">
                    #00{index + 1}
                  </span>
                </div>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600/10 hover:bg-blue-600 px-5 py-2.5 rounded-xl border border-blue-600/50 transition-all"
                  >
                    View Project <span>→</span>
                  </a>

                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                  </div>
                </div>
              </div>

              {/* Hover Scanline (Efek Garis Pemindai) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/40 shadow-[0_0_15px_#3b82f6] group-hover:animate-scan"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
