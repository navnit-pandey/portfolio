"use client";

import { Database, Filter, GitCommit, Cpu, Server, Layout } from "lucide-react";

const pipelineStages = [
  {
    icon: Database,
    title: "Data Ingestion",
    tag: "Atmospheric Stream",
    details: "PM2.5, PM10, NO₂, SO₂, CO, O₃ continuous sensor feeds",
    color: "#38bdf8",
  },
  {
    icon: Filter,
    title: "Feature Pipeline",
    tag: "Lag Windows",
    details: "14-day temporal sliding window + EPA breakpoint normalization",
    color: "#818cf8",
  },
  {
    icon: GitCommit,
    title: "Split & Validation",
    tag: "Chronological Holdout",
    details: "80/20 chronological split (281 train / 70 test, zero lookahead leakage)",
    color: "#f59e0b",
  },
  {
    icon: Cpu,
    title: "Model Engine",
    tag: "RF + Ensemble",
    details: "Live: Random Forest Regressor · Research: 4-model inverse-MAE ensemble",
    color: "var(--accent)",
  },
  {
    icon: Server,
    title: "Flask REST API",
    tag: "Render Cloud",
    details: "Microservice exposing /predict with JSON payload validation",
    color: "#34d399",
  },
  {
    icon: Layout,
    title: "Next.js UI",
    tag: "Vercel Edge",
    details: "TypeScript dashboard with interactive 5-day horizon charts",
    color: "#f472b6",
  },
];

export default function AirqArchitecture() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
        <div>
          <p className="text-xs font-mono uppercase text-slate-400">System Architecture Flow</p>
          <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
            End-to-End Pipeline: Data Ingestion to Edge Delivery
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300">
          6-Stage Verified Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {pipelineStages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div
              key={i}
              className="relative p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Icon size={16} style={{ color: stage.color }} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-xs font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {stage.title}
                </p>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">{stage.tag}</p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {stage.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
