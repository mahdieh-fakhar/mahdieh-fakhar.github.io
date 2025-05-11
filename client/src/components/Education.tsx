import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Education: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [timelineRef, isTimelineVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  
  const t = translations[language as keyof typeof translations];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.education.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div 
          ref={timelineRef}
          className={`timeline-container pb-4 transform transition-all duration-1000 ${
            isTimelineVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-light">{t.education.master1}</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light bg-opacity-10 text-primary-light">
                    <span>{t.education.school1}</span>
                    <span className="mx-1">|</span>
                    <span>{t.education.period1}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-light">{t.education.master2}</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light bg-opacity-10 text-primary-light">
                    <span>{t.education.school2}</span>
                    <span className="mx-1">|</span>
                    <span>{t.education.period2}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t.education.note2}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t.education.grade2}</p>
                <p className="text-gray-700 dark:text-gray-300">{t.education.thesis2}</p>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-light">{t.education.master3}</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light bg-opacity-10 text-primary-light">
                    <span>{t.education.school3}</span>
                    <span className="mx-1">|</span>
                    <span>{t.education.period3}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t.education.grade3}</p>
                <p className="text-gray-700 dark:text-gray-300">{t.education.thesis3}</p>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-light">{t.education.bachelor}</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light bg-opacity-10 text-primary-light">
                    <span>{t.education.school4}</span>
                    <span className="mx-1">|</span>
                    <span>{t.education.period4}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t.education.grade4}</p>
                <p className="text-gray-700 dark:text-gray-300">{t.education.thesis4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
