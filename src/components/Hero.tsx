"use client";

import { ArrowRight, Mail, FileText, CheckCircle2, TrendingUp, Cpu, Activity } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <div className="lg:col-span-7 space-y-7">
            {/* Target Status Pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(163, 230, 53, 0.08)",
                border: "1px solid rgba(163, 230, 53, 0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wide">
                B.Tech in AI &amp; ML · Lovely Professional University · Seeking Summer 2027 Internships
              </span>
            </div>

            {/* Dominant H1 Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.06] tracking-tight">
              Building Intelligent Systems.
              <br />
              <span className="text-[var(--accent)]">Proven With Real Metrics.</span>
            </h1>

            {/* Evidence-Driven Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              AI/ML student who took an AQI forecasting system from{" "}
              <span className="text-white font-semibold">baseline R² 0.65 to 0.81</span>{" "}
              and deployed it as a live REST API. Experienced with tabular ensembles,
              leak-free time-series validation, and systems simulations.
            </p>

            {/* CTAs including Resume & Projects */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary"
                id="hero-cta-projects"
              >
                Inspect Projects <ArrowRight size={16} />
              </button>
              <a
                href="/Navnit_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-cta-resume"
              >
                <FileText size={16} /> View Resume / CV
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-secondary"
                id="hero-cta-contact"
              >
                <Mail size={16} /> Get In Touch
              </button>
            </div>

            {/* Verified Meta Links */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs sm:text-sm text-slate-400 font-mono">
              <a
                href="https://github.com/navnit-pandey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} className="text-[var(--accent)]" />
                <span>github.com/navnit-pandey</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="https://linkedin.com/in/navnit-pandey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} className="text-[#38bdf8]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">·</span>
              <span>Phagwara, Punjab, India</span>
            </div>
          </div>

          {/* Right Column: Empirical Proof & System Architecture Card (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="card p-6 sm:p-8 relative overflow-hidden"
              style={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(163, 230, 53, 0.25)",
              }}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Flagship Benchmark Proof
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live on Vercel + Render
                </span>
              </div>

              {/* Benchmark Numbers */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-mono uppercase text-slate-300">
                      Day-1 Generalization Score
                    </span>
                    <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                      +0.43 vs Naive Baseline
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-[var(--accent)]">
                      0.81
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      R² (vs 0.65 single model / 0.38 naive persistence)
                    </span>
                  </div>
                </div>

                {/* Horizon Accuracy Degradation Table */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Forecast Horizon Decay</span>
                    <span className="text-slate-500">Chronological Split</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white/[0.03]">
                      <p className="text-[10px] text-slate-400">Day 1</p>
                      <p className="text-sm font-bold text-white">0.81 R²</p>
                      <p className="text-[10px] text-emerald-400">~39 MAE</p>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <p className="text-[10px] text-slate-400">Day 3</p>
                      <p className="text-sm font-bold text-slate-200">0.73 R²</p>
                      <p className="text-[10px] text-slate-400">~46 MAE</p>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <p className="text-[10px] text-slate-400">Day 5</p>
                      <p className="text-sm font-bold text-slate-400">0.67 R²</p>
                      <p className="text-[10px] text-slate-400">~52 MAE</p>
                    </div>
                  </div>
                </div>

                {/* Technical Architecture Summary */}
                <div className="text-xs font-mono text-slate-300 space-y-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[var(--accent)] flex-shrink-0" />
                    <span>Ensemble: Random Forest + GBDT + Ridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[var(--accent)] flex-shrink-0" />
                    <span>Features: 24h &amp; 48h rolling pollutant lags</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[var(--accent)] flex-shrink-0" />
                    <span>Validation: Strict time-series split (zero future leak)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
