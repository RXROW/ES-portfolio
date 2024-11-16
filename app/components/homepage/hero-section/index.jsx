import Image from "next/image";
import React from "react";
import TerminalBlock from "./TerminalBlock";
import Link from "next/link";
import {FaDownload } from "react-icons/fa"; // Example icons

export const personalData = {
  name: "ESLAM AHMED",
  profile: "/profile.png",
  designation: "Based in Melbourne",
  description:
    "As a graphic designer and web developer, I specialize in transforming linguistic messages into engaging visual content. From client requirements to final designs, my goal is to ensure impactful communication through compelling visuals.",
  email: "frontendadvance@gmail.com",
  phone: "+94432 22111",
  address: "Middle Perth, Melbourne, Australia - 22002",
  github: "https://github.com",
  facebook: "https://www.facebook.com",
  linkedIn: "https://www.linkedin.com",
  twitter: "https://twitter.com",
  stackOverflow: "https://stackoverflow.com",
  leetcode: "https://leetcode.com",
  devUsername: "",
  resume: "",
};

function HeroSection() {
  return (
    <section className="py-24 pt-44 relative   text-white">
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
            className=" absolute -top-[99px] -z-10 "
      />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
        {/* Left Section: Text Content */}
        <div className="lg:w-2/3 flex flex-col justify-center lg:pl-10 z-10">
          <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-tight">
            <span className="text-violet-500 text-xl uppercase tracking-widest block">
              {personalData.name}
            </span>
            Visual & Web Developer{" "}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>
          <p className="text-lg my-5 leading-relaxed lg:w-4/5">
            {personalData.description}
          </p>
          <div className="flex gap-4 mt-5">
             
              <button className="shadow__btn ">
                <span>Contact me</span>
               </button>
         

            {/* Resume Button */}
            <Link
              href="/resume.pdf"
              aria-label="Download resume"
              passHref
              download
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-sm text-white uppercase tracking-wide transition-all duration-200 ease-out hover:text-white hover:shadow-lg"
            >
              <span>Get Resume</span>
              <FaDownload className="text-lg transition-transform transform hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Right Section: Terminal Block */}
        <div className="lg:w-1/3 w-96 mt-10 lg:mt-0">
          <TerminalBlock />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
