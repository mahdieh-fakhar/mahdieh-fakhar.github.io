import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 rounded-md py-1 px-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <span className="mr-1">
        {language === "en" ? "🇬🇧" : "🇪🇸"}
      </span>
      <span className="text-xs font-medium">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
