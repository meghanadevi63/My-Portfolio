import React from 'react';
import { FaArrowRight, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import new icons
import heroImage from '../assets/profile1.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center pt-20 px-6 md:px-12 lg:px-24"
    >
      {/* Left Portion: Text and Buttons */}
      <div className="flex flex-col justify-center items-center md:items-start h-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-4 lg:pr-8 animate-fade-in-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-up animation-delay-200">
          Hi, I'm <span className="text-blue-500">CHANDU MEGHANA DEVI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 w-full md:w-auto animate-fade-in-up animation-delay-400">
          An enthusiastic CSE undergraduate who loves turning ideas into intuitive, functional, and impactful digital products.
          From full-stack web apps to machine learning models, I thrive at the intersection of code and creativity — building solutions that are both smart and user-focused.
        </p>
        
        {/* Button & Social Icons Container - Now ensures centering for column layout */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start gap-4 animate-fade-in-up animation-delay-600 w-full"> {/* ADDED 'items-center' for horizontal centering in flex-col */}
          <a
            href="#projects"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"
          >
            View My Work
            <span className="group-hover:rotate-90 duration-300 ml-2">
              <FaArrowRight size={20} />
            </span>
          </a>

          {/* Social Contact Icons - Grouped to stay together */}
          <div className="flex justify-center items-center gap-4"> {/* Keeps these three icons together */}
            <a
              href="https://linkedin.com/in/meghanadevi" // Your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-blue-400 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/meghanadevi63" // Your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-blue-400 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:chandumeghanadevi123@gmail.com" // Your Email
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-blue-400 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              aria-label="Send Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Portion: Image */}
      <div className="md:w-1/2 flex justify-center items-center animate-zoom-in animation-delay-800">
        <img
          src={heroImage}
          alt="Your profile"
          className="rounded-full mx-auto w-2/3 md:w-80 h-auto object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;