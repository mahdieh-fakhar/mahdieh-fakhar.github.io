import { useEffect } from "react";
import { assetPath } from "@/lib/basePath";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  keywords?: string[];
  robots?: string;
};

const SITE_URL = "https://mahdieh-fakhar.github.io";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) {
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  }

  const newEl = document.createElement("meta");
  Object.entries(attributes).forEach(([key, value]) => newEl.setAttribute(key, value));
  document.head.appendChild(newEl);
  return newEl;
}

function upsertLink(rel: string, href: string) {
  const existing = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (existing) {
    existing.href = href;
    return existing;
  }

  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
  return link;
}

export function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = "/images/profile.jpg",
  keywords,
  robots,
}: SeoProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    const imageUrl = `${SITE_URL}${assetPath(image)}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords.join(", ") });
    }
    if (robots) {
      upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    }

    upsertLink("canonical", canonical);
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
  }, [description, image, keywords, path, robots, title, type]);

  return null;
}
