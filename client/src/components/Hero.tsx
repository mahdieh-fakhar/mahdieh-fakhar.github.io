import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import profileImage from "../assets/profile.jpg";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [heroRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const t = translations[language as keyof typeof translations];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    const resumeSection = document.getElementById("resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary to-blue-700 opacity-90 bg-fixed bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef}
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-primary-light bg-white bg-opacity-20 backdrop-blur-sm inline-block px-4 py-1 rounded-full text-sm mb-4">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">MAHDIEH FAKHAR</h1>
            <h2 className="text-xl md:text-2xl mb-6">{t.hero.role}</h2>
            <p className="text-lg mb-8 max-w-md">{t.hero.bio}</p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out"
              >
                {t.hero.contact}
              </button>
              <button
                onClick={scrollToResume}
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out"
              >
                {t.hero.resume}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div 
              className={`relative w-64 h-auto md:w-80 md:h-auto rounded-xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-indigo-600/30 mix-blend-overlay"></div>
              <img 
                src={profileImage} 
                alt="Mahdieh Fakhar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-current text-light dark:text-dark">
          <path d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,224C960,213,1056,171,1152,170.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
