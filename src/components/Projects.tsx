"use client";

import { useState } from "react";
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
  Info,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { airqProject, resourceAllocatorProject, gestureCarProject } from "@/lib/data";

const categoryIcons: Record<string, React.ElementType> = {
  "ML / Full-Stack": BarChart3,
  "Systems & Algorithms": Cpu,
  "Hardware & Embedded Systems": Zap,
};

export default function Projects() {
  const [gestureExpanded, setGestureExpanded] = useState(false);

  const flagship = airqProject;
  const resourceAlloc = resourceAllocatorProject;
  const gestureCar = gestureCarProject;

  return (
    <section
      id="projects"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="section-label">Engineering Portfolio &amp; Evidence</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Featured Systems &amp; Builds
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tangible engineering projects evaluated with leak-free chronological holdouts,
            baseline comparisons, and working public deployments.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            1. Flagship Card: AirQ Predict
        ────────────────────────────────────────────────────────────── */}
        <div className="card-featured p-6 sm:p-10 md:p-12 relative overflow-hidden mb-14">
          {/* Ambient Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-[500px] h-[500px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 space-y-8">
            {/* Top Bar with Screenshot / Mockup Container */}
            <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300">aqi-prediction-model-one.vercel.app</span>
                </div>
                <span className="text-[11px] text-[var(--accent)]">
                  {/* TODO: replace with screenshot/GIF path */}
                  Live Demo UI Preview (TODO: add screenshot/GIF asset)
                </span>
              </div>

              {/* Visual Mockup Header of Live Demo */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div>
                    <span className="tag-accent text-xs mb-2">
                      <Sparkles size={11} /> Flagship AI/ML Project
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                      {flagship.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 mt-1">
                      {flagship.tagline}
                    </p>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Flask API (Render) + Next.js (Vercel)
                    </span>
                  </div>
                </div>

                {/* Key Comparison Banner */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <Sparkles size={18} className="text-[var(--accent)] flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-200 font-mono">
                    <strong>Gain:</strong> {flagship.keyComparison}
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Facts & Setup */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Pipeline Specifications &amp; Hold-Out Setup
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {flagship.facts.map((fact, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Results Table (with Baseline & Horizons) */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Empirical Evaluation Results (Delhi Test Hold-Out · AQI Scale 0–500)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-xs sm:text-sm font-mono">
                  <thead className="bg-white/[0.04] border-b border-white/10 text-slate-400">
                    <tr>
                      <th className="py-3 px-4">Model / Approach</th>
                      <th className="py-3 px-4">R² Score</th>
                      <th className="py-3 px-4">MAE (AQI Units)</th>
                      <th className="py-3 px-4">Status / Script Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {flagship.resultsTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx === 2 ? "bg-white/[0.03] font-semibold text-white" : ""} hover:bg-white/[0.04] transition-colors cursor-help`}
                        title={`Metric: ${row.model} | Definition: R² (variance explained), MAE (mean absolute error in AQI units) | Split: Chronological 80/20 Delhi holdout | Baseline: 0.38 naive persistence`}
                      >
                        <td className="py-3 px-4">{row.model}</td>
                        <td className="py-3 px-4 text-[var(--accent)]">{row.r2}</td>
                        <td className="py-3 px-4">{row.mae}</td>
                        <td className="py-3 px-4 text-xs text-slate-400">
                          {row.isEstimated ? (
                            <span className="text-amber-400/90">{row.todoNote}</span>
                          ) : (
                            <span className="text-emerald-400">Validated</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forecast Horizon Degradation Row */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                R² Degradation by Forecast Horizon (Chronological Holdout)
              </p>
              <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs">
                {flagship.horizonTable.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all cursor-help"
                    title={`Metric: Multi-step ahead R² score for ${h.day} | Split: 80/20 chronological holdout | Baseline: Naive persistence R² 0.38`}
                  >
                    <p className="text-slate-400">{h.day}</p>
                    <p className="text-base sm:text-lg font-bold text-white mt-0.5">{h.r2} R²</p>
                    <p className="text-[10px] text-amber-400/80 mt-0.5">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations Notice */}
            <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p>{flagship.limitations}</p>
                <span className="text-[11px] font-mono text-amber-400/70 block mt-1">
                  {/* TODO: remove this line once I re-evaluate with a separate validation split */}
                  ({flagship.limitationsTodo})
                </span>
              </div>
            </div>

            {/* Action Buttons & Note */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={flagship.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink size={16} /> Open Live Demo
                </a>

                <a
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <GithubIcon size={16} /> View Code on GitHub
                </a>

                {/* Explore Case Study button only if URL exists */}
                {/* TODO: [case study URL] Add Explore Case Study button when URL is ready */}
                {flagship.caseStudyUrl && (
                  <a
                    href={flagship.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Explore Case Study
                  </a>
                )}
              </div>

              {/* Free-tier backend wakeup note */}
              <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Clock size={13} className="text-amber-400" />
                <span>{flagship.demoNote}</span>
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. Other Project Cards
        ────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Resource Allocator Card */}
          <div className="card p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Cpu size={20} style={{ color: "var(--accent)" }} />
                </div>
                <span className="tag-pill text-xs">{resourceAlloc.category}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-between group">
                  <span>{resourceAlloc.title}</span>
                  <ArrowRight size={18} className="card-arrow text-slate-500 opacity-60 flex-shrink-0" />
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {resourceAlloc.description}
                </p>
              </div>

              {/* Algorithm line with TODO */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-300">
                <span className="text-slate-400">Scheduling Heuristics:</span>{" "}
                <span className="text-amber-400/90">{resourceAlloc.algorithm}</span>
                {/* TODO: specify algorithm */}
              </div>

              {/* Screenshot Placeholder container */}
              <div className="p-4 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center text-xs font-mono text-slate-500">
                {/* TODO: path to screenshot */}
                [Screenshot: {resourceAlloc.screenshotPlaceholder}]
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {resourceAlloc.techStack.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Replaced raw URLs with Live Demo and Code buttons */}
            <div
              className="flex flex-wrap items-center gap-3 pt-6 mt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href={resourceAlloc.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3.5"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href={resourceAlloc.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3.5"
              >
                <GithubIcon size={14} /> Code
              </a>
            </div>
          </div>

          {/* Gesture-Controlled Car Card */}
          <div className="card p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Zap size={20} style={{ color: "var(--accent)" }} />
                </div>
                <span className="tag-pill text-xs">{gestureCar.category}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-between group">
                  <span>{gestureCar.title}</span>
                  <ArrowRight size={18} className="card-arrow text-slate-500 opacity-60 flex-shrink-0" />
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {gestureCar.tagline}
                </p>
              </div>

              {/* Status Line stating physical / simulation */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-300">
                <span className="text-slate-400">Build Status:</span>{" "}
                <span className="text-amber-400/90">{gestureCar.statusLine}</span>
                {/* TODO: [built physically / Proteus simulation only] */}
              </div>

              {/* TODO: [image/circuit diagram] */}
              <div className="p-3.5 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center text-xs font-mono text-slate-500">
                {/* TODO: [image/circuit diagram] */}
                [Circuit Schematic: {gestureCar.diagramTodo}]
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {gestureCar.techStack.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Description Details */}
              {gestureExpanded && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2 animate-fadeIn">
                  <p>{gestureCar.description}</p>
                  <p className="font-mono text-slate-400 pt-1">
                    • Accelerometer analog gesture thresholding in C/C++
                    <br />
                    • L293D dual H-bridge motor driver interface
                    <br />
                    • Proteus virtual circuit schematic and pinout simulation
                  </p>
                  <p className="text-amber-400/80 font-mono text-[11px] pt-1">
                    {/* TODO: [repo/video link] */}
                    {gestureCar.repoVideoTodo}
                  </p>
                </div>
              )}
            </div>

            {/* Expandable Toggle Button replacing broken link */}
            <div
              className="flex items-center justify-between pt-6 mt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setGestureExpanded(!gestureExpanded)}
                className="btn-secondary text-xs py-2 px-3.5 cursor-pointer"
                aria-expanded={gestureExpanded}
              >
                {gestureExpanded ? (
                  <>
                    Hide Technical Details <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    View Technical Details <ChevronDown size={14} />
                  </>
                )}
              </button>
              <span className="text-xs font-mono text-slate-500">
                {/* TODO: [repo/video link] */}
                Source Code: {gestureCar.repoVideoTodo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
