
"use client";
import Image from "next/image";
 
import Callary from "./Callary";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative   border-t my-12 border-[#25213b] py-16"
    >
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0   -z-10"
      />

      {/* About Me Title */}
      <div className=" sticky top-10 ">
      <h2 className="text-pink-500 text-[14px] mb-12 flex justify-center uppercase tracking-widest">
        [My Projects]
      </h2>
      </div>


      {/* Main Content */}
      <div className="flex justify-center">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

   
          <Callary/>
      </div>
 
  );
};

export default Projects;
