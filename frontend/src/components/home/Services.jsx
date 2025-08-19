import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiMonitor, FiCode, FiFileText, FiEdit } from "react-icons/fi";

const data = [
  {
    id: "1",
    icon: <FiMonitor size={30} className="text-primary" />,
    title: "UI/UX Design",
    subTitle1: "User Interface Design",
    desc1:
      "Crafting intuitive and visually appealing interfaces for enhanced user engagement.",
    subTitle2: "User Experience Optimization",
    desc2:
      "Enhancing usability and accessibility to provide a superior user experience.",
  },
  {
    id: "3",
    icon: <FiCode size={30} className="text-primary" />,
    title: "Web Development",
    subTitle1: "Website Design & Development",
    desc1:
      "Designing responsive and engaging websites that reflect your brand and captivate your audience.",
    subTitle2: "Web Applications",
    desc2:
      "Developing custom web applications tailored to your specific business needs.",
  },
  {
    id: "5",
    icon: <FiFileText size={30} className="text-primary" />,
    title: "WordPress Development",
    subTitle1: "Custom WordPress Websites",
    desc1:
      "Designing dynamic, scalable, and easy-to-manage websites tailored to your brand and business goals.",
    subTitle2: "Scalable & Flexible Solutions",
    desc2:
      "Delivering customized WordPress development that grows with your business and adapts to your evolving needs.",
  },
  {
    id: "7",
    icon: <FiEdit size={30} className="text-primary" />,
    title: "Content Writing",
    subTitle1: "Creative & Impactful Content",
    desc1:
      "Crafting clear, engaging, and persuasive content that aligns with your brand voice and goals.",
    subTitle2: "Content That Converts",
    desc2:
      "Delivering high-quality writing that resonates with your audience and inspires them to take action.",
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-[150px]">
      <div className="flex flex-col gap-6 items-center">
        {/* Cards */}
        <div className="grid gap-6 w-full">
          {/* Mobile/Tablet → Vertical stack */}
          <div className="flex flex-col gap-6 lg:hidden">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl flex flex-col gap-5 bg-white border shadow-md"
              >
                <div className="flex flex-col gap-3 items-center">
                  {item.icon}
                  <h1 className="font-semibold text-lg text-text-dark text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-sm font-medium text-[#2B2B2B]">
                      {item.subTitle1}
                    </p>
                    <span className="text-xs text-text-secondary">
                      {item.desc1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2B2B2B]">
                      {item.subTitle2}
                    </p>
                    <span className="text-xs text-text-secondary">
                      {item.desc2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large screen → Scrollable row with buttons */}
          <div
            ref={scrollRef}
            className="hidden lg:flex py-2 gap-8 overflow-hidden"
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] p-6 rounded-2xl flex flex-col gap-5 bg-white border shadow-md"
              >
                <div className="flex flex-col gap-3 items-center">
                  {item.icon}
                  <h1 className="w-[270px] font-semibold text-lg lg:text-xl text-text-dark text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">
                      {item.subTitle1}
                    </p>
                    <span className="text-xs lg:text-sm text-text-secondary">
                      {item.desc1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">
                      {item.subTitle2}
                    </p>
                    <span className="text-xs lg:text-sm text-text-secondary">
                      {item.desc2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows only for large screens */}
        <div className="hidden lg:flex gap-4 items-center">
          <button
            onClick={() => scroll(-680)}
            className="cursor-pointer [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] 
              px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-[#ECEDF1]"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scroll(680)}
            className="cursor-pointer [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] 
              px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-[#ECEDF1]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
