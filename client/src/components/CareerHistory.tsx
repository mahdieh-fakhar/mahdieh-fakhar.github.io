import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Activity
} from "lucide-react";

const careerData = [
  {
    id: 1,
    title: "Visiting Researcher",
    organization: "ATLAS Research Group, UNED",
    location: "Madrid, Spain",
    period: "Mar 2022 - Nov 2022",
    description: "Worked on digital competence frameworks for language teachers and bibliometric analysis of educational technology research trends.",
    icon: <Activity className="h-6 w-6 text-white" />,
    side: "left"
  },
  {
    id: 2,
    title: "Research Assistant",
    organization: "University of Ilam",
    location: "Ilam, Iran",
    period: "Oct 2020 - Feb 2022",
    description: "Collaborated on research projects related to language teacher development and educational technology integration.",
    icon: <FileText className="h-6 w-6 text-white" />,
    side: "right"
  },
  {
    id: 3,
    title: "English Language Instructor",
    organization: "Technical and Vocational University",
    location: "Tehran, Iran",
    period: "Sep 2017 - Jun 2020",
    description: "Taught advanced academic English courses with integrated technology tools for specific academic purposes.",
    icon: <GraduationCap className="h-6 w-6 text-white" />,
    side: "left"
  },
  {
    id: 4,
    title: "Translator and Curriculum Developer",
    organization: "Freelance",
    location: "Remote",
    period: "Jan 2016 - Aug 2017",
    description: "Developed English language curricula and translated academic materials related to educational technology.",
    icon: <Briefcase className="h-6 w-6 text-white" />,
    side: "right"
  },
  {
    id: 5,
    title: "English Language Teacher",
    organization: "International Language Institute",
    location: "Isfahan, Iran",
    period: "Sep 2013 - Dec 2015",
    description: "Conducted English language courses at various proficiency levels, with focus on communicative approach and technology integration.",
    icon: <Award className="h-6 w-6 text-white" />,
    side: "left"
  }
];

interface TimelineItemProps {
  item: typeof careerData[0];
  isVisible: boolean;
  language: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isVisible, language }) => {
  const t = translations[language as keyof typeof translations];
  
  return (
    <div className={`timeline-item ${item.side} relative mb-12 ${item.side === 'right' ? 'left-0 ml-auto pl-6' : 'pl-0 pr-6'}`}>
      <div className={`transition-all duration-1000 delay-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}>
        <div className="timeline-dot">
          <div className="bg-primary w-full h-full rounded-full flex items-center justify-center">
            {item.icon}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
          <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">{item.organization}</p>
          <p className="text-gray-500 dark:text-gray-500 mb-3 text-sm">{item.location} | {item.period}</p>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const CareerHistory: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const t = translations[language as keyof typeof translations];
  
  return (
    <section id="career" className="py-16 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 
            ref={sectionRef}
            className={`text-3xl md:text-4xl font-bold mb-4 transition-transform duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {t.nav.career}
          </h2>
          <div 
            className={`w-24 h-1 bg-primary mx-auto mb-8 transition-transform duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          ></div>
          <p 
            className={`text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg transition-transform duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            My professional journey in research, academia, and language education.
          </p>
        </div>

        <div className="timeline-container">
          {careerData.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
              isVisible={isVisible}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHistory;