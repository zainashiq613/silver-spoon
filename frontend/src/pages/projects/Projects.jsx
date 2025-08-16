// src/pages/Projects.jsx
import { useEffect, useState } from 'react';
import Button from '../../components/shared/Button';
import FrontEnd from '../../components/projects/FrontEnd';
import BackEnd from '../../components/projects/BackEnd';
import Laravel from '../../components/projects/Laravel';
import AppScript from '../../components/projects/AppScript';

function Projects() {
  const [tab, setTab] = useState('Laravel');
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
      key: 'React',
      label: 'React',
      component: <FrontEnd projects={reactProjects} />,
      data: reactProjects,
    },
    {
      key: 'MERN Stack',
      label: 'MERN Stack',
      component: <BackEnd projects={mernProjects} />,
      data: mernProjects,
    },
    {
      key: 'Laravel',
      label: 'Laravel',
      component: <Laravel projects={laravelProjects} />,
      data: laravelProjects,
    },
    {
      key: 'App Script',
      label: 'App Script',
      component: <AppScript projects={appScriptProjects} />,
      data: appScriptProjects,
    },
  ];

  const activeTab = tabs.find((t) => t.key === tab);

  return (
    <section className="px-[150px] pt-20 pb-6 flex flex-col gap-6">
      <h1 className="mt-6 sm:mt-0 text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary w-full leading-snug">
        Lets have a look at my <span className="text-primary">Projects</span>
      </h1>
      <div className="relative z-20 pointer-events-auto flex flex-wrap gap-3 sm:gap-4 md:gap-6">
        {tabs.map(({ key, label }) => (
          <Button
            key={key}
            text={label}
            variant={key === tab ? 'active' : 'default'}
            onClick={() => setTab(key)}
          />
        ))}
      </div>
      <div className="w-full relative z-10">
        {loading ? (
          <p className="text-gray-500 text-sm sm:text-base">Loading projects...</p>
        ) : activeTab && activeTab.data.length > 0 ? (
          activeTab.component
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
