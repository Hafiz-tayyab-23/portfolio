"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

const allCategories = [
  "All",
  ...Array.from(new Set(techStack.map((t) => t.category))),
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeFilter);

  return (
    <SectionWrapper
      id="tech-stack"
      label="Tech Stack"
      title="Tools I Love"
      description="Technologies I reach for when building exceptional software."
      centered
      glowColor="245,158,11"
      glowPosition="center"
    >
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allCategories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
              activeFilter === cat
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:text-[var(--foreground)]",
            )}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Tech grid */}
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {filtered.map((tech, i) => (
          <TechBadge
            key={tech.name}
            tech={tech}
            index={i}
            isHovered={hoveredTech === tech.name}
            onHover={setHoveredTech}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-8 text-xs text-[var(--muted-foreground)]">
        <Star size={12} className="text-yellow-400" fill="currentColor" />
        <span>= Favorite technology</span>
      </div>
    </SectionWrapper>
  );
}

function TechBadge({
  tech,
  index,
  isHovered,
  onHover,
}: {
  tech: (typeof techStack)[0];
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.1, y: -4 }}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] cursor-default transition-all"
      style={{
        borderColor: isHovered ? `${tech.color}40` : undefined,
        boxShadow: isHovered ? `0 8px 20px ${tech.color}20` : undefined,
      }}
    >
      {/* Color dot */}
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: tech.color }}
      />

      <span
        className="text-sm font-medium transition-colors"
        style={{ color: isHovered ? tech.color : undefined }}
      >
        {tech.name}
      </span>

      {tech.favorite && (
        <Star size={10} className="text-yellow-400 fill-yellow-400 shrink-0" />
      )}

      {/* Category tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] whitespace-nowrap z-10 shadow-lg"
        >
          {tech.category}
        </motion.div>
      )}
    </motion.div>
  );
}
