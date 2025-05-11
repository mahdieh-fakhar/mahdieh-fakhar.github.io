import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "../data/translations";

interface LanguageContextType {
  currentLang: string;
  setLanguage: (lang: string) => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language from localStorage or default to English
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  // Set language function
  const setLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", currentLang);
  }, [currentLang]);

  const value = {
    currentLang,
    setLanguage,
    translations: translations[currentLang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
