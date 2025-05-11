import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Articles: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [articlesRef, isArticlesVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  
  const t = translations[language as keyof typeof translations];

  return (
    <section id="articles" className="py-16 md:py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.articles.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div 
          ref={articlesRef}
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-2 transform transition-all duration-1000 ${
            isArticlesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Article 1 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 text-primary dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.articles.year1}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{t.articles.article1}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.articles.journal1}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Fakhar Shahreza, M., Vilhelm, M., & Díez-Arcón, P.
                  </span>
                </div>
                <a href="#" className="text-primary dark:text-primary-light hover:text-primary-dark flex items-center text-sm font-medium">
                  <span>{t.articles.details}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Article 2 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 text-primary dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.articles.year2}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{t.articles.article2}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.articles.journal2}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Fakhar Shahreza, M.
                  </span>
                </div>
                <a href="#" className="text-primary dark:text-primary-light hover:text-primary-dark flex items-center text-sm font-medium">
                  <span>{t.articles.details}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Article 3 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 text-primary dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.articles.year3}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{t.articles.article3}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.articles.journal3}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Fakhar Shahreza, M., Barcena Madera, E., & Khany, R.
                  </span>
                </div>
                <a href="#" className="text-primary dark:text-primary-light hover:text-primary-dark flex items-center text-sm font-medium">
                  <span>{t.articles.details}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Article 4 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 text-primary dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.articles.year4}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{t.articles.article4}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.articles.journal4}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Khany, R. & Fakhar Shahreza, M.
                  </span>
                </div>
                <a href="#" className="text-primary dark:text-primary-light hover:text-primary-dark flex items-center text-sm font-medium">
                  <span>{t.articles.details}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
