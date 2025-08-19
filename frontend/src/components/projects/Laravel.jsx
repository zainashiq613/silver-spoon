import React from 'react';
import { PinContainer } from '../ui/PinContainer';
import { Link } from "react-router-dom"; // make sure you use react-router-dom

function Laravel({ projects }) {
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={`/projects/${project.slug}`}
          className="w-full h-full"
        >
          <div
            className="group h-full w-full bg-white shadow-md p-5 sm:p-6 lg:p-7 border rounded-2xl cursor-pointer flex flex-col gap-4 sm:gap-5
                          transform transition-transform duration-300
                          hover:scale-105 focus-within:scale-105"
          >
            {/* Image */}
            <img
              className="h-56 sm:h-60 lg:h-65 w-full object-cover rounded-2xl border"
              src={project.thumbnail}
              alt={project.title}
            />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h1 className="text-lg sm:text-xl lg:text-xl font-semibold">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-text-secondary">
                {project.shortDescription}
              </p>
              <h3 className="text-sm sm:text-base font-medium mt-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary text-white text-xs sm:text-sm px-3 sm:px-4 py-0.5 rounded-2xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

export default Laravel;
