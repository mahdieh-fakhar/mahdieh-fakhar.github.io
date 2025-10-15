const rawBase = import.meta.env.BASE_URL || "/";

const normalizedBase = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

/**
 * Computes the router base for wouter so that navigation works when the site
 * is hosted under a sub-directory (e.g. GitHub Pages repo sites).
 */
export function getRouterBase(): string {
  if (normalizedBase === "" || normalizedBase === ".") {
    return "";
  }

  if (normalizedBase === "/") {
    return "";
  }

  return normalizedBase;
}

/**
 * Prefixes an asset path with the current base URL, ensuring absolute assets
 * work regardless of deployment path.
 */
export function assetPath(path: string): string {
  const cleanedPath = path.startsWith("/") ? path.slice(1) : path;
  if (normalizedBase === "" || normalizedBase === ".") {
    return `/${cleanedPath}`;
  }

  return `${normalizedBase}/${cleanedPath}`;
}
