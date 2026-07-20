"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionGlow from "@/components/shared/SectionGlow";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  glowColor?: string;
  glowPosition?: "left" | "right" | "center";
}

export default function SectionWrapper({
  id,
  children,
  className,
  label,
  title,
  description,
  centered = false,
  glowColor = "59,130,246",
  glowPosition = "center",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-24 lg:py-32 px-6", className)}
    >
      {/* Section-specific glow */}
      <SectionGlow color={glowColor} position={glowPosition} intensity={0.08} />

      <div className="max-w-6xl mx-auto relative">
        {(label || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn("mb-16", centered ? "text-center" : "")}
          >
            {label && (
              <div className={cn("flex items-center gap-3 mb-4", centered ? "justify-center" : "")}>
                <div className="h-px w-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
                  {label}
                </span>
                <div className="h-px w-8 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent)]" />
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4 leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "text-[var(--muted-foreground)] text-lg max-w-2xl leading-relaxed",
                centered ? "mx-auto" : ""
              )}>
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}