import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

function OurStory() {
  return (
    <div className="grid grid-cols-12 px-[150px] pb-5 gap-5">
      <div className="col-span-12 lg:col-span-3 group w-full h-83 [perspective:1000px]">
        <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 rounded-lg border">
          <div className="flex w-full items-center justify-between">
            <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
              <img
                className="w-full rounded-full h-full object-cover"
                src="/IMG_0825 1.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center w-[50px] h-[50px]">
              <img className="w-full h-full object-cover" src="/pngwing.com (3) 1.png" alt="" />
            </div>
          </div>
          <p>Hammas Munir</p>
          <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
            <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
            <p>Front-End Developer</p> |<p>WordPress Expert</p>
          </div>
          <p className="text-xs text-[#454545]">
            I lead teams to create impactful, user-focused digital products using UI/UX design,
            front-end development, and WordPress. #ui/ux #front-end #wordpress #
            <span className="text-[#337BFF]">certificate!</span>
          </p>
          <div className="flex justify-end">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <GoArrowUpRight size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3 group w-full h-83 [perspective:1000px]">
        <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 rounded-lg border">
          <div className="flex w-full items-center justify-between">
            <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
              <img
                className="w-full rounded-full h-full object-cover"
                src="IMG_0825 1.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center w-[50px] h-[50px]">
              <img className="w-full h-full object-cover" src="/Mask group.png" alt="" />
            </div>
          </div>
          <p>Hammas Munir</p>
          <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
            <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
          </div>
          <div className="w-full h-[120px]">
            <img className="w-full h-full object-cover" src="/image 24979.png" alt="" />
          </div>
          <div className="flex justify-end">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <GoArrowUpRight size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="group bg-white transition duration-300 ease-in-out col-span-6 border shadow rounded-2xl p-6 flex flex-col justify-between">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="text-[#555555E5] text-md">
          I hold a Bachelor's degree in design and bring over 5 years of experience in creating
          impactful digital products. My journey began in graphic design, but my passion for solving
          user problems led me into product and user experience design.
        </p>
        <p className="text-[#555555E5] text-md">
          Throughout my career, I’ve worked with multiple software houses and start-ups,
          collaborating with cross-functional teams and mentors. I've successfully delivered 50+
          projects, helping businesses turn ideas into user-friendly, functional solutions.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
