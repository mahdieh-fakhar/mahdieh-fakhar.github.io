export type NavChild = {
  name: string;
  href: string;
  slug: string;
  children?: NavChild[];
};

export type NavigationItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

export const eventPages: NavChild[] = [
  { name: "All Events", href: "/events/all", slug: "all" },
  { name: "Conferences", href: "/events/conferences", slug: "conferences" },
  { name: "Seminars", href: "/events/seminars", slug: "seminars" },
  { name: "Webinars", href: "/events/webinars", slug: "webinars" },
  { name: "Congresses", href: "/events/congresses", slug: "congresses" },
  { name: "Symposia", href: "/events/symposia", slug: "symposia" },
];

export const educationPages: NavChild[] = [
  { name: "Academic", href: "/education/academic", slug: "academic" },
  { name: "Courses", href: "/education/courses", slug: "courses" },
  { name: "Workshops", href: "/education/workshops", slug: "workshops" },
];

export const investigationPages: NavChild[] = [
  { name: "All Investigations", href: "/investigations/all", slug: "all" },
  { name: "Articles", href: "/investigations/articles", slug: "articles" },
  { name: "Theses", href: "/investigations/theses", slug: "theses" },
  { name: "Books", href: "/investigations/books", slug: "books" },
  { name: "Handbooks", href: "/investigations/handbooks", slug: "handbooks" },
];

export const workPages: NavChild[] = [
  { name: "All Works", href: "/works/all", slug: "all" },
  { name: "Career", href: "/works/career", slug: "career" },
  { name: "Memberships", href: "/works/memberships", slug: "memberships" },
  { name: "Projects", href: "/works/projects", slug: "projects" },
  { name: "Skills", href: "/works/skills", slug: "skills" },
  { name: "Certifications", href: "/works/certifications", slug: "certifications" },
];

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education/academic", children: educationPages },
  { name: "Investigations", href: "/investigations/all", children: investigationPages },
  { name: "Works", href: "/works/all", children: workPages },
  { name: "Events", href: "/events/all", children: eventPages },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
