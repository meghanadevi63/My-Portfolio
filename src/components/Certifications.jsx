import React from 'react';
import { FaExternalLinkAlt, FaAward, FaCertificate, FaGraduationCap, FaJava } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    name: "NPTEL: \"Deep Learning\" Elite + Gold",
    issuer: "NPTEL",
    date: "Jan-Apr 2025",
    credentialUrl: "https://drive.google.com/file/d/160bglPZ34rQOlB-rRQizY6lZTv0E4VTm/view?usp=sharing",
    iconComponent: <FaGraduationCap size={40} className="text-yellow-400" />,
  },
  {
    id: 2,
    name: "NPTEL: \"Object-Oriented System Development\" Elite + Gold",
    issuer: "NPTEL",
    date: "Jan-Apr 2025",
    credentialUrl: "https://drive.google.com/file/d/1Sz7hwVgqK5mfdNJFIX14NoVzfPzW_xL1/view?usp=sharing",
    iconComponent: <FaCertificate size={40} className="text-purple-400" />,
  },
  {
    id: 3,
    name: "EDX (PH125.8x): Data Science: Machine Learning ",
    issuer: "HarvardX",
    date: "April 26,2024",
    credentialUrl: "https://drive.google.com/file/d/1S2SG3BT-wetMJpOrmy7yrmQ8Os3rXuhs/view?usp=sharing",
    iconComponent: <FaAward size={40} className="text-green-400" />,
  },
  {
    id: 4,
    name: "IBM SkillsBuild Artificial Intelligence Fundamentals Certified",
    issuer: "IBM SkillsBuild",
    date: "2023",
    credentialUrl: "YOUR_GOOGLE_DRIVE_LINK_FOR_IBM_CERTIFICATE", // <-- REMEMBER TO REPLACE THIS!
    iconComponent: <FaCertificate size={40} className="text-red-400" />,
  },
  {
    id: 5,
    name: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "July 13,2025", // Placeholder, update with actual date
    credentialUrl: "https://drive.google.com/file/d/1CSElj-6th66S_crKFVXgbscn3CYACfHz/view?usp=sharingK", // <-- REMEMBER TO REPLACE THIS!
    iconComponent: <FaJava size={40} className="text-blue-500" />,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fade-in-up">
          My Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-gray-900 p-8 rounded-lg shadow-xl
                         transform hover:scale-105 transition duration-300 ease-in-out
                         border border-gray-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-start items-center gap-3 mb-3">
                {cert.iconComponent}
                <h3 className="text-2xl font-semibold text-white">{cert.name}</h3>
              </div>
              <p className="text-gray-400 text-lg mb-2 text-left">{cert.issuer}</p>
              <p className="text-gray-500 text-sm italic mb-4 text-left">{cert.date}</p>
              {cert.credentialUrl && ( // Simplified condition: button appears if credentialUrl has ANY value
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full
                             transition duration-300 ease-in-out shadow-md hover:shadow-lg mt-4"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;