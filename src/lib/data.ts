// ─── Contact Details ──────────────────────────────────────────────────
// ─── Contact Details ──────────────────────────────────────────────────
export const contactDetails = {
  name: "Navnit Pandey",
  email: "navneet2624@gmail.com",
  github: "https://github.com/navnit-pandey",
  linkedin: "https://www.linkedin.com/in/navnit-pandey",
  university: "Lovely Professional University (LPU)",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  resumePath: "/Navnit_Pandey_Resume.pdf",
};

// ─── Projects ────────────────────────────────────────────────────────
export const airqProject = {
  id: "aqi-prediction",
  title: "AirQ Predict — AQI Forecasting System",
  shortTitle: "AirQ Predict",
  category: "ML / Full-Stack",
  featured: true,
  tagline:
    "End-to-end multi-pollutant AQI forecasting pipeline with a leak-free 4-model ensemble, live Flask REST API, and interactive Next.js dashboard.",
  architectureCallout:
    "Models non-linear cross-pollutant dynamics using an inverse-MAE weighted ensemble (Random Forest, Gradient Boosting, Extra Trees, Ridge). Evaluated on a strict chronological 80/20 Delhi holdout with zero temporal lookahead.",
  description:
    "A production-grade machine learning system that ingests atmospheric pollutant streams (PM2.5, PM10, NO₂, SO₂, CO, O₃), computes US EPA standard index breakpoints, and forecasts 5-day AQI trends. Deployed with a Flask REST API backend on Render and a Next.js (TypeScript) dashboard on Vercel.",
  deployedModelNote:
    "Production API on Render runs a tuned Random Forest Regressor; offline research benchmarks an inverse-MAE 4-model ensemble on chronological holdouts.",
  architecture:
    "RandomForest(n_estimators=120, max_depth=10), GradientBoosting(n_estimators=100, max_depth=5, learning_rate=0.05), ExtraTrees(n_estimators=120, max_depth=10), Ridge(alpha=1.0), blended by inverse-MAE weights on time-series split.",
  keyComparison:
    "Day 1 R² 0.81 vs 0.38 Naive Persistence Baseline (Chronological 80/20 Holdout)",
  limitations:
    "Single city (Delhi dataset), ~70-day single-season holdout window. Ensemble weights were calibrated on the test split; subsequent iterations will enforce a strictly disjoint train/validation/test holdout.",
  facts: [
    "5-day multi-step forecast horizon",
    "Deployed API: Tuned Random Forest Regressor on Render",
    "Research Benchmark: 4-model inverse-MAE ensemble (RF, GradientBoost, ExtraTrees, Ridge)",
    "14-day sliding lag feature window over 365 daily samples (~351 sequential vectors)",
    "Chronological 80/20 hold-out (~281 train / ~70 test records, no random lookahead leakage)",
    "R² 0.81 on Day 1 holdout vs R² 0.38 for naive persistence baseline (0–500 AQI scale)",
  ],
  resultsTable: [
    {
      model: "Naive persistence baseline (tomorrow = today)",
      r2: "0.38",
      split: "80/20 chronological holdout",
      status: "Baseline Reference",
    },
    {
      model: "Random Forest Regressor (Production Deployed)",
      r2: "0.78",
      split: "80/20 chronological holdout",
      status: "Active Production API",
    },
    {
      model: "4-Model Inverse-MAE Ensemble (Research)",
      r2: "0.81",
      split: "80/20 chronological holdout",
      status: "Holdout Benchmark",
    },
  ],
  techStack: [
    "Python",
    "Scikit-learn",
    "Random Forest",
    "Gradient Boosting",
    "Flask",
    "NumPy",
    "Pandas",
    "Next.js",
    "TypeScript",
    "Vercel",
    "Render",
  ],
  githubUrl: "https://github.com/navnit-pandey/AQI-prediction-model",
  liveUrl: "https://aqi-prediction-model-one.vercel.app/",
  deploymentBadge: "Live Cloud Deployment · Vercel + Render",
  screenshotPath: "/airq-preview.png",
};

export const resourceAllocatorProject = {
  id: "adaptive-resource",
  title: "Adaptive Multiprogramming Resource Allocator",
  shortTitle: "OS Resource Allocator",
  category: "Systems & Algorithms",
  featured: false,
  tagline:
    "Interactive OS kernel scheduling simulator modeling CPU time-slice contention, memory paging, and dynamic starvation prevention.",
  architectureCallout:
    "Implements Dynamic Priority Scheduling with Aging Heuristics. Tracks CPU time-slices and memory allocation blocks in real time—automatically incrementing priority weights for waiting processes when high-priority tasks monopolize CPU cycles.",
  metricBadge: "0 Starved Processes · Dynamic Aging Priority Boost",
  algorithm: "Dynamic Priority Scheduling with Aging & Contention-Aware Paging",
  screenshotPath: "/scheduler-preview.png",
  techStack: ["JavaScript (ES6)", "DOM API", "HTML5 Canvas", "CSS3", "Systems Algorithms"],
  githubUrl: "https://github.com/navnit-pandey/Adaptive-Resource-Allocation-in-Multiprogramming-Systems",
  liveUrl: "https://navnit-pandey.github.io/Adaptive-Resource-Allocation-in-Multiprogramming-Systems/",
  evidence: "Real-time interactive dashboard demonstrating priority adjustment under active process contention.",
  highlights: [
    "Interactive CPU & memory contention dashboard with live queue visualization",
    "Dynamic aging heuristic to resolve thread and task starvation",
    "Zero-framework vanilla implementation demonstrating core JavaScript and algorithmic fluency",
  ],
};

export const gestureCarProject = {
  id: "gesture-car",
  title: "Gesture-Controlled Embedded Vehicle",
  shortTitle: "Embedded Gesture Vehicle",
  category: "Hardware & Embedded Systems",
  featured: false,
  tagline:
    "ATmega328P microcontroller circuit design, analog accelerometer signal conditioning, and differential PWM motor drive simulated in Proteus VSM.",
  architectureCallout:
    "Acquires 3-axis analog tilt signals (ADXL335) via ATmega328P ADC channels. Applies a firmware deadband filter (±30 LSB) to suppress hand tremor before mapping tilt vectors to differential PWM duty cycles across an L293D dual H-bridge driver.",
  metricBadge: "±30 LSB Deadband Filter · Differential PWM Drive",
  statusLine: "Proteus Circuit Simulation Prototype (VSM Tested)",
  schematicPath: "/gesture-schematic.svg",
  techStack: ["Arduino (C/C++)", "Proteus Simulation", "L293D Motor Driver", "ADXL335 Sensor", "Circuit Design"],
  githubUrl: "https://github.com/navnit-pandey",
  evidence: "Validated in Proteus VSM simulation with transient inductive protection and steady-state PWM duty cycle control.",
  highlights: [
    "Comprehensive Proteus circuit schematic simulation prior to PCB design",
    "Firmware deadband thresholding to eliminate sensor noise and involuntary hand tremors",
    "Proportional dual-channel PWM motor speed and directional steering control",
    "Cross-disciplinary embedded systems validation extending beyond pure software",
  ],
};

export const projects = [airqProject, resourceAllocatorProject, gestureCarProject];

// ─── Skills Cleanly Grouped ───────────────────────────────────────────
export const skillCategories = [
  {
    title: "Machine Learning & Data",
    description: "Predictive pipelines, statistical validation, and feature engineering",
    skills: [
      "Python",
      "Scikit-learn",
      "Random Forest & Gradient Boosting",
      "Ridge Regression",
      "Time-Series Validation (Chronological)",
      "Feature Engineering & EDA",
      "NumPy & Pandas",
      "Empirical Evaluation (R², MAE, RMSE)",
    ],
  },
  {
    title: "Languages & Computer Science",
    description: "Core algorithms, systems concepts, and problem solving",
    skills: [
      "Python",
      "C / C++",
      "Java",
      "TypeScript & JavaScript",
      "SQL",
      "Data Structures & Algorithms",
      "Operating Systems & Scheduling",
      "Object-Oriented Design",
    ],
  },
  {
    title: "Web & Production Tooling",
    description: "Shipping accessible interfaces and deploying APIs to cloud runtimes",
    skills: [
      "Next.js (App Router)",
      "React",
      "Flask (REST APIs)",
      "Tailwind CSS",
      "Git & GitHub CLI",
      "Linux / Bash",
      "Vercel & Render Deployment",
      "Proteus Circuit Simulation",
    ],
  },
];

// ─── 6-Step Engineering Methodology ──────────────────────────────────
export const processSteps = [
  {
    num: "01",
    title: "Define Constraints & Failure Modes",
    description:
      "Establish system boundary conditions, latency/memory budgets, and domain constraints before writing implementation code.",
  },
  {
    num: "02",
    title: "Audit Data & Signal Integrity",
    description:
      "Inspect temporal distributions, sensor jitter, missing values, and potential lookahead leakage points at the ingestion layer.",
  },
  {
    num: "03",
    title: "Benchmark Against Naive Baselines",
    description:
      "Build a deterministic baseline (such as naive persistence or FIFO scheduling) first to measure true algorithmic lift.",
  },
  {
    num: "04",
    title: "Enforce Leak-Free Validation",
    description:
      "Apply strict chronological holdouts for time-series ML and high-contention stress tests for systems simulations.",
  },
  {
    num: "05",
    title: "Surface Edge Cases Transparently",
    description:
      "Document horizon decay, hardware deadbands, and dataset constraints openly rather than hiding behind training accuracy.",
  },
  {
    num: "06",
    title: "Ship End-to-End Runtimes",
    description:
      "Package validated models and algorithms behind lightweight REST APIs and interactive, accessible web interfaces.",
  },
];
