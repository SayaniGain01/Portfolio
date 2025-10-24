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
          <h1 className="lg:hidden md:hidden font-semibold mb-6 text-lg">ABOUT</h1>
          Hello world! I am Sayani Gain - a Web Developer with a strong focus on
          crafting visually engaging and highly functional digital experiences.
          <br />
          <br />
          I am skilled in React and have an eye for UI/UX design. Beyond work, I
          love exploring new technologies and turning ideas into reality through
          personal projects.
          <br />
          <br />
          While I’ve dabbled in Python, my primary focus now is on frontend
          development and design—blending creativity with functionality to make
          digital experiences both intuitive and engaging.
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
              href="https://www.instagram.com/tdr_aws/?fbclid=IwY2xjawLe3HRleHRuA2FlbQIxMABicmlkETFYNjZiM1lqeU0xTjZGNlRNAR7RzCrcgPhB86cBHvlh89WvfNdyiuu8G1B85utJlW3xtwUoJRpLmAOBzR9tqg_aem_fckZOcL0LMo3rnzTd6neGQ#"
              className="flex items-center gap-2 hover:text-gray-600"
            >
              <PiInstagramLogoThin className="text-2xl " />
              INSTAGRAM
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
