import React from "react";

function Laravel({ projects }) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-[#5fcdb2] rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg hover:shadow-[#5fcdb2]/30 transition-all"
        >
           
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#3ead92] mb-2 break-words">
                {project.title}
              </h2>

              
              <ul className="text-[#71717a] mb-4 list-disc list-inside space-y-1">
                {Array.isArray(project.description) ? (
                  project.description.map((desc, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {desc}
                    </li>
                  ))
                ) : (
                  <li className="text-sm sm:text-base">
                    {project.description}
                  </li>
                )}
              </ul>

              <span className="inline-block px-3 py-1 bg-[#5fcdb2]/20 text-[#5fcdb2] rounded-full text-xs sm:text-sm font-semibold">
                {project.stackType}
              </span>
            </div>

        
            <div className="flex flex-wrap gap-3 mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#5fcdb2] text-black text-sm sm:text-base font-semibold rounded hover:bg-[#3ead92] transition"
                >
                  GitHub
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#039099] text-white text-sm sm:text-base font-semibold rounded hover:bg-[#3ead92] transition"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

         
        </div>
      ))}
    </div>
  );
}

export default Laravel;
