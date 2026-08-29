import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { answerPortfolioQuestion, SUGGESTED_QUESTIONS } from "../lib/portfolioQA";
import { useFocusTrap } from "../hooks/useFocusTrap";

export default function AskPortfolio() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  useFocusTrap(open, panelRef);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setQuery(q);
    setAnswer(answerPortfolioQuestion(q));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0c18]/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.25)] backdrop-blur-xl hover:border-[#6366f1]/50 transition-colors"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <MessageCircle size={16} />
        <span className="hidden sm:inline">Ask My Portfolio</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ask-portfolio-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-5 z-[95] w-[min(100vw-2rem,400px)] glass rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p id="ask-portfolio-title" className="font-display font-700 text-white">
                  Ask My Portfolio
                </p>
                <p className="text-xs text-white/35 mt-1">
                  Answers from public site content only. No API key required.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white"
                aria-label="Close assistant"
              >
                <X size={14} />
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-lg border border-white/8 text-white/50 hover:text-white hover:border-[#6366f1]/40 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(query);
              }}
              className="flex gap-2"
            >
              <label htmlFor={inputId} className="sr-only">
                Question
              </label>
              <input
                id={inputId}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about Vishnu..."
                className="flex-1 px-3 py-2.5 rounded-xl bg-[#07070e] border border-white/8 text-sm text-white outline-none focus:border-[#6366f1]/60"
              />
              <button
                type="submit"
                className="px-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7] text-white"
                aria-label="Ask"
              >
                <Send size={14} />
              </button>
            </form>

            {answer && (
              <p className="mt-4 text-sm text-[#c8c8dd] leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto">
                {answer}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
