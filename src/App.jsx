import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import SideNav from "./Components/SideNav";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import image from "./assets/image2.png";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const lenis = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectRef },
      { id: "education", ref: educationRef },
      { id: "skills", ref: skillRef },
    ];

    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

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
          duration: 0.5,
          ease: "power1.inOut",
        },
      });
    }

    lenis.current.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.current.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      <div className="w-1/2 fixed top-0 left-0 h-full">
        <img
          src={image}
          alt="Portfolio"
          className="w-full h-full object-cover"
        />
        <SideNav active={activeSection} />
      </div>

      <Navbar />

      <div className="ml-auto w-1/2 min-h-screen">
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
            className="panel min-h-screen px-10 flex items-center justify-center"
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
            className="panel min-h-screen flex items-center justify-center"
          >
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
