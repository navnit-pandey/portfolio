"use client";

import { GraduationCap, Code2, Award, Terminal, ArrowRight } from "lucide-react";
import { processSteps, contactDetails } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Main 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="section-label">Background &amp; Focus</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{ letterSpacing: "-0.025em" }}
            >
              Engineering student specializing in{" "}
              <span className="text-[var(--accent)]">Artificial Intelligence &amp; ML</span>.
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-300">
              <p>
                I am an engineering undergraduate pursuing a B.Tech in Artificial Intelligence &amp; Machine Learning at Lovely Professional University (LPU).
                {/* TODO: confirm exact graduation year & target role */}
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
                  Available for Internships {/* TODO: specify exact availability window */}
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

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Direct Contact
              </p>
              <p className="text-sm text-slate-200 font-mono">
                {contactDetails.email}
              </p>
              <p className="text-xs text-slate-400">
                {contactDetails.location}
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            Merged Short Section: Compact 6-Step Engineering Approach
            (Dropped the four "in progress" cards as requested)
        ────────────────────────────────────────────────────────────── */}
        <div className="pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-2xl mb-8">
            <p className="section-label">Engineering Methodology</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Compact 6-Step Process
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Practical cycle applied across machine learning pipelines and systems builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-3.5"
              >
                <span className="w-8 h-8 rounded-lg bg-[rgba(163,230,53,0.1)] border border-[rgba(163,230,53,0.25)] flex items-center justify-center font-mono text-xs font-bold text-[var(--accent)] flex-shrink-0">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
