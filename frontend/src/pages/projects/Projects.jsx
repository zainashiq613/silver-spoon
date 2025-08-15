import { useState } from 'react';
import Button from '../../components/shared/Button';
import FrontEnd from '../../components/projects/FrontEnd';
import BackEnd from '../../components/projects/BackEnd';
import Laravel from '../../components/projects/Laravel';
import AppScript from '../../components/projects/AppScript';

function Projects() {
  const [tab, setTab] = useState('Front End');
  return (
    <section className="relative top-15 px-[150px] pb-12">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-8 py-12">
        <h1 className="text-5xl font-semibold text-secondary w-full">
          Lets have a look at my <span className="text-primary">Projects</span>
        </h1>
        <div className="flex items-center gap-6">
          {['Front End', 'Back End', 'Laravel Php', 'App Script'].map((item) => (
            <div key={item}>
              <Button
                cn={`border bg-transparent !text-black ${
                  item === tab ? '!bg-black !border-primary !text-white' : ''
                }`}
                text={item}
                onClick={() => {
                  setTab(item);
                }}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="w-full">{tab === 'Front End' && <FrontEnd />}</div>
          <div className="w-full">{tab === 'Back End' && <BackEnd />}</div>
          <div className="w-full">{tab === 'Laravel Php' && <Laravel />}</div>
          <div className="w-full">{tab === 'App Script' && <AppScript />}</div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
