import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "@/lib/basePath";
import { getBadges, deriveBadgePageFromPath } from "@/lib/badgeUtils";
import { BadgePill } from "@/components/badges/BadgePill";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Articles", href: "/articles" },
  { name: "Conferences", href: "/conferences" },
  { name: "Memberships", href: "/memberships" },
  { name: "Career", href: "/career" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pageKey = deriveBadgePageFromPath(location ?? "/");

  const headerBadges = useMemo(() => {
    const contextual = getBadges({
      placement: "header",
      page: pageKey,
      limit: 3,
    });

    if (contextual.length > 0) {
      return contextual;
    }

    return getBadges({ placement: "header", limit: 3 });
  }, [pageKey]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary/70 bg-background/95 shadow-[0_8px_20px_-12px_hsl(356_78%_37%/0.45)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex w-full items-center justify-between gap-4 px-6 py-5 lg:grid lg:grid-cols-[auto,minmax(0,1fr),auto] lg:items-center lg:gap-16 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md px-2 py-1 hover-elevate active-elevate-2 lg:justify-self-start"
          data-testid="link-home-logo"
        >
          <img
            src={assetPath("/images/logo.png")}
            alt="MF Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-xl font-bold text-foreground tracking-wide">MAHDIEH</span>
            <span className="text-base font-semibold text-foreground tracking-wide">FAKHAR</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:min-w-0 lg:items-center lg:justify-center lg:gap-6 lg:px-6">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 rounded-md whitespace-nowrap ${
                location === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
              {location === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:flex-none lg:justify-self-end lg:pl-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            className="hover-elevate active-elevate-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover-elevate active-elevate-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {headerBadges.length > 0 && (
        <div className="border-t border-primary/15 bg-background/85">
          <div className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-3 lg:px-12">
            {headerBadges.map((badge) => (
              <BadgePill
                key={badge.id}
                badge={badge}
                size="sm"
                className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70"
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2 ${
                    location === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
