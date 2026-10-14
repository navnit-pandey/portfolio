"use client";

import { useState } from "react";
import { ArrowRight, Mail, FileText, CheckCircle2, TrendingUp, Layers, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { contactDetails } from "@/lib/data";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(contactDetails.email).catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);

    try {
      window.location.href = `mailto:${contactDetails.email}`;
    } catch {}
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background illumination */}
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(163,230,53,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom pt-28 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(163, 230, 53, 0.08)",
                border: "1px solid rgba(163, 230, 53, 0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wide">
                B.Tech AI &amp; ML · Open to Internships
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.06] tracking-tight">
              Building Intelligent Systems.
              <br />
              <span className="text-[var(--accent)]">Evaluated With Real Metrics.</span>
            </h1>

            {/* Exact Proof Line under headline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              Built and deployed an AQI forecasting system: 4-model ensemble, R² 0.81
              (Day 1) on a time-based Delhi hold-out vs 0.38 for a naive persistence baseline.
            </p>

            {/* Buttons: Resume, LinkedIn, GitHub, Email */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary"
                id="hero-cta-projects"
              >
                Inspect Projects <ArrowRight size={16} />
              </button>

              {/* Resume Button with download attribute */}
              <a
                href={contactDetails.resumePath}
                download="Navnit_Pandey_Resume.pdf"
                className="btn-secondary"
                id="hero-cta-resume"
              >
                <FileText size={16} /> Resume (PDF)
              </a>

              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-cta-linkedin"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} className="text-[#38bdf8]" /> LinkedIn
              </a>

              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-cta-github"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} className="text-[var(--accent)]" /> GitHub
              </a>

              <button
                onClick={handleEmailClick}
                className="btn-secondary cursor-pointer"
                id="hero-cta-email"
                aria-label={`Email ${contactDetails.email}`}
                title="Click to copy email & open mail client"
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={16} /> Email
                  </>
                )}
              </button>
            </div>

            {/* Direct Email Meta Line */}
            <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm text-slate-300 font-mono">
              <Mail size={14} className="text-[var(--accent)]" />
              <span>{contactDetails.email}</span>
            </div>
          </div>

          {/* Right Column: Real 4-Model Ensemble Code & Benchmark Card (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="card p-6 sm:p-7 relative overflow-hidden"
              style={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(163, 230, 53, 0.25)",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-slate-300 ml-2">
                    backend/model.py (Real Deployed Ensemble)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live on Render
                </span>
              </div>

              {/* Real 4-Model Definition Code Snippet */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] leading-5 text-slate-300 space-y-1">
                <p className="text-slate-500"># 4-Model Weighted Ensemble</p>
                <p>
                  <span className="text-white">RandomForest</span>(n_estimators=120, max_depth=10)
                </p>
                <p>
                  <span className="text-white">GradientBoosting</span>(n_estimators=100, max_depth=5, lr=0.05)
                </p>
                <p>
                  <span className="text-white">ExtraTrees</span>(n_estimators=120, max_depth=10)
                </p>
                <p>
                  <span className="text-white">Ridge</span>(alpha=1.0)
                </p>
                <p className="text-[var(--accent)] pt-1">
                  weights = inverse_mae / sum(inverse_mae)
                </p>
              </div>

              {/* Benchmark Numbers */}
              <div
                className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between cursor-help"
                title="Metric: R² (Coefficient of Determination) | Split: Chronological 80/20 Delhi holdout (~70 days test) | Baseline: 0.38 naive persistence (tomorrow = today)"
              >
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Day 1 Test Score</p>
                  <p className="text-xs text-slate-300">vs 0.38 naive baseline</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black font-mono text-[var(--accent)]">0.81</span>
                  <span className="text-xs font-mono text-slate-400 ml-1">R²</span>
                </div>
              </div>

              <div className="mt-3 text-[11px] font-mono text-slate-400 flex items-center justify-between px-1">
                <span>Validation: Chronological (No Leakage)</span>
                <span className="text-emerald-400">~281 Train / ~70 Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
