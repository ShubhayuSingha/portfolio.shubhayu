import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-600 to-gray-900 text-white p-4 shadow-md z-50">
      <div className="flex justify-center space-x-4 overflow-x-auto">
        <Link to="home" smooth={true} duration={500} className="hover:text-yellow-500 hover:text-white md:hover:text-yellow-500 cursor-pointer font-poppins">
          HOME
        </Link>
        <Link to="myskills" smooth={true} duration={500} className="hover:text-yellow-500 hover:text-white md:hover:text-yellow-500 cursor-pointer font-poppins">
          MY SKILLS
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-yellow-500 hover:text-white md:hover:text-yellow-500 cursor-pointer font-poppins">
          PROJECTS
        </Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-500 hover:text-white md:hover:text-yellow-500 cursor-pointer font-poppins">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
