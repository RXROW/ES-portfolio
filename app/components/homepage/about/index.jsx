"use client" 
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export const personalData = {
  name: "ESLAM AHMED",
  profile: "https://res.cloudinary.com/dyv3dluov/image/upload/v1731782506/portfolio/esarihtrv3y86twshgoh.jpg",
  designation: "Mern Stack Web developer",
  description:
    "I am a passionate MERN Stack web developer with expertise in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating efficient, user-centric solutions that address real-world challenges, delivering high-quality results through intuitive interfaces, robust backend systems, and advanced features.",
  email: "frontendadvance@gmail.com",
  phone: "+94432 22111",
  address: "Middle Perth, Melbourne, Australia - 22002",
  github: "https://github.com/RXROW",
  facebook: "https://www.facebook.com/eslam.almasody?mibextid=ZbWKwL",
  linkedIn: "https://www.linkedin.com/in/rxrow/",
  twitter: "https://twitter.com",
  stackOverflow: "https://stackoverflow.com",
  leetcode: "https://leetcode.com",
  devUsername: "",
  resume: "",
};

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative border-t my-12 border-[#25213b] py-16"
    >
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10"
      />

      {/* About Me Title */}
      <motion.h2
        className="text-pink-500 text-[14px] mb-12 flex justify-center uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        [About Me]
      </motion.h2>

      {/* Main Content */}
      <div className="flex justify-center">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

      {/* About Section Content */}
      <div className="flex justify-center mt-10">
        <div className="w-3/4 text-white flex flex-col md:flex-row md:justify-between items-center gap-10">
          {/* Personal Info */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="mb-8 text-center md:text-left">
              <motion.h3
                className="text-4xl font-bold text-violet-400"
                whileHover={{ scale: 1.05 }}
              >
                {personalData?.name}
              </motion.h3>
              <p className="text-gray-400 text-lg mt-2">{personalData?.designation}</p>
            </div>

            <div className="mb-8 text-center md:text-left">
              <h4 className="text-2xl font-semibold text-[#16f2b3]">Who I am?</h4>
              <p className="text-gray-300 mt-4">{personalData?.description}</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
              <motion.a
                href={personalData?.github}
                target="_blank"
                className="social-icon bg-violet-900 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <BsGithub className=" hover:text-purple-500 text-xl" />
              </motion.a>
              <motion.a
                href={personalData?.facebook}
                target="_blank"
                className="social-icon bg-violet-900 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <BsFacebook className=" hover:text-purple-500 text-xl" />
              </motion.a>
              <motion.a
                href={personalData?.linkedIn}
                target="_blank"
                className="social-icon bg-violet-900 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <BsLinkedin className=" hover:text-purple-500 text-xl" />
              </motion.a>
              <motion.a
                href={personalData?.twitter}
                target="_blank"
                className="social-icon bg-violet-900 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <BsTwitter className=" hover:text-purple-500 text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <div className="w-full md:w-auto flex items-center flex-col">
            <motion.div
              className="w-80 rounded-b-md flex items-center justify-center flex-col bg-violet-950/40"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <Image
                src={personalData.profile}
                width={650}
                height={200}
                alt="Profile Image"
                className="portfolioImag cursor-pointer rounded-t-md transition-all duration-700 hover:blur-sm hover:grayscale"
              />
              <div className="flex items-center flex-col py-2">
                <p className="font-semibold text-lg">Developer</p>
                <p>4/12</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
