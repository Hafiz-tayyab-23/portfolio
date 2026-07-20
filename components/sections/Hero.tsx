"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github, Linkedin, Mail, Download, ArrowDown,
  MapPin, Sparkles, Twitter, ChevronRight,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timeout = setTimeout(() => setIsPaused(false), 1500);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting && displayText === current) {
      setIsPaused(true);
      setIsDeleting(true);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isPaused]);

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: personalInfo.social.email, label: "Email" },
  ].filter((s) => s.href);

  if (personalInfo.social.twitter) {
    socialLinks.push({ icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ═══════ LEFT — Text Content ═══════ */}
          <div className="space-y-6">

            {/* Availability badge */}
            {personalInfo.availability && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  {personalInfo.availabilityText}
                </div>
              </motion.div>
            )}

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[var(--muted-foreground)] text-sm font-medium tracking-widest uppercase mb-3">
                Hey there, I&apos;m
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[var(--foreground)] inline-block"
                >
                  {personalInfo.firstName}
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="gradient-text inline-block"
                >
                  {personalInfo.lastName}
                </motion.span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-10 flex items-center"
            >
              <div className="flex items-center gap-2">
                <ChevronRight size={18} className="text-[var(--accent)]" />
                <span className="text-xl md:text-2xl font-semibold text-[var(--foreground)]">
                  {displayText}
                </span>
                <span className="cursor-blink ml-0.5 text-[var(--accent)] text-2xl">|</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-[var(--muted-foreground)] text-sm"
            >
              <MapPin size={14} className="text-[var(--accent)]" />
              <span>{personalInfo.location}</span>
              <span className="text-white/20">·</span>
              <span>{personalInfo.timezone}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                <Sparkles size={16} />
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href={personalInfo.resume}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] hover:border-white/[0.15] text-[var(--foreground)] font-semibold text-sm transition-all"
              >
                <Download size={16} />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.08] hover:border-[var(--accent)]/30 text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-semibold text-sm transition-all"
              >
                <Mail size={16} />
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.05 }}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] hover:border-[var(--accent)]/30 flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-px w-6 bg-gradient-to-r from-white/20 to-transparent ml-1" />
              <span className="text-xs text-[var(--muted-foreground)]">Let&apos;s connect</span>
            </motion.div>
          </div>

          {/* ═══════ RIGHT — Avatar + Info Cards ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Avatar with animated rings */}
            <div className="relative">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(59,130,246,0.4) 60deg, transparent 120deg, rgba(139,92,246,0.4) 180deg, transparent 240deg, rgba(236,72,153,0.3) 300deg, transparent 360deg)",
                }}
              />
              {/* Inner counter-spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 0deg, rgba(59,130,246,0.15) 90deg, transparent 180deg)",
                }}
              />
              {/* Pulsing glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
                }}
              />

              {/* Avatar image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[var(--card)] shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback initials */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/20 items-center justify-center hidden">
                  <div className="text-7xl font-bold gradient-text">
                    {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                  </div>
                </div>
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* ═══════ Info Cards ═══════ */}

            {/* Row 1: Current Role + University */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">🔬</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">Current</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">AI/ML Intern</div>
                    <div className="text-[10px] text-blue-400 font-medium">@ Zenvyro Labs</div>
                  </div>
                </div>
              </motion.div>

              {/* University */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">🎓</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">University</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">NUST &apos;28</div>
                    <div className="text-[10px] text-purple-400 font-medium">Software Engineering</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: NASTP + LinkedIn */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              {/* NASTP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">🛡️</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">Ex-Intern</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">NASTP</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Aerospace & Defense</div>
                  </div>
                </div>
              </motion.div>

              {/* LinkedIn Connections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-sky-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">🔗</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">Network</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">1000+</div>
                    <div className="text-[10px] text-sky-400 font-medium">LinkedIn Connections</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Projects + Certifications */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">🚀</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">Shipped</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">7+ Projects</div>
                    <div className="text-[10px] text-orange-400 font-medium">AI · Web · Systems</div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-yellow-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <span className="text-base">📜</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--muted-foreground)] font-medium">Verified</div>
                    <div className="text-xs font-bold text-[var(--foreground)] leading-tight">30+ Certs</div>
                    <div className="text-[10px] text-yellow-400 font-medium">Microsoft · IEEE · More</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted-foreground)]"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}