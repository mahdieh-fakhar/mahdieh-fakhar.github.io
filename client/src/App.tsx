import { useEffect, useRef } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Articles from "./components/Articles";
import Conferences from "./components/Conferences";
import Memberships from "./components/Memberships";
import CareerHistory from "./components/CareerHistory";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set the document language
    document.documentElement.lang = language;
    
    // Set dark mode class on html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, language]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen font-sans bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300">
          <Header />
          <main ref={mainRef} className="pt-20">
            <Hero />
            <About />
            <Education />
            <Articles />
            <Conferences />
            <Memberships />
            <CareerHistory />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
