import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full text-black h-15 p-4 flex justify-between items-center">
      <div>
        <h1 className="font-saira text-2xl">SG</h1>
      </div>
      <div className="flex items-center gap-10 px-6 font-saira ">
        
        <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
          <a href="#education">
            EDUCATION
          </a>
        </div>
        <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
          <a href="#skills">
            SKILLS
          </a>
        </div>
        <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
          <a href="#projects">
            PROJECTS
          </a>
        </div>
        <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer ">
          <a href="/Portfolio/CV_SAYANI_GAIN.pdf">
            RESUME
          </a>
        </div>
        
      </div>
    </div>
  );
}

