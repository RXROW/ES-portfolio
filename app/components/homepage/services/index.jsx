"use client"
import React from 'react';
 import { motion } from 'framer-motion';
 import Image from "next/image";

export const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    service: "Custom website development tailored to your business needs, including responsive design and user-friendly interfaces.",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    icon: "🛍️",
    service: "Complete e-commerce solutions featuring secure payment gateways, inventory management, and a seamless shopping experience.",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "SEO Optimization",
    icon: "🎯",
    service: "Search engine optimization services to improve your website's visibility and rank higher on search engine results pages.",
    gradient: "from-orange-500 to-yellow-500"
  }
];

const Services = () => {
  return (
    <section id="services"     
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

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
         
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 ring-1 ring-purple-500/30  rounded-2xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                
                {/* Service content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.service}
                  </p>
                  
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;