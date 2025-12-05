
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";

gsap.registerPlugin(ScrollTrigger)


export default function Projects() {
  const sectionRef = useRef(null);
  const cardRef = useRef([])

  const projects = [
    {
      title: "THE DESIGN ARCHITECT",
      image: work1,
      description:
        "A full-stack web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
      codeLink: "https://github.com/SayaniGain01?tab=repositories",
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

    useEffect(()=>{

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:sectionRef.current,
          pin:true,
          start:'top center',
          end:'bottom center',
          scrub:1,
          ease:'linear'
        }
      })

      tl.to(cardRef.current,
        {y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
      })
    },[])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-full flex flex-col justify-center items-center px-8 pt-6 space-y-6"
    >
      <h1 className="lg:hidden md:hidden font-semibold mb-6 flex justify-center items-center text-lg">PROJECTS</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el)=>(cardRef.current[index]=el)}
          className="relative flex flex-col max-w-sm w-full rounded-xl overflow-hidden bg-gray-200 shadow-2xl"
        >
          <img
            className="w-full object-cover"
            src={project.image}
            alt={project.title}
          />

          <div className="px-6 py-4 ">
            <a href={project.livelink}>
              <div className="mb-2 text-lg font-semibold hover:text-gray-600 hover:underline cursor-pointer">
                {project.title}
              </div>
            </a>

            <p className="text-gray-700 text-xs mb-6">
              {project.description}
            </p>
            <div className="flex justify-center">
            <a href={project.codeLink}>
              <button className="bg-gray-100 text-gray-700 text-sm border shadow-xl py-2 px-4 rounded-full border-gray-400 hover:text-black hover:border-black mb-6">
                SEE CODE
              </button>
            </a>
          </div>
          </div>

          
        </div>
      ))}
    </section>
  );
}