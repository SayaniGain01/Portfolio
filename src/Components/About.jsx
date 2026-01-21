import React from "react";
import {
  PiLinkedinLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
} from "react-icons/pi";

export default function About() {
  return (
    <section id="about" className=" min-h-screen flex flex-col justify-center" >
      <div className="px-20 xs:px-20">
        <p className="text-black text-xs ">
          <h1 className="lg:hidden md:hidden flex justify-center items-center font-semibold mb-6 text-lg">ABOUT</h1>
          Hello world! I am Sayani Gain - a UI/UX designer focused on creating intuitive, visually engaging digital experiences.
          <br />
          <br />
          I am skilled in Figma and enjoy designing interfaces that are user-centric, thoughtful, and visually balanced. Beyond design work, I love exploring new technologies and turning ideas into reality through personal projects.
          <br />
          <br />
          While I have some hands-on experience with React, my main focus is on blending creativity with functionality to craft digital experiences that feel intuitive and engaging.
          <br />
          <br />
          Let's connect and collaborate!
        </p>

        <ul className="flex flex-row gap-10 mt-12 text-gray-800 text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/sayani-gain-797609228"
              className="flex items-center gap-2 hover:text-gray-600"
            >
              <PiLinkedinLogoThin className="text-2xl" />
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SayaniGain01"
              className="flex items-center gap-2 hover:text-gray-600"
            >
              <PiGithubLogoThin className="text-xl border border-gray-800 rounded-xs" />
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tdr_aws/"
              className="flex items-center gap-2 hover:text-gray-600"
            >
              <PiInstagramLogoThin className="text-2xl" />
              INSTAGRAM
            </a>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
}
