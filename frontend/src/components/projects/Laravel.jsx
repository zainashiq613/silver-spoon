import React from 'react';
import { PinContainer } from '../ui/PinContainer';

function Laravel({ projects }) {
  return (
    <div className="grid grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <PinContainer key={index} title={project.title} href={project.link}>
          <div className="h-full col-span-1 w-full bg-white shadow-md p-7 border rounded-2xl">
            <div className="flex flex-col gap-5">
              <img
                className="h-65 rounded-2xl border w-full object-cover"
                src="/pic (1).png"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{project.title}</h1>
                <p className="text-sm text-text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nesciunt nulla
                  earum sapiente. Incidunt quam voluptatum, tenetur consequuntur nemo corrupti.
                </p>
                <h3>Technologies Used</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-primary text-white px-4 py-0.5 rounded-2xl">Html</span>
                  <span className="bg-primary text-white px-4 py-0.5 rounded-2xl">Html</span>
                  <span className="bg-primary text-white px-4 py-0.5 rounded-2xl">Html</span>
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
