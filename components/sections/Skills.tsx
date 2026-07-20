"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { key: "languages", label: "Languages" },
  { key: "ai", label: "AI/ML" },
  { key: "mobile", label: "Mobile" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "systems", label: "Systems" },
  { key: "tools", label: "Tools" },
  { key: "softSkills", label: "Soft Skills" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const activeSkills = skills[activeTab as keyof typeof skills] || [];

  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="My Technical Arsenal"
      description="Technologies and tools I use to build exceptional software products."
      glowColor="6,182,212"
      glowPosition="center"
    >
      {/* Tab selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(({ key, label }) => (
          <motion.button
            key={key}
            onClick={() => setActiveTab(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              activeTab === key
                ? "bg-[var(--accent)] text-white shadow-lg shadow-blue-500/20"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:text-[var(--foreground)] hover:border-white/20",
            )}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {(activeSkills as { name: string; level: number; icon: string }[]).map(
          (skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ),
        )}
      </motion.div>

      {/* Quick overview */}
      {/* Quick overview */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Languages",
            count: skills.languages.length,
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Frameworks",
            count: skills.frontend.length + skills.mobile.length,
            color: "from-purple-500 to-purple-600",
          },
          {
            label: "Systems",
            count: skills.systems.length,
            color: "from-emerald-500 to-emerald-600",
          },
          {
            label: "Tools",
            count: skills.tools.length,
            color: "from-orange-500 to-orange-600",
          },
        ].map(({ label, count, color }) => (
          <div
            key={label}
            className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] text-center"
          >
            <div
              className={cn(
                "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1",
                color,
              )}
            >
              {count}+
            </div>
            <div className="text-xs text-[var(--muted-foreground)]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SkillBar({
  skill,
  index,
}: {
  skill: { name: string; level: number; icon: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const levelLabel =
    skill.level >= 85
      ? "Expert"
      : skill.level >= 70
        ? "Advanced"
        : skill.level >= 55
          ? "Intermediate"
          : "Learning";

  const levelColor =
    skill.level >= 85
      ? "#10B981"
      : skill.level >= 70
        ? "#3B82F6"
        : skill.level >= 55
          ? "#F59E0B"
          : "#8B5CF6";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-sm text-[var(--foreground)] group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            background: `${levelColor}15`,
            color: levelColor,
          }}
        >
          {levelLabel}
        </span>
      </div>

      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1,
            delay: index * 0.05 + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${levelColor}, ${levelColor}88)`,
          }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-[var(--muted-foreground)]">
          Proficiency
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.05 + 0.8 }}
          className="text-xs font-mono text-[var(--muted-foreground)]"
        >
          {skill.level}%
        </motion.div>
      </div>
    </motion.div>
  );
}
