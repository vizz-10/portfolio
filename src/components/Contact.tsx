import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../lib/icons";
import { CONTACT } from "../lib/constants";
import { staggerContainer, fadeUp } from "../lib/animations";

interface FormState {
  name: string;
  email: string;
  message: string;
  company: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return;
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        });
        if (!res.ok) throw new Error("Form service error");
        setStatus("sent");
        setForm({ name: "", email: "", message: "", company: "" });
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field !== "company" && errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="section-label">Contact</span>
            <span className="flex-1 h-px bg-white/6" />
            <span className="text-xs font-mono text-white/15">// 07</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-display-lg text-white">
            Let's Build Something
            <br />
            <span className="gradient-text">Useful.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#8888aa] max-w-xl text-lg">
            Open to internships, software engineering opportunities, collaborations and interesting
            technical projects.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[
              {
                Icon: Mail,
                label: "Email",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                Icon: Phone,
                label: "Phone",
                value: CONTACT.phone,
                href: `tel:${CONTACT.phone}`,
              },
              {
                Icon: MapPin,
                label: "Location",
                value: CONTACT.location,
                href: null,
              },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 glass rounded-2xl group">
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#6366f1]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/25 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-white transition-colors text-sm break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { Icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
                { Icon: LinkedinIcon, href: CONTACT.linkedin, label: "LinkedIn" },
                { Icon: GithubIcon, href: CONTACT.github, label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl text-white/40 hover:text-white hover:border-white/20 border border-white/6 transition-all duration-300 text-sm font-semibold"
                >
                  <Icon size={16} />
                  <span className="text-xs font-mono">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-white/35 mb-2 tracking-wide">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0c0c18] border text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:border-[#6366f1]/60 focus:bg-[#0f0f22] ${
                    errors.name ? "border-red-500/50" : "border-white/8"
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-white/35 mb-2 tracking-wide">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0c0c18] border text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:border-[#6366f1]/60 focus:bg-[#0f0f22] ${
                    errors.email ? "border-red-500/50" : "border-white/8"
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-white/35 mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell me about your project, opportunity or idea..."
                  rows={5}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#0c0c18] border text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:border-[#6366f1]/60 focus:bg-[#0f0f22] resize-none ${
                    errors.message ? "border-red-500/50" : "border-white/8"
                  }`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "sent" && (
                <div className="flex items-center gap-3 py-4 text-green-400">
                  <CheckCircle size={20} />
                  <div>
                    <p className="font-semibold text-sm">Message sent</p>
                    <p className="text-xs text-green-400/60">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {status === "mailto" && (
                <div className="flex items-start gap-3 py-4 text-[#4f8ef7]">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-white">Opening your email app</p>
                    <p className="text-xs text-white/45 mt-1">
                      Nothing was sent from this website. If your mail client did not open, write to{" "}
                      <a className="underline" href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle size={16} />
                  Could not reach the form service. Please email {CONTACT.email} directly.
                </p>
              )}

              {status !== "sent" && (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7] text-white font-semibold rounded-xl hover:opacity-90 active:opacity-75 disabled:opacity-60 transition-all duration-300 glow-violet flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              )}

              <p className="text-xs font-mono text-white/15 text-center">
                {import.meta.env.VITE_FORMSPREE_ID
                  ? "Messages go through Formspree when configured."
                  : "No form backend is configured — this opens your email client instead of pretending a message was sent."}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
