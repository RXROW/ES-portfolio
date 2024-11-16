import React, { useState, useEffect } from "react";

const Projects = [
  {
    id: 1,
    category: "Frontend",
    src: "/img-1.png",
    alt: "Project 1",
    title: "Frontend Project 1",
    des: "Description of Project 1",
    techStack: "React, Tailwind",
  },
  {
    id: 2,
    category: "Backend",
    src: "/img-2.png",
    alt: "Project 2",
    title: "Backend Project 2",
    des: "Description of Project 2",
    techStack: "Node.js, Express",
  },
  {
    id: 4,
    category: "Backend",
    src: "/img-2.png",
    alt: "Project 2",
    title: "Backend Project 2",
    des: "Description of Project 2",
    techStack: "Node.js, Express",
  },
  {
    id: 3,
    category: "Fullstack",
    src: "/img-1.png",
    alt: "Project 3",
    title: "Fullstack Project 3",
    des: "Description of Project 3",
    techStack: "MERN Stack",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedProject, setAnimatedProject] = useState([]);

  useEffect(() => {
    // Add a delay effect to each image load to create a fade-in animation
    const animate = setTimeout(() => {
      setAnimatedProject(filteredImages);
    }, 200);
    return () => clearTimeout(animate);
  }, [selectedCategory]);

  const filteredImages =
    selectedCategory === "all"
      ? Projects
      : Projects.filter((project) => project.category === selectedCategory);

  const categories = ["all", ...new Set(Projects.map((img) => img.category))];

  return (
    <div className="p-4 ">
      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-sm  hover:px-6 transition-all duration-300 ${
              selectedCategory === category
                ? " bg-violet-500 text-white"
                : "bg-gray-200"
            } hover:bg-violet-800 hover:text-white`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animatedProject.map((pro) => (
          <div
            key={pro.id}
            className="overflow-hidden  bg-[#5a29c51c]  pb-3 rounded-md transform transition duration-500 ring-1 ring-transparent hover:ring-[#610bff] cursor-pointer "
          >
            <div className=" overflow-hidden">
              <img
                src={pro.src}
                alt={pro.alt}
                className="w-full opacity-0 animate-fade-in hover:scale-110 hover:rotate-3 transform transition duration-500 "
                style={{ animationDelay: `${pro.id * 100}ms` }}
              />
            </div>

            <div className=" text-white my-2 p-2 text-center">
              <h4 className=" text-2xl ">{pro.title} </h4>
              <p className=" text-sm text-gray-300  ">{pro.des} </p>
              <div className=" bg-violet-500 rounded-full  mt-4 ">
                {pro.techStack}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
