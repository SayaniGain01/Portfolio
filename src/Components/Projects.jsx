
import { useEffect, useRef } from "react";

import work1 from "../assets/work1.png";
// import work2 from "../assets/work2.png";


export default function Projects() {
  const projects = [
    {
      title: "THE DESIGN ARCHITECT",
      image: work1,
      description:
        "A full-stack web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
      codeLink: "https://github.com/SayaniGain01?tab=repositories",
      livelink: "https://the-design-artist.vercel.app/",
    },
    // {
    //   title: "EXPENSE TRACKER",
    //   image: work2,
    //   description:
    //     "A full-stack Expense Tracker web app built with FastAPI, where users can log daily expenses, view summaries, and manage their personal finances efficiently.",
    //   codeLink: "https://github.com/SayaniGain01/Expense-Tracker",
    //   livelink: "",
    // },
  ];


  return (
    <section
      id="projects"
      className="max-w-full flex flex-col justify-center items-center px-8 pt-6 space-y-6"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col max-w-sm w-full rounded-2xl overflow-hidden border border-gray-600"
        >
          <img
            className="w-full object-cover"
            src={project.image}
            alt={project.title}
          />

          <div className="px-6 py-4 ">
            <a href={project.livelink}>
              <div className="mb-2 text-lg font-semibold hover:text-gray-600 cursor-pointer">
                {project.title}
              </div>
            </a>

            <p className="text-gray-700 text-xs mb-6">
              {project.description}
            </p>
            <div className="flex justify-center">
            <a href={project.codeLink}>
              <button className="bg-transparent text-gray-700 text-sm border-2 py-2 px-4 rounded-full border-gray-400 hover:text-black hover:border-black mb-6">
                SEE MORE
              </button>
            </a>
          </div>
          </div>

          
        </div>
      ))}
    </section>
  );
}
