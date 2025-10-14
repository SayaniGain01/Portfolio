import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projects = [
    {
      title: "THE DESIGN ARCHITECT",
      image: work1,
      description:
        "A full-stack Expense Tracker web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
      codeLink: "https://github.com/SayaniGain01/Website-Architecture",
      livelink: "https://the-design-artist.vercel.app/",
    },
    {
      title: "EXPENSE TRACKER",
      image: work2,
      description:
        "A full-stack Expense Tracker web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
      codeLink: "https://github.com/SayaniGain01/Expense-Tracker",
      livelink: "",
    },

  ];

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const cardRef = useRef([]);


  useEffect(() => {

    cardRef.current.forEach((card) => {
      gsap.fromTo(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: "card",
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      id="projects"
      ref={wrapperRef}
      className="min-h-screen flex flex-col justify-center px-8 pt-20 gap-6"
    >
      <div
        ref={contentRef}
        className="relative w-full flex flex-col items-center"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            // ref={(el) => (cardRef.current[index] = el)}
            className="card max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full object-cover"
              src={project.image}
              alt={project.title}
              href={project.livelink}
            />
            <div className="px-6 py-4">
              <a href={project.livelink}>
                <div className="mb-2 font-saira text-lg font-semibold hover:text-gray-600 cursor-pointer">
                  {project.title}
                </div>
              </a>

              <p className="text-gray-700 font-saira text-xs">
                {project.description}
              </p>
            </div>

            <div className="flex justify-center">
              <a href={project.codeLink}>
                <button className="relative items-center bg-transparent text-gray-700 text-sm border-2 py-2 px-4 rounded-full border-gray-400 hover:text-black hover:border-black  cursor-pointer mb-6">
                  GET CODE
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
