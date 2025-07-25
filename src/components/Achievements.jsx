import React from 'react';
import { FaStar, FaBriefcase } from 'react-icons/fa'; // Import FaBriefcase for the internship icon

const achievements = [
  {
    id: 1,
    title: "Qualified GATE 2025 Computer Science and Information Technology", // Title from resume, now more accurate [cite: 6]
    description: "Secured an All India Rank of 14929 in GATE 2025 Computer Science and Information Technology (CS) Paper.", // Updated with AIR and paper name from score card 
    date: "February 2025", // Updated date from "Date of Examination" on score card 
    iconComponent: <FaStar size={40} className="text-yellow-400" />,
  },
  {
    id: 2,
    title: "Summer Internship at NIT Puducherry",
    description: (
      <>
        Processed ECG signals using Python and denoised them with Butterworth filters.
        Detected waveform peaks to compare ECGs of healthy vs. diseased patients.
        Used Machine Learning Algorithms and libraries like numpy, pandas, matplotlib, scipy, neurokit2 etc. to support heart disease prediction.
      </>
    ),
    date: "Summer 2025", 
    iconComponent: <FaBriefcase size={40} className="text-blue-400" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto text-center">
        {/* Heading with Underline and Animation */}
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fade-in-up">
          Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-gray-800 p-8 rounded-lg shadow-xl
                         transform hover:scale-105 transition duration-300 ease-in-out
                         border border-gray-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-start items-center gap-3 mb-3">
                {achievement.iconComponent}
                <h3 className="text-2xl font-semibold text-white">{achievement.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-base text-left leading-relaxed">{achievement.description}</p>

              {/* Date */}
              <p className="text-gray-500 text-sm italic text-left">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;