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

export const aboutPages: NavChild[] = [
  { name: "All About", href: "/about/all", slug: "all" },
  { name: "Overview", href: "/about/overview", slug: "overview" },
  { name: "Career", href: "/about/career", slug: "career" },
  { name: "Memberships", href: "/about/memberships", slug: "memberships" },
];

export const eventPages: NavChild[] = [
  { name: "All Events", href: "/events/all", slug: "all" },
  { name: "Conferences", href: "/events/conferences", slug: "conferences" },
  { name: "Seminars", href: "/events/seminars", slug: "seminars" },
  { name: "Webinars", href: "/events/webinars", slug: "webinars" },
  { name: "Congresses", href: "/events/congresses", slug: "congresses" },
  { name: "Symposia", href: "/events/symposia", slug: "symposia" },
];

export const educationPages: NavChild[] = [
  { name: "All Education", href: "/education/all", slug: "all" },
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
  { name: "Projects", href: "/projects", slug: "projects" },
  { name: "Skills", href: "/skills", slug: "skills" },
  { name: "Certifications", href: "/certifications", slug: "certifications" },
];

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/all", children: aboutPages },
  { name: "Education", href: "/education/all", children: educationPages },
  { name: "Investigations", href: "/investigations/all", children: investigationPages },
  { name: "Works", href: "/works/all", children: workPages },
  { name: "Events", href: "/events/all", children: eventPages },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
