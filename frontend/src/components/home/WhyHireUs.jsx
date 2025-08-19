import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import ContactForm from "../contact/ContactForm";
import { Link } from "react-router-dom";

function WhyHireUs() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 sm:px-8 md:px-12 lg:px-[150px] pb-10 gap-y-10 gap-x-6">
        {/* Left: Heading + Button */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            Have an Awesome Project <br className="hidden sm:block" /> Idea?{" "}
            <span className="text-primary">Let’s Discuss</span>
          </h1>
          <div className="flex justify-center lg:justify-start">
            <Button
              onClick={() => setContactModal(true)}
              cn="cursor-pointer"
              text="Send Message"
            />
          </div>
        </div>

        {/* TechTri Card */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="p-5 w-full h-full bg-white flex flex-col gap-3 rounded-xl border shadow hover:shadow-lg hover:-translate-y-1 transition">
            <div className="flex w-full items-center justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
                <img
                  src="/TechTri.jpg"
                  alt="TechTri Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-primary font-semibold text-base sm:text-lg">
                TechTri
              </div>
            </div>
            <p className="font-semibold text-lg">TechTri</p>
            <div className="flex gap-1 items-center text-xs sm:text-sm text-[#A4A4A4] flex-wrap">
              <p>Frontend</p> | <p>Backend</p> | <p>Laravel</p> |{" "}
              <p>Google App Script</p> | <p>MERN</p>
            </div>
            <p className="text-sm sm:text-base text-[#454545] flex-grow">
              Building modern, scalable, and user-focused digital solutions that
              empower businesses to grow.
            </p>
            <p className="text-xs sm:text-sm text-primary mt-1 font-medium">
              Think. Build. Innovate.
            </p>
            <div className="flex justify-end mt-auto">
              <a
                href="https://www.linkedin.com/in/tech-tri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-primary/90 transition"
              >
                <GoArrowUpRight size={22} className="sm:size-25" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image + Content */}
        <div className="col-span-12 lg:col-span-5">
          <img
            className="w-full h-auto rounded-lg object-cover shadow-md"
            src="/pic (1).png"
            alt="Why Hire Us"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 p-4 sm:p-6 md:p-9 flex flex-col gap-5 text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Why <span className="text-primary">Hire Us</span> ?
          </h3>
          <p className="text-[#555555E5] text-sm sm:text-base md:text-lg leading-relaxed">
            At TechTri, we specialize in building powerful and reliable digital
            solutions with expertise in Frontend, Backend, Laravel, MERN Stack,
            WordPress, and Google Apps Script. Our mission is to craft scalable,
            secure, and user-friendly applications that help businesses grow,
            streamline operations, and strengthen their online presence in
            today’s fast-paced digital world.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link to="/contact">
              <Button
                text="Hire Now"
                position="right"
                icon={<GoArrowUpRight size={22} />}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {contactModal && (
        <Modal
          title="Send Us a Message"
          width="w-full md:w-[702px]"
          onClose={() => setContactModal(false)}
        >
          <ContactForm />
        </Modal>
      )}
    </>
  );
}

export default WhyHireUs;
