import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";
import Logo from "../assets/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ["contact", "resume", "projects", "skills", "career", "memberships", "conferences", "articles", "education", "about"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 dark:bg-dark/90 shadow-md backdrop-blur-sm" 
        : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="flex items-center"
            >
              <Logo />
              <div className="ml-2">
                <span className="text-xl font-bold text-primary dark:text-primary-light">MAHDIEH FAKHAR</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Data Science Professional</p>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "about"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.about}
            </a>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "education"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.education}
            </a>
            <a
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("articles");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "articles"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.articles}
            </a>
            <a
              href="#conferences"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("conferences");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "conferences"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.conferences}
            </a>
            <a
              href="#memberships"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("memberships");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "memberships"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.memberships}
            </a>
            <a
              href="#career"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("career");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "career"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.career}
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "skills"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.skills}
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "projects"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.projects}
            </a>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("resume");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "resume"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.resume}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={`text-base font-medium transition-colors duration-200 border-b-2 ${
                activeSection === "contact"
                  ? "text-primary dark:text-primary-light border-primary dark:border-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light border-transparent"
              }`}
            >
              {t.nav.contact}
            </a>
          </nav>
          
          {/* Controls - Language Switcher and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "about"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.about}
              </a>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "education"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.education}
              </a>
              <a
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("articles");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "articles"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.articles}
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "skills"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "projects"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.projects}
              </a>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("resume");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "resume"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.resume}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className={`px-4 py-2 rounded-md ${
                  activeSection === "contact"
                    ? "bg-primary-light bg-opacity-10 text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
