"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download, Command } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
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

  const handleNavClick = useCallback((href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3"
            : "py-5"
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
            <motion.button
              onClick={() => handleNavClick("#hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {personalInfo.firstName[0]}
                {personalInfo.lastName[0]}
              </div>
              <span className="font-semibold text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {personalInfo.firstName}
                <span className="text-[var(--accent)]">.</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors animated-underline",
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
                  </motion.button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command Palette */}
              <motion.button
                onClick={onOpenCommandPalette}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/[0.08] transition-all text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <Command size={14} />
                <span className="text-xs font-medium">⌘K</span>
              </motion.button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mx-4 mt-2 p-4 glass rounded-2xl border border-white/[0.08]">
                <div className="space-y-1">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.button
                      key={href}
                      onClick={() => handleNavClick(href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5 transition-all"
                    >
                      {label}
                    </motion.button>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/[0.08] flex gap-2">
                    <button
                      onClick={onOpenCommandPalette}
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-sm font-medium text-[var(--muted-foreground)]"
                    >
                      ⌘K
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}