import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';

const pages = [
  { id: 1, title: 'Home', link: ['/'], icon: '' },
  { id: 2, title: 'About', link: ['/about'], icon: '' },
  { id: 3, title: 'Projects', link: ['/projects'], icon: '' },
  { id: 4, title: 'Contact', link: ['/contact'], icon: '' },
];
const Footer = () => {
  const { pathname } = useLocation();

  const currentYear = new Date().getFullYear();

  const services = [
    'Web Design/Development',
    'Mobile Design/Development',
    'WordPress Design/Development',
    'UI/UX Design',
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="relative max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            {pages.map((page) => (
              <li key={page.id}>
                <Link
                  to={page.link[0]}
                  className={`flex w-fit items-center text-white hover:text-secondary transition-all group ${
                    pathname === page.link[0] ? 'text-secondary' : ''
                  }`}
                >
                  <span className="mr-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Services</h3>
          <ul className="flex flex-col gap-1">
            {services.map((service, index) => (
              <li className="w-fit" key={index}>
                <p className="flex items-center text-white hover:text-secondary transition-all group">
                  <div className="mr-3 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Sign up for News and updates</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                placeholder="Enter Email"
                type="email"
                className="bg-white text-text-secondary px-4 border outline-none py-2.5 rounded-md"
                name=""
                id=""
              />
              <Button
                text={'Send'}
                className={'bg-white !text-primary hover:!text-white rounded-md'}
              />
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition-all"
              >
                <FaFacebookF className="text-primary group-hover:text-white" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition-all"
              >
                <FaLinkedinIn className="text-primary group-hover:text-white" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition-all"
              >
                <FaInstagram className="text-primary group-hover:text-white" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <FaPhoneAlt className="text-white mr-3" />
                <span className="text-white">03134605153</span>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <span className="text-white">tech.techtri@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-primary py-3 border-t border-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white flex items-center gap-1">
            <img className="w-10 rounded-full" src="/TechTri.jpg" alt="" />
            <div className="flex flex-col">
              <h3 className="text-3xl leading-5 font-bold">TechTri</h3>
            </div>
          </div>
          <div className="text-white text-sm">© {currentYear} TechTri. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
