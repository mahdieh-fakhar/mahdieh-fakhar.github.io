import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
type NavChild = {
  name: string;
  href: string;
  slug: string;
  children?: NavChild[];
};

type NavigationItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

const slugify = (value: string) => value.replace(/[^a-z0-9-]/gi, "-").toLowerCase();

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

const MOBILE_NAV_ID = "primary-navigation-mobile";

export function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Set<string>>(new Set());

  const pageKey = deriveBadgePageFromPath(location ?? "/");
  const normalizedLocation = (location ?? "/").replace(/\/+$/, "") || "/";

  const normalizeHref = (href: string) => {
    if (!href || href === "/") {
      return "/";
    }
    const trimmed = href.replace(/\/+$/, "");
    return trimmed === "" ? "/" : trimmed;
  };

  const matchesHref = (href: string) => {
    const target = normalizeHref(href);
    if (target === "/") {
      return normalizedLocation === "/";
    }
    return normalizedLocation === target || normalizedLocation.startsWith(`${target}/`);
  };

  const hasActiveDescendants = (children?: NavChild[]): boolean =>
    children?.some((child) => matchesHref(child.href) || hasActiveDescendants(child.children)) ??
    false;

  const isNavActive = (item: NavigationItem) =>
    matchesHref(item.href) || hasActiveDescendants(item.children);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileExpanded(new Set());
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(new Set());
  }, [location]);

  const toggleMobileKey = (key: string) => {
    setMobileExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(new Set());
  };

  const renderDropdownItems = (items: NavChild[], parentKey: string) => (
  items.map((child, index) => {
    const rawKey = `${parentKey}-${child.slug || index}`;
    const key = slugify(rawKey);
    const active = matchesHref(child.href) || hasActiveDescendants(child.children);

    if (child.children && child.children.length > 0) {
      return (
        <DropdownMenuSub key={key}>
          <DropdownMenuSubTrigger
            className={cn(
              "group flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
            )}
          >
            <span className="truncate">{child.name}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-80 max-h-none overflow-visible rounded-xl border border-primary/20 bg-background/95 p-2 shadow-lg backdrop-blur">
            {renderDropdownItems(child.children, key)}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }

    const safeSlug = slugify(child.slug || String(index));

    return (
      <DropdownMenuItem key={key} asChild className="p-0">
        <Link
          href={child.href}
          className={cn(
            "flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors",
            active
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
          )}
          data-testid={`link-nav-${safeSlug}`}
        >
          {child.name}
        </Link>
      </DropdownMenuItem>
    );
  })
)

const renderMobileNavItems = (items: NavChild[], parentKey: string, depth = 1) => (
  <div className={cn("space-y-1", depth > 0 && "pl-4")}>
    {items.map((child, index) => {
      const rawKey = `${parentKey}-${child.slug || index}`;
      const key = slugify(rawKey);
      const submenuId = `mobile-submenu-${key}`;
      const expanded = mobileExpanded.has(key);
      const active = matchesHref(child.href) || hasActiveDescendants(child.children);

      if (child.children && child.children.length > 0) {
        return (
          <div key={key} className="space-y-1">
            <button
              type="button"
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover-elevate active-elevate-2",
                active ? "bg-primary/10 text-primary" : "text-muted-foreground",
              )}
              onClick={() => toggleMobileKey(key)}
              aria-expanded={expanded}
              aria-controls={submenuId}
              data-testid={`link-mobile-${key}`}
            >
              <span>{child.name}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  expanded ? "rotate-90" : "",
                )}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  id={submenuId}
                  role="group"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderMobileNavItems(child.children, key, depth + 1)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }

      return (
        <Link
          key={key}
          href={child.href}
          className={cn(
            "block rounded-md px-3 py-2 text-sm font-medium hover-elevate active-elevate-2",
            active ? "bg-primary/10 text-primary" : "text-muted-foreground",
          )}
          onClick={closeMobileMenu}
          data-testid={`link-mobile-${key}`}
        >
          {child.name}
        </Link>
      );
    })}
  </div>
);

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
      <div className="container flex w-full flex-wrap items-center gap-4 py-4 xs:gap-6">
        {/* Logo + Name */}
        <Link
          href="/"
          className="order-1 flex min-w-0 flex-1 items-center gap-3 rounded-md px-2 py-1 hover-elevate active-elevate-2 xs:flex-none"
          data-testid="link-home-logo"
        >
          <img
            src={assetPath("/images/logo.png")}
            alt="MF Logo"
            className="h-10 w-10 flex-shrink-0 object-contain xs:h-11 xs:w-11"
          />
          <span className="truncate text-lg font-semibold tracking-wide text-foreground">
            MAHDIEH FAKHAR
          </span>
        </Link>

        {/* Badge strip */}
        <div className="order-3 w-full xs:order-2 xs:w-auto xs:flex-1">
          <div className="flex max-w-full snap-x snap-mandatory items-center justify-start gap-3 overflow-x-auto px-1 xs:justify-center">
            {headerBadges.map((badge) => (
              <BadgePill key={badge.id} badge={badge} size="sm" />
            ))}
          </div>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="order-2 ml-auto flex items-center gap-2 xs:order-3 xs:ml-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            className="hover-elevate active-elevate-2"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover-elevate active-elevate-2 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-haspopup="true"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="border-t border-primary/20 bg-background/90">
        <nav
          aria-label="Primary navigation"
          className="container hidden items-center justify-center gap-6 py-3 lg:flex"
        >
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
                    data-testid={`link-nav-${slugify(item.name)}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={12}
                  className="w-80 max-h-none overflow-visible rounded-xl border border-primary/20 bg-background/95 p-2 shadow-xl backdrop-blur"
                >
                  {renderDropdownItems(
                    item.children,
                    slugify(item.name),
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 rounded-md whitespace-nowrap ${
                  isNavActive(item) ? "text-foreground" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${slugify(item.name)}`}
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
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto supports-[height:100dvh]:max-h-[calc(100dvh-4.5rem)]"
            role="presentation"
          >
            <motion.nav
              id={MOBILE_NAV_ID}
              aria-label="Mobile primary navigation"
              className="space-y-1 px-4 py-4 pb-6 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain supports-[height:100dvh]:max-h-[calc(100dvh-6rem)]"
            >
              {navigation.map((item) => {
                const itemKey = `nav-${slugify(item.name)}`;
                const expanded = mobileExpanded.has(itemKey);

                if (item.children && item.children.length > 0) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover-elevate active-elevate-2",
                          isNavActive(item)
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground",
                        )}
                        onClick={() => toggleMobileKey(itemKey)}
                        aria-expanded={expanded}
                        aria-controls={`mobile-submenu-${itemKey}`}
                        data-testid={`link-mobile-${itemKey}`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expanded ? "rotate-90" : "",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            id={`mobile-submenu-${itemKey}`}
                            role="group"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {renderMobileNavItems(item.children, itemKey, 1)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2",
                      isNavActive(item)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                    )}
                    onClick={closeMobileMenu}
                    data-testid={`link-mobile-${itemKey}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
