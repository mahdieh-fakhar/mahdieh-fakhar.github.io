import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  const [languagesRef, isLanguagesVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  const [toolsRef, isToolsVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  
  const t = translations[language as keyof typeof translations];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>
        
        <div 
          ref={skillsRef}
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transform transition-all duration-1000 ${
            isSkillsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Skill Card: Data Analysis */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.dataAnalysis}</h3>
              <p className="text-gray-600 dark:text-gray-300">R, Python, Statistical Methods, Machine Learning</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "95%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
              </div>
            </div>
          </div>
          
          {/* Skill Card: Data Visualization */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.dataViz}</h3>
              <p className="text-gray-600 dark:text-gray-300">Tableau, Power BI, D3.js, Matplotlib, ggplot2</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "90%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
              </div>
            </div>
          </div>
          
          {/* Skill Card: Database Automatization */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.dbAutomation}</h3>
              <p className="text-gray-600 dark:text-gray-300">SQL, ETL, Workflow Automation</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "85%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
              </div>
            </div>
          </div>
          
          {/* Skill Card: Bibliometric Analysis */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.bibliometric}</h3>
              <p className="text-gray-600 dark:text-gray-300">VosViewer, CiteSpace, Biblioshiny</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "90%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
              </div>
            </div>
          </div>
          
          {/* Skill Card: Scientometric Analysis */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.scientometric}</h3>
              <p className="text-gray-600 dark:text-gray-300">Citation Analysis, Research Impact Metrics</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "95%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
              </div>
            </div>
          </div>
          
          {/* Skill Card: Web Design */}
          <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{t.skills.webDesign}</h3>
              <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, Responsive Design</p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">80%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Languages Section */}
        <div 
          ref={languagesRef}
          className={`mt-16 bg-white dark:bg-dark rounded-xl shadow-md p-6 transform transition-all duration-1000 ${
            isLanguagesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">{t.skills.languages}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">{t.skills.english}</span>
                <span className="text-sm font-medium text-primary dark:text-primary-light">C1+</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">{t.skills.spanish}</span>
                <span className="text-sm font-medium text-primary dark:text-primary-light">C1</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">{t.skills.persian}</span>
                <span className="text-sm font-medium text-primary dark:text-primary-light">Native</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-lighter rounded-full h-2.5">
                <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full" style={{width: "100%"}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools Section */}
        <div 
          ref={toolsRef}
          className={`mt-8 bg-white dark:bg-dark rounded-xl shadow-md p-6 transform transition-all duration-1000 ${
            isToolsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">{t.skills.tools}</h3>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p className="text-sm font-medium">Excel</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <p className="text-sm font-medium">SPSS</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <p className="text-sm font-medium">SEM</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium">VosViewer</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">Python</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm font-medium">Nvivo</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-sm font-medium">Mendeley</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary dark:text-primary-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <p className="text-sm font-medium">Bibliometric Tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
