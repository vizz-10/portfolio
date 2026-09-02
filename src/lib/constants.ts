export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Coding Problems Solved" },
  { value: 3, suffix: "", label: "Major Projects" },
  { value: 3, suffix: "", label: "Industry Credentials" },
  { value: 2026, suffix: "", label: "B.Tech Journey Begins" },
];

export const SKILLS = {
  Programming: ["Python", "Java", "JavaScript", "C", "C++"],
  Frontend: ["HTML", "CSS", "React.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLMs",
    "NLP",
    "Prompt Engineering",
  ],
  Databases: ["MySQL", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "Docker", "Jupyter Notebook", "VS Code", "Figma"],
  "Soft Skills": [
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
  ],
};

export const SKILL_ICONS: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
};

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  learned: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "video-calling",
    number: "01",
    title: "AI-Powered Video Calling Platform",
    category: "AI × Real-Time Communication × Full Stack",
    date: "Sep 2025 – Dec 2025",
    description:
      "An AI-enhanced real-time video communication platform built around WebRTC and Socket.io, with gesture recognition and interactive communication capabilities.",
    features: [
      "Real-time audio/video communication via WebRTC",
      "Socket.io signaling for peer connections",
      "AI-powered gesture recognition with MediaPipe",
      "TensorFlow.js inference in the browser",
      "Secure JWT-based authentication",
      "Responsive, accessible UI",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "MediaPipe",
      "TensorFlow.js",
      "Supabase",
      "Tailwind CSS",
      "JWT",
    ],
    overview:
      "A real-time video communication platform enhanced with AI gesture recognition capabilities, enabling more expressive and interactive video calls.",
    problem:
      "Traditional video calling lacks contextual intelligence — users cannot communicate non-verbal cues programmatically, limiting accessibility and interaction richness.",
    solution:
      "Integrated MediaPipe and TensorFlow.js for browser-side gesture detection, layered on top of a WebRTC + Socket.io signaling architecture to maintain low-latency communication.",
    architecture: [
      "React.js Frontend",
      "Socket.io Signaling Server",
      "WebRTC Peer Connections",
      "MediaPipe + TensorFlow.js AI Layer",
      "Node.js / Express.js Backend",
      "MongoDB + Supabase Data Layer",
      "JWT Authentication",
    ],
    challenges: [
      "Maintaining low latency while running ML inference in the browser",
      "WebRTC peer connection management across different network conditions",
      "Synchronizing gesture state between peers via Socket.io",
    ],
    learned: [
      "WebRTC connection lifecycle and STUN/TURN server configuration",
      "Browser-side ML inference performance optimization",
      "Real-time event architecture with Socket.io rooms",
    ],
  },
  {
    id: "ai-study-table",
    number: "02",
    title: "AI Study Table",
    subtitle: "Personalized AI Study Planner",
    category: "Generative AI × EdTech × Productivity",
    date: "Feb 2025 – Apr 2025",
    description:
      "An AI-powered study planner designed to transform a student's syllabus, career goals and available study time into a personalized learning schedule.",
    features: [
      "Syllabus analysis and topic structuring",
      "Study priority generation",
      "Personalized timetable creation",
      "Deadline-aware planning",
      "Progress tracking dashboard",
      "AI-driven recommendations",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    overview:
      "An EdTech productivity tool that uses generative AI to create personalized study plans from a student's syllabus, goals, and available time.",
    problem:
      "Students struggle to create effective study schedules that account for syllabus complexity, deadlines, and personal learning capacity simultaneously.",
    solution:
      "Leveraged the OpenAI API to analyze syllabus content and generate structured, deadline-aware study timetables tailored to individual goals and constraints.",
    architecture: [
      "React.js + TypeScript Frontend",
      "Node.js / Express.js API Server",
      "OpenAI API Integration",
      "MongoDB Data Layer",
      "Timetable Generation Engine",
      "Progress Tracking Module",
    ],
    challenges: [
      "Prompt engineering for consistent, structured AI output",
      "Handling variable syllabus formats and content lengths",
      "Building a timetable engine that respects deadlines and priorities",
    ],
    learned: [
      "Effective prompt engineering for structured generative AI output",
      "Building product-thinking around AI capabilities",
      "Designing intuitive dashboards for complex scheduling data",
    ],
  },
  {
    id: "vizz-co",
    number: "03",
    title: "vizz.co",
    subtitle: "AI-Enabled E-Commerce Platform",
    category: "Full Stack × AI × E-Commerce",
    date: "Dec 2024 – Jan 2025",
    description:
      "An e-commerce platform concept designed to help clothing, accessories and footwear businesses establish and manage their own online storefront.",
    features: [
      "Customer shopping experience",
      "Shop-owner management dashboard",
      "Product and order management",
      "Payment and business analytics",
      "Membership model",
      "AI-assisted product discovery",
      "Intelligent customer recommendations",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "AI APIs",
    ],
    overview:
      "A full-stack e-commerce platform designed for fashion and lifestyle businesses to launch and manage their digital storefronts with built-in AI capabilities.",
    problem:
      "Small fashion and lifestyle businesses lack affordable, AI-capable e-commerce solutions that provide both customer-facing shopping and owner-facing management tools.",
    solution:
      "Built a dual-interface platform: a customer-facing store with AI-assisted product discovery, and a shop-owner dashboard with analytics, inventory, and order management.",
    architecture: [
      "React.js Customer Frontend",
      "Shop Owner Dashboard",
      "Node.js / Express.js API",
      "MongoDB Product & Order Database",
      "AI Product Recommendation Layer",
      "Analytics Engine",
    ],
    challenges: [
      "Designing two separate interfaces (customer + owner) that share a single backend",
      "Implementing AI product recommendations with limited training data",
      "Building a responsive product catalog with efficient filtering",
    ],
    learned: [
      "Full-stack architecture for multi-role applications",
      "E-commerce UX patterns and business logic",
      "Integrating AI APIs for recommendation systems",
    ],
  },
];

export const EXPERIENCE = [
  {
    id: "robotronics",
    company: "Robotronics Pvt. Ltd.",
    role: "Robotics & Embedded Systems Trainee",
    period: "Nov 2025 – Apr 2026",
    location: "Hyderabad",
    description:
      "Completed diploma industrial training focused on robotics, automation, microcontrollers and hardware-software integration.",
    highlights: [
      "Arduino & Raspberry Pi programming",
      "Sensor integration (Ultrasonic, IR, RF)",
      "Motor drivers and actuator control",
      "Autonomous robotic prototypes",
      "Line follower and obstacle avoidance robots",
      "Pick-and-place mechanism design",
      "Hardware-software debugging",
    ],
    tags: ["Arduino", "Raspberry Pi", "Sensors", "Automation", "Embedded Systems"],
  },
];

export const CREDENTIALS = [
  {
    id: "ibm-agentic",
    number: "01",
    org: "IBM",
    title: "Make Agentic AI Work for You",
    issued: "June 2026",
    type: "Professional Certificate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-plain.svg",
    url: null,
  },
  {
    id: "walmart-se",
    number: "02",
    org: "Walmart USA × Forage",
    title: "Advanced Software Engineering Job Simulation",
    issued: "June 2026",
    type: "Industry Simulation",
    logo: null,
    url: null,
  },
  {
    id: "tata-genai",
    number: "03",
    org: "Tata × Forage",
    title: "GenAI Powered Data Analytics Job Simulation",
    issued: "October 2025",
    type: "Industry Simulation",
    logo: null,
    url: null,
  },
];

export const EDUCATION = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    level: "B.Tech",
    period: "Aug 2026 – Present",
    location: "Punjab, India",
    status: "current",
  },
  {
    id: "dvr",
    institution: "DVR & Dr. HS MIC College of Technology",
    degree: "Diploma in Computer Engineering",
    level: "Diploma",
    period: "Aug 2023 – Apr 2026",
    location: "Vijayawada, Andhra Pradesh, India",
    status: "completed",
  },
  {
    id: "stjoseph",
    institution: "St. Joseph's English Medium School",
    degree: "Secondary School Certificate (10th)",
    level: "10th Grade",
    period: "Jun 2022 – Mar 2023",
    location: "Vijayawada, Andhra Pradesh, India",
    percentage: "75.83%",
    status: "completed",
  },
];

export const CURRENT_FOCUS = [
  { number: "01", label: "DSA & Problem Solving" },
  { number: "02", label: "Java & Software Engineering" },
  { number: "03", label: "Full-Stack Development" },
  { number: "04", label: "Generative AI" },
  { number: "05", label: "Agentic AI" },
  { number: "06", label: "Cloud & DevOps" },
];

export const CURRENTLY_EXPLORING = [
  "Generative AI",
  "Agentic AI",
  "Large Language Models",
  "Full-Stack Development",
  "Data Structures & Algorithms",
  "Cloud & DevOps",
];

export const CONTACT = {
  email: "vishnumurthysonchuri@gmail.com",
  phone: "+91-9346808154",
  location: "Vijayawada, Andhra Pradesh, India",
  github: "https://github.com/vizz-10",
  linkedin: "https://www.linkedin.com/in/vishnumurthysonchuri/",
};
