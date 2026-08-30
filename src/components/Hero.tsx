import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../lib/icons";
import { CONTACT } from "../lib/constants";
import Magnetic from "./Magnetic";
import Particles from "./Particles";
import { usePrefersReducedMotion } from "../hooks/useMedia";
import profileImage from "../assets/profile.jpg";

const FLOAT_CARDS = [
  { label: "AI / ML", sub: "Engineering Intelligence", top: "8%", right: "-5%", delay: 0 },
  { label: "FULL STACK", sub: "End-to-End Products", top: "55%", right: "-8%", delay: 0.15 },
  { label: "200+ Problems", sub: "LeetCode & Beyond", top: "78%", left: "-5%", delay: 0.3 },
  { label: "SWE", sub: "Software Engineering", top: "18%", left: "-8%", delay: 0.45 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const portraitX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* Particles background */}
      <Particles />

      {/* Background radial glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(79,142,247,0.06) 40%, transparent 70%)",
          x: glowX,
          y: glowY,
        }}
      />

      {/* Decorative horizontal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/4 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/4 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7]" />
              <span className="section-label">Computer Science × AI × Software Engineering</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-display-xl text-white mb-6"
            >
              {["BUILDING", "INTELLIGENT", "DIGITAL", "PRODUCTS."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`block leading-[0.92] ${i === 3 ? "gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-[#8888aa] text-lg leading-relaxed max-w-lg mb-10"
            >
              I'm Vishnu Murthy, a Computer Science Engineering student focused on software
              engineering, artificial intelligence and full-stack product development.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Magnetic>
                <button
                  onClick={scrollToProjects}
                  className="group px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-300 glow-violet flex items-center gap-2"
                >
                  Explore My Work
                  <ArrowDown
                    size={14}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </button>
              </Magnetic>
              <a
                href="#"
                aria-label="Download Resume (not yet available)"
                className="px-6 py-3 text-sm font-semibold text-white/70 border border-white/10 rounded-xl hover:border-white/25 hover:text-white transition-all duration-300 cursor-not-allowed opacity-60"
                onClick={(e) => e.preventDefault()}
              >
                Resume — Coming Soon
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex items-center gap-5"
            >
              <span className="text-xs font-mono text-white/25 tracking-widest uppercase">
                Find me
              </span>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Portrait wrapper */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Portrait container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/8 bg-[#0f0f1e]">
                {/* Portrait image */}
                <img
                  src={profileImage}
                  alt="Vishnu Murthy"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
                {/* Fallback placeholder */}
                <div className="fallback absolute inset-0 bg-gradient-to-br from-[#0f0f1e] via-[#141430] to-[#0c0c20] flex flex-col items-center justify-center hidden">
                  <div className="relative">
                    <div className="absolute inset-0 blur-2xl bg-[#7c3aed]/40 rounded-full scale-150" />
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f8ef7] flex items-center justify-center">
                      <span className="text-4xl font-display font-800 text-white tracking-tight">
                        VM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07070e] to-transparent z-10" />

                {/* Top gradient */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#07070e]/60 to-transparent z-10" />
              </div>

              {/* Decorative border dots */}
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#7c3aed]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#4f8ef7]" />
            </motion.div>

            {/* Floating cards */}
            {FLOAT_CARDS.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  reduce
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -8, 0] }
                }
                transition={
                  reduce
                    ? { duration: 0.6, delay: 0.9 + card.delay }
                    : {
                        opacity: { duration: 0.6, delay: 0.9 + card.delay },
                        scale: { duration: 0.6, delay: 0.9 + card.delay },
                        y: { duration: 4.2, delay: 1.2 + card.delay, repeat: Infinity, ease: "easeInOut" },
                      }
                }
                style={{
                  position: "absolute",
                  top: card.top,
                  right: card.right,
                  left: card.left,
                }}
                className="glass px-3 py-2 rounded-xl hidden sm:block"
              >
                <p className="text-white text-xs font-display font-700 whitespace-nowrap">
                  {card.label}
                </p>
                <p className="text-white/35 text-[10px] font-mono whitespace-nowrap">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
