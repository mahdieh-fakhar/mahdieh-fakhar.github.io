import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/basePath";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const DEFAULT_BADGE_ID = "298b5e29-2f62-456b-b2f9-69419b0aa29d";
const DEFAULT_IMAGE = "images/credly-cloud-practitioner.png";
// Embedded PNG fallback (base64) so the badge displays even if network/CSP blocks external images.
// This value was generated from docs/images/credly-cloud-practitioner.png and embedded here.
const INLINE_SVG_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1f2937"/>
          <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
      <rect width="150" height="150" rx="16" fill="url(#grad)"/>
      <text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="white" font-family="Inter, Arial, sans-serif" font-size="18">
        Credly Badge
      </text>
    </svg>`,
  );

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
  badgeId?: string;
  imageSrc?: string;
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

export function CredlyBadge({ className, badgeId, imageSrc }: CredlyBadgeProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [imageHidden, setImageHidden] = useState(false);

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
      className={cn("credly-badge flex justify-center", className)}
      data-iframe-width="150"
      data-iframe-height="270"
        data-share-badge-id={badgeId ?? DEFAULT_BADGE_ID}
      data-share-badge-host="https://www.credly.com"
      aria-label="Professional certification badge"
    >
      {/* Fallback clickable image linking to Credly public URL */}
      <a
        href={`https://www.credly.com/badges/${badgeId ?? DEFAULT_BADGE_ID}/public_url`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Credly badge in new tab"
      >
        {!imageHidden ? (
          <img
            src={assetPath(imageSrc ?? DEFAULT_IMAGE)}
            alt="Credly certification badge"
            style={{ width: 150, height: 150, objectFit: "contain" }}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (!imgError) {
                // first failure: retry with origin-prefixed absolute URL
                setImgError(true);
                try {
                  img.src = `${window.location.origin}${assetPath(imageSrc ?? DEFAULT_IMAGE)}`;
                } catch {
                  setImageHidden(true);
                }
              } else {
                // second failure: switch to embedded SVG data-uri fallback so image is always visible
                try {
                  img.src = INLINE_SVG_FALLBACK;
                } catch {
                  setImageHidden(true);
                }
              }
            }}
          />
        ) : (
          // Inline SVG placeholder so user doesn't see broken image icon
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Credly badge placeholder"
            style={{ display: "block", margin: "0 auto" }}
          >
            <rect width="24" height="24" rx="3" fill="#f3f4f6" />
            <path d="M12 3v6l4 2-4 2v6" stroke="#9ca3af" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </a>
    </div>
  );
}
