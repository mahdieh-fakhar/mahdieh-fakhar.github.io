import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/articles" component={Articles} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/career" component={Career} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
