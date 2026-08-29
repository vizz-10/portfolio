import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, SKILL_ICONS } from "../lib/constants";
import { staggerContainer, fadeUp, scaleOnScroll } from "../lib/animations";

const SKILL_NOTES: Record<string, string> = {
  Python: "Used in AI tooling and backend-adjacent scripts.",
  Java: "Core language focus alongside DSA practice.",
  JavaScript: "Product UI and Node services.",
  TypeScript: "Typed frontend across major projects.",
  "React.js": "Interfaces for calling, study, and commerce products.",
  "Node.js": "API servers for every listed full-stack project.",
  "Express.js": "REST and realtime signaling layers.",
  MongoDB: "Primary document store in project architectures.",
  "Machine Learning": "Browser and API-assisted product features, not isolated notebooks.",
  "Generative AI": "Study planning and recommendation-style features.",
  LLMs: "Prompted structured output for product workflows.",
  WebRTC: "Peer media in the video calling platform.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Programming: "#7c3aed",
  Frontend: "#4f8ef7",
  Backend: "#06b6d4",
  "AI / ML": "#a855f7",
  Databases: "#f59e0b",
  Tools: "#10b981",
  "Soft Skills": "#ec4899",
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(SKILLS);

  return (
    <section id="skills" className="py-28 lg:py-36">
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
            <span className="section-label">Skills</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 03</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Tech <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#8888aa] max-w-xl text-lg">
            Technologies I work with across the full development stack.
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-lg border transition-all duration-300 ${
              activeCategory === null
                ? "border-[#6366f1]/60 text-[#6366f1] bg-[#6366f1]/10"
                : "border-white/8 text-white/30 hover:border-white/15 hover:text-white/50"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-lg border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-opacity-60 text-opacity-100"
                  : "border-white/8 text-white/30 hover:border-white/15 hover:text-white/50"
              }`}
              style={
                activeCategory === cat
                  ? {
                      borderColor: CATEGORY_COLORS[cat],
                      color: CATEGORY_COLORS[cat],
                      backgroundColor: `${CATEGORY_COLORS[cat]}18`,
                    }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-10">
          {categories
            .filter((cat) => !activeCategory || cat === activeCategory)
            .map((category, catIdx) => (
              <motion.div
                key={category}
                variants={scaleOnScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: catIdx * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: CATEGORY_COLORS[category] }}
                  >
                    {category}
                  </span>
                  <span
                    className="flex-1 h-px opacity-20"
                    style={{ background: CATEGORY_COLORS[category] }}
                  />
                </div>

                <div className="flex flex-wrap gap-3 overflow-visible">
                  {(SKILLS as Record<string, string[]>)[category].map((skill, i) => {
                    const icon = SKILL_ICONS[skill];
                    const isHovered = hoveredSkill === skill;

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        onHoverStart={() => setHoveredSkill(skill)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/6 cursor-default transition-all duration-300 hover:border-opacity-40 hover:bg-white/3"
                        style={
                          isHovered
                            ? {
                                borderColor: `${CATEGORY_COLORS[category]}60`,
                                boxShadow: `0 0 20px ${CATEGORY_COLORS[category]}20`,
                              }
                            : {}
                        }
                      >
                        {icon ? (
                          <img
                            src={icon}
                            alt={skill}
                            className={`w-4 h-4 object-contain transition-transform duration-300 ${
                              isHovered ? "scale-110" : ""
                            }`}
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <span
                            className="w-4 h-4 flex items-center justify-center text-xs"
                            style={{ color: CATEGORY_COLORS[category] }}
                          >
                            ◆
                          </span>
                        )}
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                          {skill}
                        </span>
                        {SKILL_NOTES[skill] && isHovered && (
                          <span className="absolute left-0 top-[calc(100%+8px)] z-20 w-56 px-3 py-2 rounded-lg border border-white/10 bg-[#0c0c18] text-[11px] leading-relaxed text-white/60 shadow-xl">
                            {SKILL_NOTES[skill]}
                          </span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
