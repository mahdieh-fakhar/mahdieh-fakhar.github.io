import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BadgeStructuredData } from "@/components/BadgeStructuredData";
import { Seo } from "@/components/Seo";
import { getSeoForPath } from "./seoConfig";
import type { BadgeStructuredDataProps } from "@/components/BadgeStructuredData";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import AllAbout from "@/pages/AllAbout";
import Education from "@/pages/Education";
import Investigations from "@/pages/Investigations";
import Events from "@/pages/Events";
import Memberships from "@/pages/Memberships";
import Career from "@/pages/Career";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
import Certifications from "@/pages/Certifications";
import Search from "@/pages/Search";
import Works from "@/pages/Works";
import NotFound from "@/pages/not-found";
import Guides from "@/pages/Guides";
import GuideAiPoweredPortfolio from "@/pages/GuideAiPoweredPortfolio";
import GuideGithubPagesTemplate from "@/pages/GuideGithubPagesTemplate";
import GuideAiCertificateAnalysis from "@/pages/GuideAiCertificateAnalysis";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppShell />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function getPageIdForStructuredData(path: string): BadgeStructuredDataProps["page"] {
  if (path.startsWith("/works")) return "works";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/education")) return "education";
  if (path.startsWith("/investigations")) return "investigations";
  if (path.startsWith("/events")) return "events";
  if (path.startsWith("/resume")) return "resume";
  if (path.startsWith("/contact")) return "contact";
  if (path.startsWith("/search")) return "search";
  return "home";
}

function AppShell() {
  const [location] = useLocation();
  const currentPath = location || "/";
  const seo = getSeoForPath(currentPath);
  const pageId = getPageIdForStructuredData(currentPath);

  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title={seo.title}
        description={seo.description}
        path={currentPath}
        type={seo.type ?? "website"}
        keywords={seo.keywords}
        robots={seo.robots}
        image={seo.image ?? "/images/profile.jpg"}
      />
      <BadgeStructuredData page={pageId} />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/about/all" component={AllAbout} />
          <Route path="/education/:category" component={Education} />
          <Route path="/education" component={Education} />
          <Route path="/investigations/:category" component={Investigations} />
          <Route path="/investigations" component={Investigations} />
          <Route path="/events/:category" component={Events} />
          <Route path="/events" component={Events} />
          <Route path="/works/all" component={Works} />
          <Route path="/works" component={Works} />
          <Route path="/works/projects" component={Projects} />
          <Route path="/works/skills" component={Skills} />
          <Route path="/works/certifications" component={Certifications} />
          <Route path="/works/career" component={Career} />
          <Route path="/works/memberships" component={Memberships} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/about/memberships" component={Memberships} />
          <Route path="/career" component={Career} />
          <Route path="/about/career" component={Career} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/about/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/search" component={Search} />
          <Route path="/guides" component={Guides} />
          <Route path="/guides/ai-powered-academic-portfolio" component={GuideAiPoweredPortfolio} />
          <Route path="/guides/github-pages-academic-template" component={GuideGithubPagesTemplate} />
          <Route path="/guides/ai-certificate-analysis-openai-vision" component={GuideAiCertificateAnalysis} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
