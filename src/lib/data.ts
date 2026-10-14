// ─── Projects ────────────────────────────────────────────────────────
export const projects = [
  {
    id: "aqi-prediction",
    title: "AirQ Predict — AQI Forecasting System",
    shortTitle: "AQI Prediction Model",
    category: "ML / Full-Stack",
    featured: true,
    tagline: "Real-time air quality analysis and 7-day ML-powered forecasting.",
    description:
      "A full-stack machine-learning web application that delivers real-time AQI analysis, pollutant-level breakdown, and 7-day predictive forecasting for any city globally. The project started as a focused Random Forest regression experiment, then evolved into a multi-model ensemble deployed end-to-end with a Flask API backend and a Next.js frontend.",
    problem:
      "Air quality data is fragmented across APIs and lacks easy-to-use forecasting. The goal was to build a system that fetches real pollutant readings, calculates AQI using US EPA breakpoints, and predicts the next 7 days using trained ML models — all served through a clean web interface.",
    approach: [
      "Integrated OpenWeatherMap's geocoding and air-pollution APIs to collect PM2.5, PM10, CO, NO₂, SO₂, and O₃ readings for any searched city.",
      "Implemented US EPA standard AQI calculation with precise pollutant breakpoints.",
      "Trained an ensemble of four regressors — Random Forest, Gradient Boosting, Extra Trees, and Ridge Regression — on historical pollutant data.",
      "Built a Flask REST API to serve model predictions, and a Next.js (TypeScript) frontend for interactive visualization.",
      "Deployed the Flask backend to Render and the Next.js frontend to Vercel.",
    ],
    results: [
      { label: "R² Score", value: "0.81", note: "(improved from 0.65 after dataset expansion)" },
      { label: "MAE", value: "~39", note: "AQI units (reported on evaluation dataset)" },
    ],
    techStack: [
      "Python", "Flask", "Scikit-learn", "Random Forest", "Gradient Boosting",
      "NumPy", "Pandas", "Next.js", "TypeScript", "Tailwind CSS",
      "OpenWeatherMap API", "Chart.js", "Vercel", "Render",
    ],
    githubUrl: "https://github.com/navnit-pandey/AQI-prediction-model",
    liveUrl: "https://aqi-prediction-model-one.vercel.app/",
    highlights: [
      "Multi-model ML ensemble with live performance metrics",
      "US EPA-standard AQI breakpoint calculation",
      "Global city search via geocoding API",
      "Interactive pollutant charts and 7-day forecast visualization",
      "Full-stack deployment across two platforms",
    ],
  },
  {
    id: "adaptive-resource",
    title: "Adaptive Resource Allocation System",
    shortTitle: "Resource Allocation",
    category: "Systems / Web",
    featured: false,
    tagline: "Monitoring CPU & memory with rule-based adaptive control.",
    description:
      "A web-based dynamic resource manager that simulates real-time monitoring and adaptive control of CPU and memory usage across running processes. Built with vanilla HTML, CSS, and JavaScript, it demonstrates an understanding of resource scheduling concepts, rule-engine decision-making, and interactive dashboard design without requiring any external framework.",
    problem:
      "In multiprogramming environments, resource contention and poor allocation decisions cause bottlenecks and instability. This project simulates how a monitoring layer can observe process states and apply rule-based decisions to rebalance resources proactively.",
    approach: [
      "Implemented a three-layer architecture: a monitoring component, a rule-engine decision layer, and a resource-control actuator.",
      "Built an interactive web dashboard to visualize resource states in real time.",
      "Used JavaScript DOM manipulation for smooth, animated UI updates without frameworks.",
      "Designed a clean, modular folder structure and reusable component patterns.",
    ],
    results: [],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "DOM API"],
    githubUrl: "https://github.com/navnit-pandey/Adaptive-Resource-Allocation-in-Multiprogramming-Systems",
    liveUrl: "https://navnit-pandey.github.io/Adaptive-Resource-Allocation-in-Multiprogramming-Systems/",
    highlights: [
      "Three-layer architecture: monitoring, decision, control",
      "Rule-engine for adaptive resource rebalancing",
      "Interactive visualization dashboard",
      "Framework-free — pure HTML, CSS, and JavaScript",
      "Demonstrates OS scheduling and resource management concepts",
    ],
  },
  {
    id: "gesture-car",
    title: "Gesture-Controlled Car",
    shortTitle: "Gesture Car",
    category: "Hardware / Embedded",
    featured: false,
    tagline: "Hands-free vehicle control with Arduino and gesture sensing.",
    description:
      "An embedded hardware project that uses an Arduino microcontroller and sensor inputs to translate physical hand gestures into real-time motor control commands for a small vehicle. Developed and simulated in Proteus before physical prototyping. This project reflects hands-on engineering beyond conventional software development.",
    problem:
      "Designing a control interface that maps human gestures to vehicle motor signals requires integrating sensor data processing, signal conditioning, and motor driver control in a constrained embedded environment.",
    approach: [
      "Designed the circuit schematic and ran initial simulation in Proteus before hardware implementation.",
      "Used an Arduino as the central controller to read sensor inputs and produce PWM motor-control signals.",
      "Programmed control logic to map gesture data from sensors to directional motor commands.",
    ],
    results: [],
    techStack: ["Arduino (C/C++)", "Proteus Simulation", "Sensors", "Motor Drivers"],
    githubUrl: null,
    liveUrl: null,
    highlights: [
      "Hardware + software co-design workflow",
      "Proteus simulation before physical build",
      "Real-time gesture-to-command mapping",
      "Practical embedded systems experience",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Machine Learning & Data",
    icon: "Brain",
    skills: [
      "Scikit-learn", "NumPy", "Pandas", "Random Forest", "Gradient Boosting",
      "Exploratory Data Analysis", "Feature Engineering", "Model Evaluation",
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: ["HTML5", "CSS3", "Next.js", "React", "Flask", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "CS Fundamentals",
    icon: "Cpu",
    skills: [
      "Data Structures & Algorithms", "Operating Systems", "Resource Scheduling",
      "Predictive Modeling", "Optimization Techniques",
    ],
  },
  {
    category: "Tools & Environment",
    icon: "Terminal",
    skills: ["Git & GitHub", "Linux", "Jupyter / Python Workflows", "Vercel", "Render", "Proteus"],
  },
];

// ─── Process Steps ────────────────────────────────────────────────────
export const processSteps = [
  {
    num: "01",
    title: "Understand the Problem",
    description: "Start with the question: what is actually being solved? I try to read the domain before writing any code.",
  },
  {
    num: "02",
    title: "Investigate the Data or System",
    description: "Explore the inputs — whether that's a dataset, an API, or a hardware signal — to understand structure, noise, and constraints.",
  },
  {
    num: "03",
    title: "Build a Working Solution",
    description: "Implement the simplest thing that could work first. Avoid over-engineering before I understand the failure modes.",
  },
  {
    num: "04",
    title: "Evaluate and Measure",
    description: "Quantify what the solution actually does. For ML, that means metrics. For systems, that means behavior under load.",
  },
  {
    num: "05",
    title: "Identify Limitations",
    description: "Be honest about what the model or system cannot do. Limitations inform the next iteration better than successes.",
  },
  {
    num: "06",
    title: "Iterate and Improve",
    description: "Refine based on what I learned. Expand the dataset, tune hyperparameters, refactor the architecture, or revisit the problem framing.",
  },
];

// ─── Learning Areas ───────────────────────────────────────────────────
export const learningAreas = [
  {
    area: "Deep Learning",
    description: "Building familiarity with neural network fundamentals, backpropagation, and common architectures.",
    status: "Actively exploring",
  },
  {
    area: "Advanced ML Techniques",
    description: "Going deeper into ensemble methods, gradient boosting internals, cross-validation strategies, and hyperparameter optimization.",
    status: "In progress",
  },
  {
    area: "Data Structures & Algorithms",
    description: "Consistently practicing problem-solving to strengthen foundations in time/space complexity and algorithmic thinking.",
    status: "Ongoing practice",
  },
  {
    area: "Software Design Patterns",
    description: "Learning how to structure larger programs with better modularity, maintainability, and separation of concerns.",
    status: "Gradually building",
  },
];
