import { useEffect, useRef } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";
const BADGE_ID = "298b5e29-2f62-456b-b2f9-69419b0aa29d";

declare global {
  interface Window {
    Credly?: {
      refresh?: () => void;
      init?: () => void;
      initBadgeFromEmbedData?: () => void;
    };
  }
}

const loadBadge = () => {
  if (window.Credly?.refresh) {
    window.Credly.refresh();
  } else if (window.Credly?.init) {
    window.Credly.init();
  } else if (window.Credly?.initBadgeFromEmbedData) {
    window.Credly.initBadgeFromEmbedData();
  }
};

export function CredlyBadge() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const mountBadge = () => {
      if (!containerRef.current) {
        return;
      }

      containerRef.current.innerHTML = "";

      const badge = document.createElement("div");
      badge.dataset.iframeWidth = "150";
      badge.dataset.iframeHeight = "270";
      badge.dataset.shareBadgeId = BADGE_ID;
      badge.dataset.shareBadgeHost = "https://www.credly.com";
      badge.className =
        "rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-lg shadow-primary/20";

      containerRef.current.appendChild(badge);
      loadBadge();
    };

    const existingScript = document.getElementById(
      CREDLY_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        mountBadge();
      } else {
        existingScript.addEventListener("load", mountBadge, { once: true });
      }

      return () => {
        existingScript.removeEventListener("load", mountBadge);
      };
    }

    const script = document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.async = true;
    script.src = CREDLY_SCRIPT_SRC;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      mountBadge();
    });

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", mountBadge);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={containerRef} />
    </div>
  );
}
