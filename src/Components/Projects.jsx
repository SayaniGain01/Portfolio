
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
        "A full-stack web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
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

  const cardRef = useRef([]);

  useEffect(() => {
    const cards = cardRef.current;

    // Clean up old triggers if re-rendered
    ScrollTrigger.getAll().forEach((t) => t.kill());

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, scale: 0.8, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "+=300",
            scrub: true,
            pin: true,
            pinSpacing: false, // key for the stacking look
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-8 pt-20"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (cardRef.current[index] = el)}
          // Inline styles to create the stacking overlap and z-index layers
          style={{
            transformOrigin: "center center",
            zIndex: projects.length - index, // ensures proper layering
            marginTop: index === 0 ? "0px" : "-150px", // overlap spacing
          }}
          className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <img
            className="w-full object-cover"
            src={project.image}
            alt={project.title}
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
              <button className="relative bg-transparent text-gray-700 text-sm border-2 py-2 px-4 rounded-full border-gray-400 hover:text-black hover:border-black mb-6">
                GET CODE
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
