import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router";

const pages = [
  { id: 1, title: "Home", link: ["/"], icon: "" },
  { id: 2, title: "About", link: ["/about"], icon: "" },
  { id: 3, title: "Projects", link: ["/projects"], icon: "" },
  { id: 4, title: "Contact", link: ["/contact"], icon: "" },
];
const Footer = () => {
    const { pathname } = useLocation();
  
  const currentYear = new Date().getFullYear();

  
  const services = [
    "Web Design/Development",
    "Mobile Design/Development",
    "WordPress Design/Development",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#5fcdb2] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-0 w-60 h-60 bg-[#039099] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[rgba(197,31,255,0.5)] rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#5fcdb2] after:to-[#039099]">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.id}>
                <Link
                  to={page.link[0]}
                  className={`flex items-center text-[#71717a] hover:text-[#5fcdb2] transition-all group ${
                    pathname === page.link[0] ? "text-[#5fcdb2]" : ""
                  }`}
                >
                  <span className="mr-3 text-[#5fcdb2] opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#5fcdb2] after:to-[#039099]">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center text-[#71717a] hover:text-[#5fcdb2] transition-all group"
                >
                  <div className="mr-3 w-2 h-2 rounded-full bg-[#5fcdb2] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {service}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#5fcdb2] after:to-[#039099]">
            Contact Us
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-[#5fcdb2] mr-3" />
              <span className="text-[#71717a]">03134605153</span>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-[#5fcdb2] mr-3" />
              <span className="text-[#71717a]">tech.techtri@gmail.com</span>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-[#5fcdb2] transition-all"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-[#5fcdb2] transition-all"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-[#5fcdb2] transition-all"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative bg-gray-900 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white flex items-center gap-2">
            <img className="w-12 rounded-full" src="/TechTri.jpg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-xl leading-5 font-bold">TechTri</h3>
              <p className="text-xs">Think, Build, Innovate</p>
            </div>
          </div>
          <div className="text-[#71717a] text-sm">
            © {currentYear} TechTri. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
