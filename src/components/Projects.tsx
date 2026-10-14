"use client";

import { useState } from "react";
import {
  ExternalLink,
  X,
  ChevronRight,
  BarChart3,
  Cpu,
  Zap,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Layers,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const categoryIcons: Record<string, React.ElementType> = {
  "ML / Full-Stack": BarChart3,
  "Systems & Algorithms": Cpu,
  "Hardware & Embedded Systems": Zap,
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = categoryIcons[project.category] || BarChart3;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content p-8 sm:p-12 md:p-14 relative max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(163, 230, 53, 0.1)",
                border: "1px solid rgba(163, 230, 53, 0.2)",
              }}
            >
              <Icon size={20} style={{ color: "var(--accent)" }} />
            </div>
            <span className="tag-accent text-xs">{project.category}</span>
            {project.featured && (
              <span className="tag-pill text-xs">Flagship Build</span>
            )}
          </div>

          <h2
            id="modal-title"
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {project.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Evaluation Metrics if present */}
        {project.results.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Empirical Validation &amp; Architecture Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.025)",
                    border: "1px solid rgba(163, 230, 53, 0.2)",
                  }}
                >
                  <p className="text-2xl sm:text-3xl font-black font-mono text-[var(--accent)] mb-1">
                    {r.value}
                  </p>
                  <p className="text-xs font-mono uppercase text-slate-300 font-semibold">
                    {r.label}
                  </p>
                  {r.note && (
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{r.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem Statement */}
        <div className="space-y-10 mb-10">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              The Engineering Challenge
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Technical Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Technical Implementation
            </h3>
            <div className="space-y-4">
              {project.approach.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="text-[var(--accent)] font-mono text-xs font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Takeaways */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Key Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="text-[var(--accent)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag-pill text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          className="flex flex-wrap items-center gap-4 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <ExternalLink size={16} /> Open Live Deployment
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <GithubIcon size={16} /> View GitHub Source
            </a>
          )}
          <button onClick={onClose} className="btn-secondary text-sm ml-auto">
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const flagshipProject = projects[0];
  const companionProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header without wasteful filter pills */}
        <div className="max-w-3xl mb-14">
          <p className="section-label">Engineering Portfolio &amp; Evidence</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
            Featured Systems &amp; Builds
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tangible engineering projects evaluated with leak-free holdout sets,
            empirical performance metrics, and working public deployments.
          </p>
        </div>

        {/* 1. Flagship Featured Project: AirQ Predict */}
        <div className="card-featured p-8 sm:p-12 md:p-14 relative overflow-hidden">
          {/* Background ambient illumination */}
          <div
            className="absolute -right-20 -bottom-20 w-[500px] h-[500px] pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(163,230,53,0.09) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols): Information & Proof */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-accent text-xs">
                  <Sparkles size={11} /> Flagship AI/ML Project
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  ● Live Backend &amp; Frontend Deployed
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  {flagshipProject.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                  {flagshipProject.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Predicts multi-day air quality metrics across 6 pollutant streams (PM2.5, PM10, CO, NO₂, SO₂, O₃).
                The improvement from <strong className="text-white font-semibold">baseline R² 0.65 to 0.81</strong> was achieved by expanding the multi-seasonal training corpus combined with 24h &amp; 48h rolling lag feature engineering on a strict chronological split.
              </p>

              {/* Core Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Flask REST API", "Next.js", "Vercel", "Render"].map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setSelected(flagshipProject)}
                  className="btn-primary text-sm cursor-pointer"
                >
                  Explore Technical Case Study <ChevronRight size={16} />
                </button>
                {flagshipProject.liveUrl && (
                  <a
                    href={flagshipProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <ExternalLink size={15} /> Live Web App ↗
                  </a>
                )}
                {flagshipProject.githubUrl && (
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={15} /> Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Column (5 cols): Embedded Proof & Horizon Breakdown */}
            <div className="lg:col-span-5">
              <div
                className="p-7 sm:p-8 rounded-2xl space-y-5"
                style={{
                  background: "rgba(10, 12, 18, 0.85)",
                  border: "1px solid rgba(163, 230, 53, 0.25)",
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    Empirical Model Validation
                  </p>
                  <span className="text-[11px] font-mono text-[var(--accent)]">
                    US EPA Standards
                  </span>
                </div>

                {/* Score vs Baseline Callout */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-[var(--accent)]">
                      0.81
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      Day 1 Test R²
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Vs 0.65 single regressor &amp; 0.38 naive baseline (tomorrow = today)
                  </p>
                </div>

                {/* MAE context */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-300">Mean Absolute Error</p>
                    <p className="text-[11px] text-slate-400">0–500 AQI scale (seasonal peak variance)</p>
                  </div>
                  <p className="text-2xl font-black font-mono text-white">~39</p>
                </div>

                {/* Multi-Day Degradation Table */}
                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Horizon Decay (Chronological Split)</span>
                    <span className="text-[var(--accent)]">No Leakage</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-slate-400">Day 1</p>
                      <p className="text-xs font-bold text-white">0.81 R²</p>
                      <p className="text-[10px] text-emerald-400">~39 MAE</p>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-slate-400">Day 3</p>
                      <p className="text-xs font-bold text-slate-200">0.73 R²</p>
                      <p className="text-[10px] text-slate-400">~46 MAE</p>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-slate-400">Day 7</p>
                      <p className="text-xs font-bold text-slate-400">0.64 R²</p>
                      <p className="text-[10px] text-slate-400">~55 MAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Additional Focused Engineering Builds */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Systems &amp; Embedded Microcontroller Builds
            </p>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {companionProjects.map((project) => {
              const Icon = categoryIcons[project.category] || Cpu;
              return (
                <div
                  key={project.id}
                  className="card p-8 sm:p-10 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Top bar with Category */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <Icon size={20} style={{ color: "var(--accent)" }} />
                      </div>
                      <span className="tag-pill text-xs">{project.category}</span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Properly Labeled Action Buttons (No raw URLs!) */}
                  <div
                    className="flex flex-wrap items-center gap-3 pt-6 mt-8"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2 px-3.5"
                      >
                        <ExternalLink size={14} /> Live Simulation
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2 px-3.5"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon size={14} /> Source Code
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="text-xs font-semibold text-[var(--accent)] hover:text-white flex items-center gap-1 transition-colors cursor-pointer ml-auto"
                    >
                      Technical Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/navnit-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GithubIcon size={16} /> Inspect All Code Repositories on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
