import { useMemo } from "react";
import { Link } from "wouter";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/basePath";
import { getBadges } from "@/lib/badgeUtils";
import { BadgePill } from "@/components/badges/BadgePill";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education/all" },
  { name: "Investigations", href: "/investigations/all" },
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events/all" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const footerBadges = useMemo(
    () => getBadges({ placement: "footer", limit: 6 }),
    [],
  );

  return (
    <footer className="border-t-4 border-primary/70 bg-sidebar shadow-[0_-8px_24px_-14px_hsl(44_100%_48%/0.45)] mt-auto" aria-label="Site footer">
      <div className="w-full px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr,1.2fr,1.4fr,1.2fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={assetPath("/images/logo.png")}
                alt="MF Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-lg font-semibold">Mahdieh Fakhar</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Data Scientist & Researcher specializing in Big Data, AI, and
              Bibliometric Analysis. Currently pursuing Master's in Data Science
              at UNIR, Spain.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-ai-accent" />
              <span>Built with AI-Powered Analysis</span>
            </div>
          </div>

          <div className="space-y-4 lg:order-last">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="flex flex-col gap-3 text-sm">
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
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded px-1 py-0.5"
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:mfsh.intl@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  mfsh.intl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-linkedin"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://github.com/mahdieh-fakhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            {"\u00A9"} {new Date().getFullYear()} Mahdieh Fakhar. All rights
            reserved.
          </p>
          <p className="mt-2">Madrid, Spain</p>
        </div>
      </div>
    </footer>
  );
}
