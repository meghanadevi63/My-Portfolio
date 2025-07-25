import React from 'react';
import { useState } from 'react';
// Import all necessary icons from react-icons/fa
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaAward,      // For Achievements
  FaCertificate, // For Certifications
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false); // State to control mobile menu visibility

  // Define navigation links with their corresponding icons
  const links = [
    { id: 1, link: 'home', icon: <FaHome size={20} /> },
    { id: 2, link: 'about', icon: <FaUser size={20} /> },
    { id: 3, link: 'skills', icon: <FaTools size={20} /> },
    { id: 4, link: 'projects', icon: <FaLaptopCode size={20} /> },
    { id: 5, link: 'achievements', icon: <FaAward size={20} /> },      // NEW section link
    { id: 6, link: 'certifications', icon: <FaCertificate size={20} /> }, // NEW section link
    { id: 7, link: 'contact', icon: <FaEnvelope size={20} /> },
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Your Name/Logo */}
        <a
          href="#home"
          className="text-white text-3xl font-bold font-signature hover:text-blue-300 transition-colors duration-200"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {links.map(({ id, link, icon }) => ( // Destructure 'icon' here
            <li
              key={id}
              className="text-gray-300 hover:text-white capitalize cursor-pointer duration-200 hover:scale-105 group"
            >
              <a href={`#${link}`} className="flex items-center space-x-2">
                <span className="text-blue-300 group-hover:text-white">{icon}</span> {/* Icon with hover color */}
                <span>{link}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-20 text-gray-400 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Navigation (appears when 'nav' is true) */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 z-10">
            {links.map(({ id, link, icon }) => ( // Destructure 'icon' here
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white transition duration-200"
              >
                <a onClick={() => setNav(!nav)} href={`#${link}`} className="flex items-center space-x-4">
                  <span className="text-blue-300">{icon}</span> {/* Icon color for mobile */}
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;