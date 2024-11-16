"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 mb-20 bg-black/20 backdrop-blur-md ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyLogo</div>
        <div className="flex items-center">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none lg:hidden"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`fixed top-0 left-0 h-full transition-transform transform ${
              isOpen
                ? "translate-x-0 bg-[#140735ea] w-64 h-screen pt-10 mt-14 backdrop-blur-md"
                : "-translate-x-full"
            } lg:static lg:flex lg:flex-row lg:space-x-4 lg:translate-x-0`}
          >
            <li className="mt-5 lg:mt-0">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-800 uppercase hover:underline transition-all duration-200 block px-4 py-2"
              >
                Home
              </Link>
            </li>
            <li className="mt-5 lg:mt-0">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-800 uppercase hover:underline transition-all duration-200 block px-4 py-2"
              >
                Projects
              </Link>
            </li>

            <li className="mt-5 lg:mt-0">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-800 uppercase hover:underline transition-all duration-200 block px-4 py-2"
              >
                Skills
              </Link>
            </li>

            <li className="mt-5 lg:mt-0">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-800 uppercase hover:underline transition-all duration-200 block px-4 py-2"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
