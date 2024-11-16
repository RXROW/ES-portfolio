import React from 'react';
 
import Image from "next/image";

export const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: "/gif/website.gif",
    service: "Custom website development tailored to your business needs, including responsive design and user-friendly interfaces."
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    icon: "/gif/chart.gif",
    service: "Complete e-commerce solutions featuring secure payment gateways, inventory management, and a seamless shopping experience."
  },
  {
    id: 3,
    title: "SEO Optimization",
    icon: "/gif/search.gif",
    service: "Search engine optimization services to improve your website's visibility and rank higher on search engine results pages."
  }
];

function Services() {
  return (
    <div id="education" className="relative border-t my-12 border-[#25213b] py-16">
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
        [Services]
      </h2>
{/* Main Content */}
<div className="flex justify-center">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>


      <div className="py-8 relative">
      <div className=" absolute top-[30%] hidden md:block  left-0 rounded-md bg-gradient-to-r from-[#470ecd] to-[#8f00fd] w-full h-32  "></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 z-10">
          {ServicesData.map((ser) => (
            <div
              key={ser.id}
              className="text-center text-white z-30 backdrop-blur-2xl bg-violet-800/20 rounded-sm hover:ring-1 ring-violet-500 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-center flex-col mt-4">
                <Image
                  src={ser.icon}
                  alt={`${ser.title} icon`}
                  width={100}
                  height={100}
                  unoptimized={true} 
                />
              </div>
              <h2 className="text-2xl p-4">{ser.title}</h2>
              <p className="p-3 text-slate-300 leading-7">{ser.service}</p>

            </div>

          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Services;
