import { useMemo } from "react";
import { Link } from "wouter";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/basePath";
import { getBadges } from "@/lib/badgeUtils";
import { BadgePill } from "@/components/badges/BadgePill";

export function Footer() {
  const footerBadges = useMemo(
    () => getBadges({ placement: "footer", limit: 6 }),
    [],
  );

  return (
    <footer className="mt-auto border-t-4 border-primary/70 bg-sidebar shadow-[0_-8px_24px_-14px_hsl(44_100%_48%/0.45)]" aria-label="Site footer">
      <div className="container space-y-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.35fr),repeat(2,minmax(0,1fr))] xl:gap-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={assetPath("/images/logo.png")}
                alt="MF Logo"
                className="h-12 w-12 flex-shrink-0 object-contain"
              />
              <h3 className="text-lg font-semibold">Mahdieh Fakhar</h3>
            </div>
            <p className="max-w-prose text-sm text-muted-foreground">
              Data Scientist &amp; Researcher specializing in Big Data, AI, and bibliometric
              analysis. Currently pursuing a Master's in Data Science at UNIR, Spain.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-ai-accent" aria-hidden="true" />
              <span>Built with AI-powered analysis</span>
            </div>
          </section>

          <section className="space-y-4 sm:order-3 xl:order-none">
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <a
                  href="mailto:mfsh.intl@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-foreground hover-elevate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                  data-testid="link-email"
                >
                  mfsh.intl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                  data-testid="link-linkedin"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <a
                  href="https://github.com/mahdieh-fakhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                  data-testid="link-github"
                >
                  GitHub
                </a>
              </div>
            </address>
          </section>

          <section className="space-y-4 sm:order-2 xl:order-last">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-1">
              {footerBadges.length > 0 ? (
                footerBadges.map((badge) => (
                  <BadgePill
                    key={badge.id}
                    badge={badge}
                    size="sm"
                    className="min-w-0 border-primary/20 bg-background/85"
                  />
                ))
              ) : (
                <p className="text-muted-foreground">
                  Badge catalogue is maintained via{" "}
                  <code className="rounded bg-primary/10 px-2 py-0.5">
                    client/src/data/badges.json
                  </code>
                  .
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            {"\u00A9"} {new Date().getFullYear()} Mahdieh Fakhar. All rights reserved.
          </p>
          <p className="mt-2">Madrid, Spain</p>
        </div>
      </div>
    </footer>
  );
}
