"use client";

import { ArrowRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(163,230,53,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom pt-32 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(163, 230, 53, 0.08)",
                border: "1px solid rgba(163, 230, 53, 0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wide">
                B.Tech in Artificial Intelligence &amp; Machine Learning · LPU
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight"
            >
              Building{" "}
              <span className="text-[var(--accent)]">Intelligent</span>
              <br />
              Systems.
              <br />
              <span className="text-slate-400 font-light">
                Solving Real Problems.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Aspiring AI/ML Engineer and software developer who learns through
              hands-on building — from multi-regressor predictive pipelines and
              adaptive resource schedulers to embedded hardware.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary"
                id="hero-cta-projects"
              >
                Explore Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-secondary"
                id="hero-cta-contact"
              >
                <Mail size={16} /> Get In Touch
              </button>
            </div>

            {/* Social & Location Meta */}
            <div className="flex flex-wrap items-center gap-5 pt-4 text-sm text-slate-400 font-mono">
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
              <span>Phagwara, Punjab, India</span>
            </div>
          </div>

          {/* Right Hero Visual Code & Status Card (4 cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div
              className="card p-7 md:p-9 relative overflow-hidden"
              style={{
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">
                  pipeline_eval.py
                </span>
              </div>

              <div className="font-mono text-xs leading-6 text-slate-300 space-y-1">
                <p>
                  <span className="text-[var(--accent)]">from</span> sklearn.ensemble{" "}
                  <span className="text-[var(--accent)]">import</span>
                </p>
                <p className="pl-4 text-white">GradientBoostingRegressor</p>
                <p className="pt-2">
                  <span className="text-[var(--accent)]">regressor</span> ={" "}
                  <span className="text-slate-100">GradientBoostingRegressor(</span>
                </p>
                <p className="pl-4 text-slate-400">
                  n_estimators=<span className="text-[var(--accent)]">150</span>,
                </p>
                <p className="pl-4 text-slate-400">
                  learning_rate=<span className="text-[var(--accent)]">0.05</span>
                </p>
                <p className="text-slate-100">{")"}</p>
                <p className="pt-2 text-slate-400">
                  regressor.<span className="text-white">fit</span>(X_train, y_train)
                </p>
                <div
                  className="mt-5 p-4 rounded-xl flex items-center justify-between"
                  style={{
                    background: "rgba(163, 230, 53, 0.08)",
                    border: "1px solid rgba(163, 230, 53, 0.2)",
                  }}
                >
                  <span className="text-xs text-slate-300">R² Validation Score</span>
                  <span className="text-sm font-bold text-[var(--accent)]">0.81</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll Down
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
