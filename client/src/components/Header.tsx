import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "@/lib/basePath";
import { getBadges, deriveBadgePageFromPath } from "@/lib/badgeUtils";
import { BadgePill } from "@/components/badges/BadgePill";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavChild = {
  name: string;
  href: string;
  slug: string;
};

type NavigationItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

const eventPages: NavChild[] = [
  { name: "All Events", href: "/events/all", slug: "all" },
  { name: "Conferences", href: "/events/conferences", slug: "conferences" },
  { name: "Seminars", href: "/events/seminars", slug: "seminars" },
  { name: "Webinars", href: "/events/webinars", slug: "webinars" },
  { name: "Congresses", href: "/events/congresses", slug: "congresses" },
  { name: "Symposia", href: "/events/symposia", slug: "symposia" },
];

const educationPages: NavChild[] = [
  { name: "All Education", href: "/education/all", slug: "all" },
  { name: "Academic Pathways", href: "/education/academic", slug: "academic" },
  { name: "Courses", href: "/education/courses", slug: "courses" },
  { name: "Workshops", href: "/education/workshops", slug: "workshops" },
];

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education/all", children: educationPages },
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events/all", children: eventPages },
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
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const pageKey = deriveBadgePageFromPath(location ?? "/");
  const normalizedLocation = (location ?? "/").replace(/\/+$/, "") || "/";

  const isChildActive = (href: string) => normalizedLocation === href;

  const isNavActive = (item: NavigationItem) => {
    if (item.children?.length) {
      return item.children.some((child) => isChildActive(child.href));
    }

    return normalizedLocation === item.href;
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileSubmenu(null);
    }
  }, [mobileMenuOpen]);

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
      <div className="grid w-full grid-cols-[auto,minmax(0,1fr),auto] items-center gap-4 px-6 py-4 lg:px-12">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md px-2 py-1 hover-elevate active-elevate-2"
          data-testid="link-home-logo"
        >
          <img
            src={assetPath("/images/logo.png")}
            alt="MF Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide text-foreground">
            MAHDIEH FAKHAR
          </span>
        </Link>

        {/* Badge strip */}
        <div className="flex items-center justify-center">
          <div className="flex max-w-full snap-x snap-mandatory items-center justify-center gap-3 overflow-x-auto px-2">
            {headerBadges.map((badge) => (
              <BadgePill key={badge.id} badge={badge} size="sm" />
            ))}
          </div>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center justify-end gap-2">
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

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover-elevate active-elevate-2"
            onClick={() => setMobileMenuOpen((open) => !open)}
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
      </div>

      {/* Desktop Navigation */}
      <div className="border-t border-primary/20 bg-background/90">
        <div className="hidden lg:flex w-full items-center justify-center gap-6 px-6 py-3">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "group relative flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 whitespace-nowrap",
                      isNavActive(item) ? "text-foreground" : "text-muted-foreground",
                    )}
                    data-testid={`link-nav-${item.name.toLowerCase()}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  className="w-56 rounded-xl border border-primary/20 bg-background/95 p-1 shadow-xl backdrop-blur"
                >
                  {item.children.map((child) => {
                    const childActive = isChildActive(child.href);
                    return (
                      <DropdownMenuItem key={child.slug} asChild className="p-0">
                        <Link
                          href={child.href}
                          className={cn(
                            "flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors",
                            childActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                          )}
                          data-testid={`link-nav-${item.name.toLowerCase()}-${child.slug}`}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 rounded-md whitespace-nowrap ${
                  isNavActive(item) ? "text-foreground" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
                {isNavActive(item) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[17px] left-4 right-4 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ),
          )}
        </div>
      </div>

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
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover-elevate active-elevate-2 ${
                        isNavActive(item)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      }`}
                      onClick={() =>
                        setMobileSubmenu((prev) => (prev === item.name ? null : item.name))
                      }
                      data-testid={`link-mobile-${item.name.toLowerCase()}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1 pl-4"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.slug}
                              href={child.href}
                              className={`block rounded-md px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 ${
                                isChildActive(child.href)
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground"
                              }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSubmenu(null);
                          }}
                          data-testid={`link-mobile-${item.name.toLowerCase()}-${child.slug}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2 ${
                      isNavActive(item)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
