"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Home, Code, User, Briefcase, Download,
  Mail, Github, Linkedin, Moon, Sun, X, ArrowRight,
  Award, GraduationCap, Wrench
} from "lucide-react";
import { personalInfo, commandActions } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={16} />,
  code: <Code size={16} />,
  user: <User size={16} />,
  briefcase: <Briefcase size={16} />,
  download: <Download size={16} />,
  mail: <Mail size={16} />,
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  moon: <Moon size={16} />,
  award: <Award size={16} />,
  education: <GraduationCap size={16} />,
  tools: <Wrench size={16} />,
};

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commandActions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (action: (typeof commandActions)[0]) => {
      if (action.section) {
        scrollToSection(action.section);
      } else if (action.action === "resume") {
        const link = document.createElement("a");
        link.href = personalInfo.resume;
        link.download = "Hafiz_Muhammad_Tayyab_Zia_Resume.pdf";
        link.click();
      } else if (action.action === "cv") {
        const link = document.createElement("a");
        link.href = personalInfo.cv;
        link.download = "Hafiz_Muhammad_Tayyab_Zia_CV.pdf";
        link.click();
      } else if (action.action === "email") {
        window.location.href = personalInfo.social.email;
      } else if (action.action === "github") {
        window.open(personalInfo.social.github, "_blank");
      } else if (action.action === "linkedin") {
        window.open(personalInfo.social.linkedin, "_blank");
      } else if (action.action === "theme") {
        toggleTheme();
      }
      onClose();
    },
    [onClose, toggleTheme]
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selected]) execute(filtered[selected]);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, filtered, selected, execute, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div
              className="rounded-2xl border border-white/[0.12] overflow-hidden shadow-2xl"
              style={{ background: "#111111" }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08]">
                <Search size={18} className="text-[var(--muted-foreground)] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none"
                />
                <button
                  onClick={onClose}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Results */}
              <div className="p-2 max-h-80 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-[var(--muted-foreground)] text-sm py-8">
                    No commands found
                  </p>
                ) : (
                  filtered.map((action, i) => (
                    <motion.button
                      key={action.label}
                      onClick={() => execute(action)}
                      onMouseEnter={() => setSelected(i)}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                        i === selected
                          ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            i === selected
                              ? "text-[var(--accent)]"
                              : "text-[var(--muted-foreground)]"
                          }
                        >
                          {iconMap[action.icon] || <ArrowRight size={16} />}
                        </span>
                        <span className="font-medium">{action.label}</span>
                      </div>
                      {i === selected && (
                        <ArrowRight
                          size={14}
                          className="text-[var(--accent)] shrink-0"
                        />
                      )}
                    </motion.button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-white/[0.08] flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                <span><kbd className="font-mono bg-white/5 px-1.5 py-0.5 rounded">↑↓</kbd> Navigate</span>
                <span><kbd className="font-mono bg-white/5 px-1.5 py-0.5 rounded">↵</kbd> Select</span>
                <span><kbd className="font-mono bg-white/5 px-1.5 py-0.5 rounded">Esc</kbd> Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}