
import React from "react";

export default function SideNav({ active }) {
  return (
    <div className="absolute top-1/2 right-8 flex flex-col gap-4 z-20 text-white font-saira tracking-wide items-end">
      {["about", "education", "skills", "projects"].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm transition-all duration-300 ${
            active === id ? "font-bold text-white-300" : "hover:font-bold"
          }`}
        >
          {id.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
