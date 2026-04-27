import { Smartphone, Server, Globe, Cpu, Cloud, BarChart3, Radio, Activity, HeartPulse, Sprout, Gauge, ShieldCheck } from "lucide-react";
const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform Flutter apps for iOS and Android. Real-time dashboards, device management UIs, and consumer-grade mobile experiences.",
    tags: ["Flutter", "Dart", "React Native", "Firebase"],
    accent: "from-sky-400/20 to-sky-500/5"
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Scalable REST and GraphQL APIs, real-time WebSocket services, microservices, and database architecture built to handle production load.",
    tags: ["Django", "Node.js", "FastAPI", "PostgreSQL"],
    accent: "from-amber-400/20 to-amber-500/5"
  },
  {
    icon: Globe,
    title: "Full-Stack Web",
    description: "End-to-end web platforms with React and Next.js frontends plus robust backend APIs. Responsive, performant, and production-deployed.",
    tags: ["React", "Next.js", "TypeScript", "AWS"],
    accent: "from-violet-400/20 to-violet-500/5"
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "End-to-end IoT products — PCB design, C/C++ firmware, wireless protocols, and cloud integration. From concept to field deployment.",
    tags: ["STM32", "ESP32", "MQTT", "LoRa"],
    accent: "from-cyan-400/20 to-cyan-500/5"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Docker, Kubernetes, CI/CD pipelines, AWS and GCP deployments. We set up infrastructure that scales and stays up.",
    tags: ["Docker", "AWS", "GCP", "CI/CD"],
    accent: "from-indigo-400/20 to-indigo-500/5"
  },
  {
    icon: BarChart3,
    title: "Data & AI Integration",
    description: "Data pipelines, real-time analytics dashboards, ML model integration, and NLP-powered features built directly into your product.",
    tags: ["Python", "Pandas", "ML Integration", "NLP"],
    accent: "from-fuchsia-400/20 to-fuchsia-500/5"
  }
];
const team = [
  {
    initials: "EK",
    name: "Eddy K.",
    role: "Flutter & Full-Stack Engineer",
    bio: "Specializes in cross-platform mobile development with Flutter and full-stack web engineering. Leads backend API design, real-time systems, and cloud deployments. 4+ years building production IoT dashboards, mobile apps, and scalable backend services.",
    tags: ["Flutter", "Django", "Node.js", "React", "Next.js", "Python", "PostgreSQL", "Docker", "AWS"]
  },
  {
    initials: "GW",
    name: "George W.",
    role: "Embedded Systems & Backend Engineer",
    bio: "Leads firmware, hardware design, and IoT product development. Also builds robust backend APIs and full-stack web platforms. 4+ years designing PCBs, developing C/C++ firmware, and integrating wireless protocols with cloud systems.",
    tags: ["C/C++", "STM32", "PCB Design", "MQTT", "BLE", "LoRa", "Django", "Flask", "Python"]
  }
];
const projects = [
  {
    icon: Radio,
    category: "IoT",
    title: "Anitrac — Livestock Monitoring",
    description: "Real-time GPS and health monitoring for livestock. PCB design, C/C++ firmware, MQTT backend, and Flutter dashboard for farm management.",
    tags: ["Flutter", "Django", "MQTT", "STM32", "PCB Design", "AWS"],
    color: "from-cyan-500/25 via-sky-500/10 to-transparent",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30"
  },
  {
    icon: Activity,
    category: "IoT",
    title: "Hewa-Teck — Air Quality Monitor",
    description: "IoT device measuring CO2, NOx, and PM from ICE buses in real-time. Full hardware design, firmware, Django backend, and analytics dashboard.",
    tags: ["C/C++", "Django", "MQTT", "React", "PCB Design", "GCP"],
    color: "from-emerald-500/25 via-teal-500/10 to-transparent",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30"
  },
  {
    icon: HeartPulse,
    category: "Mobile",
    title: "Okoa Life — Emergency Wearable",
    description: "Low-network emergency alert wearable with optimized firmware and 50% battery life improvement. Backend synced alerts to caregivers in real-time.",
    tags: ["C/C++", "Flutter", "Node.js", "Firebase", "BLE"],
    color: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    badgeColor: "bg-violet-500/15 text-violet-300 border-violet-400/30"
  },
  {
    icon: Sprout,
    category: "IoT",
    title: "E-Shamba — AgriTech Platform",
    description: "ESP-based environmental monitoring for 100+ farmers. LoRa and MQTT data pipeline, Django backend, and real-time decision dashboards.",
    tags: ["ESP32", "LoRa", "Django", "MQTT", "React", "PostgreSQL"],
    color: "from-lime-500/25 via-emerald-500/10 to-transparent",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30"
  },
  {
    icon: Gauge,
    category: "IoT",
    title: "ASTE — Smart Speed Governor",
    description: "Adaptive terrain-responsive speed control with fleet management backend. A custom PySerial flashing tool cut deploy times by 40%.",
    tags: ["STM32", "C/C++", "Django", "Python", "PySide6"],
    color: "from-orange-500/25 via-amber-500/10 to-transparent",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30"
  },
  {
    icon: ShieldCheck,
    category: "AI/ML",
    title: "DosiWatch — Radiation Dosimeter",
    description: "Miniaturized wrist-worn radiation dosimeter with 4-layer PCB, BLE firmware, 99% calibration accuracy, and USB plus BLE data export.",
    tags: ["C/C++", "MicroPython", "BLE", "PCB Design", "CAD"],
    color: "from-blue-500/25 via-indigo-500/10 to-transparent",
    badgeColor: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30"
  }
];
const skillGroups = [
  {
    title: "Backend & APIs",
    skills: [
      { name: "Django / Flask / FastAPI", level: 95 },
      { name: "Node.js / Express", level: 90 },
      { name: "REST APIs / GraphQL", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 88 }
    ]
  },
  {
    title: "Embedded & IoT",
    skills: [
      { name: "C / C++ Firmware", level: 95 },
      { name: "PCB Design / CAD", level: 88 },
      { name: "BLE / LoRa / MQTT / Zigbee", level: 93 },
      { name: "STM32 / ESP32 / Arduino", level: 91 }
    ]
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "Flutter / Dart", level: 95 },
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 92 }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker / Kubernetes", level: 90 },
      { name: "AWS / GCP / DigitalOcean", level: 85 },
      { name: "CI/CD / GitHub Actions", level: 92 }
    ]
  }
];
const processSteps = [
  {
    n: "01",
    title: "Discovery",
    description: "We understand your requirements, stack, and goals. No guessing — we ask the right questions upfront."
  },
  {
    n: "02",
    title: "Architecture",
    description: "We design the system — API contracts, data models, firmware specs, and deployment strategy before writing code."
  },
  {
    n: "03",
    title: "Build & Iterate",
    description: "Agile delivery with regular updates, demos, and course corrections. You always know what is happening."
  },
  {
    n: "04",
    title: "Deploy & Support",
    description: "We ship to production, set up monitoring, and stay available for support, maintenance, and feature growth."
  }
];
export {
  services as a,
  processSteps as b,
  projects as p,
  skillGroups as s,
  team as t
};
