"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, Shield, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { certifications } from "@/lib/data";
import { cn } from "@/lib/utils";

// ─── Certificate Image Preview Modal ──────────────────────────
function CertificatePreview({
  cert,
  onClose,
}: {
  cert: (typeof certifications)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <span>Close</span>
          <X size={18} />
        </button>

        {/* Certificate image */}
        <div className="rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] shadow-2xl">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="aspect-[4/3] flex flex-col items-center justify-center gap-4 text-[var(--muted-foreground)] p-8">
              <Award size={48} style={{ color: cert.color }} />
              <div className="text-center">
                <h3 className="font-bold text-[var(--foreground)] text-lg mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm">{cert.issuer}</p>
                <p className="text-xs mt-2">Certificate image will be added soon</p>
              </div>
            </div>
          )}

          {/* Info bar at bottom */}
          <div className="p-4 border-t border-[var(--border)] flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[var(--foreground)] text-sm">
                {cert.name}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                {cert.issuer} · {cert.date}
              </p>
            </div>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:opacity-90 transition-all"
              >
                <Shield size={12} />
                Verify
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Certificate Card ─────────────────────────────────────────
function CertCard({
  cert,
  index,
  large = false,
}: {
  cert: (typeof certifications)[0];
  index: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.15] transition-all card-hover"
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold"
            style={{
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}25`,
              color: cert.color,
            }}
          >
            {cert.issuer[0]}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-bold text-[var(--foreground)] leading-tight mb-0.5",
                large ? "text-sm" : "text-sm"
              )}
            >
              {cert.name}
            </h3>
            <p className="text-xs font-medium" style={{ color: cert.color }}>
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Description */}
        {large && cert.description && (
          <p className="text-[var(--muted-foreground)] text-xs leading-relaxed mb-3">
            {cert.description}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-[var(--border)]">
          {/* View Certificate Button */}
          <motion.button
            onClick={() => setShowPreview(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
            style={{
              color: cert.color,
              borderColor: `${cert.color}30`,
              background: `${cert.color}08`,
            }}
          >
            <Eye size={12} />
            View Certificate
          </motion.button>

          {/* Verify link */}
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
            >
              <ExternalLink size={11} />
              Verify
            </a>
          )}

          {/* Date — pushed to right */}
          <div className="ml-auto flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
            <Calendar size={11} />
            <span>{cert.date}</span>
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <CertificatePreview
            cert={cert}
            onClose={() => setShowPreview(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Main Section ─────────────────────────────────────────────
export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 3);

  return (
    <SectionWrapper
      id="certifications"
      label="Certifications"
      title="Verified Credentials"
      description="Industry-recognized certifications that validate my expertise."
      glowColor="16,185,129"
      glowPosition="left"
    >
      {/* Featured */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {featured.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} large />
        ))}
      </div>

      {/* Rest */}
      {rest.length > 0 && (
        <>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            More Certifications
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleRest.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>

          {/* Show more/less */}
          {rest.length > 3 && (
            <div className="flex justify-center mt-6">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all"
              >
                {showAll
                  ? `Show less`
                  : `Show all ${rest.length} certifications`}
              </motion.button>
            </div>
          )}
        </>
      )}
    </SectionWrapper>
  );
}