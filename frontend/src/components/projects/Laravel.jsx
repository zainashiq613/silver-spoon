import React from 'react';
import { PinContainer } from '../ui/PinContainer';
import { Link } from "react-router-dom"; // make sure you use react-router-dom

function Laravel({ projects }) {
return (
    <div className="grid grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={`/projects/${project.slug}`} // pass href
          className="w-full h-full"
        >
          <div className="h-full col-span-1 w-full bg-white shadow-md p-7 border rounded-2xl cursor-pointer">
            <div className="flex flex-col gap-5">
              <img
                className="h-65 rounded-2xl border w-full object-cover"
                src={project.thumbnail}
                alt={project.title}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{project.title}</h1>
                <p className="text-sm text-text-secondary">
                  {project.shortDescription}
                </p>
                <h3>Technologies Used</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-white px-4 py-0.5 rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

export default Laravel;
