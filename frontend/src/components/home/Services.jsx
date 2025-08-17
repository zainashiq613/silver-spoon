import React, { useEffect, useRef, useState } from 'react';
// import Button from '../small/Button';
// import UiUx from '../../assets/svgs/UiUx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Software from '../../assets/svgs/Software';
// import Web from '../../assets/svgs/Web';
// import Mobile from '../../assets/svgs/Mobile';
// import WordPress from '../../assets/svgs/WordPress';
// import SEO from '../../assets/svgs/SEO';
// import Content from '../../assets/svgs/Content';
// import Graphic from '../../assets/svgs/Graphic';

const data = [
  {
    id: '1',
    icon: '',
    title: 'UI/UX Design',
    subTitle1: 'User Interface Design',
    desc1: 'Crafting intuitive and visually appealing interfaces for enhanced user engagement.',
    subTitle2: 'User Experience Optimization',
    desc2: 'Enhancing usability and accessibility to provide a superior user experience.',
  },
  {
    id: '2',
    icon: '',
    title: 'Software Development',
    subTitle1: 'Medical Desktop Applications',
    desc1:
      'Development of advanced medical software to enhance patient care and streamline healthcare operations.',
    subTitle2: 'Enterprise Software Solutions',
    desc2:
      'Crafting customized desktop applications to optimize your business processes and productivity.',
  },
  {
    id: '3',
    icon: '',
    title: 'Web Development',
    subTitle1: 'Website Design & Development',
    desc1:
      'Designing responsive and engaging websites that reflect your brand and captivate your audience.',
    subTitle2: 'Web Applications',
    desc2: 'Developing custom web applications tailored to your specific business needs.',
  },
  {
    id: '4',
    icon: '',
    title: 'Mobile Development',
    subTitle1: 'iOS and Android Apps',
    desc1:
      'Building seamless, user-friendly, and feature-rich mobile apps tailored for both iOS and Android platforms.',
    subTitle2: 'Cross-Platform Apps',
    desc2:
      'Creating high-performance apps that ensure a unified and consistent user experience across all major mobile platforms.',
  },
  {
    id: '5',
    icon: '',
    title: 'WordPress Development',
    subTitle1: 'Custom WordPress Websites',
    desc1:
      'Designing dynamic, scalable, and easy-to-manage websites tailored to your brand and business goals.',
    subTitle2: 'Scalable & Flexible Solutions',
    desc2:
      'Delivering customized WordPress development that grows with your business and adapts to your evolving needs.',
  },
  {
    id: '6',
    icon: '',
    title: 'SEO Optimization',
    subTitle1: 'On-Page & Technical SEO',
    desc1:
      'Optimizing website structure, content, and performance to improve search engine rankings and user experience.',
    subTitle2: 'Targeted Visibility',
    desc2:
      'Implementing SEO strategies that drive organic traffic and connect your brand with the right audience.',
  },
  {
    id: '7',
    icon: '',
    title: 'Content Writing',
    subTitle1: 'Creative & Impactful Content',
    desc1:
      'Crafting clear, engaging, and persuasive content that aligns with your brand voice and goals.',
    subTitle2: 'Content That Converts',
    desc2:
      'Delivering high-quality writing that resonates with your audience and inspires them to take action.',
  },
  {
    id: '8',
    icon: '',
    title: 'Graphic Designing',
    subTitle1: 'Creative Visual Design',
    desc1:
      'Designing eye-catching graphics that reflect your brand and leave a lasting impression.',
    subTitle2: 'Effective Communication',
    desc2:
      'Creating visuals that not only look great but also clearly deliver your message to your audience.',
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-[150px]">
      <div className="flex flex-col gap-3 items-center">
        {/* <Button text={'Book a 15-min call'} /> */}
        <div className="grid gap-8 w-full overflow-hidden">
          <div ref={scrollRef} className="flex py-2 rounded-2xl gap-8 overflow-hidden">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl flex flex-col gap-5 bg-white border shadow-md"
              >
                <div className="flex flex-col gap-3 items-center">
                  {item.icon}
                  <h1 className="w-[330px] md:w-[275px] lg:w-[280px] font-semibold text-lg lg:text-xl text-text-dark text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">
                      {item.subTitle1}
                    </p>
                    <span className="text-xs lg:text-sm text-text-secondary">{item.desc1}</span>
                  </div>
                  <div>
                    <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">
                      {item.subTitle2}
                    </p>
                    <span className="text-xs lg:text-sm text-text-secondary">{item.desc2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => scroll(-410)}
            className={`cursor-pointer [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-[#ECEDF1]`}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scroll(410)}
            className={`cursor-pointer [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-[#ECEDF1]`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
