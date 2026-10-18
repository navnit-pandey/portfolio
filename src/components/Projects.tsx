"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Cpu,
  Zap,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  BarChart3,
  FileCode2,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { airqProject, resourceAllocatorProject, gestureCarProject } from "@/lib/data";
import AirqArchitecture from "@/components/AirqArchitecture";

export default function Projects() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [gestureDetailsOpen, setGestureDetailsOpen] = useState(false);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCaseStudyOpen(false);
        setGestureDetailsOpen(false);
      }
    };
    if (caseStudyOpen || gestureDetailsOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [caseStudyOpen, gestureDetailsOpen]);

  const flagship = airqProject;
  const scheduler = resourceAllocatorProject;
  const gesture = gestureCarProject;

  return (
    <section
      id="projects"
      className="section relative scroll-mt-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">Featured Projects</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Some Things I&apos;ve Built
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Real-world systems evaluated with leak-free chronological holdouts, algorithmic simulations, and deployed cloud runtimes.
            </p>
          </div>
          <a
            href="https://github.com/navnit-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2 self-start md:self-end"
            aria-label="View all projects on GitHub"
          >
            <GithubIcon size={16} />
            <span>View All Projects</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3-Column Equal-Sized Project Cards Grid
            (Directly matching Altaf Ansari's portfolio card dimensions)
        ────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* ══════════════════════════════════════════════════════════
              Card 1: AirQ Predict (Flagship AI/ML)
          ══════════════════════════════════════════════════════════ */}
          <div
            id="project-airq"
            className="flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-black/40 hover:border-[var(--accent)]/50 transition-all duration-300 group"
          >
            {/* Top Image Preview Container (Fixed h-48 matching reference) */}
            <div className="relative h-48 w-full bg-[#0d130e] overflow-hidden border-b border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src={flagship.screenshotPath}
                alt="AirQ Predict live production interface"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 z-20 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/75 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title & External Links */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {flagship.shortTitle}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors p-0.5"
                    aria-label="View AirQ Predict source code on GitHub"
                    id="airq-github-icon"
                  >
                    <GithubIcon size={17} />
                  </a>
                  <a
                    href={flagship.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[var(--accent)] transition-colors p-0.5"
                    aria-label="Open AirQ Predict Live Demo"
                    id="airq-card-link"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              {/* Subtitle / Category */}
              <p className="text-xs text-[var(--accent)] font-mono mb-2">
                {flagship.category} · Day 1 R² 0.81
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-5 flex-grow leading-relaxed">
                {flagship.description}
              </p>

              {/* Tech Stack Tags (5 tags) */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {["Python", "Scikit-learn", "Flask", "Next.js", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded bg-[#0b100c] border border-white/10 font-mono font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Symmetrical 2-Button Grid */}
              <div className="grid grid-cols-2 gap-2 pt-3 mt-3 border-t border-white/10">
                <a
                  href={flagship.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                  id="airq-live-demo-btn"
                >
                  <ExternalLink size={13} /> Demo
                </a>
                <button
                  onClick={() => setCaseStudyOpen(true)}
                  className="btn-secondary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5 text-[var(--accent)] cursor-pointer"
                  id="airq-casestudy-modal-btn"
                >
                  <Layers size={13} /> Case Study
                </button>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              Card 2: OS Resource Allocator (Systems & Algorithms)
          ══════════════════════════════════════════════════════════ */}
          <div
            id="project-scheduler"
            className="flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-black/40 hover:border-[var(--accent)]/50 transition-all duration-300 group"
          >
            {/* Top Image Preview Container (Fixed h-48 matching reference) */}
            <div className="relative h-48 w-full bg-[#0d130e] overflow-hidden border-b border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src={scheduler.screenshotPath}
                alt="Adaptive Multiprogramming Resource Allocator simulation dashboard"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 z-20 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/75 border border-white/15 text-amber-300 flex items-center gap-1.5 backdrop-blur-md">
                <Cpu size={12} className="text-amber-400" />
                Live Simulator
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title & External Links */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {scheduler.shortTitle}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    href={scheduler.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors p-0.5"
                    aria-label="View OS Resource Allocator source code on GitHub"
                    id="scheduler-github-icon"
                  >
                    <GithubIcon size={17} />
                  </a>
                  <a
                    href={scheduler.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[var(--accent)] transition-colors p-0.5"
                    aria-label="Open OS Resource Allocator Simulator"
                    id="scheduler-card-link"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              {/* Subtitle / Category */}
              <p className="text-xs text-[var(--accent)] font-mono mb-2">
                {scheduler.category} · 0 Starved
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-5 flex-grow leading-relaxed">
                {scheduler.tagline}
              </p>

              {/* Tech Stack Tags (5 tags) */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {["JavaScript", "HTML5 Canvas", "DOM API", "CSS3", "Algorithms"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded bg-[#0b100c] border border-white/10 font-mono font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Symmetrical 2-Button Grid */}
              <div className="grid grid-cols-2 gap-2 pt-3 mt-3 border-t border-white/10">
                <a
                  href={scheduler.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                  id="scheduler-live-btn"
                >
                  <ExternalLink size={13} /> Simulation
                </a>
                <a
                  href={scheduler.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                  id="scheduler-code-btn"
                >
                  <GithubIcon size={13} /> Code
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              Card 3: Gesture-Controlled Embedded Vehicle
          ══════════════════════════════════════════════════════════ */}
          <div
            id="project-gesture"
            className="flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-black/40 hover:border-[var(--accent)]/50 transition-all duration-300 group"
          >
            {/* Top Image Preview Container (Fixed h-48 matching reference) */}
            <div className="relative h-48 w-full bg-[#0d130e] overflow-hidden border-b border-white/10 flex items-center justify-center p-3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src={gesture.schematicPath}
                alt="Proteus VSM Circuit Schematic: ADXL335 sensor to ATmega328P to L293D"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 z-20 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/75 border border-white/15 text-[var(--accent)] flex items-center gap-1.5 backdrop-blur-md">
                <Zap size={12} className="text-[var(--accent)]" />
                Proteus VSM
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title & External Link */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {gesture.shortTitle}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    href={gesture.schematicPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[var(--accent)] transition-colors p-0.5"
                    aria-label="Open Full Proteus Circuit Schematic"
                    id="gesture-card-link"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              {/* Subtitle / Category */}
              <p className="text-xs text-[var(--accent)] font-mono mb-2">
                {gesture.category} · ±30 LSB Filter
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-5 flex-grow leading-relaxed">
                {gesture.tagline}
              </p>

              {/* Tech Stack Tags (5 tags) */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {["Arduino (C/C++)", "Proteus", "L293D", "ADXL335", "Hardware"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded bg-[#0b100c] border border-white/10 font-mono font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Symmetrical 2-Button Grid */}
              <div className="grid grid-cols-2 gap-2 pt-3 mt-3 border-t border-white/10">
                <a
                  href={gesture.schematicPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5"
                  id="gesture-schematic-link"
                >
                  <ExternalLink size={13} /> Schematic
                </a>
                <button
                  onClick={() => setGestureDetailsOpen(true)}
                  className="btn-secondary text-xs py-2 px-2.5 flex items-center justify-center gap-1.5 text-[var(--accent)] cursor-pointer"
                  id="gesture-specs-modal-btn"
                >
                  <Cpu size={13} /> Specs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            Modal 1: AirQ Predict Deep Technical Case Study
        ────────────────────────────────────────────────────────────── */}
        {caseStudyOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="casestudy-title"
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c0f17] border border-white/15 p-6 sm:p-9 shadow-2xl"
              style={{ boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setCaseStudyOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>

              <div className="space-y-8">
                {/* Modal Title */}
                <div>
                  <span className="tag-accent text-xs mb-2 inline-flex items-center gap-1.5">
                    <Sparkles size={11} /> Deep Technical Case Study
                  </span>
                  <h3 id="casestudy-title" className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    AirQ Predict — Pipeline Architecture &amp; Empirical Validation
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    {flagship.architectureCallout}
                  </p>
                </div>

                {/* 1. Architecture Flow Diagram */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                    <Layers size={16} className="text-[var(--accent)]" /> 1. End-to-End System Architecture
                  </h4>
                  <AirqArchitecture />
                </div>

                {/* 2. Deployed Model Transparency Note */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">Model Configuration: </span>
                  {flagship.deployedModelNote}
                </div>

                {/* 3. Pipeline Specifications */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                    <FileCode2 size={16} className="text-[var(--accent)]" /> 2. Holdout Protocol &amp; Pipeline Specs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {flagship.facts.map((fact, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Empirical Evaluation Table */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                    <BarChart3 size={16} className="text-[var(--accent)]" /> 3. Empirical Holdout Comparison
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                    <table className="w-full text-left text-xs sm:text-sm font-mono">
                      <thead className="bg-white/[0.04] border-b border-white/10 text-slate-400">
                        <tr>
                          <th className="py-3 px-4">Model Architecture</th>
                          <th className="py-3 px-4">Day 1 R²</th>
                          <th className="py-3 px-4">Evaluation Holdout</th>
                          <th className="py-3 px-4">Deployment Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        {flagship.resultsTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`${idx === 2 ? "bg-white/[0.03] font-semibold text-white" : ""} hover:bg-white/[0.04] transition-colors`}
                          >
                            <td className="py-3 px-4">{row.model}</td>
                            <td className="py-3 px-4 text-[var(--accent)]">{row.r2}</td>
                            <td className="py-3 px-4 text-slate-400">{row.split}</td>
                            <td className="py-3 px-4 text-xs">
                              {row.status === "Active Production API" ? (
                                <span className="inline-flex items-center gap-1 text-emerald-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  {row.status}
                                </span>
                              ) : row.status === "Holdout Benchmark" ? (
                                <span className="text-[var(--accent)]">{row.status}</span>
                              ) : (
                                <span className="text-slate-400">{row.status}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5. Clear Limitations Notice */}
                <div className="p-4 sm:p-5 rounded-xl bg-amber-500/[0.05] border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 space-y-2">
                  <div className="flex items-center gap-2 font-mono uppercase text-amber-400 font-bold text-xs">
                    <AlertTriangle size={15} /> Current Evaluation Limitations
                  </div>
                  <p className="leading-relaxed">
                    {flagship.limitations}
                  </p>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} /> Open Live Demo
                    </a>
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
                    >
                      <GithubIcon size={14} /> View Code
                    </a>
                  </div>
                  <button
                    onClick={() => setCaseStudyOpen(false)}
                    className="btn-secondary text-xs py-2 px-3.5 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            Modal 2: Gesture Vehicle Firmware & Hardware Specs
        ────────────────────────────────────────────────────────────── */}
        {gestureDetailsOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gesture-modal-title"
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c0f17] border border-white/15 p-6 sm:p-8 shadow-2xl"
              style={{ boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)" }}
            >
              <button
                onClick={() => setGestureDetailsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
                aria-label="Close Specifications"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="tag-accent text-xs mb-2 inline-flex items-center gap-1.5">
                    <Zap size={11} /> Hardware Architecture Specs
                  </span>
                  <h3 id="gesture-modal-title" className="text-2xl font-bold text-white mt-1">
                    Embedded Gesture Vehicle — Circuit &amp; Firmware Logic
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    {gesture.architectureCallout}
                  </p>
                </div>

                {/* Circuit Schematic Full View */}
                <div className="rounded-xl border border-white/10 bg-black/60 p-3 overflow-hidden">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={gesture.schematicPath}
                      alt="Proteus VSM Circuit Schematic: ADXL335 sensor to ATmega328P to L293D dual motor driver"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Pinouts & Firmware Specs */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2.5 font-mono">
                  <p className="text-[var(--accent)] font-semibold uppercase text-xs tracking-wider">
                    Firmware Deadband &amp; Pin Configuration:
                  </p>
                  <p>• ADXL335 Analog Input Pins: A0 (X-axis tilt), A1 (Y-axis roll)</p>
                  <p>• Deadband Filter: ±30 LSB ADC noise margin suppresses hand tremor artifacts</p>
                  <p>• Motor Driver Interface: D5 (PWM Left), D6/D7 (IN1/IN2), D8 (IN3), D9 (PWM Right)</p>
                  <p>• Differential Steering: In-place pivoting and proportional acceleration</p>
                  <p>• Simulation Status: {gesture.evidence}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a
                    href={gesture.schematicPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
                  >
                    <ExternalLink size={14} /> Open Full SVG Schematic
                  </a>
                  <button
                    onClick={() => setGestureDetailsOpen(false)}
                    className="btn-secondary text-xs py-2 px-3.5 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
