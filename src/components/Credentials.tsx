import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CREDENTIALS } from "../lib/constants";
import { staggerContainer, fadeUp, scaleOnScroll } from "../lib/animations";

const CARD_COLORS = ["#7c3aed", "#4f8ef7", "#06b6d4", "#f59e0b", "#10b981"];

export default function Credentials() {
  return (
    <section id="credentials" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="section-label">Credentials</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 05</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Learning Beyond
            <br />
            <span className="gradient-text">the Classroom</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#8888aa] max-w-xl text-lg">
            Industry certifications and job simulations completed alongside coursework.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CREDENTIALS.map((cred, i) => {
            const accent = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <motion.div
                key={cred.id}
                variants={scaleOnScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="relative group rounded-2xl border border-white/6 p-7 overflow-hidden transition-all duration-400 hover:border-opacity-40"
                style={{ background: "#0c0c18" }}
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top right, ${accent}50 0%, transparent 65%)`,
                  }}
                />

                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-display font-800 text-5xl leading-none opacity-15"
                    style={{ color: accent }}
                  >
                    {cred.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                  >
                    <Award size={18} style={{ color: accent }} />
                  </div>
                </div>

                {/* Organization */}
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: `${accent}90` }}>
                  {cred.org}
                </p>

                {/* Title */}
                <h3 className="font-display font-700 text-lg text-white leading-snug mb-4">
                  {cred.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-2 py-1 text-xs font-mono rounded-lg border border-white/6 text-white/30">
                    {cred.type}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-white/25">{cred.issued}</span>
                  {cred.url ? (
                    <a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors"
                    >
                      View Credential
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-white/15 cursor-default">
                      Credential on file
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
