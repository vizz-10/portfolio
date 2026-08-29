import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../lib/constants";
import { useFocusTrap } from "../hooks/useFocusTrap";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const SECTIONS = [
  { key: "overview", num: "01", label: "Overview" },
  { key: "problem", num: "02", label: "Problem" },
  { key: "solution", num: "03", label: "Approach" },
  { key: "architecture", num: "04", label: "Architecture" },
  { key: "features", num: "05", label: "Features" },
  { key: "challenges", num: "07", label: "Challenges" },
  { key: "learned", num: "08", label: "Result / What I Learned" },
] as const;

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(Boolean(project), dialogRef);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handler);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-2xl" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0c0c18] border border-white/8 rounded-2xl overflow-hidden shadow-2xl mb-8"
            onClick={(e) => e.stopPropagation()}
            ref={dialogRef}
          >
            {/* Header */}
            <div className="p-8 border-b border-white/6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[#6366f1] tracking-widest">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs font-mono text-white/20">/ CASE STUDY</span>
                  </div>
                  <h2 id="case-study-title" className="font-display font-800 text-2xl sm:text-3xl text-white leading-tight">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-[#8888aa] mt-1">{project.subtitle}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 text-xs font-mono text-white/30 border border-white/6 rounded">
                      {project.date}
                    </span>
                    <span className="px-2 py-1 text-xs font-mono text-[#7c3aed]/70 border border-[#7c3aed]/20 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-10">
              {SECTIONS.map((s) => {
                const val = project[s.key as keyof Project];
                if (!val) return null;
                return (
                  <div key={s.key}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[#6366f1]">{s.num}</span>
                      <span className="text-sm font-display font-700 text-white uppercase tracking-widest">
                        {s.label}
                      </span>
                      <span className="flex-1 h-px bg-white/5" />
                    </div>

                    {Array.isArray(val) ? (
                      s.key === "architecture" ? (
                        <div className="flex flex-wrap gap-2">
                          {(val as string[]).map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/6"
                            >
                              {i < (val as string[]).length - 1 && (
                                <div className="flex items-center gap-1">
                                  <span className="text-xs font-mono text-[#6366f1]">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                </div>
                              )}
                              <span className="text-sm text-white/70">{item}</span>
                              {i < (val as string[]).length - 1 && (
                                <span className="text-white/20 text-xs ml-1">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {(val as string[]).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-[#8888aa] text-sm leading-relaxed"
                            >
                              <span className="text-[#6366f1] mt-0.5 flex-shrink-0">◆</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    ) : (
                      <p className="text-[#8888aa] text-sm leading-relaxed">{val as string}</p>
                    )}
                  </div>
                );
              })}

              {/* Tech stack */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[#6366f1]">06</span>
                  <span className="text-sm font-display font-700 text-white uppercase tracking-widest">
                    Technology
                  </span>
                  <span className="flex-1 h-px bg-white/5" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-mono text-white/60 border border-white/8 rounded-lg bg-white/3"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-sm font-semibold text-white border border-white/10 rounded-xl hover:border-white/25 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7] rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
