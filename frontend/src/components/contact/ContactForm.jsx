import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import toast from "react-hot-toast";

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const contactInfo = formData.get("contactinfo");
    const description = formData.get("description");

    console.log({ name, contactInfo, description }); // Debug

    const response = await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, contactInfo, description }),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form
      className="relative z-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          type="text"
          name="name"
          className="border bg-white"
          label="Project Name"
          placeholder="Enter Your Project Name"
        />
      </div>
      <div>
        <Input
          type="text"
          name="contactinfo"
          className="border bg-white"
          label="Your Contact Email or Phone"
          placeholder="Your Email or Number"
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label htmlFor="description" className="font-medium text-base">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          className="bg-white border rounded-md px-4 py-3"
          placeholder="Enter Project Description"
          rows={6}
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <Button type="submit" text="Send Message" />
      </div>
    </form>
  );
}

export default ContactForm;
