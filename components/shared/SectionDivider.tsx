"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function SectionDivider({
  color = "59,130,246",
}: {
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div ref={ref} className="relative py-4 flex items-center justify-center overflow-hidden">
      {/* Animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md h-px"
        style={{
          background: isDark
            ? `linear-gradient(90deg, transparent, rgba(${color},0.4), transparent)`
            : `linear-gradient(90deg, transparent, rgba(${color},0.25), transparent)`,
        }}
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: `rgba(${color},0.6)`,
          boxShadow: `0 0 12px rgba(${color},0.4)`,
        }}
      />
    </div>
  );
}