import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    id: "input",
    label: "INPUT",
    sub: "Idea / Problem",
    icon: "◈",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    id: "think",
    label: "THINK",
    sub: "AI + Engineering",
    icon: "⬡",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    id: "build",
    label: "BUILD",
    sub: "Code + Systems",
    icon: "◻",
    color: "#4f8ef7",
    glow: "rgba(79,142,247,0.3)",
  },
  {
    id: "ship",
    label: "SHIP",
    sub: "Working Product",
    icon: "◆",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
  },
];

const NODES = [
  {
    id: "frontend",
    label: "Frontend",
    tech: "React.js, TypeScript, Tailwind CSS",
    purpose: "Interfaces people actually use.",
    used: "Video calling UI, study planner dashboards, and the vizz.co storefront.",
  },
  {
    id: "api",
    label: "API",
    tech: "REST, JWT, Socket.io",
    purpose: "Contracts between clients, realtime events, and services.",
    used: "Auth and signaling for WebRTC; planner and commerce APIs.",
  },
  {
    id: "backend",
    label: "Backend",
    tech: "Node.js, Express.js",
    purpose: "Application logic, sessions, and orchestration.",
    used: "Express servers behind every major project in this portfolio.",
  },
  {
    id: "database",
    label: "Database",
    tech: "MongoDB, MySQL, Supabase",
    purpose: "Durable product and user data.",
    used: "Profiles, orders, study plans, and session-related records.",
  },
  {
    id: "ai",
    label: "AI Services",
    tech: "OpenAI API, MediaPipe, TensorFlow.js, LLMs",
    purpose: "Intelligence at the edge of a product, not a demo in isolation.",
    used: "Gesture recognition in-browser, study-plan generation, product recommendations.",
  },
];

export default function AISystemViz() {
  const [active, setActive] = useState<(typeof NODES)[number] | null>(NODES[0]);

  return (
    <section className="py-20 overflow-hidden" aria-labelledby="system-viz-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span className="section-label">Process</span>
          </div>

          <p id="system-viz-heading" className="text-center text-xs font-mono tracking-widest uppercase text-white/20 mb-12">
            AI SYSTEM — Engineering Approach
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {STEPS.map((step, i) => (
              <div key={step.id} className="flex flex-col sm:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="relative group"
                >
                  <div
                    className="w-44 p-5 rounded-2xl border border-white/6 text-center transition-all duration-300 group-hover:border-white/20"
                    style={{
                      background: `radial-gradient(ellipse at top, ${step.glow.replace("0.3", "0.08")} 0%, transparent 60%)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                      style={{ background: step.glow.replace("0.3", "0.15") }}
                    />
                    <span className="block text-3xl mb-3 relative z-10" style={{ color: step.color }}>
                      {step.icon}
                    </span>
                    <p className="font-display font-800 text-base tracking-widest relative z-10" style={{ color: step.color }}>
                      {step.label}
                    </p>
                    <p className="text-xs font-mono text-white/30 mt-1.5 relative z-10">{step.sub}</p>
                  </div>
                </motion.div>

                {i < STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="flex items-center mx-2 my-3 sm:my-0"
                  >
                    <div className="hidden sm:flex items-center gap-0">
                      <div className="w-8 h-px bg-gradient-to-r from-white/10 to-white/5" />
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" className="text-white/20">
                        <path d="M1 1l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="sm:hidden flex flex-col items-center gap-0">
                      <div className="w-px h-5 bg-gradient-to-b from-white/10 to-white/5" />
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-white/20">
                        <path d="M1 1l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 text-xs font-mono text-white/15 tracking-wider mb-16"
          >
            My approach to turning ideas into working software
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs font-mono tracking-widest uppercase text-white/25 mb-8">
              System layers — select a node
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {NODES.map((node, i) => (
                <div key={node.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setActive(node)}
                    aria-pressed={active?.id === node.id}
                    className={`px-4 py-3 rounded-xl border text-sm font-display font-700 transition-all duration-300 ${
                      active?.id === node.id
                        ? "border-[#6366f1]/60 text-white bg-[#6366f1]/10"
                        : "border-white/8 text-white/50 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {node.label}
                  </button>
                  {i < NODES.length - 1 && (
                    <span className="hidden sm:inline mx-2 text-white/20 text-xs" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-8 glass rounded-2xl p-6"
                >
                  <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-2">{active.label}</p>
                  <p className="text-white font-medium mb-3">{active.purpose}</p>
                  <p className="text-sm text-[#8888aa] mb-4">{active.used}</p>
                  <p className="text-xs font-mono text-white/35">{active.tech}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
