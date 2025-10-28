import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "@/lib/basePath";
import { getBadges, deriveBadgePageFromPath } from "@/lib/badgeUtils";
import { BadgePill } from "@/components/badges/BadgePill";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  navigationItems,
  type NavigationItem,
  type NavChild,
} from "@/data/navigation";
const slugify = (value: string) => value.replace(/[^a-z0-9-]/gi, "-").toLowerCase();

const MOBILE_NAV_ID = "primary-navigation-mobile";

export function Header() {
  const [location, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

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

  const formatBreadcrumbLabel = (value: string) =>
    value
      .split(/[-_]/g)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ");

  const breadcrumbItems = useMemo(() => {
    const segments =
      normalizedLocation === "/" ? [] : normalizedLocation.split("/").filter(Boolean);

    const items: Array<{ name: string; href: string }> = [{ name: "Home", href: "/" }];
    let pathAccumulator = "";

    segments.forEach((segment) => {
      pathAccumulator += `/${segment}`;
      const displayName =
        navigationItems.find((item) => normalizeHref(item.href) === pathAccumulator)?.name ??
        formatBreadcrumbLabel(segment);

      items.push({ name: displayName, href: pathAccumulator });
    });

    return items;
  }, [normalizedLocation]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setSearchQuery("");
    setMobileMenuOpen(false);
    setMobileExpanded(new Set());
  };

  const isSearchDisabled = searchQuery.trim().length === 0;

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
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary/70 bg-background/95 shadow-[0_6px_16px_-12px_hsl(356_78%_37%/0.45)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex w-full flex-wrap items-center gap-1 py-0 xs:gap-1.5">
        {/* Logo */}
        <Link
          href="/"
          className="order-1 flex items-center justify-center rounded-md hover-elevate active-elevate-2"
          data-testid="link-home-logo"
        >
          <img
            src={assetPath("/images/logo.png")}
            alt="MF Logo"
            className="h-[160px] w-[160px] object-contain drop-shadow-sm md:h-[140px] md:w-[140px]"
          />
        </Link>

        {/* Name */}
        <span className="order-2 flex-1 text-center text-base font-semibold uppercase tracking-[0.22em] text-primary leading-none xs:text-xl sm:text-2xl">
          MAHDIEH FAKHAR
        </span>

        {/* Badge strip */}
        <div className="order-3 ml-auto flex items-center justify-end gap-0.5 xs:order-2 xs:ml-0">
          {headerBadges.map((badge) => (
            <BadgePill key={badge.id} badge={badge} size="sm" />
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="order-4 ml-2 flex items-center gap-2 xs:order-3 xs:ml-0">
          <Button
            variant="ghost"
            size="icon"
            className="hover-elevate active-elevate-2 h-8 w-8 p-0 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-haspopup="true"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
       <div className="border-t border-primary/20 bg-background/90">
        <nav
          aria-label="Primary navigation"
          className="container hidden items-center justify-center gap-4 py-1.5 lg:flex"
        >
          {navigationItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "group relative flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover-elevate active-elevate-2 whitespace-nowrap",
                      isNavActive(item) ? "text-foreground" : "text-muted-foreground",
                    )}
                    data-testid={`link-nav-${slugify(item.name)}`}
                  >
                    <span>{item.name}</span>
                      <ChevronRight
                        className="ml-1 h-4 w-4 text-primary/70 transition-transform group-data-[state=open]:rotate-90"
                        aria-hidden="true"
                      />
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
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors hover-elevate active-elevate-2 rounded-md whitespace-nowrap ${
                  isNavActive(item) ? "text-foreground" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${slugify(item.name)}`}
              >
                {item.name}
                {isNavActive(item) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[14px] left-3 right-3 h-0.5 bg-primary"
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

       <div className="border-t border-primary/15 bg-background/80 backdrop-blur">
        <div className="container flex flex-col gap-1.5 py-1.5 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm"
          >
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              return (
                <div key={item.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="h-3 w-3 text-primary/60" aria-hidden="true" />
                  )}
                  {isLast ? (
                    <span className="font-semibold text-primary">{item.name}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <form
            className="flex w-full flex-col-reverse gap-1.5 sm:flex-row-reverse sm:items-center sm:justify-end sm:gap-2 lg:w-auto"
            onSubmit={handleSearchSubmit}
            role="search"
            aria-label="Site search"
          >
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hover-elevate active-elevate-2 h-9 w-9 p-0"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <div className="flex w-full items-center gap-1.5 rounded-md border border-input bg-background/95 px-3 py-1 shadow-sm focus-within:ring-2 focus-within:ring-primary/40 sm:max-w-xs lg:max-w-md">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search the site"
                aria-label="Search the site"
                className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button
              type="submit"
              disabled={isSearchDisabled}
              className="w-full sm:w-auto"
              aria-label="Submit site search"
            >
              Search
            </Button>
          </form>
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
            className="border-t lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto supports-[height:100dvh]:max-h-[calc(100dvh-4.5rem)]"
            role="presentation"
          >
            <motion.nav
              id={MOBILE_NAV_ID}
              aria-label="Mobile primary navigation"
              className="space-y-1 px-4 py-4 pb-6 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain supports-[height:100dvh]:max-h-[calc(100dvh-6rem)]"
            >
              {navigationItems.map((item) => {
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
