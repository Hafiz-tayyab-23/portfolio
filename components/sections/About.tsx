"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Target, Heart, Zap, BookOpen, Users } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { personalInfo } from "@/lib/data";

const valueIcons: Record<string, React.ReactNode> = {
  "Craftsmanship over quantity": <Code2 size={16} />,
  "First principles thinking": <Target size={16} />,
  "Continuous learning": <BookOpen size={16} />,
  "Shipping > Perfecting": <Zap size={16} />,
  "Collaboration & openness": <Users size={16} />,
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionWrapper
      id="about"
      label="About Me"
      title="Engineer. Learner. Builder."
      glowColor="59,130,246"
      glowPosition="left"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — Story */}
        <div className="space-y-6">
          {personalInfo.about.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[var(--muted-foreground)] text-lg leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl gradient-border bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <Target size={16} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--foreground)]">Vision</h3>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed italic">
              &ldquo;{personalInfo.about.vision}&rdquo;
            </p>
          </motion.div>

          {/* Research interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-[var(--accent-secondary)]" />
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.about.interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] text-xs font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — Values & Philosophy */}
        <div className="space-y-6">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <h3 className="font-semibold text-[var(--foreground)] mb-5 flex items-center gap-2">
              <Heart size={16} className="text-red-400" />
              Core Values
            </h3>
            <div className="space-y-3">
              {personalInfo.about.values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.08] transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-all">
                    {valueIcons[value] || <Zap size={14} />}
                  </div>
                  <span className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors font-medium">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.08] border border-blue-500/[0.12]"
          >
            <h3 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
              <Code2 size={16} className="text-[var(--accent)]" />
              Engineering Philosophy
            </h3>
            <div className="space-y-2">
              {[
                "Write code that reads like prose",
                "Performance is a feature",
                "Simplicity over cleverness",
                "Test before you trust",
                "Document for your future self",
              ].map((principle, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                >
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">
                    →
                  </span>
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            <h3 className="font-semibold text-[var(--foreground)] mb-4 text-sm">
              Quick Facts
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "☕ Coffee/day", value: "3 cups" },
                { label: "🎵 Codes to", value: "Lo-fi hip-hop" },
                { label: "📚 Reading", value: "SICP" },
                { label: "⚡ Favourite editor", value: "VS Code" },
                { label: "🌍 Languages", value: "English, Urdu" },
                { label: "🎯 Focus", value: "Deep Work" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-[var(--muted-foreground)] text-xs">
                    {label}
                  </span>
                  <span className="text-[var(--foreground)] font-medium text-xs">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
