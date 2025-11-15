import rawBadges from "@/data/badges.json";
import type {
  BadgePlacement,
  BadgeQuery,
  BadgeRecord,
} from "@/types/badge";

const isProd = import.meta.env.PROD;

const normalizedBadges: BadgeRecord[] = (rawBadges as BadgeRecord[])
  .filter((badge) => {
    if (badge.visibility === "published") {
      return true;
    }
    if (!isProd && badge.visibility === "draft") {
      return true;
    }
    return false;
  })
  .map((badge) => ({
    ...badge,
    priority: badge.priority ?? 0,
    skills: badge.skills ?? [],
    placements: badge.placements ?? [],
    pages: badge.pages ?? [],
  }))
  .sort((a, b) => {
    if ((b.priority ?? 0) !== (a.priority ?? 0)) {
      return (b.priority ?? 0) - (a.priority ?? 0);
    }
    if (a.issueDate && b.issueDate) {
      return b.issueDate.localeCompare(a.issueDate);
    }
    return a.title.localeCompare(b.title);
  });

export function getAllBadges(): BadgeRecord[] {
  return normalizedBadges;
}

export function getBadges(query: BadgeQuery = {}): BadgeRecord[] {
  const { placement, page, limit, includeDrafts } = query;

  const badges = (includeDrafts ? (rawBadges as BadgeRecord[]) : normalizedBadges).filter(
    (badge) => {
      if (!includeDrafts && badge.visibility !== "published" && isProd) {
        return false;
      }

      const placementMatch = placement
        ? badge.placements?.includes(placement)
        : true;

      const pageMatch = page
        ? badge.pages?.includes(page) || badge.pages?.includes("*")
        : true;

      return placementMatch && pageMatch;
    },
  );

  return typeof limit === "number" ? badges.slice(0, limit) : badges;
}

export function getPrimaryBadgeForPage(page: string): BadgeRecord | undefined {
  return getBadges({ page, placement: "hero", limit: 1 })[0];
}

export function formatBadgeLabel(badge: BadgeRecord): string {
  const { title, issuer, issueDate } = badge;
  const datePart = issueDate ? ` | Issued ${issueDate}` : "";
  return `${title} - ${issuer}${datePart}`;
}

export function deriveBadgePageFromPath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "home";
  }

  const cleaned = pathname.replace(/^\//, "");
  const [segment] = cleaned.split("/");

  return segment || "home";
}
