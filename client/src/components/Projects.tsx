import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  const [researchRef, isResearchVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  
  const t = translations[language as keyof typeof translations];

  return (
    <section id="projects" className="py-16 md:py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-12 items-start transform transition-all duration-1000 ${
            isProjectsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Project 1 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <img 
              src="/src/assets/project-ihupa.jpg" 
              alt="IHUPA Website Project" 
              className="w-full h-48 object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.projects.ihupa}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.projects.ihupaBrief}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">HTML5</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">CSS3</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">Responsive Design</span>
              </div>
              <a href="#" className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <span>{t.projects.viewProject}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <img 
              src="/src/assets/project-resume.jpg" 
              alt="Resume Website Project" 
              className="w-full h-48 object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.projects.resumeSite}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.projects.resumeBrief}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">HTML5</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">CSS3</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">React</span>
                <span className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
              </div>
              <a href="#" className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <span>{t.projects.viewProject}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Research Projects */}
        <div 
          ref={researchRef}
          className={`mt-16 transform transition-all duration-1000 ${
            isResearchVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-8">{t.projects.research}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Research Project 1 */}
            <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">IHUPA</h4>
                <p className="text-gray-500 dark:text-gray-400">Director: Dr. María García Alonso, UNED, Madrid (2021-2023)</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{t.projects.ihupa2}</p>
            </div>
            
            {/* Research Project 2 */}
            <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">AGORA</h4>
                <p className="text-gray-500 dark:text-gray-400">Directors: Elena Bárcena and Timothy Read, UNED, Madrid (2022-2025)</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{t.projects.agora}</p>
            </div>
          </div>
        </div>
        
        {/* Memberships */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-primary dark:text-primary-light mb-8">{t.projects.committee}</h3>
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full p-2 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{t.projects.journadas}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{t.projects.journadasBrief}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
