"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Cpu,
  Zap,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ShieldCheck,
  Activity,
  FileCode2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { airqProject, resourceAllocatorProject, gestureCarProject } from "@/lib/data";
import AirqArchitecture from "@/components/AirqArchitecture";

export default function Projects() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [gestureDetailsOpen, setGestureDetailsOpen] = useState(false);

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
        <div className="max-w-3xl mb-12">
          <p className="section-label">Engineering Evidence &amp; Builds</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Featured Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tangible engineering projects evaluated with leak-free chronological holdouts,
            algorithmic problem solving, and working public deployments.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            1. Flagship Card: AirQ Predict (Streamlined First View)
        ────────────────────────────────────────────────────────────── */}
        <div className="card-featured p-5 sm:p-8 md:p-9 relative overflow-hidden mb-10" id="project-airq">
          {/* Ambient Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-[500px] h-[500px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            {/* Header: Title, Category, Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <span className="tag-accent text-xs mb-2 inline-flex items-center gap-1.5">
                  <Sparkles size={11} /> Flagship AI/ML Project
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
                  {flagship.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {flagship.deploymentBadge}
                </span>
              </div>
            </div>

            {/* Architecture & Validation Callout Block (Single streamlined block) */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-xs font-mono uppercase text-slate-400 mb-1 font-semibold tracking-wider">
                Architecture &amp; Validation
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {flagship.architectureCallout}
              </p>
            </div>

            {/* Visual Evidence: Real Live Dashboard Screenshot with Optimized Sizes & Priority */}
            <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300">aqi-prediction-model-one.vercel.app</span>
                </div>
                <span className="text-[11px] text-[var(--accent)] font-semibold flex items-center gap-1.5">
                  <Activity size={12} /> Live Production Interface
                </span>
              </div>
              <div className="relative w-full aspect-[16/9] max-h-[360px] bg-slate-950">
                <Image
                  src={flagship.screenshotPath}
                  alt="AirQ Predict Production Dashboard with live AQI metrics and 5-day multi-pollutant forecast"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Metric Badge: Day 1 R² 0.81 vs 0.38 Naive Persistence Baseline */}
            <div className="p-4 sm:p-5 rounded-xl bg-[rgba(163,230,53,0.06)] border border-[rgba(163,230,53,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(163,230,53,0.15)] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Verified Empirical Metric
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                    {flagship.keyComparison}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-black/40 border border-white/10 text-slate-300 self-start sm:self-auto">
                Chronological 80/20 Delhi Holdout
              </span>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono uppercase text-slate-400 mr-2 font-semibold">Stack:</span>
              {flagship.techStack.map((tech) => (
                <span key={tech} className="tag-pill text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {/* Three Primary Actions (Live Demo, GitHub Code, Read Case Study Toggle) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={flagship.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                id="airq-live-demo-btn"
              >
                <ExternalLink size={16} /> Open Live Demo
              </a>

              <a
                href={flagship.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                id="airq-github-btn"
              >
                <GithubIcon size={16} /> View Code on GitHub
              </a>

              <button
                onClick={() => setCaseStudyOpen(!caseStudyOpen)}
                className="btn-secondary text-sm cursor-pointer flex items-center gap-2 border-[var(--border)] hover:border-[var(--accent)]"
                id="airq-casestudy-toggle"
                aria-expanded={caseStudyOpen}
              >
                <Layers size={16} />
                <span>{caseStudyOpen ? "Hide Technical Case Study" : "Read Technical Case Study"}</span>
                {caseStudyOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                Collapsible Technical Case Study (Behind Button)
            ────────────────────────────────────────────────────────────── */}
            {caseStudyOpen && (
              <div className="pt-8 mt-6 border-t border-white/10 space-y-8 animate-fadeIn">
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
              </div>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. Structured Secondary Projects: Scheduler & Gesture Vehicle
        ────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: Resource Allocator */}
          <div className="card p-7 sm:p-9 flex flex-col justify-between" id="project-scheduler">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Cpu size={20} style={{ color: "var(--accent)" }} />
                </div>
                <span className="tag-pill text-xs">{scheduler.category}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {scheduler.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {scheduler.tagline}
                </p>
              </div>

              {/* Algorithm & Architecture (Single streamlined block, no redundant objective box) */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-[11px] font-mono uppercase text-slate-400 mb-1 font-semibold tracking-wider">
                  Algorithm &amp; Architecture
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {scheduler.architectureCallout}
                </p>
              </div>

              {/* Evidence: Simulation Dashboard Preview */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>Evidence: Live Simulation Dashboard</span>
                  <span className="text-emerald-400 font-medium">{scheduler.metricBadge}</span>
                </div>
                <div className="rounded-xl border border-white/10 overflow-hidden bg-black/40 relative aspect-[16/10]">
                  <Image
                    src={scheduler.screenshotPath}
                    alt="Adaptive Multiprogramming Resource Allocator live contention simulation dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {scheduler.techStack.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div
              className="flex flex-wrap items-center gap-3 pt-6 mt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href={scheduler.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3.5"
                id="scheduler-live-btn"
              >
                <ExternalLink size={14} /> Open Live Simulation
              </a>
              <a
                href={scheduler.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3.5"
                id="scheduler-code-btn"
              >
                <GithubIcon size={14} /> View Code
              </a>
            </div>
          </div>

          {/* Card 2: Gesture Vehicle */}
          <div className="card p-7 sm:p-9 flex flex-col justify-between" id="project-gesture">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Zap size={20} style={{ color: "var(--accent)" }} />
                </div>
                <span className="tag-pill text-xs">{gesture.category}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {gesture.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {gesture.tagline}
                </p>
              </div>

              {/* Signal Path & Firmware Logic (Single streamlined block, no redundant objective box) */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-[11px] font-mono uppercase text-slate-400 mb-1 font-semibold tracking-wider">
                  Signal Path &amp; Firmware Logic
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {gesture.architectureCallout}
                </p>
              </div>

              {/* Evidence: Proteus Circuit Schematic with Metric Badge */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>Evidence: Proteus Schematic</span>
                  <span className="text-[var(--accent)] font-semibold">{gesture.metricBadge}</span>
                </div>
                <div className="rounded-xl border border-white/10 overflow-hidden bg-black/40 relative aspect-[16/10] p-1">
                  <Image
                    src={gesture.schematicPath}
                    alt="Proteus VSM Circuit Schematic: ADXL335 sensor to ATmega328P to L293D dual motor driver"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {gesture.techStack.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Technical Firmware & Pinout Spec */}
              {gestureDetailsOpen && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-2 animate-fadeIn font-mono">
                  <p className="text-[var(--accent)] font-semibold">Embedded Architecture Details:</p>
                  <p>• ADXL335 Analog Input Pins: A0 (X-axis tilt), A1 (Y-axis roll)</p>
                  <p>• Deadband Filter: ±30 LSB ADC noise margin suppresses hand tremor artifacts</p>
                  <p>• Motor Driver Interface: D5 (PWM Left), D6/D7 (IN1/IN2), D8 (IN3), D9 (PWM Right)</p>
                  <p>• Differential Steering: In-place pivoting and proportional acceleration</p>
                </div>
              )}
            </div>

            {/* Links & Actions */}
            <div
              className="flex flex-wrap items-center gap-3 pt-6 mt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href={gesture.schematicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
                id="gesture-schematic-link"
              >
                <ExternalLink size={14} /> View Circuit Schematic (Full)
              </a>

              <button
                onClick={() => setGestureDetailsOpen(!gestureDetailsOpen)}
                className="btn-secondary text-xs py-2 px-3.5 cursor-pointer flex items-center gap-1.5"
                aria-expanded={gestureDetailsOpen}
              >
                <span>{gestureDetailsOpen ? "Hide Firmware Specs" : "Firmware Specs"}</span>
                {gestureDetailsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
