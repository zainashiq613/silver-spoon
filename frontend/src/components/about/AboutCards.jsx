import React from 'react';

const data = [
  {
    id: 1,
    title: "Vision",
    desc: "At TechTri, our vision is to become a leading digital solutions provider, empowering businesses with innovative, scalable, and user-focused technologies. We aspire to transform ideas into impactful digital experiences by leveraging modern frontend frameworks, robust backend systems, and smart automation. Our ultimate vision is to drive growth and innovation, making TechTri a trusted partner for businesses worldwide.",
  },
  {
    id: 2,
    title: "Mission",
    desc: "Our mission is to deliver reliable, efficient, and cutting-edge solutions using Laravel, MERN stack, WordPress, and Google App Script. We strive to bridge the gap between business challenges and technology by creating tailored digital products that help organizations grow. At TechTri, we are committed to building solutions that are not only technically strong but also user-friendly, future-ready, and impactful.",
  },
  {
    id: 3,
    title: "Values",
    desc: "Innovation at the core — we embrace creativity and new ideas to build future-ready solutions. Commitment to quality — ensuring excellence in every project we deliver. Collaboration — working closely with our clients as partners to achieve success. Adaptability — staying ahead with evolving technologies like MERN, Laravel, and automation tools. Integrity — building trust through transparency, reliability, and accountability in everything we do.",
  },
];

function AboutCards() {
  return (
    <div>
      <section className="flex flex-col gap-10 px-[150px]">
        <h2 className="text-center text-primary text-4xl font-semibold">We Are TechTri</h2>
        <div className="grid grid-cols-3 gap-6">
          {data.map((item) => (
            <div className="bg-white border rounded-2xl p-6 flex flex-col gap-3" key={item.id}>
              <h3 className="text-2xl text-text-primary font-medium">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutCards;
