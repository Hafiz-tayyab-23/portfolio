"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Calendar,
  Copy,
  Check,
  Download,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "@/components/shared/SectionWrapper";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Replace with your actual form submission logic after deployment
    await new Promise((r) => setTimeout(r, 1500));

    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSending(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: personalInfo.social.email,
      color: "#3B82F6",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@" + personalInfo.social.github.split("/").pop(),
      href: personalInfo.social.github,
      color: "#E8EAF6",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.social.linkedin,
      color: "#0077B5",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#10B981",
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's Build Something"
      description="Have an opportunity, a project, or just want to connect? I respond to every message within 24 hours."
      glowColor="59,130,246"
      glowPosition="left"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-12">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Availability */}
          {personalInfo.availability && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-emerald-400 text-sm font-medium">
                {personalInfo.availabilityText} — Ready for internships &
                freelance projects
              </p>
            </div>
          )}

          <p className="text-[var(--muted-foreground)] leading-relaxed">
            I&apos;m always interested in new opportunities, whether it&apos;s a
            software engineering internship, exciting startup, research project,
            or freelance engagement. Let&apos;s talk.
          </p>

          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map(
              ({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  {label === "Email" ? (
                    <div className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[var(--muted-foreground)] font-medium">
                          {label}
                        </p>
                        <p className="text-sm text-[var(--foreground)] font-medium truncate">
                          {value}
                        </p>
                      </div>
                      <button
                        onClick={copyEmail}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all opacity-0 group-hover:opacity-100"
                      >
                        {copied ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all card-hover"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted-foreground)] font-medium">
                          {label}
                        </p>
                        <p className="text-sm text-[var(--foreground)] font-medium">
                          {value}
                        </p>
                      </div>
                    </a>
                  )}
                </motion.div>
              ),
            )}
          </div>

          {/* Download Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]"
          >
            <p className="text-sm font-medium text-[var(--foreground)] mb-3 flex items-center gap-2">
              📄 Download Documents
            </p>
            <div className="flex gap-2">
              <a
                href={personalInfo.resume}
                download="Hafiz_Muhammad_Tayyab_Zia_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
              >
                <Download size={13} />
                Resume
              </a>
              <a
                href={personalInfo.cv}
                download="Hafiz_Muhammad_Tayyab_Zia_CV.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/[0.08] text-[var(--foreground)] text-xs font-medium transition-all"
              >
                <Download size={13} />
                CV
              </a>
            </div>
          </motion.div>

          {/* Calendar placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-4 rounded-xl bg-[var(--card)] border border-dashed border-white/[0.12] flex items-center gap-3"
          >
            <Calendar size={18} className="text-[var(--accent)] shrink-0" />
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">
                Schedule a Call
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                30-minute intro calls — add Calendly link here
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
                Subject
              </label>
              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the opportunity, project, or just say hi..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]/50 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-[var(--muted-foreground)]">
              I typically respond within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}