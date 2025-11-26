import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import SideNav from "./Components/SideNav";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

import aboutImg from "./assets/image2.png";
import eduImg from "./assets/education.jpg";
import skillImg from "./assets/skills.jpg";
import projectImg from "./assets/projects.jpg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const imgContainerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectRef },
      { id: "education", ref: educationRef },
      { id: "skills", ref: skillRef },
    ];

    ScrollTrigger.getAll().forEach((t) => t.kill());

    sections.forEach(({ id, ref }) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    if (sections.length > 1) {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.6,
          ease: "power2.inOut",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // crossfade when image changes
  useEffect(() => {
    if (!imgContainerRef.current) return;

    const container = imgContainerRef.current;
    const oldImage = container.querySelector("img");
    const newImage = document.createElement("img");

    newImage.src = getImageForSection();
    newImage.alt = activeSection;
    newImage.className =
      "absolute w-full h-full object-cover top-0 left-0 opacity-0";

    container.appendChild(newImage);

    // fade new image in
    gsap.to(newImage, {
      opacity: 1,
      duration: 1.8,
      ease: "power2.inOut",
    });

    // fade old image out and remove it
    if (oldImage) {
      gsap.to(oldImage, {
        opacity: 0,
        duration: 1.8,
        ease: "power2.inOut",
        onComplete: () => oldImage.remove(),
      });
    }
  }, [activeSection]);

  const getImageForSection = () => {
    switch (activeSection) {
      case "about":
        return aboutImg;
      case "education":
        return eduImg;
      case "skills":
        return skillImg;
      case "projects":
        return projectImg;
      default:
        return aboutImg;
    }
  };

  return (
    <div className="relative flex flex-col overflow-x-hidden">
      {/* ---------- DESKTOP VIEW ---------- */}
      <div className="hidden md:flex">
        {/* Left: Background image + sidenav */}
        <div
          ref={imgContainerRef}
          className="w-1/2 fixed h-full flex justify-center items-center overflow-hidden"
        >
          <img
            src={getImageForSection()}
            alt={activeSection}
            className="absolute w-full h-full object-cover top-0 left-0 opacity-100"
          />
          <SideNav active={activeSection} />
        </div>

        {/* Right: Scrollable content */}
        <div className="ml-auto w-1/2 min-h-screen">
          <Navbar />
          <div className="flex flex-col justify-center items-center">
            <section
              id="about"
              ref={aboutRef}
              className="panel min-h-screen flex items-center justify-center"
            >
              <About />
            </section>

            <section
              id="education"
              ref={educationRef}
              className="panel min-h-screen flex items-center justify-center"
            >
              <Education />
            </section>

            <section
              id="skills"
              ref={skillRef}
              className="panel min-h-screen flex items-center justify-center"
            >
              <Skills />
            </section>

            <section
              id="projects"
              ref={projectRef}
              className="panel h-[200vh] flex items-center justify-center"
            >
              <Projects />
            </section>
          </div>
        </div>
      </div>



      {/* ---------- MOBILE VIEW ---------- */}
      <div className="flex flex-col md:hidden">
        <Navbar />

        {/* ABOUT */}
        <section 
          id="about"
          ref={aboutRef}
          className="min-h-screen flex flex-col">
          <div className="h-[45vh] w-full">
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-cover rounded-b-3xl"
            />
          </div>
          <div className="min-h-screen flex items-center justify-center px-6">
            <About />
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education" 
          ref={educationRef}>
          <div className="min-h-screen flex items-center justify-center px-6 -my-40">
            <Education />
          </div>
        </section>

        {/* SKILLS */}
        <section 
          id="skills"
          ref={skillRef}>
          <div className="min-h-screen flex items-center justify-center px-6 mt-20">
            <Skills />
          </div>
        </section>

        {/* PROJECTS */}
        <section 
          id="projects" 
          ref={projectRef}>
          <div className="min-h-screen flex items-center justify-center px-6 mt-10">
            <Projects />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
