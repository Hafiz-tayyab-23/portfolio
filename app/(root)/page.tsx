"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/shared/CommandPalette";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import SectionDivider from "@/components/shared/SectionDivider";
import Hero from "@/components/sections/Hero";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Lazy load — these only load when needed
const About = dynamic(() => import("@/components/sections/About"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Certifications = dynamic(() => import("@/components/sections/Certifications"));
const Achievements = dynamic(() => import("@/components/sections/Achievements"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setCommandPaletteOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {showLoader && <LoadingScreen />}
      <AnimatedBackground />
      <Navigation onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      <main className="relative">
        <Hero />
        <SectionDivider color="59,130,246" />
        <About />
        <SectionDivider color="139,92,246" />
        <Experience />
        <SectionDivider color="236,72,153" />
        <Projects />
        <SectionDivider color="6,182,212" />
        <Skills />
        <SectionDivider color="245,158,11" />
        <TechStack />
        <SectionDivider color="59,130,246" />
        <Education />
        <SectionDivider color="16,185,129" />
        <Certifications />
        <SectionDivider color="245,158,11" />
        <Achievements />
        <SectionDivider color="139,92,246" />
        <Testimonials />
        <SectionDivider color="59,130,246" />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}useEffect