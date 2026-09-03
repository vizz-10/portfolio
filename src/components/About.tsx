import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleOnScroll } from "../lib/animations";
import { CURRENTLY_EXPLORING } from "../lib/constants";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="section-label">About</span>
              <span className="flex-1 h-px bg-white/6" />
              <span className="text-xs font-mono text-white/15">// 01</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-display-lg text-white mb-10">
              Engineering with
              <br />
              <span className="gradient-text">Curiosity.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-5 text-[#8888aa] text-lg leading-relaxed">
              <p>
                I'm a Computer Science Engineering student at Lovely Professional University with
                a strong interest in software engineering, artificial intelligence and full-stack
                development.
              </p>
              <p>
                I enjoy turning ideas into functional digital products — from AI-powered
                applications and real-time communication platforms to intelligent study tools and
                e-commerce systems.
              </p>
              <p>
                My current focus is strengthening my foundations in software engineering, data
                structures and algorithms, system development and modern AI technologies.
              </p>
            </motion.div>

            {/* Location & status */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {[
                "Vijayawada, AP, India",
                "Available for Internships",
                "B.Tech CSE — LPU",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-lg border border-white/8 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Currently Exploring */}
          <motion.div
            variants={scaleOnScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-xs font-mono tracking-widest uppercase text-white/40">
                  Currently Exploring
                </span>
              </div>

              <div className="space-y-3">
                {CURRENTLY_EXPLORING.map((topic, i) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/3 transition-colors duration-300 cursor-default"
                  >
                    <span className="text-xs font-mono text-[#6366f1] w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {topic}
                    </span>
                    <span className="ml-auto text-white/10 group-hover:text-[#6366f1] transition-colors text-xs">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs font-mono text-white/20 leading-relaxed">
                  Actively building projects across these domains.
                  <br />
                  Open to collaboration and learning opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
