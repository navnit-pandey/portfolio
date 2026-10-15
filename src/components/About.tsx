"use client";

import { GraduationCap } from "lucide-react";
import { processSteps, contactDetails } from "@/lib/data";

export default function About() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          About & Background Section (#about)
      ────────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="section relative scroll-mt-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="container-custom">
          {/* Main 2-Column Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="section-label">Background &amp; Focus</p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight"
              >
                Engineering student specializing in&nbsp;
                <span className="text-[var(--accent)]">Artificial Intelligence &amp; ML</span>.
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-300">
                <p>
                  I am an engineering undergraduate pursuing a B.Tech in Computer Science &amp; Engineering (AI &amp; ML) at Lovely Professional University (LPU).
                </p>
                <p>
                  My focus is building verifiable end-to-end systems — taking noisy multi-sensor and atmospheric pollutant streams, engineering sliding lag features, validating on leak-free chronological holdout sets, and serving predictions through lightweight REST APIs.
                </p>
                <p>
                  Rather than treating machine learning as isolated notebook scripts, I focus on the complete deployment cycle: feature pipelines, baseline comparisons, and cloud runtimes.
                </p>
              </div>

              {/* Target Role & Academic Details */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase text-slate-400">Target Role</span>
                  <p className="text-sm font-bold text-white mt-1">AI/ML &amp; Software Engineering Intern</p>
                  <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                    Open for Summer 2028 Internships
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase text-slate-400">Core Stack</span>
                  <p className="text-sm font-bold text-white mt-1">Python, Scikit-learn, C++, SQL</p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">Flask, Next.js, Linux</p>
                </div>
              </div>
            </div>

            {/* Right Column: Academic Credentials Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-featured p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(163, 230, 53, 0.12)",
                      border: "1px solid rgba(163, 230, 53, 0.25)",
                    }}
                  >
                    <GraduationCap size={24} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="tag-accent text-xs mb-2">Academic Foundation</span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {contactDetails.degree}
                    </h3>
                    <p className="text-sm text-slate-300">
                      School of Computer Science &amp; Engineering
                    </p>
                    <p className="text-xs font-mono text-[var(--accent)] mt-1.5">
                      {contactDetails.university}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6-Step Engineering Methodology Section (#methodology)
      ────────────────────────────────────────────────────────────── */}
      <section
        id="methodology"
        className="section relative scroll-mt-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="section-label">Engineering Discipline</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              6-Step Engineering Methodology
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Standardized engineering principles applied across machine learning pipelines, systems simulations, and embedded firmware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[rgba(163,230,53,0.1)] border border-[rgba(163,230,53,0.25)] flex items-center justify-center font-mono text-xs font-bold text-[var(--accent)] flex-shrink-0">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Phase {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
