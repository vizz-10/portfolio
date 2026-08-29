import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { NAV_LINKS } from "../lib/constants";
import { useFocusTrap } from "../hooks/useFocusTrap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollProgressSpring = useSpring(scrollProgress, { stiffness: 100, damping: 30 });
  useFocusTrap(menuOpen, menuRef);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(7,7,14,0.85)] backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c3aed] via-[#4f8ef7] to-[#06b6d4]"
          style={{ scaleX: scrollProgressSpring, transformOrigin: "left" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4f8ef7] flex items-center justify-center text-white font-display font-bold text-sm tracking-wide glow-violet">
              VM
            </div>
            <span className="font-display font-700 text-sm tracking-widest text-white/90 hidden sm:block uppercase">
              Vishnu Murthy
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 relative py-1 focus-visible:outline-none ${
                    isActive ? "text-white" : "text-white/40 hover:text-white/80"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:vishnumurthysonchuri@gmail.com"
              className="px-4 py-2 text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 focus-visible:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-px w-6 bg-white/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white/70 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07070e]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl sm:text-3xl font-display font-800 text-white/80 hover:text-white tracking-tight transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              href="mailto:vishnumurthysonchuri@gmail.com"
              className="mt-2 px-6 py-3 text-sm font-mono tracking-widest uppercase text-white border border-[#7c3aed]/50 rounded-xl hover:border-[#7c3aed] transition-colors"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
