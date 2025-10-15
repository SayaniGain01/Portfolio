import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="fixed w-1/2 top-0 left-0 p-6 text-black">
        <h1 className="text-2xl">◜SG◞</h1>
      </div>
      <div className="fixed w-1/2 top-0 left-1/2 p-6 text-black ">
        <div className="flex items-center gap-10 px-20 ">
          <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
            <a href="#education">EDUCATION</a>
          </div>
          <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
            <a href="#skills">SKILLS</a>
          </div>
          <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer">
            <a href="#projects">PROJECTS</a>
          </div>
          <div className=" hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer ">
            <a href="/assets/CV-SAYANI-GAIN.pdf">RESUME</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
