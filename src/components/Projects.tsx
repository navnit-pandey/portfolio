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
  ArrowUpRight,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const categoryIcons: Record<string, React.ElementType> = {
  "ML / Full-Stack": BarChart3,
  "Systems / Web": Cpu,
  "Hardware / Embedded": Zap,
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
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
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

        {/* Results Metrics if present */}
        {project.results.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Evaluation Metrics
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
                  <p className="text-3xl sm:text-4xl font-black font-mono text-[var(--accent)] mb-1">
                    {r.value}
                  </p>
                  <p className="text-xs font-mono uppercase text-slate-300 font-semibold">
                    {r.label}
                  </p>
                  {r.note && (
                    <p className="text-xs text-slate-400 mt-2">{r.note}</p>
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
              The Problem &amp; Motivation
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

          {/* Key Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Engineering Takeaways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-5 rounded-xl text-xs sm:text-sm text-slate-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              Tools &amp; Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Links Footer */}
        <div
          className="flex flex-wrap items-center gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} /> Open Live Application
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={16} /> Inspect GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const featuredProject = projects.find((p) => p.featured);
  const companionProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="section-label">Featured Work</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white"
            >
              Things I&rsquo;ve built
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Real projects built from scratch — exploring predictive machine learning,
              systems scheduling, and embedded microcontrollers.
            </p>
          </div>

          {/* Clean Segmented Filter Pills */}
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Display */}
        {filter === "All" ? (
          <div>
            {/* 1. Flagship Featured Project: Spacious, clean, uncluttered */}
            {featuredProject && (
              <div
                className="card-featured p-8 sm:p-12 md:p-14 relative overflow-hidden cursor-pointer"
                onClick={() => setSelected(featuredProject)}
              >
                {/* Background ambient illumination */}
                <div
                  className="absolute -right-20 -bottom-20 w-[500px] h-[500px] pointer-events-none rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column (7 cols): Information */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="tag-accent text-xs">
                        <Sparkles size={11} /> Flagship Project
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {featuredProject.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                        {featuredProject.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                        {featuredProject.tagline}
                      </p>
                    </div>

                    {/* Concise summary without wall of text */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      Predicting 7-day air quality trends using an ensemble of Scikit-learn regressors
                      trained on historical pollutant data, served through a live Flask API and interactive web interface.
                    </p>

                    {/* Core Tech (Uncluttered, just top 5) */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Python", "Scikit-learn", "Flask", "Next.js", "Render"].map((tech) => (
                        <span key={tech} className="tag-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div
                      className="flex flex-wrap items-center gap-4 pt-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelected(featuredProject)}
                        className="btn-primary text-sm"
                      >
                        Explore Case Study <ChevronRight size={16} />
                      </button>
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {featuredProject.githubUrl && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={15} /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column (5 cols): Spacious Stat Callout */}
                  <div className="lg:col-span-5">
                    <div
                      className="p-8 md:p-10 rounded-2xl space-y-6"
                      style={{
                        background: "rgba(10, 12, 18, 0.8)",
                        border: "1px solid rgba(163, 230, 53, 0.2)",
                      }}
                    >
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Empirical Validation
                      </p>

                      <div className="space-y-5">
                        <div className="pb-4 border-b border-white/10">
                          <p className="text-4xl sm:text-5xl font-black font-mono text-[var(--accent)]">
                            0.81
                          </p>
                          <p className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">
                            R² Validation Score
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            Improved from 0.65 baseline after dataset expansion
                          </p>
                        </div>

                        <div>
                          <p className="text-3xl sm:text-4xl font-black font-mono text-white">
                            ~39
                          </p>
                          <p className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">
                            Mean Absolute Error (AQI Units)
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            Evaluated against held-out city pollutant test records
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Additional Companion Projects: Generous separation */}
            <div className="mt-24">
              <div className="flex items-center gap-4 mb-10">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Additional Systems &amp; Hardware Builds
                </p>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {companionProjects.map((project) => {
                  const Icon = categoryIcons[project.category] || Cpu;
                  return (
                    <div
                      key={project.id}
                      className="card p-8 sm:p-10 flex flex-col justify-between cursor-pointer"
                      onClick={() => setSelected(project)}
                    >
                      <div className="space-y-6">
                        {/* Top bar */}
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
                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {project.title}
                          </h4>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.techStack.map((t) => (
                            <span key={t} className="tag-pill text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div
                        className="flex items-center justify-between pt-6 mt-8"
                        style={{ borderTop: "1px solid var(--border)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              aria-label="GitHub Repository"
                            >
                              <GithubIcon size={18} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>

                        <button
                          onClick={() => setSelected(project)}
                          className="text-xs font-semibold text-[var(--accent)] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          View Details <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered projects view */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((project) => {
              const Icon = categoryIcons[project.category] || Cpu;
              return (
                <div
                  key={project.id}
                  className="card p-8 sm:p-10 flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <div className="space-y-6">
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

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((t) => (
                        <span key={t} className="tag-pill text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between pt-6 mt-8"
                    style={{ borderTop: "1px solid var(--border)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelected(project)}
                      className="text-xs font-semibold text-[var(--accent)] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      View Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GitHub Repositories Link */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/navnit-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={16} /> View All Repositories on GitHub{" "}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Modal Dialog */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
