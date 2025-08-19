import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import { Link, useLocation } from "react-router";
import Button from "../../components/shared/Button";
import { toast } from "react-hot-toast";

const pages = [
  { id: 1, title: "Home", link: ["/"] },
  { id: 2, title: "About", link: ["/about"] },
  { id: 3, title: "Projects", link: ["/projects"] },
  { id: 4, title: "Contact", link: ["/contact"] },
];

const Footer = () => {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscription successful");
        e.target.reset();
      } else {
        toast.error("Subscription failed");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Web Design/Development",
    "Mobile Design/Development",
    "WordPress Design/Development",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {pages.map((page) => (
              <li key={page.id}>
                <Link
                  to={page.link[0]}
                  className={`flex items-center justify-center md:justify-start text-sm sm:text-base hover:text-secondary transition group ${
                    pathname === page.link[0] ? "text-secondary" : "text-white"
                  }`}
                >
                  <span className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {page.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold">Services</h3>
          <ul className="flex flex-col gap-2">
            {services.map((service, index) => (
              <li key={index} className="w-fit mx-auto md:mx-0">
                <p className="flex items-center text-sm sm:text-base hover:text-secondary transition group">
                  <span className="mr-2 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition"></span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {service}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Sign up for News & Updates
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Email"
                className="flex-1 px-4 py-2.5 rounded-md bg-white text-gray-700 text-sm sm:text-base border outline-none"
              />
              <Button
                text={loading ? "Sending..." : "Send"}
                type="submit"
                className="bg-white !text-primary hover:!text-white rounded-md"
              />
            </div>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <a
              href="#"
              className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition"
            >
              <FaFacebookF className="text-primary group-hover:text-white" />
            </a>

            <a
              href="https://wa.me/923134605153"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition"
            >
              <FaWhatsapp className="text-primary group-hover:text-white" />
            </a>

            <a
              href="#"
              className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition"
            >
              <FaInstagram className="text-primary group-hover:text-white" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-2 pt-2 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span>03134605153</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span>tech.techtri@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary border-t border-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="/TechTri.jpg"
              alt="TechTri Logo"
            />
            <h3 className="text-2xl font-bold">TechTri</h3>
          </div>
          <p className="text-xs sm:text-sm">
            © {currentYear} TechTri. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
