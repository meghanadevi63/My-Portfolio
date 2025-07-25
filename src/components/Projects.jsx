import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import bookhiveImage from '../assets/bookshive.png';
import upiFraudImage from '../assets/upi.png';
import quickDeliveryImage from '../assets/delivery.png';



const projects = [
  {
    title: 'BookHive – MERN Stack Bookstore',
    description: 'An online bookstore platform built with the MERN stack. Features JWT-based user authentication, role-based access, and an admin dashboard to manage books, users, and orders.',
    imageUrl: bookhiveImage, // Use the imported image variable here
    githubUrl: 'https://github.com/meghanadevi63/bookshive',
    liveUrl: 'https://polite-dusk-0cfd98.netlify.app/',
  },
  {
    title: 'UPI Fraud Detection System',
    description: 'A machine learning-based fraud detection system using Random Forest and XGBoost. Includes feature engineering and a full-stack app built with Streamlit, FastAPI, and PostgreSQL for secure role-based authentication.',
    imageUrl: upiFraudImage, // Use the imported image variable here
    githubUrl: 'https://github.com/yourusername/task-manager-repo', // **Remember to update this!**
    liveUrl: 'https://task-manager-demo.vercel.app', // **Remember to update this!**
  },
  {
    title: 'Quick Delivery Lite',
    description: 'A real-time delivery management system for customers and drivers. Features Google Maps API for live tracking and delivery cost estimation using Gemini AI based on distance, urgency, and weight.',
    imageUrl: quickDeliveryImage, // Use the imported image variable here
    githubUrl: 'https://github.com/meghanadevi63/SpeakShip',
    liveUrl: 'https://speak-ship.vercel.app/',
  },
  // Add more projects as needed, importing their images first
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white px-4">
      <div className="container mx-auto text-center">
        {/* Main Section Heading with Animation */}
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fade-in-up">My Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              // Project Card Styling with Hover Effect and Staggered Animation
              className="bg-gray-900 rounded-lg shadow-xl overflow-hidden
                         transform hover:scale-105 transition duration-300 ease-in-out
                         border border-gray-700 animate-fade-in-up" // Added animate-fade-in-up
              style={{ animationDelay: `${index * 150}ms` }} // Staggered animation
            >
              <img
                src={project.imageUrl} // Now uses the imported variable
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                <p className="text-gray-400 mb-5 text-base leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-lg
                               transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                  >
                    <FaGithub className="mr-2" size={20} />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full text-lg
                                 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="mr-2" size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;