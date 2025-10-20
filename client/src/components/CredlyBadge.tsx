import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CREDLY_SCRIPT_ID = "credly-embed-script";
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

type CredlyBadgeProps = {
  className?: string;
};

const triggerCredly = () => {
  if (window.Credly?.refresh) {
    window.Credly.refresh();
  } else if (window.Credly?.init) {
    window.Credly.init();
  } else if (window.Credly?.initBadgeFromEmbedData) {
    window.Credly.initBadgeFromEmbedData();
  }
};

export function CredlyBadge({ className }: CredlyBadgeProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.getElementById(
      CREDLY_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (window.Credly) {
      triggerCredly();
      return;
    }

    if (script) {
      script.addEventListener("load", triggerCredly);
      return () => script.removeEventListener("load", triggerCredly);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("flex justify-center", className)}
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={BADGE_ID}
      data-share-badge-host="https://www.credly.com"
      aria-label="Professional certification badge"
    />
  );
}
