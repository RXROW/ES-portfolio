import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  return (
    <div
      id="contact"
      className="relative border-t my-12 border-[#25213b] py-16"
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
        [contact Me]
      </h2>

      {/* Main Content */}
      <div className="flex justify-center">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

      <div className=" mt-10 flex flex-col justify-center items-center gap-10 lg:gap-16">
        <p className=" text-white uppercase">Contact With Me</p>
        <div className=" max-w-2xl text-white rounded-md ring-1 ring-[#7f0fff7d] p-24">
          <p className=" text-sm text-[#d3d8e8] text-center">
            "If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests."
          </p>
          {/* Form  */}
          <div className=" text-white flex flex-col gap-4 mt-10">
            <div className=" flex flex-col items-start gap-2">
              <label htmlFor="" className=" text-base">
                Your Name:
              </label>
              <input
                type="text"
                className=" w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#6d1eff]  ring-0 outline-0 transition-all duration-300 px-3 py-2  "
                maxLength={100}
                required
                placeholder="Enter Your Name?"
              />
            </div>
          </div>
          <div className=" text-white flex flex-col gap-4 mt-10">
            <div className=" flex flex-col items-start gap-2">
              <label htmlFor="" className=" text-base">
                Your Email:
              </label>
              <input
                type="email"
                className=" w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#6d1eff]  ring-0 outline-0 transition-all duration-300 px-3 py-2  "
                maxLength={100}
                required
                placeholder="Enter Your Email?"
              />
            </div>
          </div>
          <div className=" text-white flex flex-col gap-4 mt-10">
            <div className=" flex flex-col items-start gap-2">
              <label htmlFor="" className=" text-base">
                Massage:
              </label>
              <textarea
                type="text"
                className=" w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#6d1eff]  ring-0 outline-0 transition-all duration-300 px-3 py-2  "
                rows={4}
                required
              />
            </div>
          </div>

          <div className=" text-white flex flex-col gap-4 mt-10">
            <div className=" flex flex-col items-center gap-2">
              <button className="shadow__btn">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-5 my-10">
        <div className=" bg-slate-200 p-4 cursor-pointer rounded-full hover:bg-violet-500 hover:text-white duration-300 transition-all ">
        <FaFacebookF className=" text-xl"/>
        </div>
        <div className=" bg-slate-200 p-4 cursor-pointer rounded-full hover:bg-violet-500 hover:text-white duration-300 transition-all ">
        <FaLinkedinIn className=" text-xl"/>
        </div>
        <div className=" bg-slate-200 p-4 cursor-pointer rounded-full hover:bg-violet-500 hover:text-white duration-300 transition-all ">
        <FiGithub className=" text-xl"/>
        </div>
        <div className=" bg-slate-200 p-4 cursor-pointer rounded-full hover:bg-violet-500 hover:text-white duration-300 transition-all ">
        <FaWhatsapp className=" text-xl"/>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
