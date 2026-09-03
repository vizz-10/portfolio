import { motion } from "framer-motion";
import { CURRENT_FOCUS } from "../lib/constants";
import { usePrefersReducedMotion } from "../hooks/useMedia";

export default function CurrentFocus() {
  const reduce = usePrefersReducedMotion();
  const items = [...CURRENT_FOCUS, ...CURRENT_FOCUS];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          <span className="section-label">Currently Building My Edge</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07070e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07070e] to-transparent z-10 pointer-events-none" />

        <div className={reduce ? "flex items-center gap-6 px-8 overflow-x-auto pb-4" : "flex overflow-hidden"}>
          <div className={reduce ? "flex items-center gap-6" : "flex items-center gap-6 px-8 animate-marquee hover:[animation-play-state:paused]"}>
            {items.map((item, i) => (
              <motion.div
                key={`${item.number}-${i}`}
                className="flex-shrink-0 group flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/6 hover:border-[#6366f1]/30 hover:bg-[#6366f1]/5 transition-all duration-300"
              >
                <span className="text-xs font-mono text-[#6366f1]/50 group-hover:text-[#6366f1] transition-colors">
                  {item.number}
                </span>
                <span className="font-display font-700 text-base text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-white/10 group-hover:text-[#6366f1]/40 transition-colors text-sm">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
