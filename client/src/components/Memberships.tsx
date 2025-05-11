import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Badge } from "@/components/ui/badge";
import { FaUniversity, FaGlobe, FaUsers, FaBookReader } from "react-icons/fa";

const membershipData = [
  {
    id: 1,
    organization: "ATLAS Research Group",
    role: "Associate Researcher",
    period: "2022-Present",
    description: "Research group focused on applied technologies for language learning and development of digital resources for education.",
    type: "Research",
    icon: FaUniversity,
    website: "https://atlas.uned.es"
  },
  {
    id: 2,
    organization: "European Association for Computer-Assisted Language Learning",
    role: "Member",
    period: "2023-Present",
    description: "Professional association that aims to promote innovative approaches to language teaching and learning through technology.",
    type: "Professional",
    icon: FaGlobe,
    website: "https://eurocall-languages.org"
  },
  {
    id: 3,
    organization: "IHUPA Research Institute",
    role: "Collaborating Researcher",
    period: "2023-Present",
    description: "Humanities and Heritage Research Institute UNED-Alcañiz, focusing on preserving and digitizing historical and cultural heritage.",
    type: "Research",
    icon: FaBookReader,
    website: "https://ihupa.uned.es"
  },
  {
    id: 4,
    organization: "ÁGORA Rural Education Network",
    role: "Member",
    period: "2022-Present",
    description: "Network focused on developing methodologies for language education in rural contexts.",
    type: "Network",
    icon: FaUsers,
    website: "https://agora.uned.es"
  }
];

interface MembershipCardProps {
  membership: typeof membershipData[0];
  language: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ membership, language }) => {
  const t = translations[language as keyof typeof translations];
  const Icon = membership.icon;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:translate-y-[-5px]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mr-4">
            <Icon className="text-primary dark:text-primary-light text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light">{membership.organization}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{membership.role}</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border-primary/20">
          {membership.type}
        </Badge>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{membership.description}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-600 dark:text-gray-400 text-sm">{membership.period}</span>
        {membership.website && (
          <a 
            href={membership.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-light text-sm hover:underline"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};

const Memberships: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const t = translations[language as keyof typeof translations];
  
  return (
    <section id="memberships" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 
            ref={sectionRef}
            className={`text-3xl md:text-4xl font-bold mb-4 transition-transform duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {t.nav.memberships}
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
            Professional associations, research groups, and academic networks I'm affiliated with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {membershipData.map((membership, index) => (
            <div 
              key={membership.id}
              className={`transition-transform duration-1000 delay-${index * 200} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <MembershipCard
                membership={membership}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;