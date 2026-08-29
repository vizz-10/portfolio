import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { EDUCATION } from "../lib/constants";
import { staggerContainer, fadeUp, scaleOnScroll } from "../lib/animations";

const STATUS_COLORS: Record<string, string> = {
  current: "#4ade80",
  completed: "#6366f1",
};

export default function Education() {
  return (
    <section id="education" className="py-28 lg:py-36">
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
            <span className="section-label">Education</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 06</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-5 sm:left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#6366f1]/40 via-[#6366f1]/15 to-transparent"
          />

          {EDUCATION.map((edu, i) => {
            const color = STATUS_COLORS[edu.status];
            return (
              <motion.div
                key={edu.id}
                variants={scaleOnScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12 }}
                className="relative pl-14 sm:pl-16 mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border"
                  style={{
                    background: `${color}10`,
                    borderColor: `${color}30`,
                  }}
                >
                  <GraduationCap size={18} style={{ color }} />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: color }}
                        />
                        <span
                          className="text-xs font-mono tracking-widest uppercase"
                          style={{ color }}
                        >
                          {edu.status === "current" ? "Current" : "Completed"}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-lg text-white">
                        {edu.institution}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-mono border border-white/6 rounded-lg text-white/25">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-[#8888aa] text-sm mb-3">{edu.degree}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/25">
                      <MapPin size={11} />
                      {edu.location}
                    </div>
                    {edu.percentage && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono text-white/25">Score:</span>
                        <span
                          className="text-xs font-mono font-600 px-2 py-0.5 rounded"
                          style={{ color, background: `${color}15` }}
                        >
                          {edu.percentage}
                        </span>
                      </div>
                    )}
                    <span
                      className="px-2 py-0.5 text-xs font-mono rounded border border-white/6 text-white/30"
                    >
                      {edu.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
