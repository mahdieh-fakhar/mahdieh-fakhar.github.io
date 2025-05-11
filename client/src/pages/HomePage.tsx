import { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Articles from "../components/Articles";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const HomePage = () => {
  // Refs for sections to allow scrolling
  const aboutRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const articlesRef = useRef<HTMLElement>(null);
  const conferencesRef = useRef<HTMLElement>(null);
  const membershipsRef = useRef<HTMLElement>(null);
  const careerRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <Hero />
      <About ref={aboutRef} id="about" />
      <Education ref={educationRef} id="education" />
      <Articles ref={articlesRef} id="articles" />
      <div ref={conferencesRef} id="conferences" className="section-anchor"></div>
      <div ref={membershipsRef} id="memberships" className="section-anchor"></div>
      <div ref={careerRef} id="career" className="section-anchor"></div>
      <Skills ref={skillsRef} id="skills" />
      <Projects ref={projectsRef} id="projects" />
      <Resume ref={resumeRef} id="resume" />
      <Contact ref={contactRef} id="contact" />
    </>
  );
};

export default HomePage;
