import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const About: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2
  });
  
  const t = translations[language as keyof typeof translations];

  return (
    <section id="about" className="py-16 md:py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isContentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="order-2 md:order-1">
            <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.current}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.working}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-brain"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.learning}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-search"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.looking}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.askMe}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.reachMe}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary dark:text-primary-light">
                    <i className="fas fa-heart"></i>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300">{t.about.interests}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="/src/assets/professional.jpg" 
                alt="Professional data scientist working with visualizations" 
                className="w-full h-auto rounded-xl shadow-lg"
                onError={(e) => {
                  // Fallback image if the actual image doesn't load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                <div className="text-4xl text-primary dark:text-primary-light mb-2">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="text-lg font-bold text-center">Data Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
