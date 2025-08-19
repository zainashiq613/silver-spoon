import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { id: 1, title: "Home", link: ["/"], icon: "" },
  { id: 2, title: "About", link: ["/about"], icon: "" },
  { id: 3, title: "Projects", link: ["/projects"], icon: "" },
  { id: 4, title: "Contact", link: ["/contact"], icon: "" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary shadow backdrop-blur-3xl">
      <div className="flex z-50 flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo/Brand Section */}
        <div className="flex items-center gap-2">
          <img
            className="w-12 rounded-full"
            src="/TechTri.jpg"
            alt="TechTri Logo"
          />
          <div className="flex flex-col">
            <h3 className="text-xl text-white leading-5 font-bold">TechTri</h3>
            <p className="text-xs text-white">Think, Build, Innovate</p>
          </div>
        </div>

        {/* Mobile Menu Button (hidden on desktop) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-5">
          {pages.map((item) => (
            <LinkItem key={item.id} page={item} pathname={pathname} />
          ))}
        </div>

        {/* Mobile Navigation (shown when menu is open) */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4">
            <div className="flex flex-col gap-2">
              {pages.map((item) => (
                <LinkItem
                  key={item.id}
                  page={item}
                  pathname={pathname}
                  mobile
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const LinkItem = ({ page, pathname, mobile = false, onClick }) => {
  const isLinkActive = page?.link.some((item) => item === pathname);

  return (
    <Link
      to={page?.link[0]}
      onClick={onClick}
      className={`
        flex items-center 
        ${
          mobile
            ? "py-3 px-4 rounded-lg text-base w-full"
            : "py-[10px] px-6 md:px-8 lg:px-12 rounded-4xl text-sm"
        }
        ${
          isLinkActive
            ? "bg-white text-primary font-medium"
            : "text-white hover:bg-white hover:text-primary"
        }
        transition-colors duration-200
      `}
    >
      {page?.icon && React.cloneElement(page?.icon, { isLinkActive })}
      <span className="text-nowrap">{page?.title}</span>
    </Link>
  );
};

export default Header;
