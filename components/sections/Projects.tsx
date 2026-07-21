"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Github, Star, Users, Download,
  Target, Zap, ArrowRight, Search, X,
  Play, Linkedin, Globe, ImageIcon,
  Calendar, Users2, Briefcase, Code2,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "AI/ML", "Web App", "Systems", "Tools"];

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={14} />,
  star: <Star size={14} />,
  download: <Download size={14} />,
  target: <Target size={14} />,
  zap: <Zap size={14} />,
};

// ─── Get embeddable video URL ─────────────────────────────────
function getEmbedUrl(url: string): { type: "youtube" | "drive" | "direct"; src: string } | null {
  if (!url) return null;

  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  if (ytMatch) {
    return { type: "youtube", src: `https://www.youtube.com/embed/${ytMatch[1]}` };
  }

  const driveMatch = url.match(
    /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)([^/&?\n]+)/
  );
  if (driveMatch) {
    return { type: "drive", src: `https://drive.google.com/file/d/${driveMatch[1]}/preview` };
  }

  if (url.match(/\.(mp4|webm|ogg|mov)(\?|$)/i)) {
    return { type: "direct", src: url };
  }

  return { type: "direct", src: url };
}

// ─── Video Modal ──────────────────────────────────────────────
function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  const embed = getEmbedUrl(url);

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
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <div className="rounded-2xl overflow-hidden aspect-video bg-black">
          {embed ? (
            embed.type === "direct" && embed.src.match(/\.(mp4|webm|ogg|mov)/i) ? (
              <video src={embed.src} controls autoPlay className="w-full h-full" />
            ) : (
              <iframe
                src={embed.src}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white/60">
              <Play size={40} />
              <p className="text-sm">Unable to embed video</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Open in new tab →
              </a>
            </div>
          )}
        </div>
        <div className="mt-3 text-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white/60 transition-colors"
          >
            Having trouble? Open in new tab →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Media Buttons ────────────────────────────────────────────
function MediaButtons({
  project,
  onVideoClick,
}: {
  project: (typeof projects)[0];
  onVideoClick: () => void;
}) {
  const { media, githubUrl, liveUrl } = project;
  const hasVideo = !!media?.videoDemo;
  const hasFolder = !!media?.imageFolderUrl;
  const hasLinkedIn = !!media?.linkedInPost;

  return (
    <div className="flex flex-wrap gap-2">
      {hasVideo && (
        <motion.button
          onClick={(e) => { e.stopPropagation(); onVideoClick(); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 border border-red-500/20 bg-red-500/5 hover:bg-red-500/15 transition-all"
        >
          <Play size={12} />
          Video Demo
        </motion.button>
      )}
      {hasFolder && (
        <motion.a
          href={media.imageFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-400 border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/15 transition-all"
        >
          <ImageIcon size={12} />
          Image Gallery
        </motion.a>
      )}
      {githubUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--muted-foreground)] border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:text-[var(--foreground)] transition-all"
        >
          <Github size={12} />
          GitHub
        </motion.a>
      )}
      {liveUrl && (
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-400 border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/15 transition-all"
        >
          <Globe size={12} />
          Live Demo
        </motion.a>
      )}
      {hasLinkedIn && (
        <motion.a
          href={media.linkedInPost}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-500 border border-blue-600/20 bg-blue-600/5 hover:bg-blue-600/15 transition-all"
        >
          <Linkedin size={12} />
          LinkedIn
        </motion.a>
      )}
    </div>
  );
}

// ─── Project Card — Same for all projects ─────────────────────
function ProjectCard({
  project,
  index,
  featured = false,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={onSelect}
        className="group relative p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-white/[0.15] cursor-pointer transition-all card-hover overflow-hidden"
      >
        {/* Hover gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            project.gradient
          )}
        />

        <div className="relative">
          {/* Header: Icon + Title + Badges */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
                style={{
                  background: `${project.color}25`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                <span style={{ color: project.color }}>{project.title[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {featured && (
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      <Star size={8} className="fill-yellow-400" />
                      Featured
                    </span>
                  )}
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full font-medium",
                      project.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--foreground)] group-hover:text-white transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: project.color }}
                >
                  {iconMap[metric.icon]}
                  <span className="font-bold">{metric.value}</span>
                  <span className="text-[var(--muted-foreground)]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Project meta */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1">
              <Briefcase size={11} className="text-[var(--accent)]" />
              {project.role}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} className="text-[var(--accent)]" />
              {project.timeline}
            </span>
            <span className="flex items-center gap-1">
              <Users2 size={11} className="text-[var(--accent)]" />
              {project.teamSize}
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-lg bg-white/[0.04] text-[var(--muted-foreground)] text-xs border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-lg bg-white/[0.04] text-[var(--muted-foreground)] text-xs border border-white/[0.06]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Media buttons */}
          <div
            className="pt-4 border-t border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaButtons
              project={project}
              onVideoClick={() => setShowVideo(true)}
            />
          </div>

          {/* Case study CTA */}
          <div className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors font-medium mt-3">
            <span>View case study</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && project.media?.videoDemo && (
          <VideoModal
            url={project.media.videoDemo}
            onClose={() => setShowVideo(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Case Study Modal ─────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-4 md:inset-8 lg:inset-12 z-50 overflow-y-auto rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl"
      >
        {/* Color bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}80, transparent)`,
          }}
        />

        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  {project.category}
                </span>
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    project.status === "Live"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  )}
                >
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-[var(--muted-foreground)]">
                <span className="flex items-center gap-1">
                  <Briefcase size={11} className="text-[var(--accent)]" />
                  {project.role}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} className="text-[var(--accent)]" />
                  {project.timeline}
                </span>
                <span className="flex items-center gap-1">
                  <Users2 size={11} className="text-[var(--accent)]" />
                  {project.teamSize}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all shrink-0 ml-4"
            >
              <X size={18} />
            </button>
          </div>

          {/* Media bar */}
          <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
              Project Links & Media
            </p>
            <MediaButtons
              project={project}
              onVideoClick={() => setShowVideo(true)}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              {[
                { label: "Overview", content: project.longDescription },
                { label: "The Problem", content: project.problem },
                { label: "The Solution", content: project.solution },
                { label: "Architecture", content: project.architecture },
                { label: "Impact", content: project.impact },
              ].map(({ label, content }) => (
                <div key={label}>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 flex items-center gap-2">
                    <div
                      className="w-1 h-4 rounded-full"
                      style={{ background: project.color }}
                    />
                    {label}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                    {content}
                  </p>
                </div>
              ))}

              {project.challenges.length > 0 && (
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
                    <div
                      className="w-1 h-4 rounded-full"
                      style={{ background: project.color }}
                    />
                    Challenges & Solutions
                  </h3>
                  <div className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                      >
                        <span
                          className="text-xs mt-0.5 shrink-0 font-mono font-bold"
                          style={{ color: project.color }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {project.metrics.length > 0 && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="font-semibold text-[var(--foreground)] text-sm mb-3">
                    Key Metrics
                  </h4>
                  <div className="space-y-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-[var(--muted-foreground)] text-xs">
                          {metric.label}
                        </span>
                        <span className="font-bold text-sm" style={{ color: project.color }}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-semibold text-[var(--foreground)] text-sm mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[var(--muted-foreground)] text-xs border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && project.media?.videoDemo && (
          <VideoModal url={project.media.videoDemo} onClose={() => setShowVideo(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Main Projects Section ────────────────────────────────────
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Things I've Built"
      description="A curated selection of projects demonstrating technical range, problem-solving ability, and attention to craft."
      glowColor="236,72,153"
      glowPosition="left"
    >
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            aria-label="Search projects"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-all",
                activeCategory === cat
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)] hover:text-[var(--foreground)] hover:border-white/20"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8 text-xs text-[var(--muted-foreground)]">
        {[
          { icon: <Play size={11} className="text-red-400" />, label: "Video Demo" },
          { icon: <ImageIcon size={11} className="text-purple-400" />, label: "Gallery" },
          { icon: <Github size={11} />, label: "Source Code" },
          { icon: <Linkedin size={11} className="text-blue-500" />, label: "LinkedIn" },
          { icon: <Globe size={11} className="text-blue-400" />, label: "Live Demo" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            {icon}
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-5 flex items-center gap-2">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            Featured Projects
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured
                onSelect={() => setSelectedProject(project.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {rest.length > 0 && (
        <div>
          {featured.length > 0 && (
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-5">
              More Projects
            </p>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={false}
                onSelect={() => setSelectedProject(project.id)}
              />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--muted-foreground)]">
          <p className="text-lg font-medium mb-2">No projects found</p>
          <p className="text-sm">Try a different search or category</p>
        </div>
      )}

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}