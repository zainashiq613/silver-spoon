import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdDownloadForOffline } from 'react-icons/md';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import ContactForm from '../contact/ContactForm';

function WhyHireUs() {
  const [contactModal, setContactModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-12 px-[150px] pb-5 gap-y-10 gap-x-6">
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">
            Have an Awsome Project <br /> Idea? <span className="text-primary">Let’s Discuss</span>
          </h1>
          <div>
            <Button
              onClick={() => setContactModal(true)}
              cn={'cursor-pointer'}
              text={'Send Message'}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 h-60 relative bg-white border shadow rounded-2xl overflow-hidden group">
          <div className="pt-6 flex gap-6 flex-col items-center">
            <h1 className="text-3xl text-center font-bold">Fiver</h1>
            <div className="w-[200px]">
              <img className="w-full h-full" src="/173784 1.png" alt="" />
            </div>
          </div>
          <div
            className="absolute inset-0 bg-white flex flex-col gap-3 items-center text-lg font-semibold 
              opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500 ease-in-out rounded-2xl py-5"
          >
            <p className="text-dark-text text-2xl">Hammas’s Resume</p>
            <p className="text-xl text-secondary-text">Product Design</p>
            <span>
              <MdDownloadForOffline fill="#4FBDD2" size={65} />
            </span>
            <span className="text-xl text-[#0077FF] underline cursor-pointer font-medium">
              View
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <img className="w-full h-full" src="/pic (1).png" alt="" />
        </div>
        <div className="col-span-12 lg:col-span-7 p-9 flex flex-col gap-5">
          <h3 className="text-5xl font-semibold">
            Why <span className="text-primary">Hire Us</span> ?
          </h3>
          <p className="text-[#555555E5] text-md">
            With over 5 years of experience in UI/UX and product design, I bring creative thinking
            and strategic execution to every project. I focus on building user-centric,
            aesthetically pleasing, and high-performing designs that help businesses grow and stand
            out.
          </p>
          {/* <div className="flex gap-3">
            <div>
              <p className="text-3xl font-bold">250+</p>
              <span className="text-sky-900 text-md">Project Completed</span>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <span className="text-sky-900 text-md">Satisfied Clients</span>
            </div>
          </div> */}
          <div>
            <Button text={'Hire Now'} position={'right'} icon={<GoArrowUpRight size={25} />} />
          </div>
        </div>
      </div>
      {contactModal && (
        <Modal
          title={'Send Us a Message'}
          width={'w-full md:w-[702px]'}
          onClose={() => setContactModal(false)}
        >
          <ContactForm />
        </Modal>
      )}
    </>
  );
}

export default WhyHireUs;
