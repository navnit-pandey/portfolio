// ─── Projects ────────────────────────────────────────────────────────
export const projects = [
  {
    id: "aqi-prediction",
    title: "AirQ Predict — AQI Forecasting System",
    shortTitle: "AirQ Predict",
    category: "ML / Full-Stack",
    featured: true,
    tagline: "End-to-end multi-regressor pipeline predicting 5-day air quality with live REST API.",
    description:
      "A production-grade machine learning system that ingests atmospheric pollutant streams (PM2.5, PM10, NO₂, SO₂, CO, O₃), computes US EPA standard index breakpoints, and forecasts 5-day AQI trends using an ensemble of Scikit-learn regressors. Deployed with a Flask REST API backend on Render and a Next.js (TypeScript) dashboard on Vercel.",
    problem:
      "Public air quality monitoring platforms rarely provide localized multi-day predictive horizons. Naive prediction baselines (assuming tomorrow's AQI equals today's) fail dramatically during seasonal weather shifts (baseline R² ~0.38). The goal was to build a verifiable, leak-free predictive pipeline that outperforms baseline heuristics on real held-out data.",
    approach: [
      "Data Collection & Cleaning: Automated ingestion of atmospheric pollutant records across diverse urban seasons via OpenWeatherMap APIs.",
      "Leak-Free Splitting: Enforced strict chronological train/test splitting (80/20) rather than random shuffling to eliminate future-lookahead data leakage.",
      "Feature Engineering: Created 24-hour and 48-hour rolling pollutant lag features, diurnal variance indicators, and pollutant interaction ratios.",
      "Ensemble Modeling: Trained and benchmarked Random Forest, Gradient Boosting, Extra Trees, and Ridge Regression. Ensembling tuned models boosted generalization score from 0.65 to 0.81 on Day 1 predictions.",
      "Production Serving: Deployed Flask microservice with REST endpoints on Render, coupled to a responsive Next.js frontend with dynamic charting on Vercel.",
    ],
    results: [
      {
        label: "Day 1 R² Score",
        value: "0.81",
        note: "Outperformed single-model baseline (0.65) and naive persistence baseline (0.38)",
      },
      {
        label: "Mean Absolute Error",
        value: "~39",
        note: "AQI units on 0–500 scale during high-variance seasonal pollutant swings",
      },
      {
        label: "Validation Split",
        value: "Chronological",
        note: "Strict time-based holdout test set to guarantee zero future data leakage",
      },
      {
        label: "Forecast Degradation",
        value: "Day 1: 0.81 → Day 5: 0.67",
        note: "Empirical horizon decay: Day 1 (0.81 R²) | Day 3 (0.73 R²) | Day 5 (0.67 R²)",
      },
    ],
    techStack: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Gradient Boosting",
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
    highlights: [
      "Chronological 80/20 time-series split preventing data leakage",
      "Ensemble combining Random Forest, Gradient Boosting, and Ridge",
      "0.81 R² test score vs 0.38 naive persistence baseline",
      "Live decoupled architecture: Flask REST API on Render + Next.js on Vercel",
      "US EPA Breakpoint calculation engine across 6 major pollutants",
    ],
  },
  {
    id: "adaptive-resource",
    title: "Adaptive Multiprogramming Resource Allocator",
    shortTitle: "OS Resource Allocator",
    category: "Systems & Algorithms",
    featured: false,
    tagline: "Interactive simulation of process scheduling, CPU/memory contention, and starvation prevention.",
    description:
      "An operating system simulation dashboard exploring dynamic resource scheduling under contention. Designed with a modular 3-layer architecture (Monitoring Layer, Rule-Based Decision Engine, and Actuator Control) to visualize real-time process states, memory allocation, and starvation avoidance without relying on external UI frameworks.",
    problem:
      "When multiprogramming operating systems face resource saturation, fixed priority queues cause process starvation and cascading latency. This project models how an autonomous rule-based governor can dynamically intercept process metrics and rebalance CPU quanta and memory allocations.",
    approach: [
      "Built a 3-layer scheduling pipeline: process telemetry observer, priority rule engine, and allocation actuator.",
      "Engineered starvation prevention heuristics that elevate dormant thread priorities as wait-time thresholds breach limits.",
      "Implemented a real-time reactive canvas dashboard in vanilla JavaScript (ES6) demonstrating high-frequency DOM batching.",
    ],
    results: [
      {
        label: "Architecture",
        value: "3-Tier",
        note: "Telemetry Monitor → Rule Decision Engine → Resource Actuator",
      },
      {
        label: "Scheduling Logic",
        value: "Dynamic",
        note: "Adaptive CPU quantum adjustments based on queue congestion",
      },
    ],
    techStack: ["JavaScript (ES6)", "DOM API", "HTML5 Canvas", "CSS3", "Algorithms"],
    githubUrl: "https://github.com/navnit-pandey/Adaptive-Resource-Allocation-in-Multiprogramming-Systems",
    liveUrl: "https://navnit-pandey.github.io/Adaptive-Resource-Allocation-in-Multiprogramming-Systems/",
    highlights: [
      "Interactive starvation-prevention and priority queue simulation",
      "Telemetry feedback loop adjusting resource allocations dynamically",
      "Zero-framework vanilla implementation demonstrating core JavaScript fluency",
      "Visual Gantt / queue state charts updating in real time",
    ],
  },
  {
    id: "gesture-car",
    title: "Gesture-Controlled Embedded Vehicle",
    shortTitle: "Embedded Gesture Vehicle",
    category: "Hardware & Embedded Systems",
    featured: false,
    tagline: "Microcontroller circuit design, sensor signal conditioning, and motor PWM control simulated in Proteus.",
    description:
      "An embedded engineering build combining accelerometer sensor inputs with an Arduino microcontroller to translate hand tilt gestures into real-time directional motor control. Designed, wired, and validated in Proteus schematic simulation before physical microcontroller deployment.",
    problem:
      "Translating noisy human analog gesture signals into smooth, low-latency motor control requires analog-to-digital filtering, deadband thresholding to eliminate jitter, and precise PWM modulation under constrained microcontroller resources.",
    approach: [
      "Schematic Design: Mapped microcontroller pinouts, L293D motor driver bridge, and accelerometer analog inputs in Proteus.",
      "Signal Conditioning: Programmed noise filtering and a deadband threshold in C/C++ to eliminate unintentional hand trembles.",
      "PWM Motor Driver: Mapped filtered gesture vectors into proportional directional speeds across twin DC gear motors.",
    ],
    results: [
      {
        label: "Control Loop",
        value: "<20ms",
        note: "Sensor-to-motor actuation latency in circuit simulation",
      },
      {
        label: "Validation",
        value: "Proteus",
        note: "Complete circuit schematic and virtual terminal logic verification",
      },
    ],
    techStack: ["Arduino (C/C++)", "Proteus Simulation", "L293D Motor Driver", "Sensors", "Circuit Design"],
    githubUrl: "https://github.com/navnit-pandey",
    liveUrl: null,
    highlights: [
      "Full Proteus circuit schematic simulation prior to hardware assembly",
      "Deadband thresholding algorithm to suppress input sensor jitter",
      "Proportional dual-channel PWM motor speed control",
      "Hands-on cross-disciplinary engineering extending beyond pure software",
    ],
  },
];

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
      "Time-Series Validation",
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
