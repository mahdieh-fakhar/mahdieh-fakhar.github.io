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
      "Explore Mahdieh Fakhar's AI-powered digital portfolio for data science, big data, scientometrics, projects, resume downloads, and collaboration.",
    keywords: [
      tierA[0],
      tierA[3],
      "Mahdieh Fakhar portfolio",
      "AI-powered digital portfolio",
      "academic portfolio website",
      "data science and AI",
    ],
    type: "website",
    image: "/images/profile.jpg",
  },
  {
    match: (path) => path.startsWith("/about"),
    title: "About Mahdieh Fakhar | Academic profile in data science, AI, and scientometrics",
    description:
      "Learn about Mahdieh Fakhar's academic profile, research focus in bibliometrics and scientometrics, and AI-powered digital portfolio journey.",
    keywords: [
      tierA[0],
      tierA[5],
      "academic profile",
      "AI-powered academic portfolio",
      "React TypeScript portfolio",
    ],
    type: "profile",
  },
  {
    match: (path) => path.startsWith("/education"),
    title: "Education & certifications | Data science and big data academic portfolio",
    description:
      "Review degrees, data science and big data studies, workshops, and AI-powered certificate analysis in Mahdieh Fakhar's academic portfolio.",
    keywords: [
      tierA[0],
      tierA[4],
      "education and certifications",
      "AI certificate analysis",
      "academic portfolio website",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/investigations"),
    title: "Research articles & investigations | Scientometrics and bibliometrics portfolio",
    description:
      "Browse research articles, theses, and investigations on scientometrics, bibliometrics, and AI-driven research by Mahdieh Fakhar.",
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
      "See conference talks, seminars, and symposium roles in data science, AI, and research communication across Mahdieh Fakhar's portfolio.",
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
      "Explore AI, data science, and intelligent document analysis projects with live demos and evidence from Mahdieh Fakhar's academic portfolio website.",
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
      "Review technical skills across Python, R, data visualization, AI, bibliometrics, and research tooling showcased in Mahdieh Fakhar's portfolio.",
    keywords: [
      tierA[0],
      "skills and projects in data science",
      "data science and AI",
      "AI-driven portfolio",
      "academic profile",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/certifications") || path === "/certifications",
    title: "Certifications & AI certificate analysis | Mahdieh Fakhar academic portfolio",
    description:
      "Validated certifications with AI-powered certificate tagging, credential analysis, and OpenAI Vision evidence across data science and AI learning.",
    keywords: [
      tierA[0],
      "AI certificate analysis",
      "OpenAI Vision integration",
      "education and certifications",
    ],
    type: "article",
  },
  {
    match: (path) => path.startsWith("/works/memberships") || path === "/memberships",
    title: "Academic memberships & governance roles | Mahdieh Fakhar portfolio",
    description:
      "Academic memberships, reviewer roles, and governance contributions across data science, AI, scientometrics, and bibliometrics communities with evidence-backed records.",
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
      "Career milestones, teaching, and governance roles shaping Mahdieh Fakhar's research data scientist profile in data science, AI, and education.",
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
      "Navigate projects, skills, memberships, certifications, and career snapshots across Mahdieh Fakhar's AI-powered academic portfolio.",
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
      "AI, data science, and intelligent document analysis projects with academic impact and GitHub Pages demos.",
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
    match: (path) => path === "/events",
    title: "Academic events & conferences | Research presentations in data science and AI",
    description:
      "Explore academic conferences, seminars, and symposiums with speaking and committee roles across data science, AI, and bibliometrics.",
    keywords: [
      tierA[0],
      "academic publications and conferences",
      "academic research website",
      "data science and AI",
    ],
    type: "article",
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
