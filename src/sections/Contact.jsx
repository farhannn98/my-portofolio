import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-8 overflow-hidden bg-transparent"
    >
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Lingkaran Sinyal / Wave */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 2, opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 bg-slate-900/40 border border-white/10 rounded-[2rem] backdrop-blur-xl shadow-2xl text-center"
        >
          {/* Ornamen Header Contact */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-6 py-2 pb-3 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">
              Secure_Connection_Established
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-slate-400 bg-clip-text text-transparent">
            Mari Berdiskusi!
          </h2>

          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
            Punya ide proyek revolusioner atau sekadar ingin menyapa? Transmisi
            pesan kamu sekarang dan mari kita bangun masa depan digital bersama.
          </p>

          <div className="flex flex-col items-center gap-6">
            {/* Tombol dengan Efek Glow */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:emailkamu@gmail.com"
              className="relative group bg-blue-600 text-white px-10 py-4 rounded-2xl font-black tracking-widest transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                SEND_MESSAGE <span className="text-xl">✉️</span>
              </span>
              {/* Efek Kilatan Cahaya */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.a>

            {/* Status Indicator */}
            <div className="flex items-center gap-4 mt-4 font-mono text-[10px] text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>ENCRYPTED</span>
              </div>
              <div className="w-[1px] h-3 bg-slate-800"></div>
              <span>RESPONSE_TIME: &lt; 24H</span>
            </div>
          </div>

          {/* Ornamen Pojok (Tech Corners) */}
          <div className="absolute bottom-6 left-6 opacity-20 hidden md:block">
            <div className="font-mono text-[8px] text-left">
              <p>LATENCY: 24ms</p>
              <p>PROTOCOL: SMTP_V3</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 opacity-20 hidden md:block">
            <div className="w-12 h-1 bg-blue-500/50 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
