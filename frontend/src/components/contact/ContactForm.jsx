import React from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

function ContactForm() {
  return (
    <form className="w-full grid grid-cols-2 gap-6 p-6">
      <div>
        <Input
          type="text"
          className="border bg-white"
          label={'Project Name'}
          placeholder="Enter Your Project Name"
        />
      </div>
      <div>
        <Input
          placeholder="Your Email or Number"
          className="border bg-white"
          label={'Your Contact Email or Phone'}
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <label className="font-medium text-base">Project Description</label>
        <textarea
          className="bg-white border rounded-md px-4 py-3"
          placeholder="Enter Project Description"
          rows={6}
        ></textarea>
      </div>
      <div className="col-span-2 flex justify-center">
        <Button text={'Send Message'} />
      </div>
    </form>
  );
}

export default ContactForm;
