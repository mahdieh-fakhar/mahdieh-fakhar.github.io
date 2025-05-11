import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Resume: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [resumeRef, isResumeVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1
  });
  
  const t = translations[language as keyof typeof translations];

  const handleDownload = () => {
    // In a real implementation, this would point to the actual CV file
    alert("In a production environment, this would download the full CV.");
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {t.resume.title}
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.resume.intro}
          </p>
        </div>
        
        <div 
          ref={resumeRef}
          className={`max-w-4xl mx-auto bg-white dark:bg-dark rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-1000 ${
            isResumeVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">CURRICULUM VITAE</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{t.resume.personalInfo}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.name}:</span> Mahdieh</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.lastName}:</span> Fakhar Shahreza</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.dob}:</span> 08/06/1991</p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.address}:</span> Madrid, Spain</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.email}:</span> mfsh.intl@gmail.com</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">{t.resume.phone}:</span> +34 624 81 01 66</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{t.education.title}</h4>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">{t.education.master1} at {t.education.school1} ({t.education.period1}).</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">{t.education.master2} at {t.education.school2} ({t.education.period2})</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                  <li>{t.education.note2}</li>
                  <li>{t.education.grade2}.</li>
                  <li>{t.education.thesis2}.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">{t.education.master3} at {t.education.school3} ({t.education.period3}).</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                  <li>{t.education.grade3}.</li>
                  <li>{t.education.thesis3}.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">{t.education.bachelor} at {t.education.school4} ({t.education.period4}).</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                  <li>{t.education.grade4}.</li>
                  <li>{t.education.thesis4}.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{t.skills.languages}</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>{t.skills.english}</li>
              <li>{t.skills.spanish}</li>
              <li>{t.skills.persian}</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{t.resume.scholarships}</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>{t.resume.scholarship1}</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{t.resume.digitalSkills}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{t.resume.digitalSkillsText}</p>
            
            <p className="font-semibold text-gray-800 dark:text-gray-100 mt-4">{t.resume.coursesTitle}</p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>{t.resume.course1}</li>
              <li>{t.resume.course2}</li>
              <li>{t.resume.course3}</li>
              <li>{t.resume.course4}</li>
            </ul>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              <span>{t.resume.download}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
