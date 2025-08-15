import React from 'react';

const techIcons = [
  { id: 1, name: 'Figma', icon: '/figma (1) 1.png' },
  { id: 2, name: 'JavaScript', icon: '/javascript 1.png' },
  { id: 3, name: 'PHP', icon: '/php 2.png' },
  { id: 4, name: 'Figma', icon: '/Group 1000002204.png' },
  { id: 5, name: 'JavaScript', icon: '/Group 1000002175.png' },
  { id: 6, name: 'PHP', icon: '/sql 1.png' },
  { id: 7, name: 'Figma', icon: '/kotlin 1.png' },
  { id: 8, name: 'JavaScript', icon: '/capcut 1.png' },
  { id: 9, name: 'PHP', icon: '/Group 1000002161.png' },
  { id: 10, name: 'Figma', icon: '/python 2.png' },
  { id: 11, name: 'JavaScript', icon: '/Group 1000002172.png' },
  { id: 12, name: 'PHP', icon: '/Group 1000002140.png' },
  { id: 13, name: 'Figma', icon: '/Group 1000002168.png' },
  { id: 14, name: 'JavaScript', icon: '/adobe-photoshop 1.png' },
  { id: 15, name: 'PHP', icon: '/react 1.png' },
  { id: 16, name: 'Figma', icon: '/Group 1000002200.png' },
  { id: 17, name: 'JavaScript', icon: '/Group 1000002205.png' },
  { id: 18, name: 'PHP', icon: '/Group 1000002177.png' },
  { id: 19, name: 'Figma', icon: '/Group 1000002203.png' },
  { id: 20, name: 'JavaScript', icon: '/swift 1.png' },
  { id: 21, name: 'PHP', icon: '/Group 1000002151.png' },
  { id: 22, name: 'Figma', icon: '/Group 1000002163.png' },
  { id: 23, name: 'JavaScript', icon: '/Group 1000002201.png' },
  { id: 24, name: 'PHP', icon: '/Group 1000002178.png' },
  { id: 25, name: 'Figma', icon: '/Group 1000002141.png' },
  { id: 26, name: 'JavaScript', icon: '/adobe-lightroom 1.png' },
  { id: 27, name: 'PHP', icon: '/Group 1000002158.png' },
  { id: 28, name: 'Figma', icon: 'Group 1000002198.png' },
  { id: 29, name: 'JavaScript', icon: 'Group 1000002206.png' },
  { id: 30, name: 'PHP', icon: 'Group 1000002174.png' },
  { id: 31, name: 'Figma', icon: 'mongo-db 1.png' },
  { id: 32, name: 'JavaScript', icon: 'flutter 3.png' },
  { id: 33, name: 'PHP', icon: 'adobe-lightroom 1.png' },
  { id: 34, name: 'Figma', icon: 'tailwind 1.png' },
  { id: 35, name: 'JavaScript', icon: 'Group 1000002202.png' },
  { id: 36, name: 'PHP', icon: 'canva 1.png' },
  { id: 37, name: 'Figma', icon: 'adobe-illustrator 1.png' },
  { id: 38, name: 'JavaScript', icon: 'angularjs 1.png' },
  { id: 39, name: 'PHP', icon: 'nodejs 2.png' },
  { id: 40, name: 'Figma', icon: 'Group 1000002207.png' },
  { id: 41, name: 'JavaScript', icon: 'Group 1000002176.png' },
  { id: 42, name: 'PHP', icon: 'Group 1000002173.png' },
  { id: 43, name: 'Figma', icon: 'adobe-indesign 1.png' },
  { id: 44, name: 'JavaScript', icon: 'Group 1000002165.png' },
  { id: 45, name: 'PHP', icon: 'adobe-after-effects 1.png' },
  { id: 46, name: 'Figma', icon: 'adobe-xd 1.png' },
  { id: 47, name: 'JavaScript', icon: 'vue 1.png' },
  { id: 48, name: 'PHP', icon: 'nestjs 2.png' },
  { id: 49, name: 'Figma', icon: 'Group 1000002179.png' },
  { id: 50, name: 'JavaScript', icon: 'adobe-premier 1.png' },
  { id: 51, name: 'PHP', icon: 'sass 1.png' },
  { id: 52, name: 'Figma', icon: 'adobe-creative-cloud 1.png' },
];

const TechIconsGrid = () => {
  return (
    <div className="py-10 px-[150px]">
      <div className="flex flex-wrap gap-8 justify-center">
        {techIcons.map(({ id, name, icon }) => (
          <div
            key={id}
            style={{
              boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
            }}
            className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-120 transition-transform px-5 py-5"
          >
            <img src={icon} alt={name} className="w-10 h-10 mb-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsGrid;
