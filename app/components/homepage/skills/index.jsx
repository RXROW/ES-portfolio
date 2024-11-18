import React from "react";
import { skillsData2 } from "../../../../utils/data/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative border-t my-12 border-[#25213b] py-16">
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10 w-full"
      />

      {/* Title */}
      <h2 className="text-pink-500 text-sm mb-12 flex justify-center uppercase tracking-widest">
        [Skills]
      </h2>

      {/* Main Content */}
      <div className="flex justify-center mb-8">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

      <div className="w-full mt-12">
        <Marquee gradient={false} speed={80} pauseOnHover>
          {skillsData2.map((skill, id) => (
            <div
              key={id}
              className="w-36 min-w-fit h-fit flex items-center flex-col justify-center transition-all duration-500 m-3 sm:m-5 rounded-sm group relative cursor-pointer"
            >
              <div className="h-full w-full border border-[#1f223c] bg-[#030025]/40 shadow-gray-50 rounded-sm group-hover:border-violet-500 transition-all duration-500">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-2/3">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center gap-3 p-6">
                  {/* Skill Image */}
                  <div className=" h-12">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="rounded-sm"
                  />
                  </div>
                
                  {/* Skill Name */}
                  <p className="text-sm sm:text-lg mt-2 text-slate-100">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
