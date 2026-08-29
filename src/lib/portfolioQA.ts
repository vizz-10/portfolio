import { CONTACT, CURRENTLY_EXPLORING, PROJECTS, SKILLS } from "./constants";

export const SUGGESTED_QUESTIONS = [
  "Who is Vishnu?",
  "What technologies does he know?",
  "What projects has he built?",
  "What is the video calling platform?",
  "What type of SDE role is he looking for?",
  "What are his strongest technical areas?",
];

function includesAny(haystack: string, needles: string[]) {
  return needles.some((n) => haystack.includes(n));
}

export function answerPortfolioQuestion(raw: string): string {
  const q = raw.trim().toLowerCase();
  if (!q) return "Ask about Vishnu, his skills, projects, or the kind of role he is targeting.";

  if (includesAny(q, ["who is", "about", "vishnu", "bio", "background"])) {
    return `Vishnu Murthy Sonchuri is a Computer Science Engineering student at Lovely Professional University, based in ${CONTACT.location}. He focuses on software engineering, artificial intelligence, and full-stack product development — turning ideas into working digital products.`;
  }

  if (includesAny(q, ["technolog", "stack", "skill", "know", "language"])) {
    const groups = Object.entries(SKILLS)
      .map(([cat, items]) => `${cat}: ${items.join(", ")}`)
      .join("\n");
    return `Vishnu works across programming, frontend, backend, AI/ML, databases, and tools. He does not publish fake proficiency percentages.\n\n${groups}`;
  }

  if (includesAny(q, ["project", "built", "work", "portfolio"])) {
    const list = PROJECTS.map((p) => `• ${p.title} — ${p.description}`).join("\n");
    return `Selected work:\n${list}\n\nOpen a case study on the site for problem, architecture, and what he learned. GitHub/live links are added only when they exist.`;
  }

  if (includesAny(q, ["video", "call", "webrtc", "clear call", "gesture"])) {
    const p = PROJECTS[0];
    return `${p.title}: ${p.overview}\n\nProblem: ${p.problem}\n\nSolution: ${p.solution}\n\nStack: ${p.tech.join(", ")}`;
  }

  if (includesAny(q, ["study table", "study planner", "edtech"])) {
    const p = PROJECTS[1];
    return `${p.title}: ${p.overview}\n\nProblem: ${p.problem}\n\nSolution: ${p.solution}`;
  }

  if (includesAny(q, ["vizz", "e-commerce", "ecommerce", "shop"])) {
    const p = PROJECTS[2];
    return `${p.title}: ${p.overview}\n\nProblem: ${p.problem}\n\nSolution: ${p.solution}`;
  }

  if (includesAny(q, ["role", "job", "intern", "sde", "looking", "hire", "opportun"])) {
    return "Vishnu is targeting internships and Software Development Engineer roles with an AI-aware, full-stack bias — systems that ship, not only models or only UI. He is open to collaboration and interesting technical projects. Reach him via the Contact section or email.";
  }

  if (includesAny(q, ["strong", "best", "focus", "area"])) {
    return `Strongest through-lines in his work: full-stack product building (React/TypeScript, Node/Express, MongoDB), real-time systems (WebRTC, Socket.io), and applied AI (LLMs, MediaPipe, TensorFlow.js, prompt engineering). He is currently exploring: ${CURRENTLY_EXPLORING.join(", ")}.`;
  }

  if (includesAny(q, ["contact", "email", "linkedin", "github"])) {
    return `Email: ${CONTACT.email}\nGitHub: ${CONTACT.github}\nLinkedIn: ${CONTACT.linkedin}\nLocation: ${CONTACT.location}`;
  }

  if (includesAny(q, ["education", "college", "lpu", "diploma"])) {
    return "Education: B.Tech CSE at Lovely Professional University (2026–Present); Diploma in Computer Engineering at DVR & Dr. HS MIC College of Technology (2023–2026, 85%); SSC at St. Joseph's English Medium School (88%).";
  }

  return "I can answer from this portfolio's public content — who Vishnu is, skills, projects (video calling, AI Study Table, vizz.co), role focus, education, and contact. Try one of the suggested questions.";
}
