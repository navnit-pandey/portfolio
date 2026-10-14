"use client";

import { GraduationCap, Code, Lightbulb, Compass } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Learning Through Building",
    description:
      "I don't wait until I feel 'ready' to build something. I pick a real problem, try to solve it, and learn from what breaks.",
  },
  {
    icon: Code,
    title: "End-to-End Systems Thinking",
    description:
      "From raw data ingestion and model training to REST API deployment and client integration — I care about the complete lifecycle.",
  },
  {
    icon: Lightbulb,
    title: "Honest Engineering Metrics",
    description:
      "A model with an R² of 0.81 still has 19% unexplained variance. I'd rather understand and document the gap than conceal it.",
  },
];

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
            <p className="section-label">Identity &amp; Philosophy</p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              An AI/ML student who{" "}
              <span className="text-[var(--accent)]">builds to learn</span>.
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-300">
              <p>
                I&rsquo;m Navnit Pandey, an engineering student specialising in
                Artificial Intelligence and Machine Learning at Lovely
                Professional University.
              </p>
              <p>
                My approach to learning is fundamentally hands-on. Rather than
                passively consuming tutorials, I pick tangible problems — predicting
                regional air quality trends, scheduling system resources, or
                translating hand gestures to motor controls — and implement working
                solutions.
              </p>
              <p>
                The friction of debugging multi-regressor pipelines, tuning
                hyperparameters, handling irregular real-world API data, and
                deploying services to cloud runtimes teaches me far more than theory
                alone ever could.
              </p>
            </div>

            {/* Core Tech Signature */}
            <div className="pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Toolkit
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Python",
                  "Scikit-learn",
                  "Random Forest",
                  "Next.js",
                  "Flask",
                  "Linux",
                  "Git",
                ].map((t) => (
                  <span key={t} className="tag-pill text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlights & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="card-featured p-8 md:p-10">
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
                  <span className="tag-accent text-xs mb-2.5">Academic Foundation</span>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    B.Tech in Artificial Intelligence &amp; Machine Learning
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    School of Computer Science and Engineering
                  </p>
                  <p className="text-xs font-mono text-[var(--accent)] mt-2">
                    Lovely Professional University (LPU)
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="space-y-5">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="card p-7 sm:p-8 flex items-start gap-5 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5">
                        {h.title}
                      </h4>
                      <p className="text-sm leading-[1.7] text-slate-400">
                        {h.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
