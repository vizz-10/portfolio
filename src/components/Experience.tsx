import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../lib/constants";
import { staggerContainer, fadeUp, scaleOnScroll } from "../lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-36">
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
            <span className="section-label">Experience</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 04</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Beyond the <span className="gradient-text">Code</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#7c3aed]/40 via-[#4f8ef7]/20 to-transparent"
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={scaleOnScroll}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f8ef7] flex items-center justify-center glow-violet">
                <span className="text-white font-mono font-bold text-xs">R</span>
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-7 sm:p-8 hover:border-white/12 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display font-800 text-xl text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-[#6366f1] font-medium text-sm">{exp.role}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/30">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/30">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-[#8888aa] leading-relaxed mb-6">{exp.description}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {exp.highlights.map((h, j) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-white/55"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[#7c3aed]/25 text-[#7c3aed]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
