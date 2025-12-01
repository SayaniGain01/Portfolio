import React from "react";

export default function SideNav({ active }) {
  const options = [
    { title: "about" },
    { title: "education" },
    { title: "skills" },
    { title: "projects" },
    
  ];

  return (
    <div className="absolute top-1/2 right-8 flex flex-col gap-4 z-20 text-white tracking-wide items-end">
      {options.map((item) => (
        <a
          key={item.title}
          href={`#${item.title}`}
          className={`text-sm transition-all duration-300 ${
            active === item.title
              ? "font-bold text-white"
              : "hover:font-bold hover:white"
          }`}
        >
          {item.title.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
