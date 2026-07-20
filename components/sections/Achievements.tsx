"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Award, Code, Star, Zap, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={20} />,
  users: <Users size={20} />,
  award: <Award size={20} />,
  code: <Code size={20} />,
  star: <Star size={20} />,
  zap: <Zap size={20} />,
  book: <BookOpen size={20} />,
};

const categoryColors: Record<string, string> = {
  Competition: "#F59E0B",
  Leadership: "#4285F4",
  Academic: "#10B981",
  "Open Source": "#8B5CF6",
  Research: "#EC4899",
  Award: "#EF4444",
};

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      title="Milestones & Recognition"
      description="Awards, competitions, and moments that define my journey."
      glowColor="245,158,11"
      glowPosition="right"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {achievements.map((achievement, i) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const color = categoryColors[achievement.category] || "#3B82F6";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all card-hover"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}25`,
            color: color,
          }}
        >
          {iconMap[achievement.icon] || <Star size={20} />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-[var(--foreground)] text-sm leading-tight">
              {achievement.title}
            </h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
              style={{
                background: `${color}15`,
                color: color,
                border: `1px solid ${color}20`,
              }}
            >
              {achievement.category}
            </span>
          </div>

          <p className="text-[var(--muted-foreground)] text-xs leading-relaxed mb-3">
            {achievement.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
              <span>{achievement.organization}</span>
              <span>·</span>
              <span>{achievement.date}</span>
            </div>
            <span className="text-xs font-semibold" style={{ color: color }}>
              {achievement.impact}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
