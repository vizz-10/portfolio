import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../lib/icons";
import { PROJECTS, type Project } from "../lib/constants";
import { staggerContainer, fadeUp } from "../lib/animations";
import ProjectModal from "./ProjectModal";
import TiltCard from "./TiltCard";

const PROJECT_GRADIENTS = [
  "from-[#7c3aed]/20 via-[#4f8ef7]/10 to-transparent",
  "from-[#06b6d4]/20 via-[#6366f1]/10 to-transparent",
  "from-[#f59e0b]/15 via-[#ec4899]/10 to-transparent",
];

const PROJECT_ACCENT = ["#7c3aed", "#06b6d4", "#f59e0b"];

// Minimal mockup visuals per project
function ProjectMockup({ id, accent }: { id: string; accent: string }) {
  if (id === "video-calling") {
    return (
      <div className="relative w-full h-full bg-[#08081a] rounded-xl overflow-hidden p-3">
        <div className="grid grid-cols-2 gap-2 h-full">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-gradient-to-br from-[#111130] to-[#0a0a20] border border-white/5 flex flex-col items-center justify-center gap-2 p-2"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: `${accent}30`, color: accent }}
              >
                {i === 0 ? "VM" : `U${i}`}
              </div>
              {i === 0 && (
                <div
                  className="flex gap-1 items-center px-1.5 py-0.5 rounded text-[8px] font-mono"
                  style={{ background: `${accent}20`, color: accent }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  GESTURE
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {["MIC", "CAM", "END"].map((btn, i) => (
              <div
                key={btn}
                className="w-6 h-6 rounded-full flex items-center justify-center text-[7px] font-mono"
                style={{
                  background: i === 2 ? "#ef444430" : `${accent}20`,
                  color: i === 2 ? "#ef4444" : accent,
                  border: `1px solid ${i === 2 ? "#ef444430" : `${accent}30`}`,
                }}
              >
                {btn[0]}
              </div>
            ))}
          </div>
          <div
            className="px-1.5 py-0.5 rounded text-[8px] font-mono"
            style={{ background: `${accent}15`, color: accent }}
          >
            AI ACTIVE
          </div>
        </div>
      </div>
    );
  }

  if (id === "ai-study-table") {
    return (
      <div className="relative w-full h-full bg-[#08081a] rounded-xl overflow-hidden p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          <span className="text-[9px] font-mono text-white/40 tracking-widest">AI STUDY TABLE</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {["DSA", "AI/ML", "SE", "DBMS", "OS", "CN"].map((sub, i) => (
            <div
              key={sub}
              className="rounded-lg p-1.5 text-center"
              style={{ background: `${accent}${i % 3 === 0 ? "25" : "12"}` }}
            >
              <p className="text-[8px] font-display font-bold" style={{ color: accent }}>
                {sub}
              </p>
              <div className="mt-1 h-0.5 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${[70, 45, 60, 30, 55, 40][i]}%`,
                    background: accent,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/6 p-2">
          <p className="text-[8px] font-mono text-white/30 mb-1">TODAY'S PLAN</p>
          {["DSA: Trees — 2h", "AI: Transformers — 1.5h", "SE: Design Patterns — 1h"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 py-0.5">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: accent }}
              />
              <span className="text-[8px] text-white/50">{t}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#08081a] rounded-xl overflow-hidden p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-mono text-white/40 tracking-widest">VIZZ.CO DASHBOARD</span>
        <div className="flex gap-1">
          {[accent, "#ffffff30"].map((c, i) => (
            <div
              key={i}
              className="px-1.5 py-0.5 rounded text-[7px] font-mono"
              style={{ background: `${c}20`, color: c }}
            >
              {i === 0 ? "ORDERS" : "ANALYTICS"}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { l: "Revenue", v: "₹1.2L" },
          { l: "Orders", v: "284" },
          { l: "Products", v: "156" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg p-2 bg-white/3 border border-white/5">
            <p className="text-[7px] text-white/30 font-mono">{s.l}</p>
            <p className="text-sm font-display font-bold" style={{ color: accent }}>
              {s.v}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/6 p-2">
        <p className="text-[8px] font-mono text-white/30 mb-1.5">RECENT PRODUCTS</p>
        {["Classic White Sneakers", "Denim Jacket", "Canvas Tote"].map((p, i) => (
          <div
            key={p}
            className="flex items-center justify-between py-0.5 border-b border-white/4 last:border-0"
          >
            <span className="text-[8px] text-white/50">{p}</span>
            <span className="text-[8px] font-mono" style={{ color: accent }}>
              {["₹2,499", "₹3,999", "₹899"][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="section-label">Projects</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 02</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Selected <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#8888aa] max-w-xl text-lg">
            Building products that solve real problems.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, i) => {
            const accent = PROJECT_ACCENT[i];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <TiltCard
                  className="group relative rounded-2xl border border-white/6 overflow-hidden hover:border-white/15 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(15,15,30,0.9) 0%, rgba(12,12,24,0.95) 100%)`,
                  }}
                >
                  {/* Gradient accent corner */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${PROJECT_GRADIENTS[i]} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                <div className="relative grid lg:grid-cols-[1fr_380px] gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    {/* Project number + category */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="font-display font-800 text-6xl leading-none opacity-20"
                        style={{ color: accent }}
                      >
                        {project.number}
                      </span>
                      <div>
                        <p className="text-xs font-mono text-white/20 tracking-widest uppercase mb-1">
                          {project.date}
                        </p>
                        <p
                          className="text-xs font-mono tracking-wide"
                          style={{ color: `${accent}90` }}
                        >
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-800 text-2xl sm:text-3xl text-white leading-tight mb-2">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-[#8888aa] text-sm mb-4">{project.subtitle}</p>
                    )}

                    {/* Description */}
                    <p className="text-[#8888aa] leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 text-xs rounded-lg border text-white/40"
                          style={{ borderColor: `${accent}20` }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono rounded border border-white/6 text-white/30"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="px-2 py-0.5 text-xs font-mono text-white/20">
                          +{project.tech.length - 6}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${accent}30, ${accent}15)`,
                          border: `1px solid ${accent}40`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${accent}50, ${accent}30)`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${accent}30, ${accent}15)`;
                        }}
                      >
                        View Case Study
                        <ArrowRight size={14} />
                      </button>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white/60 border border-white/8 rounded-xl hover:border-white/20 hover:text-white transition-all"
                        >
                          <GithubIcon size={14} />
                          GitHub
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/20 border border-white/5 rounded-xl cursor-default">
                          <GithubIcon size={14} />
                          Coming Soon
                        </span>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/60 border border-white/8 rounded-xl hover:border-white/20 hover:text-white transition-all"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="hidden lg:flex items-center justify-center p-6 border-l border-white/5">
                    <div className="w-full aspect-video max-h-56">
                      <ProjectMockup id={project.id} accent={accent} />
                    </div>
                  </div>
                </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case study modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
