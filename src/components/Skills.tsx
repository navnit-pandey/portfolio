"use client";

import { useState } from "react";
import {
  Brain,
  Code2,
  Globe,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SkillPillar {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  items: {
    name: string;
    description: string;
    tag: string;
  }[];
}

const skillPillars: SkillPillar[] = [
  {
    id: "ml",
    name: "Machine Learning & AI",
    subtitle: "Core Focus — Tabular ML models, feature engineering, and evaluation",
    icon: Brain,
    accent: "var(--accent)",
    items: [
      {
        name: "Scikit-learn & Ensemble Methods",
        description:
          "Trained Random Forest, Gradient Boosting, and Ridge regressors to forecast non-linear environmental trends.",
        tag: "Modeling",
      },
      {
        name: "Data Wrangling & Feature Engineering",
        description:
          "Cleaning multi-source pollutant metrics, handling missing features, and calculating US EPA breakpoints with NumPy & Pandas.",
        tag: "Data Prep",
      },
      {
        name: "Empirical Model Evaluation",
        description:
          "Rigorous performance tracking using R² scores, Mean Absolute Error (MAE), and residual analysis on test splits.",
        tag: "Validation",
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        description:
          "Visualizing multivariate pollutant distributions, seasonal correlations, and data outliers using charts.",
        tag: "Analysis",
      },
    ],
  },
  {
    id: "programming",
    name: "Programming & Systems",
    subtitle: "Algorithmic thinking, object-oriented design, and systems concepts",
    icon: Code2,
    accent: "#38bdf8",
    items: [
      {
        name: "Python (Primary)",
        description:
          "Main language for machine learning workflows, automation scripts, and Flask backend microservices.",
        tag: "Language",
      },
      {
        name: "C++ & Java",
        description:
          "Problem-solving in Data Structures & Algorithms, memory management, and OOP architectural principles.",
        tag: "Foundations",
      },
      {
        name: "Resource Scheduling & OS",
        description:
          "Simulating CPU/memory contention, process state queues, and rule-based adaptive reallocation.",
        tag: "Systems",
      },
      {
        name: "Embedded Systems & Arduino",
        description:
          "Writing C/C++ control logic on microcontrollers with Proteus schematic circuit simulation.",
        tag: "Hardware",
      },
    ],
  },
  {
    id: "web-cloud",
    name: "Full-Stack & Deployment",
    subtitle: "Connecting machine learning models to production web interfaces",
    icon: Globe,
    accent: "#fbbf24",
    items: [
      {
        name: "Flask & REST APIs",
        description:
          "Building lightweight Python API endpoints to expose trained regressors for inference.",
        tag: "Backend",
      },
      {
        name: "Next.js, React & TypeScript",
        description:
          "Developing modern, responsive frontend dashboards with type safety and interactive charts.",
        tag: "Frontend",
      },
      {
        name: "Cloud Deployment (Vercel & Render)",
        description:
          "Deploying and managing live environments for frontend web apps and backend API services.",
        tag: "DevOps",
      },
      {
        name: "Linux & Git Workflows",
        description:
          "Command-line environments, version control branching, and reproducible Jupyter notebook workflows.",
        tag: "Tooling",
      },
    ],
  },
];

export default function Skills() {
  const [activePillar, setActivePillar] = useState("ml");

  const current =
    skillPillars.find((p) => p.id === activePillar) || skillPillars[0];

  return (
    <section
      id="skills"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label">Technical Competencies</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            What I work with
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            I believe technical skill is best demonstrated through what you build,
            not arbitrary percentages. Here is a clear breakdown of the tools and
            concepts I use in my projects.
          </p>
        </div>

        {/* Spacious Pillar Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {skillPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activePillar;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer"
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.02)",
                  border: `1px solid ${
                    isActive ? pillar.accent : "var(--border)"
                  }`,
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  boxShadow: isActive
                    ? `0 8px 24px -6px rgba(0, 0, 0, 0.5)`
                    : "none",
                }}
              >
                <Icon
                  size={18}
                  style={{ color: isActive ? pillar.accent : "var(--text-muted)" }}
                />
                <span>{pillar.name}</span>
                {pillar.id === "ml" && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(163, 230, 53, 0.15)",
                      color: "var(--accent)",
                    }}
                  >
                    Focus
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Canvas — Uncluttered, spacious, high-contrast cards */}
        <div className="card p-8 sm:p-12 md:p-14 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none rounded-full"
            style={{
              background: `radial-gradient(circle, ${current.accent}15 0%, transparent 70%)`,
            }}
          />

          {/* Subtitle / Focus overview */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Pillar Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {current.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-300 max-w-md">
              {current.subtitle}
            </p>
          </div>

          {/* Spacious 2-Column Grid with comfortable padding and zero claustrophobia */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.025)",
                  border: "1px solid var(--border)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className="text-xs font-mono px-3.5 py-1.5 rounded-md uppercase tracking-wider"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: current.accent,
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {item.tag}
                    </span>
                    <CheckCircle2
                      size={15}
                      style={{ color: current.accent }}
                      className="opacity-70"
                    />
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3.5">
                    {item.name}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footnote */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-400">
            Skills listed reflect direct application in course projects, personal builds, and ongoing coursework at LPU.
          </p>
        </div>
      </div>
    </section>
  );
}
