export type SearchDocument = {
  title: string;
  href: string;
  description: string;
  keywords: string[];
};

export const searchDocuments: SearchDocument[] = [
  {
    title: "Home",
    href: "/",
    description:
      "Overview of Mahdieh Fakhar's AI-powered portfolio, innovation pipeline, and signature focus areas.",
    keywords: ["home", "portfolio", "overview", "highlights", "innovation"],
  },
  {
    title: "About",
    href: "/about",
    description:
      "Biography, research interests, language expertise, and verified credentials of Mahdieh Fakhar.",
    keywords: ["about", "researcher", "data scientist", "biography", "profile", "languages"],
  },
  {
    title: "All About",
    href: "/about/all",
    description:
      "Extended narrative combining identity signals, milestone timeline, and navigation to career, memberships, and resume chapters.",
    keywords: ["all about", "identity", "timeline", "career", "memberships", "resume"],
  },
  {
    title: "Education",
    href: "/education/all",
    description:
      "Academic programs, professional courses, and workshops detailing formal training and achievements.",
    keywords: ["education", "degrees", "courses", "workshops", "academic", "master's", "certification"],
  },
  {
    title: "Investigations",
    href: "/investigations/all",
    description:
      "Research outputs including journal articles, theses, books, and practical handbooks.",
    keywords: ["research", "publications", "articles", "theses", "books", "handbooks"],
  },
  {
    title: "Works",
    href: "/works/all",
    description:
      "Applied delivery hub linking projects, skills, and certifications with delivery cadence and spotlight credentials.",
    keywords: ["works", "projects", "skills", "certifications", "delivery"],
  },
  {
    title: "Events",
    href: "/events/all",
    description:
      "Conference and workshop participation with certificate previews, AI insights, and download options.",
    keywords: ["events", "conferences", "seminars", "certificates", "presentations", "webinars"],
  },
  {
    title: "Memberships",
    href: "/about/memberships",
    description:
      "Professional affiliations and collaborations across journals, institutes, and research groups.",
    keywords: ["memberships", "affiliations", "collaboration", "reviewer", "research group"],
  },
  {
    title: "Career",
    href: "/about/career",
    description:
      "Career history including teaching, leadership, and professional interpreting experience.",
    keywords: ["career", "experience", "teaching", "leadership", "professional history"],
  },
  {
    title: "Skills",
    href: "/skills",
    description:
      "Technical proficiencies in data analysis, visualization, research tooling, and language fluency.",
    keywords: ["skills", "data analysis", "visualization", "bibliometrics", "languages", "expertise"],
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Selected projects spanning research collaborations, web development, and innovation initiatives.",
    keywords: ["projects", "collaboration", "innovation", "research", "web design"],
  },
  {
    title: "Certifications",
    href: "/certifications",
    description:
      "Catalogue of verified digital badges and professional certifications with live credential links.",
    keywords: ["certifications", "badges", "credentials", "verification"],
  },
  {
    title: "Resume",
    href: "/resume",
    description:
      "Executive CV highlights, key achievements, and download links for the full curriculum vitae.",
    keywords: ["resume", "cv", "curriculum vitae", "researcher", "experience", "achievements"],
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Contact form, social links, and collaboration opportunities for data science and research work.",
    keywords: ["contact", "email", "collaboration", "linkedin", "github", "form"],
  },
];
