import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Only import icons used

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-center text-gray-400">
      <div className="container mx-auto">
        <p className="text-lg mb-4 animate-fade-in-up">&copy; {new Date().getFullYear()} Chandu Meghana Devi. All rights reserved.</p> {/* Updated name and added animation */}
        <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-200"> {/* Added animation and delay */}
          <a
            href="https://linkedin.com/in/meghanadevi" // Your LinkedIn link from resume
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transform hover:scale-110 transition duration-300 flex flex-col items-center space-y-1" // Added flex for vertical alignment and improved hover
          >
            <FaLinkedin size={30} className="text-blue-400" /> {/* Larger icon with color */}
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/meghanadevi63" // Your GitHub link from resume
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transform hover:scale-110 transition duration-300 flex flex-col items-center space-y-1" // Added flex for vertical alignment and improved hover
          >
            <FaGithub size={30} className="text-blue-400" /> {/* Larger icon with color */}
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;