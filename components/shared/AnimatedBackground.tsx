"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useRef, useState } from "react";

// ─── Floating Orb ───────────────────────────────────────────
function FloatingOrb({
  size,
  x,
  y,
  color,
  duration,
  delay,
  blur,
}: {
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
  delay: number;
  blur: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        x: [0, 40, -30, 50, -20, 0],
        y: [0, -50, 30, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1.08, 0.98, 1],
        opacity: [0.6, 0.9, 0.7, 1, 0.8, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Beam of light ───────────────────────────────────────────
function LightBeam({
  x,
  rotation,
  color,
  delay,
  width,
  height,
}: {
  x: string;
  rotation: number;
  color: string;
  delay: number;
  width: number;
  height: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none origin-top"
      style={{
        left: x,
        top: 0,
        width,
        height,
        background: color,
        rotate: rotation,
        transformOrigin: "top center",
      }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.8, 0],
        scaleX: [0.8, 1, 1.2, 0.9, 0.8],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Grid Lines ───────────────────────────────────────────
function AnimatedGrid({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        backgroundImage: isDark
          ? `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`
          : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

// ─── Shimmer line ───────────────────────────────────────────
function ShimmerLine({
  top,
  delay,
  isDark,
}: {
  top: string;
  delay: number;
  isDark: boolean;
}) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none"
      style={{ top }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: [0, 0.4, 0.6, 0.2, 0],
        scaleX: [0, 0.3, 0.7, 1, 0.8],
        x: ["-100%", "0%", "50%", "100%"],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)",
        }}
      />
    </motion.div>
  );
}

// ─── Cursor glow ───────────────────────────────────────────
function CursorGlow({ isDark }: { isDark: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { stiffness: 80, damping: 20 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
      setMouse({ x: e.clientX, y: e.clientY });
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.04) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}

// ─── Floating Particles ───────────────────────────────────
function Particles({ isDark }: { isDark: boolean }) {
  const particles = [
    { size: 2, x: "15%", y: "20%", color: "#3B82F6", duration: 8, delay: 0 },
    { size: 3, x: "80%", y: "15%", color: "#8B5CF6", duration: 10, delay: 1 },
    { size: 2, x: "60%", y: "60%", color: "#EC4899", duration: 9, delay: 2 },
    { size: 4, x: "25%", y: "75%", color: "#06B6D4", duration: 11, delay: 3 },
    { size: 2, x: "90%", y: "50%", color: "#3B82F6", duration: 7, delay: 1.5 },
    { size: 3, x: "45%", y: "85%", color: "#8B5CF6", duration: 12, delay: 4 },
    { size: 2, x: "70%", y: "30%", color: "#10B981", duration: 8, delay: 2.5 },
    { size: 3, x: "5%", y: "55%", color: "#F59E0B", duration: 9, delay: 0.5 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            opacity: isDark ? 0.6 : 0.4,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: isDark
              ? [0.3, 0.8, 0.3]
              : [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────
export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Cursor glow — follows mouse subtly */}
      <CursorGlow isDark={isDark} />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* ── Base background ── */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? [
                  "radial-gradient(ellipse 100% 60% at 20% 0%, rgba(59,130,246,0.10) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 80% 100%, rgba(139,92,246,0.08) 0%, transparent 60%), #09090B",
                  "radial-gradient(ellipse 100% 60% at 80% 0%, rgba(139,92,246,0.10) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 20% 100%, rgba(59,130,246,0.08) 0%, transparent 60%), #09090B",
                  "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(236,72,153,0.06) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 60%), #09090B",
                  "radial-gradient(ellipse 100% 60% at 20% 0%, rgba(59,130,246,0.10) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 80% 100%, rgba(139,92,246,0.08) 0%, transparent 60%), #09090B",
                ]
              : [
                  "radial-gradient(ellipse 100% 60% at 20% 0%, rgba(59,130,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 80% 100%, rgba(139,92,246,0.05) 0%, transparent 60%), #FAFAFA",
                  "radial-gradient(ellipse 100% 60% at 80% 0%, rgba(139,92,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 20% 100%, rgba(59,130,246,0.05) 0%, transparent 60%), #FAFAFA",
                  "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(236,72,153,0.04) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 60%), #FAFAFA",
                  "radial-gradient(ellipse 100% 60% at 20% 0%, rgba(59,130,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 80% 100%, rgba(139,92,246,0.05) 0%, transparent 60%), #FAFAFA",
                ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ── Animated grid ── */}
        <AnimatedGrid isDark={isDark} />

        {/* ── Parallax orbs layer ── */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          {/* Blue orb — top left */}
          <FloatingOrb
            size={700}
            x="-15%"
            y="-20%"
            color={
              isDark
                ? "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)"
            }
            blur={60}
            duration={22}
            delay={0}
          />

          {/* Purple orb — right */}
          <FloatingOrb
            size={600}
            x="55%"
            y="10%"
            color={
              isDark
                ? "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)"
            }
            blur={60}
            duration={26}
            delay={4}
          />

          {/* Pink orb — center */}
          <FloatingOrb
            size={500}
            x="25%"
            y="40%"
            color={
              isDark
                ? "radial-gradient(circle, rgba(236,72,153,0.10) 0%, rgba(236,72,153,0.03) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(236,72,153,0.06) 0%, rgba(236,72,153,0.02) 40%, transparent 70%)"
            }
            blur={80}
            duration={18}
            delay={8}
          />

          {/* Cyan orb — bottom */}
          <FloatingOrb
            size={450}
            x="60%"
            y="60%"
            color={
              isDark
                ? "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(6,182,212,0.02) 40%, transparent 70%)"
            }
            blur={70}
            duration={20}
            delay={6}
          />

          {/* Emerald orb — bottom left */}
          <FloatingOrb
            size={400}
            x="-5%"
            y="65%"
            color={
              isDark
                ? "radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0.01) 40%, transparent 70%)"
            }
            blur={60}
            duration={24}
            delay={10}
          />
        </motion.div>

        {/* ── Light beams from top ── */}
        <div className="absolute inset-0">
          <LightBeam
            x="20%"
            rotation={-15}
            color={
              isDark
                ? "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 80%)"
                : "linear-gradient(180deg, rgba(59,130,246,0.05) 0%, transparent 80%)"
            }
            delay={0}
            width={300}
            height={600}
          />
          <LightBeam
            x="50%"
            rotation={0}
            color={
              isDark
                ? "linear-gradient(180deg, rgba(139,92,246,0.06) 0%, transparent 80%)"
                : "linear-gradient(180deg, rgba(139,92,246,0.04) 0%, transparent 80%)"
            }
            delay={3}
            width={250}
            height={500}
          />
          <LightBeam
            x="75%"
            rotation={10}
            color={
              isDark
                ? "linear-gradient(180deg, rgba(236,72,153,0.06) 0%, transparent 80%)"
                : "linear-gradient(180deg, rgba(236,72,153,0.03) 0%, transparent 80%)"
            }
            delay={6}
            width={280}
            height={550}
          />
        </div>

        {/* ── Shimmer lines ── */}
        <ShimmerLine top="25%" delay={2} isDark={isDark} />
        <ShimmerLine top="50%" delay={7} isDark={isDark} />
        <ShimmerLine top="75%" delay={12} isDark={isDark} />

        {/* ── Floating particles ── */}
        <Particles isDark={isDark} />

        {/* ── Top gradient fade ── */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)"
              : "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)",
          }}
        />

        {/* ── Animated top line ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.8) 30%, rgba(139,92,246,0.8) 70%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.8) 30%, rgba(236,72,153,0.8) 70%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.8) 30%, rgba(59,130,246,0.8) 70%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.8) 30%, rgba(139,92,246,0.8) 70%, transparent 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ── Fine noise texture ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay",
          }}
        />

        {/* ── Edge vignette ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 50%, rgba(9,9,11,0.6) 100%)"
              : "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 50%, rgba(250,250,250,0.5) 100%)",
          }}
        />
      </div>
    </>
  );
}