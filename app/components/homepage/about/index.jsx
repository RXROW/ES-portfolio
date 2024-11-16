import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
 export const personalData = {
  name: "ESLAM AHMED",
  profile: "/profile.jpg",
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
const AboutSection = () => {
  return (
    <div
      id="about"
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
      <h2 className="text-pink-500 text-[14px] mb-12 flex justify-center uppercase tracking-widest">
        [About Me]
      </h2>

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
          <div className="md:w-1/2">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-4xl font-bold text-violet-400">
                {personalData?.name}
              </h3>
              <p className="text-gray-400 text-lg mt-2">
                {personalData?.designation}
              </p>
            </div>

            <div className="mb-8 text-center md:text-left">
              <h4 className="text-2xl font-semibold text-[#16f2b3]">
                Who I am?
              </h4>
              <p className="text-gray-300 mt-4">{personalData?.description}</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
              <Link
                href={personalData?.github}
                target="_blank"
                className="social-icon bg-violet-500 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
              >
                <BsGithub className=" hover:text-purple-500 text-xl" />
              </Link>
              <Link
                href={personalData?.facebook}
                target="_blank"
                className="social-icon bg-violet-500 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300 "
              >
                <BsFacebook className=" hover:text-purple-500 text-xl" />
              </Link>
              <Link
                href={personalData?.linkedIn}
                target="_blank"
                className="social-icon bg-violet-500 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
              >
                <BsLinkedin className=" hover:text-purple-500 text-xl" />
              </Link>
              <Link
                href={personalData?.twitter}
                target="_blank"
                className="social-icon  bg-violet-500 rounded-full p-4 hover:bg-transparent hover:ring-1 ring-purple-500 translate-all duration-300"
              >
                <BsTwitter className=" hover:text-purple-500 text-xl" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-auto  flex items-center flex-col  ">
            <div className=" w-80 rounded-b-md flex items-center justify-center flex-col bg-violet-950/40 ">
              <Image
                src={personalData.profile}
                width={650}
                height={200}
                alt="Profile Image"
                className=" cursor-pointer rounded-t-md transition-all duration-700 blur-0 hover:blur-sm hover:grayscale "
              />
              <div className=" flex items-center flex-col py-2 ">
                <p className=" font-semibold text-lg">Devloper </p>
                <p>4/12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
