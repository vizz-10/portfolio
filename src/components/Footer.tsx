import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../lib/icons";
import { CONTACT } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4f8ef7] flex items-center justify-center text-white font-display font-bold text-xs">
                VM
              </div>
              <span className="font-display font-700 text-sm text-white/80 tracking-widest uppercase">
                Vishnu Murthy Sonchuri
              </span>
            </div>
            <p className="text-xs font-mono text-white/20 tracking-wider">
              Computer Science × AI × Software Engineering
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/25 hover:text-white transition-colors duration-300"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/25 hover:text-white transition-colors duration-300"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="text-white/25 hover:text-white transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs font-mono text-white/15">© 2026 Vishnu Murthy Sonchuri</p>
            <p className="text-xs font-mono text-white/10">Built with curiosity.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
