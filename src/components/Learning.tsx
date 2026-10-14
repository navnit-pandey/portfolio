"use client";

import { learningAreas } from "@/lib/data";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const statusConfig: Record<
  string,
  { bg: string; border: string; text: string; dot: string }
> = {
  "Actively exploring": {
    bg: "rgba(163, 230, 53, 0.08)",
    border: "rgba(163, 230, 53, 0.25)",
    text: "var(--accent)",
    dot: "#a3e635",
  },
  "In progress": {
    bg: "rgba(56, 189, 248, 0.08)",
    border: "rgba(56, 189, 248, 0.25)",
    text: "#38bdf8",
    dot: "#38bdf8",
  },
  "Ongoing practice": {
    bg: "rgba(251, 191, 36, 0.08)",
    border: "rgba(251, 191, 36, 0.25)",
    text: "#fbbf24",
    dot: "#fbbf24",
  },
  "Gradually building": {
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.25)",
    text: "#c084fc",
    dot: "#c084fc",
  },
};

export default function Learning() {
  return (
    <section
      id="learning"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">Growth &amp; Exploration</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Always a work in progress
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-slate-400"
          >
            Domains I&rsquo;m actively studying and practicing right now —
            framed with genuine humility as ongoing exploration, not claimed expertise.
          </p>
        </div>

        {/* 2x2 Grid with generous padding and space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {learningAreas.map((area) => {
            const config =
              statusConfig[area.status] || statusConfig["Actively exploring"];

            return (
              <div
                key={area.area}
                className="card p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Status Dot */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <BookOpen size={18} style={{ color: "var(--accent)" }} />
                    </div>

                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium"
                      style={{
                        background: config.bg,
                        border: `1px solid ${config.border}`,
                        color: config.text,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: config.dot }}
                      />
                      {area.status}
                    </div>
                  </div>

                  {/* Area Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {area.area}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-[1.7] text-slate-400">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spacious GitHub Tracking Banner */}
        <div className="card p-8 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <GithubIcon size={20} className="text-[var(--accent)]" />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Follow my learning journey on GitHub
              </h3>
            </div>
            <p className="text-sm text-slate-400">
              My public repositories reflect real-time experimentation, mistakes, and progress.
            </p>
          </div>

          <a
            href="https://github.com/navnit-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            github.com/navnit-pandey <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
