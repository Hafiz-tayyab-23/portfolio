"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Where I've Worked"
      description="Internships and roles that shaped my engineering skills and professional perspective."
      glowColor="139,92,246"
      glowPosition="right"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent hidden md:block" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <ExperienceCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative md:pl-16"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-[var(--background)] shadow-lg hidden md:block"
        style={{ background: job.color }}
      />

      {/* Card */}
      <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all card-hover group">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          {/* Company info */}
          <div className="flex items-start gap-4">
            {/* Logo placeholder */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0"
              style={{
                background: `${job.color}20`,
                border: `1px solid ${job.color}30`,
              }}
            >
              <span style={{ color: job.color }}>{job.company[0]}</span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-[var(--foreground)] text-lg leading-tight">
                  {job.role}
                </h3>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: `${job.color}15`,
                    color: job.color,
                    border: `1px solid ${job.color}30`,
                  }}
                >
                  {job.type}
                </span>
                {job.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Current
                  </span>
                )}
              </div>
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent)]/80 text-sm font-medium mt-0.5 transition-colors group/link"
              >
                {job.company}
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Meta */}
          <div className="text-right shrink-0 space-y-1">
            <div className="flex items-center justify-end gap-1.5 text-[var(--muted-foreground)] text-xs">
              <Calendar size={12} />
              <span>
                {job.startDate} — {job.current ? "Present" : job.endDate}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-[var(--muted-foreground)] text-xs">
              <MapPin size={12} />
              <span>{job.location}</span>
            </div>
            <div className="text-[var(--muted-foreground)] text-xs">
              {job.duration}
            </div>
          </div>
        </div>

        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Key achievements */}
        {job.achievements.length > 0 && (
          <div className="mb-4 space-y-2">
            {job.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                <span className="text-[var(--foreground)] font-medium">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable responsibilities */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-3 font-medium"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? "Less details" : "More details"}
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mb-4"
            >
              {job.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-[var(--accent)] mt-1 shrink-0">→</span>
                  <span className="text-[var(--muted-foreground)]">{resp}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border)]">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[var(--muted-foreground)] text-xs font-medium hover:text-[var(--foreground)] hover:border-white/[0.12] transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
