import { useEffect } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

declare global {
  interface Window {
    Credly?: {
      initBadgeFromEmbedData?: () => void;
      refresh?: () => void;
    };
  }
}

export function CredlyBadge() {
  useEffect(() => {
    const refreshBadge = () => {
      if (window.Credly?.refresh) {
        window.Credly.refresh();
      } else if (window.Credly?.initBadgeFromEmbedData) {
        window.Credly.initBadgeFromEmbedData();
      }
    };

    const existingScript = document.getElementById(CREDLY_SCRIPT_ID) as
      | HTMLScriptElement
      | null;

    if (existingScript) {
      refreshBadge();
      return;
    }

    const script = document.createElement("script");
    script.id = CREDLY_SCRIPT_ID;
    script.async = true;
    script.src = CREDLY_SCRIPT_SRC;
    script.onload = refreshBadge;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="298b5e29-2f62-456b-b2f9-69419b0aa29d"
        data-share-badge-host="https://www.credly.com"
        className="rounded-2xl border border-primary/20 bg-background/95 p-4 shadow-lg shadow-primary/20"
      />
    </div>
  );
}
