// src/pages/Projects.jsx
import { useEffect, useState } from 'react';
import FrontEnd from '../../components/projects/FrontEnd';
import BackEnd from '../../components/projects/BackEnd';
import Laravel from '../../components/projects/Laravel';
import AppScript from '../../components/projects/AppScript';
import Loader from '../../components/shared/Loader';
import ProjectsLoader from '../../components/projects/ProjectsLoader';

function Projects() {
  const [tab, setTab] = useState('React Projects');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('http://localhost:5000/api/get-projects');
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const reactProjects = projects.filter((p) => p.stackType === 'React');
  const mernProjects = projects.filter((p) => p.stackType === 'MERN Stack');
  const laravelProjects = projects.filter((p) => p.stackType === 'Laravel');
  const appScriptProjects = projects.filter((p) => p.stackType === 'App Script');

  const tabs = [
    {
      key: 'React Projects',
      label: 'React Projects',
      component: <FrontEnd projects={reactProjects} />,
      data: reactProjects,
    },
    {
      key: 'MERN Stack Projects',
      label: 'MERN Stack Projects',
      component: <BackEnd projects={mernProjects} />,
      data: mernProjects,
    },
    {
      key: 'Laravel Projects',
      label: 'Laravel Projects',
      component: <Laravel projects={laravelProjects} />,
      data: laravelProjects,
    },
    {
      key: 'Google App Script Projects',
      label: 'Google App Script Projects',
      component: <AppScript projects={appScriptProjects} />,
      data: appScriptProjects,
    },
  ];

  const activeTab = tabs.find((t) => t.key === tab);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-36 pt-10 sm:pt-14 pb-20 flex flex-col gap-6">
      <h1 className="mt-10 sm:mt-12 md:mt-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary w-full leading-snug">
        Lets have a look at my <span className="text-primary">Projects</span>
      </h1>

      {/* Tabs */}
      <div className="relative z-20 pointer-events-auto flex flex-wrap gap-2 sm:gap-4 md:gap-6">
        {tabs.map(({ key, label }) => (
          <div
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 sm:px-6 py-2 rounded-full cursor-pointer border transition-colors duration-300
          ${
            tab === key
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-secondary border-gray-300 hover:bg-gray-100"
          }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Active Content */}
      <div className="w-full relative z-10 mt-6">
        {loading ? (
          <ProjectsLoader />
        ) : activeTab && activeTab.data.length > 0 ? (
          activeTab.component
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">
            No projects found for this category.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
