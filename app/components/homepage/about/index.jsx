"use client"
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";


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
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      id="about"
      className="relative border-t my-12 border-[#25213b] py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10"
      />

      <motion.h2
        variants={titleVariants}
        className="text-pink-500 text-[14px] mb-12 flex justify-center uppercase tracking-widest"
        whileHover={{ scale: 1.1 }}
      >
        [About Me]
      </motion.h2>

      <motion.div className="flex justify-center" variants={itemVariants}>
        <div className="w-3/4">
          <motion.div 
            className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="flex justify-center mt-10">
        <div className="w-3/4 text-white flex flex-col md:flex-row md:justify-between items-center gap-10">
          <motion.div
            className="md:w-1/2"
            variants={itemVariants}
          >
            <motion.div className="mb-8 text-center md:text-left" variants={itemVariants}>
              <motion.h3
                className="text-4xl font-bold text-violet-400"
                whileHover={{ scale: 1.05, color: "#16f2b3" }}
                transition={{ duration: 0.2 }}
              >
                {personalData?.name}
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-lg mt-2"
                variants={itemVariants}
              >
                {personalData?.designation}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mb-8 text-center md:text-left"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-2xl font-semibold text-[#16f2b3]"
                whileHover={{ scale: 1.05 }}
              >
                Who I am?
              </motion.h4>
              <motion.p 
                className="text-gray-300 mt-4"
                variants={itemVariants}
              >
                {personalData?.description}
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex justify-center md:justify-start items-center gap-5 mt-6"
              variants={itemVariants}
            >
              {[
                { href: personalData?.github, icon: BsGithub },
                { href: personalData?.facebook, icon: BsFacebook },
                { href: personalData?.linkedIn, icon: BsLinkedin },
                { href: personalData?.twitter, icon: BsTwitter }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="social-icon bg-violet-900 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="hover:text-purple-500 text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-auto flex items-center flex-col"
            variants={imageVariants}
          >
            <motion.div
              className="w-80 rounded-b-md flex items-center justify-center flex-col bg-violet-950/40"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div
                whileHover={{
                  filter: "blur(4px) grayscale(100%)",
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={personalData.profile}
                  width={650}
                  height={200}
                  alt="Profile Image"
                  className="portfolioImag cursor-pointer rounded-t-md transition-all duration-700"
                />
              </motion.div>
              <motion.div 
                className="flex items-center flex-col py-2"
                variants={itemVariants}
              >
                <p className="font-semibold text-lg">Developer</p>
                <p>4/12</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;