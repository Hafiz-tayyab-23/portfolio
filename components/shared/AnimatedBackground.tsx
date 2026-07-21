"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from "react";

function FloatingOrb({
  size, x, y, color, duration, delay, blur,
}: {
  size: number; x: string; y: string; color: string;
  duration: number; delay: number; blur: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, left: x, top: y,
        background: color, filter: `blur(${blur}px)`,
      }}
      animate={{
        x: [0, 40, -30, 50, -20, 0],
        y: [0, -50, 30, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1.08, 0.98, 1],
        opacity: [0.6, 0.9, 0.7, 1, 0.8, 0.6],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function CursorGlow({ isDark }: { isDark: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const springConfig = { stiffness: 80, damping: 20 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
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
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
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

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <CursorGlow isDark={isDark} />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          <FloatingOrb size={700} x="-15%" y="-20%"
            color={isDark ? "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" : "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)"}
            blur={60} duration={22} delay={0} />
          <FloatingOrb size={600} x="55%" y="10%"
            color={isDark ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" : "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"}
            blur={60} duration={26} delay={4} />
          <FloatingOrb size={500} x="25%" y="40%"
            color={isDark ? "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 70%)"}
            blur={80} duration={18} delay={8} />
          <FloatingOrb size={450} x="60%" y="60%"
            color={isDark ? "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)"}
            blur={70} duration={20} delay={6} />
          <FloatingOrb size={400} x="-5%" y="65%"
            color={isDark ? "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" : "radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)"}
            blur={60} duration={24} delay={10} />
        </motion.div>

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
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

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