"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, Linkedin } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <SectionWrapper
      id="testimonials"
      label="Testimonials"
      title="What People Say"
      description="Feedback from colleagues, mentors, and collaborators."
      glowColor="139,92,246"
      glowPosition="center"
    >
      {hasTestimonials ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      ) : (
        <PlaceholderState />
      )}
    </SectionWrapper>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.12] transition-all card-hover"
    >
      <Quote size={24} className="text-[var(--accent)] mb-4 opacity-60" />

      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-5 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[var(--foreground)] text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-[var(--muted-foreground)] truncate">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PlaceholderState() {
  return (
    <div className="relative">
      {/* Blurred placeholder cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 filter blur-sm pointer-events-none opacity-40">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] h-48"
          >
            <div className="h-4 bg-white/10 rounded mb-3 w-3/4" />
            <div className="h-3 bg-white/5 rounded mb-2 w-full" />
            <div className="h-3 bg-white/5 rounded mb-2 w-5/6" />
            <div className="h-3 bg-white/5 rounded w-4/6" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <div className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl max-w-sm">
          <p className="text-2xl mb-3">💬</p>
          <h3 className="font-bold text-[var(--foreground)] mb-2">
            Testimonials Coming Soon
          </h3>
          <p className="text-[var(--muted-foreground)] text-sm">
            I&apos;m collecting feedback from my mentors and colleagues. Check
            back soon or connect with me on{" "}
            <a href="#" className="text-[var(--accent)] hover:underline">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
