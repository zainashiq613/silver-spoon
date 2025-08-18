import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function OurStory() {
  return (
    <div className="grid grid-cols-12 px-6 md:px-12 lg:px-[150px] pb-5 gap-5">
      {/* 🔹 Card 1 */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 group">
        <div
          className="p-4 w-full h-full bg-white flex flex-col gap-2 rounded-lg border shadow 
                        hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="flex w-full items-center justify-between">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
              <img
                src="/TechTri.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center justify-center text-primary font-semibold">
              TechTri
            </div>
          </div>
          <p className="font-semibold text-lg">TechTri</p>
          <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
            <p>Frontend</p> | <p>Backend</p> | <p>Laravel</p>
          </div>
          <p className="text-sm text-[#454545] flex-grow">
            Building modern, scalable, and user-focused digital solutions that
            empower businesses to grow.
          </p>
          <p className="text-xs text-primary mt-1 font-medium">
            Think. Build. Innovate.
          </p>
          <div className="flex justify-end mt-auto">
            <a
              href="https://www.linkedin.com/in/tech-tri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary/90 transition"
            >
              <GoArrowUpRight size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Card 2 */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 group">
        <div
          className="p-4 w-full h-full bg-white flex flex-col gap-2 rounded-lg border shadow 
                        hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="flex w-full items-center justify-between">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
              <img
                src="/TechTri.jpg"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center justify-center text-primary font-semibold">
              TechTri
            </div>
          </div>
          <p className="font-semibold text-lg">TechTri</p>
          <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
            <p>MERN</p> | <p>WordPress</p> | <p>Google App Script</p>
          </div>
          <p className="text-sm text-[#454545] flex-grow">
            Delivering full-stack development and automation solutions with
            cutting-edge technologies.
          </p>
          <p className="text-xs text-primary mt-1 font-medium">
            Your Tech Partner in Growth
          </p>
          <div className="flex justify-end mt-auto">
            <a
              href="https://www.linkedin.com/in/tech-tri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary/90 transition"
            >
              <GoArrowUpRight size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Our Story */}
      <div className="col-span-12 lg:col-span-6 group bg-white transition duration-300 ease-in-out border shadow rounded-2xl p-6 flex flex-col justify-between">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="text-[#555555E5] text-md mt-2">
          At TechTri, we specialize in building complete digital solutions —
          from modern frontend interfaces to powerful backend systems. With
          expertise in Laravel, MERN stack, WordPress, and Google App Script, we
          deliver scalable applications that help businesses stay ahead.
        </p>
        <p className="text-[#555555E5] text-md mt-2">
          Our focus is simple: create reliable, efficient, and user-friendly
          products that make an impact. Whether it’s a startup idea or
          enterprise system, TechTri is committed to turning vision into
          reality.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
