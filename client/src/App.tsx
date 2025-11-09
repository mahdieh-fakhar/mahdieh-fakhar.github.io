import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BadgeStructuredData } from "@/components/BadgeStructuredData";

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

function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <BadgeStructuredData />
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
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
