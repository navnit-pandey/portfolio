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
  tagline: "End-to-end 4-model ensemble predicting 5-day air quality with live REST API.",
  description:
    "A production-grade machine learning system that ingests atmospheric pollutant streams (PM2.5, PM10, NO₂, SO₂, CO, O₃), computes US EPA standard index breakpoints, and forecasts 5-day AQI trends using an ensemble of Scikit-learn regressors. Deployed with a Flask REST API backend on Render and a Next.js (TypeScript) dashboard on Vercel.",
  architecture:
    "RandomForest(n_estimators=120, max_depth=10), GradientBoosting(n_estimators=100, max_depth=5, learning_rate=0.05), ExtraTrees(n_estimators=120, max_depth=10), Ridge(alpha=1.0), blended by inverse-MAE weights on time-series split.",
  keyComparison:
    "0.65 single model -> 0.81 ensemble with a 14-day lag-feature window and a full year of history.",
  limitations:
    "Limitations: single city, ~70-day single-season test window, ensemble weights currently tuned on the test set.", // TODO: remove this line once I re-evaluate with a separate validation split
  limitationsTodo: "TODO: remove this line once I re-evaluate with a separate validation split",
  facts: [
    "5-day forecast horizon",
    "4-model inverse-MAE weighted ensemble",
    "14-day lag window over 365 days of history (~351 sequential samples)",
    "Strict chronological 80/20 split (~281 train / ~70 test records, no lookahead leakage)",
    "R² 0.81 and MAE ~39 on Day 1, measured on a Delhi dataset (AQI scale 0–500)",
  ],
  resultsTable: [
    {
      model: "Naive persistence (tomorrow = today)",
      r2: "~0.38",
      mae: "~58–62",
      isEstimated: true,
      todoNote: "TODO: confirm ~ value from script run",
    },
    {
      model: "Single untuned regressor",
      r2: "~0.65",
      mae: "~47",
      isEstimated: true,
      todoNote: "TODO: confirm ~ value from script run",
    },
    {
      model: "4-Model Weighted Ensemble",
      r2: "0.81",
      mae: "~39",
      isEstimated: true,
      todoNote: "TODO: confirm ~39 MAE from script run (0.81 R² confirmed)",
    },
  ],
  horizonTable: [
    { day: "Day 1", r2: "0.81", isEstimated: false, note: "Confirmed" },
    { day: "Day 3", r2: "~0.73", isEstimated: true, note: "TODO: confirm ~ value" },
    { day: "Day 5", r2: "~0.67", isEstimated: true, note: "TODO: confirm ~ value" },
  ],
  techStack: [
    "Python",
    "Scikit-learn",
    "Random Forest",
    "Gradient Boosting",
    "Extra Trees",
    "Ridge Regression",
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
  demoNote: "Free-tier backend may take ~60s to wake on first load.",
  caseStudyUrl: undefined as string | undefined, // TODO: [case study URL] Add Explore Case Study button when URL is ready
};

export const resourceAllocatorProject = {
  id: "adaptive-resource",
  title: "Adaptive Multiprogramming Resource Allocator",
  shortTitle: "OS Resource Allocator",
  category: "Systems & Algorithms",
  featured: false,
  tagline: "Rule-based OS-concepts simulation: CPU/memory monitoring with adaptive control.",
  description:
    "Rule-based OS-concepts simulation: CPU/memory monitoring with adaptive control.",
  algorithm: "TODO: specify algorithm", // TODO: specify algorithm
  screenshotPlaceholder: "TODO: path to screenshot", // TODO: path to screenshot
  techStack: ["JavaScript (ES6)", "DOM API", "HTML5 Canvas", "CSS3", "Algorithms"],
  githubUrl: "https://github.com/navnit-pandey/Adaptive-Resource-Allocation-in-Multiprogramming-Systems",
  liveUrl: "https://navnit-pandey.github.io/Adaptive-Resource-Allocation-in-Multiprogramming-Systems/",
  highlights: [
    "Interactive CPU & memory contention dashboard",
    "Rule-based dynamic starvation prevention heuristic",
    "Zero-framework vanilla implementation demonstrating core JavaScript fluency",
  ],
};

export const gestureCarProject = {
  id: "gesture-car",
  title: "Gesture-Controlled Embedded Vehicle",
  shortTitle: "Embedded Gesture Vehicle",
  category: "Hardware & Embedded Systems",
  featured: false,
  tagline: "Microcontroller circuit design, sensor signal conditioning, and motor PWM control simulated in Proteus.",
  description:
    "An embedded engineering build combining accelerometer sensor inputs with an Arduino microcontroller to translate hand tilt gestures into real-time directional motor control. Designed, wired, and validated in Proteus schematic simulation before physical prototyping.",
  statusLine: "Proteus simulation prototype (TODO: confirm if built physically)", // TODO: [built physically / Proteus simulation only]
  repoVideoTodo: "TODO: [repo/video link]", // TODO: [repo/video link]
  diagramTodo: "TODO: [image/circuit diagram]", // TODO: [image/circuit diagram]
  techStack: ["Arduino (C/C++)", "Proteus Simulation", "L293D Motor Driver", "Sensors", "Circuit Design"],
  githubUrl: undefined as string | undefined, // TODO: [repo/video link]
  liveUrl: undefined as string | undefined,
  highlights: [
    "Full Proteus circuit schematic simulation prior to hardware assembly",
    "Deadband thresholding algorithm to suppress input sensor jitter",
    "Proportional dual-channel PWM motor speed control",
    "Hands-on cross-disciplinary engineering extending beyond pure software",
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
