// ─── Contact Details ──────────────────────────────────────────────────
// ─── Contact Details ──────────────────────────────────────────────────
export const contactDetails = {
  name: "Navnit Pandey",
  email: "navneet2624@gmail.com",
  github: "https://github.com/navnit-pandey",
  linkedin: "https://www.linkedin.com/in/navnit-pandey",
  university: "Lovely Professional University (LPU)",
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  resumePath: "/Navnit_Pandey_Resume.pdf",
};

// ─── Projects ────────────────────────────────────────────────────────
export const airqProject = {
  id: "aqi-prediction",
  title: "AirQ Predict — AQI Forecasting System",
  shortTitle: "AirQ Predict",
  category: "ML / Full-Stack",
  featured: true,
  tagline: "End-to-end multi-pollutant AQI forecasting pipeline with live REST API and interactive dashboard.",
  problem:
    "Urban air quality fluctuates rapidly based on cross-pollutant chemical dynamics. Predicting multi-day trends requires modeling non-linear atmospheric interactions without temporal lookahead bias.",
  description:
    "A production-grade machine learning system that ingests atmospheric pollutant streams (PM2.5, PM10, NO₂, SO₂, CO, O₃), computes US EPA standard index breakpoints, and forecasts 5-day AQI trends. Deployed with a Flask REST API backend on Render and a Next.js (TypeScript) dashboard on Vercel.",
  deployedModelNote:
    "Production API on Render runs a tuned Random Forest Regressor; offline research benchmarks an inverse-MAE 4-model ensemble on chronological holdouts.",
  architecture:
    "RandomForest(n_estimators=120, max_depth=10), GradientBoosting(n_estimators=100, max_depth=5, learning_rate=0.05), ExtraTrees(n_estimators=120, max_depth=10), Ridge(alpha=1.0), blended by inverse-MAE weights on time-series split.",
  keyComparison:
    "Day 1 R² 0.81 (hold-out test set) vs 0.38 for naive persistence baseline (predicting tomorrow = today).",
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
  demoNote: "Free-tier backend on Render may take ~45–60s to wake up on initial request.",
  screenshotPath: "/airq-preview.png",
};

export const resourceAllocatorProject = {
  id: "adaptive-resource",
  title: "Adaptive Multiprogramming Resource Allocator",
  shortTitle: "OS Resource Allocator",
  category: "Systems & Algorithms",
  featured: false,
  tagline: "Interactive OS simulation modeling CPU contention, memory paging, and dynamic starvation prevention.",
  objective:
    "Simulate and visualize operating system process scheduling under heavy CPU and memory contention, preventing low-priority process starvation.",
  method:
    "Dynamic Priority Scheduling with Aging Heuristics. Tracks CPU time-slices and memory allocation blocks; when high-priority tasks monopolize CPU cycles, the aging algorithm incrementally boosts starved process priorities.",
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
  tagline: "Microcontroller circuit design, sensor signal conditioning, and differential PWM motor drive simulated in Proteus.",
  objective:
    "Translate human hand tilt gestures into multi-directional vehicle locomotion without mechanical switches or physical joysticks.",
  method:
    "3-Axis accelerometer analog signal acquisition (ADXL335) conditioned through an ATmega328P microcontroller ADC. A firmware deadband filter (±30 LSB) suppresses hand jitter before mapping tilt angles to differential PWM duty cycles for an L293D dual H-bridge motor driver.",
  statusLine: "Proteus Circuit Simulation Prototype (VSM Tested)",
  schematicPath: "/gesture-schematic.svg",
  techStack: ["Arduino (C/C++)", "Proteus Simulation", "L293D Motor Driver", "ADXL335 Sensor", "Circuit Design"],
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

// ─── Merged Engineering Approach (6 Compact Steps) ─────────────────────
export const processSteps = [
  {
    num: "01",
    title: "Understand the Problem",
    description: "Define boundary conditions, domain constraints, and baseline expectations before writing code.",
  },
  {
    num: "02",
    title: "Investigate Data & Systems",
    description: "Inspect temporal distributions, missing values, pollutant noise, and potential leakage points.",
  },
  {
    num: "03",
    title: "Build the Simplest Solution",
    description: "Establish a naive persistence baseline (tomorrow = today) to measure true engineering lift.",
  },
  {
    num: "04",
    title: "Evaluate & Measure Rigorously",
    description: "Enforce strict chronological splits (no lookahead leakage) to measure Day-1 through Day-5 R² and MAE.",
  },
  {
    num: "05",
    title: "Diagnose & Document Limitations",
    description: "Analyze residual errors and single-season constraints openly rather than concealing them.",
  },
  {
    num: "06",
    title: "Iterate, Ensemble & Deploy",
    description: "Engineer rolling lag features, blend models by inverse-MAE weighting, and ship via live REST APIs.",
  },
];
