"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              {personalInfo.firstName[0]}
              {personalInfo.lastName[0]}
            </div>
            <div>
              <p className="font-semibold text-sm text-[var(--foreground)]">
                {personalInfo.name}
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                {personalInfo.headline}
              </p>
            </div>
          </div>

          {/* Center */}
          <p className="text-[var(--muted-foreground)] text-xs text-center">
            © {year} {personalInfo.name}. Built using Next.js & Framer Motion
          </p>

          {/* Right */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.social.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
              { icon: Mail, href: personalInfo.social.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/[0.08] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all"
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] transition-all"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}