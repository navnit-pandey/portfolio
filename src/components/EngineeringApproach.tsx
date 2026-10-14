"use client";

import { processSteps } from "@/lib/data";

export default function EngineeringApproach() {
  return (
    <section
      id="approach"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="section-label">Methodology</p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              How I approach engineering problems
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              Every project I&rsquo;ve built has followed this cycle. It is not an
              abstract theory — it is a practical mindset developed by repeatedly
              building, breaking, and improving software and models.
            </p>

            <div
              className="card p-8 md:p-10"
              style={{
                background: "rgba(163, 230, 53, 0.04)",
                border: "1px solid rgba(163, 230, 53, 0.18)",
              }}
            >
              <p className="text-sm md:text-base leading-[1.7] italic text-slate-300">
                &ldquo;An initial R² of 0.65 isn&rsquo;t a failure — it is a diagnostic
                signal. Diagnosing residual errors and enriching feature engineering
                improved it to 0.81. That feedback loop is where authentic engineering
                lives.&rdquo;
              </p>
              <p className="text-xs font-mono mt-4 text-[var(--accent)] font-semibold tracking-wide">
                — Empirical takeaway from the AirQ Predict project
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Process steps */}
          <div className="lg:col-span-7 space-y-6">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] text-slate-400">
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
