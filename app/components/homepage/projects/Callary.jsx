import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = [
  {
    id: 1,
    category: "Frontend",
    srcImage: "",
    alt: "Project 1",
    title: "Frontend Project 1",
    description: "Description of Project 1",
    techStack: ["React", "Tailwind"],
    featured: true
  },
  {
    id: 2,
    category: "Backend",
    srcImage: "",
    alt: "Project 2",
    title: "Backend Project 2",
    description: "Description of Project 2",
    techStack: ["Node.js", "Express"],
    featured: false
  },
  {
    id: 4,
    category: "Backend",
    srcImage: "",
    alt: "Project 2",
    title: "Backend Project 2",
    description: "Description of Project 2",
    techStack: ["Node.js", "Express"],
    featured: false
  },
  {
    id: 3,
    category: "Fullstack",
    srcImage: "",
    alt: "Project 3",
    title: "Fullstack Project 3",
    description: "Description of Project 3",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    featured: true
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-slate-950 rounded-xl overflow-hidden transition-all duration-300 h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.srcImage}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full flex items-center gap-2 group-hover:gap-3">
              View Details <ArrowUpRight className="w-4 h-4" />
            </button>
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
      ${active 
        ? 'text-purple-500' 
        : 'text-gray-200 hover:text-gray-300'
      }
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
      after:transition-all after:duration-300
      ${active 
        ? 'after:bg-purple-500 after:opacity-100' 
        : 'after:bg-gray-200 after:opacity-0 hover:after:opacity-100'
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

  const categories = ["all", ...new Set(Projects.map(project => project.category))];

  useEffect(() => {
    setIsLoading(true);
    const filtered = selectedCategory === "all"
      ? Projects
      : Projects.filter(project => project.category === selectedCategory);
    
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
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest work across different technologies and domains
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-8 pb-4 border-b border-gray-800">
          {categories.map(category => (
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
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`
                transition-all duration-500 ease-out
                ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
              `}
              style={{
                transitionDelay: `${project.id * 100}ms`
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