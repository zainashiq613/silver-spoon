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
      <div className="grid grid-cols-12 px-[150px] pb-5 gap-y-10 gap-x-6">
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">
            Have an Awsome Project <br /> Idea?{" "}
            <span className="text-primary">Let’s Discuss</span>
          </h1>
          <div>
            <Button
              onClick={() => setContactModal(true)}
              cn={"cursor-pointer"}
              text={"Send Message"}
            />
          </div>
        </div>

        {/* 🔹 Replace Fiverr Card with TechTri Card */}
        {/* <div className="col-span-12 lg:col-span-3 h-60 relative bg-white border shadow rounded-2xl overflow-hidden group p-5 flex flex-col justify-between"> */}
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
              <p>Frontend</p> | <p>Backend</p> | <p>Laravel</p>|{" "}
              <p>Google App Script</p> | <p>MERN</p>
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

        {/* Image + Why Hire Us Content */}
        <div className="col-span-12 lg:col-span-5">
          <img className="w-full h-full" src="/pic (1).png" alt="" />
        </div>
        <div className="col-span-12 lg:col-span-7 p-9 flex flex-col gap-5">
          <h3 className="text-5xl font-semibold">
            Why <span className="text-primary">Hire Us</span> ?
          </h3>
          <p className="text-[#555555E5] text-md">
            At TechTri, we specialize in building powerful and reliable digital
            solutions with expertise in Frontend, Backend, Laravel, MERN Stack,
            WordPress, and Google Apps Script. Our mission is to craft scalable,
            secure, and user-friendly applications that help businesses grow,
            streamline operations, and strengthen their online presence in
            today’s fast-paced digital world.
          </p>

          <div>
            <Link to={"/contact"}>
              <Button
                text={"Hire Now"}
                position={"right"}
                icon={<GoArrowUpRight size={25} />}
              />
            </Link>
          </div>
        </div>
      </div>

      {contactModal && (
        <Modal
          title={"Send Us a Message"}
          width={"w-full md:w-[702px]"}
          onClose={() => setContactModal(false)}
        >
          <ContactForm />
        </Modal>
      )}
    </>
  );
}

export default WhyHireUs;
