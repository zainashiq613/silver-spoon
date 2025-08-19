import React, { useState } from "react";

const tabs = [
  { id: 1, title: "Design Approach" },
  { id: 2, title: "Front-End Approach" },
  { id: 3, title: "Back-End Approach" },
  { id: 4, title: "Database Approach" },
];

// --- Tab data ---
const design = [
  { id: 1, name: "Figma", icon: "/figma (1) 1.png" },
  { id: 4, name: "Figma", icon: "/Group 1000002204.png" },
  { id: 14, name: "Adobe Photoshop", icon: "/adobe-photoshop 1.png" },
  { id: 19, name: "Illustrator", icon: "/Group 1000002203.png" },
  { id: 25, name: "Adobe XD", icon: "/Group 1000002141.png" },
  { id: 26, name: "Lightroom", icon: "/adobe-lightroom 1.png" },
  { id: 33, name: "InDesign", icon: "adobe-indesign 1.png" },
  { id: 36, name: "Adobe After Effects", icon: "adobe-after-effects 1.png" },
  { id: 37, name: "Adobe Premier", icon: "adobe-premier 1.png" },
  { id: 38, name: "Adobe Creative Cloud", icon: "adobe-creative-cloud 1.png" },
];

const frontEnd = [
  { id: 2, name: "JavaScript", icon: "/javascript 1.png" },
  { id: 11, name: "TypeScript", icon: "/Group 1000002172.png" },
  { id: 15, name: "React", icon: "/react 1.png" },
  { id: 17, name: "Redux", icon: "/Group 1000002205.png" },
  { id: 21, name: "Next.js", icon: "/Group 1000002151.png" },
  { id: 22, name: "Material UI", icon: "/Group 1000002163.png" },
  { id: 23, name: "Bootstrap", icon: "/Group 1000002201.png" },
  { id: 30, name: "Tailwind CSS", icon: "tailwind 1.png" },
  { id: 31, name: "Angular", icon: "angularjs 1.png" },
  { id: 35, name: "Vue.js", icon: "vue 1.png" },
  { id: 34, name: "Sass", icon: "sass 1.png" },
];

const backEnd = [
  { id: 3, name: "PHP", icon: "/php 2.png" },
  { id: 6, name: "SQL", icon: "/sql 1.png" },
  { id: 10, name: "Python", icon: "/python 2.png" },
  { id: 12, name: "Laravel", icon: "/Group 1000002140.png" },
  { id: 18, name: "Express", icon: "/Group 1000002177.png" },
  { id: 20, name: "Swift", icon: "/swift 1.png" },
  { id: 24, name: "NestJS", icon: "/Group 1000002178.png" },
  { id: 29, name: "Flutter", icon: "flutter 3.png" },
  { id: 32, name: "Node.js", icon: "nodejs 2.png" },
  { id: 7, name: "Kotlin", icon: "/kotlin 1.png" },
];

const database = [
  { id: 6, name: "SQL", icon: "/sql 1.png" },
  { id: 28, name: "MongoDB", icon: "mongo-db 1.png" },
  { id: 27, name: "GraphQL", icon: "/Group 1000002158.png" },
];

const TechIconsGrid = () => {
  const [tab, setTab] = useState("Design Approach");

  // helper to pick data
  const getData = () => {
    if (tab === "Design Approach") return design;
    if (tab === "Front-End Approach") return frontEnd;
    if (tab === "Back-End Approach") return backEnd;
    if (tab === "Database Approach") return database;
    return [];
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-8 lg:gap-10 justify-center lg:justify-start">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.title)}
            className={`px-4 sm:px-6 py-1.5 rounded-3xl border border-primary text-sm sm:text-base 
              transition-all duration-300 ${
                tab === item.title
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-primary/10"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Icons grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center gap-6 sm:gap-8 mt-4">
        {getData().map(({ id, name, icon }) => (
          <div
            key={id}
            className="bg-[#ECEDF1] cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-110 transition-transform px-5 py-5"
          >
            <img
              src={icon}
              alt={name}
              className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
            />
            <p className="text-xs sm:text-sm text-center mt-1">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsGrid;
