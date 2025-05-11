import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Dialog } from "@/components/ui/dialog";
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
} from "lucide-react";

const conferenceData = [
  {
    id: 1,
    title: "International Conference on Technology and Language Learning",
    organizer: "European Association for Computer-Assisted Language Learning",
    location: "Madrid, Spain",
    date: "June 2023",
    role: "Presenter",
    paper: "Digital Competence Frameworks for Language Teachers: A Systematic Review",
    image: "conference1.jpg"
  },
  {
    id: 2,
    title: "Annual Applied Linguistics Symposium",
    organizer: "University of Cambridge",
    location: "Cambridge, UK",
    date: "September 2022",
    role: "Attendee",
    paper: "",
    image: "conference2.jpg"
  },
  {
    id: 3,
    title: "IV ATLAS-ÁGORA Conference on Rural Language Education",
    organizer: "UNED",
    location: "Teruel, Spain",
    date: "May 2024",
    role: "Scientific Committee Member",
    paper: "",
    image: "conference3.jpg"
  },
];

interface ConferenceCardProps {
  conference: typeof conferenceData[0];
  onClick: () => void;
  language: string;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ conference, onClick, language }) => {
  const t = translations[language as keyof typeof translations];
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={`/src/assets/${conference.image}`}
          alt={conference.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-primary dark:text-primary-light">{conference.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-medium">Date:</span> {conference.date}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-medium">Location:</span> {conference.location}</p>
        <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Role:</span> {conference.role}</p>
      </div>
    </div>
  );
};

interface ConferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  conference: typeof conferenceData[0] | null;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  language: string;
}

const ConferenceModal: React.FC<ConferenceModalProps> = ({ 
  isOpen, 
  onClose, 
  conference, 
  onPrev, 
  onNext, 
  hasPrev, 
  hasNext,
  language
}) => {
  const t = translations[language as keyof typeof translations];

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowLeft' && hasPrev) {
      onPrev();
    } else if (event.key === 'ArrowRight' && hasNext) {
      onNext();
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!conference) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
          >
            <X size={24} />
          </button>
          
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-72 md:h-full">
                <img
                  src={`/src/assets/${conference.image}`}
                  alt={conference.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
              </div>
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-light">{conference.title}</h2>
              
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Organizer:</span> {conference.organizer}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Location:</span> {conference.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Date:</span> {conference.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Role:</span> {conference.role}
                </p>
                {conference.paper && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span className="font-semibold">Paper:</span> {conference.paper}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-between p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className={`flex items-center ${
                hasPrev 
                  ? "text-primary dark:text-primary-light hover:underline" 
                  : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`flex items-center ${
                hasNext 
                  ? "text-primary dark:text-primary-light hover:underline" 
                  : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const Conferences: React.FC = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const t = translations[language as keyof typeof translations];
  
  const [selectedConference, setSelectedConference] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setSelectedConference(id);
  };

  const handleCloseModal = () => {
    setSelectedConference(null);
  };

  const handlePrevConference = () => {
    if (selectedConference && selectedConference > 1) {
      setSelectedConference(selectedConference - 1);
    }
  };

  const handleNextConference = () => {
    if (selectedConference && selectedConference < conferenceData.length) {
      setSelectedConference(selectedConference + 1);
    }
  };

  const currentConference = selectedConference 
    ? conferenceData.find(conf => conf.id === selectedConference) || null
    : null;

  return (
    <section id="conferences" className="py-16 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 
            ref={sectionRef}
            className={`text-3xl md:text-4xl font-bold mb-4 transition-transform duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {t.nav.conferences}
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
            Academic conferences and symposiums where I've presented papers, participated as a panel member, or served on scientific committees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceData.map((conference, index) => (
            <div 
              key={conference.id}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <ConferenceCard
                conference={conference}
                onClick={() => handleOpenModal(conference.id)}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>

      <ConferenceModal
        isOpen={selectedConference !== null}
        onClose={handleCloseModal}
        conference={currentConference}
        onPrev={handlePrevConference}
        onNext={handleNextConference}
        hasPrev={selectedConference !== null && selectedConference > 1}
        hasNext={selectedConference !== null && selectedConference < conferenceData.length}
        language={language}
      />
    </section>
  );
};

export default Conferences;