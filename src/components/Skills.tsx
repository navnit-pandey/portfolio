"use client";

import { Brain, Code2, Globe, CheckCircle2 } from "lucide-react";
import { skillCategories } from "@/lib/data";

const categoryIcons = [Brain, Code2, Globe];
const accentColors = ["var(--accent)", "#38bdf8", "#fbbf24"];

export default function Skills() {
  return (
    <section
      id="stack"
      className="section relative scroll-mt-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <p className="section-label">Core Technical Competencies</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">
            Tools &amp; Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Technologies directly applied in deployed projects, predictive ML pipelines, and ongoing coursework at LPU.
          </p>
        </div>

        {/* 3-Column Cleanly Grouped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Brain;
            const accent = accentColors[idx] || "var(--accent)";

            return (
              <div
                key={cat.title}
                className="card p-7 sm:p-8 flex flex-col justify-between"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon size={22} style={{ color: accent }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Checkmarks */}
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm text-slate-200"
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: accent }}
                          className="flex-shrink-0"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
