"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      label="Education"
      title="Academic Foundation"
      description="The education that shaped my technical knowledge and analytical thinking."
      glowColor="59,130,246"
      glowPosition="right"
    >
      <div className="space-y-8">
        {education.map((edu, i) => (
          <EducationCard key={edu.id} edu={edu} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="p-6 md:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main info */}
        <div className="md:col-span-2">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `${edu.color}15`,
                border: `1px solid ${edu.color}25`,
              }}
            >
              <GraduationCap size={24} style={{ color: edu.color }} />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  {edu.degree} in {edu.field}
                </h3>
                {edu.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Current
                  </span>
                )}
              </div>
              <p className="text-[var(--accent)] font-semibold">{edu.institution}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-[var(--muted-foreground)] flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {edu.startDate} — {edu.current ? "Present" : edu.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {edu.location}
                </span>
                {/* Smart grade display */}
                {edu.grade && (
                  <span
                    className="font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      color: edu.color,
                      background: `${edu.color}12`,
                      border: `1px solid ${edu.color}20`,
                    }}
                  >
                    {edu.grade}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-5">
            {edu.description}
          </p>

          {/* Achievements */}
          {edu.achievements.length > 0 && (
            <div className="mb-5">
              <h4 className="flex items-center gap-2 font-semibold text-[var(--foreground)] text-sm mb-3">
                <Award size={14} className="text-yellow-400" />
                Achievements
              </h4>
              <div className="space-y-2">
                {edu.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-yellow-400 mt-0.5 shrink-0">★</span>
                    <span className="text-[var(--muted-foreground)]">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {edu.activities.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-[var(--foreground)] text-sm mb-3">
                <Users size={14} className="text-blue-400" />
                Activities & Leadership
              </h4>
              <div className="space-y-1">
                {edu.activities.map((activity, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                    <span className="text-[var(--muted-foreground)]">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Coursework */}
        <div>
          <h4 className="flex items-center gap-2 font-semibold text-[var(--foreground)] text-sm mb-4">
            <BookOpen size={14} style={{ color: edu.color }} />
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {edu.coursework.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                style={{
                  background: `${edu.color}10`,
                  color: edu.color,
                  border: `1px solid ${edu.color}20`,
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}