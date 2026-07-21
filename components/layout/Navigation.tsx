"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download, Command } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";
import ThemeToggle from "@/components/shared/ThemeToggle";

interface NavigationProps {
  onOpenCommandPalette: () => void;
}

export default function Navigation({ onOpenCommandPalette }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setHidden(latest > lastScrollY && latest > 100);
    setLastScrollY(latest);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    const id = href.replace("#", "");
    setIsOpen(false);
    // Small delay to let mobile menu close first
    setTimeout(() => scrollToSection(id), 100);
  }, []);

  return (
    <>
      <ScrollProgress />

      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-6xl px-6 transition-all duration-300",
            scrolled
              ? "glass rounded-2xl mx-4 lg:mx-auto border border-white/[0.08]"
              : ""
          )}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-2 group active:scale-95 transition-transform"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {personalInfo.firstName[0]}
                {personalInfo.lastName[0]}
              </div>
              <span className="font-semibold text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {personalInfo.firstName}
                <span className="text-[var(--accent)]">.</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command Palette — desktop only */}
              <button
                onClick={onOpenCommandPalette}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/[0.08] transition-all text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <Command size={14} />
                <span className="text-xs font-medium">⌘K</span>
              </button>

              <ThemeToggle />

              {/* Desktop Resume + CV */}
              <div className="hidden md:flex items-center gap-1.5">
                <a
                  href={personalInfo.resume}
                  download="Hafiz_Muhammad_Tayyab_Zia_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  <Download size={13} />
                  Resume
                </a>
                <a
                  href={personalInfo.cv}
                  download="Hafiz_Muhammad_Tayyab_Zia_CV.pdf"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/[0.08] text-[var(--foreground)] text-xs font-medium transition-all active:scale-95"
                >
                  <Download size={13} />
                  CV
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — SIMPLIFIED, no heavy animations */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
              style={{ top: "70px" }}
            />

            {/* Menu Panel */}
            <div
              className="lg:hidden fixed left-4 right-4 top-20 z-50 rounded-2xl border border-white/[0.12] shadow-2xl"
              style={{ background: "#111111" }}
            >
              <div className="p-4">
                <div className="space-y-1">
                  {navLinks.map(({ label, href }) => (
                    <button
                      key={href}
                      onClick={() => handleNavClick(href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="pt-3 mt-3 border-t border-white/[0.08] flex gap-2">
                  <a
                    href={personalInfo.resume}
                    download="Hafiz_Muhammad_Tayyab_Zia_Resume.pdf"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-medium active:scale-95 transition-transform"
                  >
                    <Download size={14} />
                    Resume
                  </a>
                  <a
                    href={personalInfo.cv}
                    download="Hafiz_Muhammad_Tayyab_Zia_CV.pdf"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-[var(--foreground)] text-sm font-medium active:scale-95 transition-transform"
                  >
                    <Download size={14} />
                    CV
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.nav>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />;
}