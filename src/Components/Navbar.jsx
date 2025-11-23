import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


export default function Navbar() {
  const [open,setOpen] = useState(false)

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center py-6">
        <h1 className="md:text-xl text-white">「SG」</h1>
      </div>

      {/*Mobile menu */}
      <div className=" top-3 right-3 p-6">
        <button
          className="md:hidden fixed top-6 right-6 text-white text-2xl"
          onClick={()=> setOpen(!open)}
          >
            {open ? <RxCross1 />:<RxHamburgerMenu />}
        </button>

        {open && (
        <div className=" md:hidden flex flex-col bg-black/50 text-white text-center p-6 gap-6">
          <a href="#education" className="hover:font-semibold" onClick={() => setOpen(false)}>EDUCATION</a>
          <a href="#skills" className="hover:font-semibold" onClick={() => setOpen(false)}>SKILLS</a>
          <a href="#projects" className="hover:font-semibold" onClick={() => setOpen(false)}>PROJECTS</a>
          <a href="/assets/CV-SAYANI-GAIN.pdf" className="hover:font-semibold" onClick={() => setOpen(false)}>RESUME</a>
        </div>
      )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex fixed top-0 left-1/2 p-6 text-black ">
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
