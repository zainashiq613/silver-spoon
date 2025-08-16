import React from 'react';
import { Link, useLocation } from 'react-router';

const pages = [
  { id: 1, title: 'Home', link: ['/'], icon: '' },
  { id: 2, title: 'About', link: ['/about'], icon: '' },
  { id: 3, title: 'Projects', link: ['/projects'], icon: '' },
  { id: 4, title: 'Contact', link: ['/contact'], icon: '' },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white/50 shadow backdrop-blur-3xl">
      <div className="flex z-50 flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="flex items-center gap-2">
          <img className="w-12 rounded-full" src="/TechTri.jpg" alt="" />
          <div className="flex flex-col">
            <h3 className="text-xl leading-5 font-bold">TechTri</h3>
            <p className="text-xs">Think, Build, Innovate</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {pages.map((item) => (
            <LinkItem key={item.id} page={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;

const LinkItem = ({ page, pathname }) => {
  const isLinkActive = page?.link.some((item) => item === pathname);

  return (
    <Link
      to={page?.link[0]}
      className={`flex items-center py-[10px] px-10 rounded-4xl text-sm ${
        isLinkActive ? 'bg-[#043655] text-white' : 'text-black hover:bg-[#043655] hover:text-white'
      }`}
    >
      {page?.icon && React.cloneElement(page?.icon, { isLinkActive })}
      <span className={`transition-all duration-100 text-nowrap`}>{page?.title}</span>
    </Link>
  );
};
