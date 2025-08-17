import React from 'react';

const data = [
  {
    id: 1,
    title: 'Vision',
    desc: 'Our vision is to foster practical skills and a passion for technology and innovation in Pakistan, focusing on cybersecurity, blockchain, and other emerging fields. We envision a collaborative environment where students are inspired, equipped, and motivated to pioneer future innovations. Our ultimate goal is to transform Pakistan into a technology hub that drives positive change and enhances the quality of life for all.',
  },
  {
    id: 2,
    title: 'Mission',
    desc: 'Tech Hierarchy empowers Pakistani youth with essential tech skills for careers in blockchain, cybersecurity and other emerging fields. Through interactive webinars, immersive courses, and specialized bootCamps, we bridge the gap between academia and industry, cultivating a diverse community of tech enthusiasts. Our focus on continuous learning, collaboration, and financial independence equips students to excel in the digital age.',
  },
  {
    id: 3,
    title: 'Values',
    desc: ' Setting high standards and consistently pushing boundaries to achieve excellence. Prioritizing the cultivation of trust, respect, and collaborative relationships to foster a strong sense of community. Embracing calculated risks to drive innovation and propel progress forward. Adopting an ownership mentality by taking accountability for our actions and actively seeking ways to positively contribute to the community.',
  },
];

function AboutCards() {
  return (
    <div>
      <section className="flex flex-col gap-10 px-[150px]">
        <h2 className="text-center text-4xl font-semibold">We Are TechTri</h2>
        <div className="grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div className="bg-white border rounded-2xl p-6 flex flex-col gap-3" key={item.id}>
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutCards;
