import React from "react";
import { projects } from "../constant";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-4 sm:py-4 md:py-6 lg:py-8 bg-gray-900 text-white"
    >
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-6 md:mb-8 lg:mb-10 text-cyan-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6 px-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform flex flex-col h-[330px] sm:h-[250px] md:h-[300px] lg:h-[320px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-24 md:h-28 object-cover"
            />
            <div className="p-2 flex flex-col flex-grow">
              <h3 className="text-sm sm:text-[11px] lg:text-lg font-semibold mb-1 hover:text-cyan-400 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-[10px] mb-2 line-clamp-3">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white text-[10px] sm:text-[11px] text-center py-1 px-2 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 mt-auto"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
