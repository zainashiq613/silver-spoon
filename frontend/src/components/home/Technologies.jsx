import React, { useState } from 'react';

const tabs = [
  { id: 1, title: 'Design Approach' },
  { id: 2, title: 'Front-End Approach' },
  { id: 3, title: 'Back-End Approach' },
  { id: 4, title: 'Database Approach' },
];

// All Tech Icons
const techIcons = [
  { id: 2, name: 'JavaScript', icon: '/javascript 1.png' },
  { id: 3, name: 'PHP', icon: '/php 2.png' },
  { id: 4, name: 'Figma', icon: '/Group 1000002204.png' },
  { id: 5, name: 'JavaScript', icon: '/Group 1000002175.png' },
  { id: 6, name: 'SQL', icon: '/sql 1.png' },
  { id: 7, name: 'Kotlin', icon: '/kotlin 1.png' },
  { id: 8, name: 'Capcut', icon: '/capcut 1.png' },
  { id: 9, name: 'Git', icon: '/Group 1000002161.png' },
  { id: 10, name: 'Python', icon: '/python 2.png' },
  { id: 11, name: 'TypeScript', icon: '/Group 1000002172.png' },
  { id: 12, name: 'Laravel', icon: '/Group 1000002140.png' },
  { id: 13, name: 'Canva', icon: '/Group 1000002168.png' },
  { id: 14, name: 'Adobe Photoshop', icon: '/adobe-photoshop 1.png' },
  { id: 15, name: 'React', icon: '/react 1.png' },
  { id: 16, name: 'UI Design', icon: '/Group 1000002200.png' },
  { id: 17, name: 'Redux', icon: '/Group 1000002205.png' },
  { id: 18, name: 'Express', icon: '/Group 1000002177.png' },
  { id: 19, name: 'Illustrator', icon: '/Group 1000002203.png' },
  { id: 20, name: 'Swift', icon: '/swift 1.png' },
  { id: 21, name: 'Next.js', icon: '/Group 1000002151.png' },
  { id: 22, name: 'Material UI', icon: '/Group 1000002163.png' },
  { id: 23, name: 'Bootstrap', icon: '/Group 1000002201.png' },
  { id: 24, name: 'NestJS', icon: '/Group 1000002178.png' },
  { id: 25, name: 'Adobe XD', icon: '/Group 1000002141.png' },
  { id: 26, name: 'Lightroom', icon: '/adobe-lightroom 1.png' },
  { id: 27, name: 'GraphQL', icon: '/Group 1000002158.png' },
  { id: 28, name: 'MongoDB', icon: 'mongo-db 1.png' },
  { id: 29, name: 'Flutter', icon: 'flutter 3.png' },
  { id: 30, name: 'Tailwind CSS', icon: 'tailwind 1.png' },
  { id: 31, name: 'Angular', icon: 'angularjs 1.png' },
  { id: 32, name: 'Node.js', icon: 'nodejs 2.png' },
  { id: 33, name: 'InDesign', icon: 'adobe-indesign 1.png' },
  { id: 34, name: 'Sass', icon: 'sass 1.png' },
  { id: 35, name: 'Vue.js', icon: 'vue 1.png' },
  { id: 36, name: 'Adobe After Effects', icon: 'adobe-after-effects 1.png' },
  { id: 37, name: 'Adobe Premier', icon: 'adobe-premier 1.png' },
  { id: 38, name: 'Adobe Creative Cloud', icon: 'adobe-creative-cloud 1.png' },
];
 
const design = [
  { id: 1, name: 'Figma', icon: '/figma (1) 1.png' },
  { id: 4, name: 'Figma', icon: '/Group 1000002204.png' },
  { id: 14, name: 'Adobe Photoshop', icon: '/adobe-photoshop 1.png' },
  { id: 19, name: 'Illustrator', icon: '/Group 1000002203.png' },
  { id: 25, name: 'Adobe XD', icon: '/Group 1000002141.png' },
  { id: 26, name: 'Lightroom', icon: '/adobe-lightroom 1.png' },
  { id: 33, name: 'InDesign', icon: 'adobe-indesign 1.png' },
  { id: 36, name: 'Adobe After Effects', icon: 'adobe-after-effects 1.png' },
  { id: 37, name: 'Adobe Premier', icon: 'adobe-premier 1.png' },
  { id: 38, name: 'Adobe Creative Cloud', icon: 'adobe-creative-cloud 1.png' },
];
 
const frontEnd = [
  { id: 2, name: 'JavaScript', icon: '/javascript 1.png' },
  { id: 11, name: 'TypeScript', icon: '/Group 1000002172.png' },
  { id: 15, name: 'React', icon: '/react 1.png' },
  { id: 17, name: 'Redux', icon: '/Group 1000002205.png' },
  { id: 21, name: 'Next.js', icon: '/Group 1000002151.png' },
  { id: 22, name: 'Material UI', icon: '/Group 1000002163.png' },
  { id: 23, name: 'Bootstrap', icon: '/Group 1000002201.png' },
  { id: 30, name: 'Tailwind CSS', icon: 'tailwind 1.png' },
  { id: 31, name: 'Angular', icon: 'angularjs 1.png' },
  { id: 35, name: 'Vue.js', icon: 'vue 1.png' },
  { id: 34, name: 'Sass', icon: 'sass 1.png' },
];
 
const backEnd = [
  { id: 3, name: 'PHP', icon: '/php 2.png' },
  { id: 6, name: 'SQL', icon: '/sql 1.png' },
  { id: 10, name: 'Python', icon: '/python 2.png' },
  { id: 12, name: 'Laravel', icon: '/Group 1000002140.png' },
  { id: 18, name: 'Express', icon: '/Group 1000002177.png' },
  { id: 20, name: 'Swift', icon: '/swift 1.png' },
  { id: 24, name: 'NestJS', icon: '/Group 1000002178.png' },
  { id: 29, name: 'Flutter', icon: 'flutter 3.png' },
  { id: 32, name: 'Node.js', icon: 'nodejs 2.png' },
  { id: 7, name: 'Kotlin', icon: '/kotlin 1.png' },
];
 
const database = [
  { id: 6, name: 'SQL', icon: '/sql 1.png' },
  { id: 28, name: 'MongoDB', icon: 'mongo-db 1.png' },
  { id: 27, name: 'GraphQL', icon: '/Group 1000002158.png' },
];


const TechIconsGrid = () => {
  const [tab, setTab] = useState('Design Approach');
  return (
    <div className="px-[150px] flex flex-col gap-6">
      <div className="flex items-center gap-10">
        {tabs.map((item) => (
          <div
            className={`border !border-primary text-secondary px-6 py-1.5 rounded-4xl cursor-pointer ${
              tab === item.title ? 'bg-primary text-white' : ''
            }`}
            onClick={() => setTab(item.title)}
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
      {tab === 'Design Approach' && (
        <div className="flex flex-wrap items-center gap-8">
          {design.map(({ id, name, icon }) => (
            <div
              key={id}
              className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-120 transition-transform px-5 py-5"
            >
              <img src={icon} alt={name} className="w-10 h-10 mb-1" />
            </div>
          ))}
        </div>
      )}
      {tab === 'Front-End Approach' && (
        <div className="flex flex-wrap items-center gap-8">
          {frontEnd.map(({ id, name, icon }) => (
            <div
              key={id}
              className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-120 transition-transform px-5 py-5"
            >
              <img src={icon} alt={name} className="w-10 h-10 mb-1" />
            </div>
          ))}
        </div>
      )}
      {tab === 'Back-End Approach' && (
        <div className="flex flex-wrap items-center gap-8">
          {design.map(({ id, name, icon }) => (
            <div
              key={id}
              className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-120 transition-transform px-5 py-5"
            >
              <img src={icon} alt={name} className="w-10 h-10 mb-1" />
            </div>
          ))}
        </div>
      )}
      {tab === 'Database Approach' && (
        <div className="flex flex-wrap items-center gap-8">
          {database.map(({ id, name, icon }) => (
            <div
              key={id}
              className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-120 transition-transform px-5 py-5"
            >
              <img src={icon} alt={name} className="w-10 h-10 mb-1" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechIconsGrid;
