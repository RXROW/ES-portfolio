"use client"
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsBriefcase, BsArrowRight, BsGlobe } from 'react-icons/bs';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

// Enhanced awards data
const awards = [
  {
    id: 1,
    title: "Web Developer",
    company: "lista",
    duration: "April, 2024",
    company_Url: "https://www.linkedin.com/company/lista-corporation/",
    description: "Developed and maintained web applications using modern technologies and best practices.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    achievements: [
      "Improved application performance by 40%",
      "Implemented new responsive design system",
    ],
    type: "Full-time",
    location: "On-site"
  },
  {
    id: 2,
    title: "Full Stack Internship",
    company: "Wxora",
    duration: "August, 2023",
    company_Url: "https://www.linkedin.com/company/wxora/posts/?feedView=all",
    description: "Gained hands-on experience in full-stack development through real-world projects.",
    skills: ["JavaScript", "React", "Node.js", "SQL" ,"Express"],
    achievements: [
      "Developed 3 full-stack applications",
      "Participated in agile development process",
    ],
    type: "Internship",
    location: "On-site"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 3

    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ExperienceCard = ({ award }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="glow-card relative w-full p-4 bg-[#04051a]/80 rounded-lg border border-violet-900/20 hover:border-violet-500/50 transition-all duration-300"
    >
      {/* Type Badge */}
      <div className="absolute right-4 top-4 flex gap-2">
        <span className="text-xs bg-[#16f2b3] rounded-full text-black px-3 py-1">
          {award.type}
        </span>
        <span className="text-xs bg-violet-500 rounded-full text-white px-3 py-1">
          {award.location}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-violet-900/20 rounded-lg">
          <BsBriefcase className="text-2xl text-violet-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{award.title}</h3>
          <Link 
            href={award.company_Url} 
            target="_blank"
            className="text-violet-400 hover:text-[#16f2b3] flex items-center gap-2 transition-colors duration-300"
          >
            <HiOutlineOfficeBuilding />
            {award.company}
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <p className="text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#16f2b3] rounded-full"></span>
          {award.duration}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4">
        {award.description}
      </p>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-sm text-violet-400 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {award.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-violet-900/30 rounded-full text-xs text-violet-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-sm text-violet-400 mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {award.achievements.map((achievement, index) => (
            <li key={index} className="text-sm">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

function Experience() {
  return (
    <motion.div 
      id="experience" 
      className="relative border-t my-12 border-[#25213b] py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10 w-full"
      />

      {/* Title */}
      <motion.h2 
        className="text-pink-500 text-sm mb-12 flex items-center justify-center uppercase tracking-widest gap-2"
        variants={itemVariants}
      >
       
        [My Experience]
      </motion.h2>

      {/* Divider Line */}
      <motion.div 
        className="flex justify-center mb-8"
        variants={itemVariants}
      >
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </motion.div>

      {/* Blur Effect Background */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[50%] translate-x-[-50%] filter blur-3xl opacity-20"></div>

      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-violet-500/20 top-0" />

      {/* Experience Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10 px-4">
        {awards.map((award) => (
          <ExperienceCard key={award.id} award={award} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;