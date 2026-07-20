"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface SectionGlowProps {
  color?: string;
  position?: "left" | "right" | "center";
  intensity?: number;
}

export default function SectionGlow({
  color = "59,130,246",
  position = "center",
  intensity = 0.12,
}: SectionGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const alpha = isDark ? intensity : intensity * 0.6;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const positionStyles = {
    left: "-left-40 top-1/2 -translate-y-1/2",
    right: "-right-40 top-1/2 -translate-y-1/2",
    center: "left-1/2 -translate-x-1/2 top-0",
  };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        style={{ opacity }}
        className={`absolute ${positionStyles[position]} w-[500px] h-[500px] rounded-full`}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${color},${alpha}) 0%, rgba(${color},${alpha * 0.3}) 40%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      </motion.div>
    </div>
  );
}