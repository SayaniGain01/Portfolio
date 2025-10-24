import React from "react";

const skills = [
  {
    title: "HTML5",
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    title: "CSS",
    img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    title: "Javascript",
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    title: "React",
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    title: "Tailwind CSS",
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    title: "Figma",
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  {
    title: "Python",
    img: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    title: "MySQL",
    img: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
  },
  {
    title: "Git",
    img: "https://cdn.worldvectorlogo.com/logos/git.svg",
  },
  {
    title: "GitHub",
    img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center"
    >
      <h1 className="lg:hidden md:hidden font-semibold mb-4 text-lg">SKILLS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-500 rounded-md shadow-sm hover:shadow-md transition p-2 flex flex-col items-center"
          >
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="w-full border-t border-gray-500 text-center text-xs py-1">
              <span className="font-bold">{skill.id} </span>
              {skill.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
