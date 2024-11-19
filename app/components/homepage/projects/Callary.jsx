import React, { useState, useEffect } from "react";
import { ArrowUpRight, Github, GithubIcon } from "lucide-react";
import Link from "next/link";

const Projects = [
  {
    id: 1,
    category: "Fullstack",
    srcImage:
      "https://res.cloudinary.com/dyv3dluov/image/upload/v1731940286/portfolio/projects/ecommerce.png",
    alt: "Multi Vendor Ecommerce",
    title: "Multi Vendor Ecommerce",
    description:
      "A modern, scalable online marketplace built with Next.js. It enables multiple vendors to manage their stores, upload products, and track sales through dedicated dashboards. Customers benefit from advanced search and filtering options for a seamless shopping experience.",
    techStack: ["Next js", "Tailwind", "Prisma", "NextAuth", "redux"],
    featured: true,
    projectUrl:"https://kachabazar-store-nine.vercel.app",
    gitUrl:"https://github.com/RXROW/Multi-Vendor-Ecommerce_NextJs",
  },
  {
    id: 2,
    category: "Fullstack",
    srcImage:
      "https://res.cloudinary.com/dyv3dluov/image/upload/v1731940276/portfolio/projects/ai%20gen.png",
    alt: "Project 2",
    title: "AI Content Generator",
    description:
      "An AI Content Generator built using Next.js and powered by Gemini AI combines cutting-edge technology for creating high-quality, contextually relevant content efficiently.",
    techStack: ["Next js", "GiminAI", "Drizzle ORM", "Tailwind", "TypeScript"],
    featured: true,
    projectUrl:"https://ai-content-generator-next-js.vercel.app",
    gitUrl:"https://github.com/RXROW/AI-Content-Generator-NextJS-Gemini",
  },
  {
    id: 3,
    category: "Frontend",
    srcImage:
      "https://res.cloudinary.com/dyv3dluov/image/upload/v1731941666/portfolio/projects/wzsadnshv94gnghqxmgk.png",
    alt: "Astra Agency website",
    title: "Astra Agency website",
    description:
      "The Astra Agency Website, developed with Next.js and styled using Asentry UI, offers a modern, fast, and visually appealing platform to showcase agency services and portfolio",
    techStack: ["Next js", "Asentry UI", "Tailwind"],
    featured: true,
    projectUrl:"https://astra-agency.netlify.app",
    gitUrl:"https://github.com/RXROW/Astra-website-",
  },
  {
    id: 4,
    category: "Frontend",
    srcImage: "https://res.cloudinary.com/dyv3dluov/image/upload/v1732015675/portfolio/projects/fjuiyjdzig0rqlosooj5.jpg",
    alt: "React Admin Dashboard",
    title: "React Admin Dashboard",
    description: "A React Admin Dashboard is a web-based application that provides an intuitive interface for managing and monitoring various data points, typically used for admin-level control of websites or applications. Built with React, this dashboard allows real-time data updates, easy navigation, and customizability.",
    techStack: ["React", "Syncfusion", "Tailwind"],
    featured: true,
    projectUrl:"https://react-admin-dashbourd.netlify.app",
    gitUrl:"https://github.com/RXROW/react_admin_dashboard",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-slate-950 rounded-xl overflow-hidden transition-all duration-300 h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.srcImage}
          alt={project.alt}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <Link target="_blank" href={project.projectUrl} className="transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-full flex items-center gap-2 group-hover:gap-3">
              Demo  <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link target="_blank" href={project.gitUrl} className="transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-slate-700 hover:bg-slate-900 text-white px-3 mx-1 py-2 rounded-full flex items-center gap-2 group-hover:gap-3">
              Repo  <GithubIcon className="h-5 w-5"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {project.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative px-4 py-2 text-sm font-medium transition-all duration-300
      ${active ? "text-purple-500" : "text-gray-200 hover:text-gray-300"}
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
      after:transition-all after:duration-300
      ${
        active
          ? "after:bg-purple-500 after:opacity-100"
          : "after:bg-gray-200 after:opacity-0 hover:after:opacity-100"
      }
    `}
  >
    {children}
  </button>
);

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(Projects);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    "all",
    ...new Set(Projects.map((project) => project.category)),
  ];

  useEffect(() => {
    setIsLoading(true);
    const filtered =
      selectedCategory === "all"
        ? Projects
        : Projects.filter((project) => project.category === selectedCategory);

    setFilteredProjects(filtered);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest work across different technologies and domains
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-8 pb-4 border-b border-gray-800">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`
                transition-all duration-500 ease-out
                ${
                  isLoading
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }
              `}
              style={{
                transitionDelay: `${project.id * 100}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
