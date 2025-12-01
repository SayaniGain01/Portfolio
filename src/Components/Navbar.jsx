
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const links = [
  { name: "EDUCATION", href: "#education" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "RESUME", href: "/CV-SAYANI-GAIN.pdf" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center py-6">
        <h1 className="md:text-xl text-white">「SG」</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-6 right-6 text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 right-0 w-full h-screen md:hidden flex flex-col bg-black/50 text-white text-center p-6 gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:font-semibold"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex fixed top-0 left-1/2 p-6 text-black">
        <div className="flex items-center gap-10 px-20">
          {links.map((link) => (
            <div
              key={link.name}
              className="hover:text-gray-600 hover:underline underline-offset-4 cursor-pointer"
            >
              <a href={link.href}>{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}