"use client";

import { GraduationCap, Code2, Award, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function About() {
  return (
    <section
      id="about"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
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
                I am an engineering undergraduate pursuing a B.Tech in Artificial Intelligence &amp; Machine Learning at Lovely Professional University (LPU), graduating in 2027.
              </p>
              <p>
                My projects center on building verifiable end-to-end systems — taking messy multi-sensor and atmospheric pollutant streams, engineering rolling lag features, validating on leak-free chronological test sets, and shipping them via lightweight REST APIs.
              </p>
              <p>
                Rather than treating machine learning as isolated Jupyter notebooks, I care about the complete loop: clean feature pipelines, rigorous baseline benchmarking, and reliable cloud deployments.
              </p>
            </div>

            {/* Quick Stats / Timeline */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400">Target Role</span>
                <p className="text-sm font-bold text-white mt-1">AI/ML &amp; Software Engineering Intern</p>
                <p className="text-xs font-mono text-[var(--accent)] mt-0.5">Available Summer 2027</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400">Primary Languages</span>
                <p className="text-sm font-bold text-white mt-1">Python, C++, TypeScript, SQL</p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">Scikit-learn, Flask, Next.js</p>
              </div>
            </div>
          </div>

          {/* Right: Academic Card & Key Focus (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Credential Card */}
            <div className="card-featured p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(163, 230, 53, 0.12)",
                    border: "1px solid rgba(163, 230, 53, 0.25)",
                  }}
                >
                  <GraduationCap
                    size={24}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <span className="tag-accent text-xs mb-2">Academic Foundation</span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    B.Tech in Artificial Intelligence &amp; Machine Learning
                  </h3>
                  <p className="text-sm text-slate-300">
                    School of Computer Science &amp; Engineering
                  </p>
                  <p className="text-xs font-mono text-[var(--accent)] mt-1.5">
                    Lovely Professional University (LPU) · Class of 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Principles */}
            <div className="space-y-4">
              <div className="card p-6 flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Code2 size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    End-to-End System Deployment
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Connecting data wrangling, Scikit-learn regressors, and Flask REST endpoints to responsive web dashboards.
                  </p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Award size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Empirical Baseline Benchmarking
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Always benchmarking against naive persistence models with strict chronological splits to eliminate data leakage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
