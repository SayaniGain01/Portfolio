

import React, { useState } from "react";

export default function Education() {
  const [activeSection, setActiveSection] = useState("BACHELORS");

  const educationData = {
    BACHELORS: {
      years: "2022–2025",
      school: "Swami Vivekananda University",
      course: "Computer Science and Engineering",
      cgpa: "7.95",
    },
    DIPLOMA: {
      years: "2019–2022",
      school: "North Calcutta Polytechnic",
      course: "Architecture",
      cgpa: "9.00",
    },
    SCHOOLING: {
      years: "2017–2019",
      school: "Sodepur Chandrachur Vidyapith for Girls",
      course: null,
      cgpa: null,
    },
  };

  const edu = educationData[activeSection];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-10"
    >
      <h1 className="lg:hidden md:hidden font-semibold mb-4 text-lg self-start">EDUCATION</h1>
      <div className="mb-10 font-saira text-xs flex gap-3">
        {Object.keys(educationData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`py-2 px-4 rounded-full border text-sm shadow-xl ${
              activeSection === key
                ? "bg-black text-white border-black"
                : "bg-gray-200 text-gray-700 border-gray-400 hover:text-black hover:border-black"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="text-center font-saira">
        <p className="text-sm font-semibold mb-2">
          {activeSection} ({edu.years})
        </p>
        <p className="font-normal text-sm mb-1">{edu.school}</p>
        {edu.course && <p className="font-normal text-sm mb-1">{edu.course}</p>}
        {edu.cgpa && <p className="font-normal text-sm">CGPA: {edu.cgpa}</p>}
      </div>
    </section>
  );
}
