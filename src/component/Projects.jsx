import React from "react";
import { projects } from "../constant";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {/* Mapping through the projects array */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-500"
            />
            <div className="p-4 flex flex-col flex-grow">
              {/* Top Button */}
               

              <h3 className="text-xl font-semibold mb-3 hover:text-cyan-400 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Bottom Button */}
              <a
                href={project.link}
                className="bg-cyan-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 mt-auto"
              >
                View Project Again
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
