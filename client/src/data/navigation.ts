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
  { name: "All Education", href: "/education/all", slug: "all" },
  { name: "Academic Pathways", href: "/education/academic", slug: "academic" },
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

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education/all", children: educationPages },
  { name: "Investigations", href: "/investigations/all", children: investigationPages },
  { name: "Events", href: "/events/all", children: eventPages },
  { name: "Memberships", href: "/memberships" },
  { name: "Career", href: "/career" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

