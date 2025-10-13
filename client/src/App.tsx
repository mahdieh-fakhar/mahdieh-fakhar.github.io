import { Switch, Route } from "wouter";
import { type ComponentType } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TranslationProvider } from "@/providers/TranslationProvider";
import { LocaleProvider, useLocale } from "@/providers/LocaleProvider";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Education from "@/pages/Education";
import Articles from "@/pages/Articles";
import Conferences from "@/pages/Conferences";
import Memberships from "@/pages/Memberships";
import Career from "@/pages/Career";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

type RouteDefinition = {
  path: string;
  component: ComponentType;
  key: string;
};

const ROUTES: RouteDefinition[] = [
  { path: "", component: Home, key: "home" },
  { path: "/about", component: About, key: "about" },
  { path: "/education", component: Education, key: "education" },
  { path: "/articles", component: Articles, key: "articles" },
  { path: "/conferences", component: Conferences, key: "conferences" },
  { path: "/memberships", component: Memberships, key: "memberships" },
  { path: "/career", component: Career, key: "career" },
  { path: "/skills", component: Skills, key: "skills" },
  { path: "/projects", component: Projects, key: "projects" },
  { path: "/resume", component: Resume, key: "resume" },
  { path: "/contact", component: Contact, key: "contact" },
];

function wrapComponent(Component: ComponentType) {
  return () => <Component />;
}

function LocaleSwitch() {
  return (
    <Switch>
      {ROUTES.map(({ path, component, key }) => (
        <Route
          key={key}
          path={`/:locale${path}`}
          component={wrapComponent(component)}
        />
      ))}
      <Route component={wrapComponent(NotFound)} />
    </Switch>
  );
}

function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <LocaleSwitch />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <LocaleProvider>
            <LocalizedApp />
          </LocaleProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function LocalizedApp() {
  const { locale, setLocale } = useLocale();

  return (
    <TranslationProvider
      activeLanguageCode={locale}
      onLanguageChange={(code) => setLocale(code)}
    >
      <Toaster />
      <AppShell />
    </TranslationProvider>
  );
}
