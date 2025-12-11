type SeoEntry = {
  title: string;
  description: string;
  keywords: string[];
  type?: "website" | "article" | "profile";
  robots?: string;
  image?: string;
};

type SeoRoute = SeoEntry & {
  match: (path: string) => boolean;
};

const tierA = [
  "Mahdieh Fakhar",
  "Mahdieh Fakhar portfolio",
  "Mahdieh Fakhar academic CV",
  "data science student",
  "big data student",
  "scientometrics researcher",
  "bibliometrics researcher",
];

const tierB = [
  "AI-powered digital portfolio",
  "academic portfolio website",
  "GitHub Pages academic template",
  "React TypeScript portfolio",
  "data science and AI",
  "academic portfolio template",
];

const tierC = [
  "OpenAI Vision integration",
  "AI certificate analysis",
  "intelligent document analysis",
  "Vite Tailwind CSS portfolio",
  "Framer Motion animations",
  "GitHub Pages portfolio",
];

const seoRoutes: SeoRoute[] = [
  {
    match: (path) => path === "/",
    title: "Mahdieh Fakhar | AI-powered academic portfolio for data science & AI",
    description:
      "AI-powered academic portfolio in data science and AI with scientometrics research, projects, resume downloads, and collaboration invites.",
    keywords: [
      tierA[0],
      tierA[3],
      "Mahdieh Fakhar portfolio",
      "AI-powered digital portfolio",
      "academic portfolio website",
      "data science and AI",
      "GitHub Pages portfolio",
    ],
    type: "website",
    image: "/images/profile.jpg",
  },
  {
    match: (path) => path.startsWith("/about"),
    title: "About Mahdieh Fakhar | Data science, AI, and scientometrics profile",
    description:
      "Academic profile with research focus on bibliometrics, scientometrics, data science, and AI, plus the story behind this GitHub Pages portfolio.",
    keywords: [
      tierA[0],
      tierA[5],
      "academic profile",
      "AI-powered academic portfolio",
      "React TypeScript portfolio",
      "scientometrics researcher",
    ],
    type: "profile",
  },
  {
    match: (path) => path.startsWith("/education"),
    title: "Education & certifications | Data science and big data academic path",
    description:
      "Degrees, data science and big data studies, workshops, and certifications with AI certificate analysis for evidence-backed academic growth.",
    keywords: [
      tierA[0],
      tierA[4],
      "education and certifications",
      "AI certificate analysis",
      "academic portfolio website",
      "big data student",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/investigations"),
    title: "Research articles & investigations | Scientometrics and bibliometrics",
    description:
      "Research articles, theses, and investigations in scientometrics, bibliometrics, and AI-driven studies with evidence and links.",
    keywords: [
      tierA[0],
      tierA[5],
      "research data scientist",
      "scientometrics researcher",
      "academic research website",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/events"),
    title: "Academic conferences & events | Data science and AI presentations",
    description:
      "Conference talks, seminars, and symposium roles in data science, AI, bibliometrics, and research communication with verifiable evidence.",
    keywords: [
      tierA[0],
      "academic publications and conferences",
      "data science and AI",
      "academic research website",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/projects"),
    title: "AI and data science projects | Academic portfolio template by Mahdieh Fakhar",
    description:
      "AI, data science, and intelligent document analysis projects with live demos, GitHub links, and evidence across this academic portfolio template.",
    keywords: [
      tierA[0],
      "skills and projects in data science",
      "AI-powered digital portfolio",
      "academic portfolio template",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/skills") || path === "/skills",
    title: "Data science, AI, and bibliometrics skills | Mahdieh Fakhar",
    description:
      "Skills across Python, R, AI, data visualization, bibliometrics, dashboards, and research tooling mapped to evidence and projects.",
    keywords: [
      tierA[0],
      "skills and projects in data science",
      "data science and AI",
      "AI-driven portfolio",
      "academic profile",
      "scientometrics researcher",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/certifications") || path === "/certifications",
    title: "Certifications & AI certificate analysis | Mahdieh Fakhar academic portfolio",
    description:
      "Validated certifications with AI-powered certificate tagging, OpenAI Vision analysis, and credential evidence for data science and AI learning.",
    keywords: [
      tierA[0],
      "AI certificate analysis",
      "OpenAI Vision integration",
      "education and certifications",
      "intelligent document analysis",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/memberships") || path === "/memberships",
    title: "Academic memberships & governance roles | Mahdieh Fakhar portfolio",
    description:
      "Academic memberships, reviewer roles, and governance contributions in data science, AI, scientometrics, and bibliometrics with evidence-backed records.",
    keywords: [
      tierA[0],
      "academic memberships and career",
      "scientometrics researcher",
      "AI-powered digital portfolio",
      "academic portfolio website",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/career") || path === "/career",
    title: "Career history in data science and education | Mahdieh Fakhar academic CV",
    description:
      "Career milestones, teaching, and governance roles shaping Mahdieh Fakhar's research data scientist profile across data science, AI, and education.",
    keywords: [
      tierA[0],
      "Mahdieh Fakhar academic CV",
      "research data scientist",
      "teaching and governance roles",
      "AI-powered digital portfolio",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works") || path === "/works/all",
    title: "Works overview | Projects, skills, memberships, and certifications",
    description:
      "Navigate projects, skills, memberships, certifications, and career snapshots across this AI-powered academic portfolio template for data science and AI.",
    keywords: [
      tierA[0],
      "AI-powered digital portfolio",
      "academic portfolio website",
      "skills and projects in data science",
    ],
    type: "website",
  },
  {
    match: (path) => path === "/projects",
    title: "Projects | Data science and AI portfolio by Mahdieh Fakhar",
    description:
      "AI, data science, and intelligent document analysis projects with academic impact, GitHub Pages demos, and evidence links.",
    keywords: [
      tierA[0],
      "AI-powered digital portfolio",
      "React TypeScript portfolio",
      "intelligent document analysis",
    ],
    type: "article",
  },
  {
    match: (path) => path === "/resume" || path === "/about/resume",
    title: "Download resume & academic CV | Data science and AI student",
    description:
      "Download Mahdieh Fakhar's resume and academic CV highlighting data science, big data, scientometrics, and AI research experience.",
    keywords: [
      tierA[0],
      "download academic CV",
      "Mahdieh Fakhar resume",
      "data science student",
      "academic portfolio website",
    ],
    type: "article",
  },
  {
    match: (path) => path === "/contact",
    title: "Contact Mahdieh Fakhar | Data science and AI collaborations",
    description:
      "Contact Mahdieh Fakhar for data science, big data, and AI collaborations, academic portfolio inquiries, and research partnerships.",
    keywords: [
      tierA[0],
      "contact via GitHub and LinkedIn",
      "data science and AI",
      "academic profile",
    ],
    type: "profile",
  },
  {
    match: (path) => path === "/search",
    title: "Search | Mahdieh Fakhar academic portfolio",
    description: "Search Mahdieh Fakhar's academic portfolio content across research, skills, and projects.",
    keywords: [tierA[0], "academic portfolio search"],
    robots: "noindex,follow",
  },
  {
    match: (path) => path === "/guides",
    title: "Guides & how-to articles | AI-powered academic portfolio template",
    description:
      "Long-form guides for data science and AI students on building an AI-powered academic portfolio with GitHub Pages, React, TypeScript, and OpenAI Vision.",
    keywords: [
      tierA[0],
      "AI-powered academic portfolio template",
      "GitHub Pages academic template",
      "data science student",
      "AI certificate analysis",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/guides/ai-powered-academic-portfolio"),
    title: "How to build an AI-powered academic portfolio with GitHub Pages",
    description:
      "Step-by-step guide to create an AI-powered academic portfolio for data science and AI students using React, TypeScript, Tailwind, GitHub Pages, and OpenAI Vision.",
    keywords: [
      tierA[0],
      "AI-powered academic portfolio",
      "academic portfolio template",
      "GitHub Pages",
      "OpenAI Vision integration",
      "AI certificate analysis",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/guides/github-pages-academic-template"),
    title: "GitHub Pages academic portfolio template for data science students",
    description:
      "Guide for data science and AI students to fork, customize, and deploy an academic portfolio with GitHub Pages, React, TypeScript, Vite, and Tailwind CSS.",
    keywords: [
      tierA[0],
      "GitHub Pages academic template",
      "React TypeScript portfolio",
      "data science student",
      "academic portfolio website",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/guides/ai-certificate-analysis-openai-vision"),
    title: "AI certificate analysis with OpenAI Vision | Academic portfolio guide",
    description:
      "Learn how to turn static certificates into searchable credentials using OpenAI Vision inside this AI-powered academic portfolio template.",
    keywords: [
      tierA[0],
      "AI certificate analysis",
      "OpenAI Vision integration",
      "intelligent document analysis",
      "academic portfolio template",
    ],
    type: "article",
  },
  {
    match: () => true,
    title: "Mahdieh Fakhar academic portfolio",
    description:
      "Mahdieh Fakhar academic portfolio with data science, AI, scientometrics research, and resume downloads.",
    keywords: [tierA[0], tierB[0], "academic research website"],
    type: "website",
  },
];

export function getSeoForPath(path: string): Omit<SeoRoute, "match"> {
  const normalized = path || "/";
  const entry = seoRoutes.find((item) => item.match(normalized)) ?? seoRoutes[seoRoutes.length - 1];
  const { match, ...seo } = entry;
  return seo;
}

export const keywordTiers = {
  tierA,
  tierB,
  tierC,
};
