export type BadgeProvider = "credly" | "other";

export type BadgePlacement =
  | "header"
  | "hero"
  | "footer"
  | "about"
  | "projects"
  | "resume"
  | "contact"
  | "sidebar"
  | "project-card";

export type BadgeVisibility = "published" | "draft";

export type BadgeRecord = {
  id: string;
  slug: string;
  provider: BadgeProvider;
  title: string;
  issuer: string;
  issueDate?: string;
  summary?: string;
  skills: string[];
  url: string;
  image: string;
  imageAlt: string;
  pages: string[];
  placements: BadgePlacement[];
  priority?: number;
  visibility: BadgeVisibility;
};

export type BadgeQuery = {
  page?: string;
  placement?: BadgePlacement;
  limit?: number;
  includeDrafts?: boolean;
};
