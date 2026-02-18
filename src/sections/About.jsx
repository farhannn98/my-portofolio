import { motion } from "framer-motion";

const About = () => {
  // Update: Array object untuk menyertakan link logo/icon
  const skills = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Framer Motion",
      icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png",
    }, // Custom URL
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-8 md:px-20 overflow-hidden"
    >
      {/* 1. Efek Garis Scanner Biru */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)] pointer-events-none z-0"
      />

      {/* 2. Partikel Kotak Cyber */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500/10 border border-blue-500/20 w-10 h-10 rounded-lg backdrop-blur-sm z-0"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 500,
            opacity: 0.1,
            rotate: 0,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 90, 180],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* KIRI: Text Content */}
          <div>
            <h2 className="text-4xl font-black mb-6 flex items-center gap-4 text-white">
              <span className="text-blue-500 font-mono text-2xl">01.</span>
              About Me
              <div className="h-[1px] flex-grow bg-blue-500/30"></div>
            </h2>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Halo! Saya seorang pengembang web yang fokus pada{" "}
                <span className="text-white font-medium italic">
                  Frontend Development
                </span>
                . Saya suka membangun antarmuka yang bersih di atas baris kode
                yang kompleks.
              </p>
              <p>
                Bagi saya, coding bukan cuma soal fungsi, tapi juga soal
                estetika. Saya sangat menyukai{" "}
                <span className="text-blue-400">Tailwind</span> dan
                <span className="text-blue-400 ml-1">Framer Motion</span> untuk
                menciptakan pengalaman interaktif.
              </p>
            </div>

            {/* --- UPDATE: TECH STACK DENGAN LOGO --- */}
            <div className="mt-8">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-5 font-mono">
                Tech_Stack //:
              </p>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.15)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    className="flex items-center gap-3 px-4 py-2 border border-blue-500/20 rounded-xl bg-slate-900/40 backdrop-blur-md transition-colors cursor-default group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    />
                    <span className="text-sm font-mono text-blue-100 uppercase tracking-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* KANAN: Tech Card (Transparan) */}
          <motion.div
            whileHover={{ y: -5, rotateY: 5 }}
            className="relative p-8 bg-slate-900/60 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl"
          >
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500"></div>

            <div className="space-y-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>

              <div className="font-mono text-sm space-y-2">
                <p className="text-blue-400">
                  const <span className="text-white">Profile</span> = {"{"}
                </p>
                <p className="pl-4 text-slate-400">
                  name: <span className="text-green-400">'Farhan'</span>,
                </p>
                <p className="pl-4 text-slate-400">
                  passion:{" "}
                  <span className="text-purple-400">'Frontend Developer'</span>,
                </p>
                <p className="pl-4 text-slate-400">
                  coffee: <span className="text-yellow-400">true</span>
                </p>
                <p className="text-blue-400">{"}"};</p>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono">
                <p className="text-[10px] text-blue-500 mb-1 tracking-widest uppercase">
                  System_Optimization
                </p>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
