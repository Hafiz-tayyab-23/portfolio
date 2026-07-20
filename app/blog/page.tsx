"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
              Writing
            </span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Blog</h1>
          <p className="text-[var(--muted-foreground)] text-lg mb-12">
            Thoughts on engineering, technology, and building great software.
          </p>

          {/* Coming soon state */}
          <div className="p-8 rounded-2xl bg-[var(--card)] border border-dashed border-white/[0.12] text-center">
            <BookOpen size={32} className="text-[var(--accent)] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
              Articles Coming Soon
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm max-w-sm mx-auto">
              I&apos;m currently writing articles about Flutter architecture, AI engineering, 
              and software development best practices. Subscribe to get notified.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}