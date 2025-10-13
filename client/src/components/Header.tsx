import { Link } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/providers/LocaleProvider";

const navigation = [
  { name: "Home", path: "" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Articles", path: "/articles" },
  { name: "Conferences", path: "/conferences" },
  { name: "Memberships", path: "/memberships" },
  { name: "Career", path: "/career" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const { restPath, buildPath } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = restPath || "";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:grid lg:grid-cols-[auto,minmax(0,1fr),auto] lg:items-center lg:gap-16 lg:px-12">
        {/* Logo */}
        <Link
          href={buildPath("")}
          className="flex items-center gap-3 rounded-md px-2 py-1 hover-elevate active-elevate-2 lg:justify-self-start"
          data-testid="link-home-logo"
        >
          <img 
            src="/images/logo.png" 
            alt="MF Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-foreground hidden sm:inline">
            MAHDIEH FAKHAR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:min-w-0 lg:flex-nowrap lg:items-center lg:justify-center lg:gap-6 lg:px-6 lg:justify-self-center">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={buildPath(item.path)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2 rounded-md ${
                currentPath === (item.path || "")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
              {currentPath === (item.path || "") && (
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
          <LanguageSelector />
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
              <div className="pb-3">
                <LanguageSelector />
              </div>
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={buildPath(item.path)}
                  className={`block px-3 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2 ${
                    currentPath === (item.path || "")
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
