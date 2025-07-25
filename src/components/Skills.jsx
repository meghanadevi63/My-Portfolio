import React, { useState } from 'react'; // Import useState
import {
  FaJava, FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaDatabase, FaMicrosoft, FaChartLine, FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiNumpy, SiPandas, SiStreamlit,
  SiFastapi, SiPostgresql, SiGooglecolab,
} from 'react-icons/si';
import { TbSql } from "react-icons/tb";

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava size={50} className="text-red-500" /> },
      { name: 'Python', icon: <FaPython size={50} className="text-yellow-400" /> },
      { name: 'JavaScript', icon: <FaJs size={50} className="text-yellow-400" /> },
    ],
  },
  {
    name: 'Data Structures & Algorithms',
    skills: [
      { name: 'DSA', icon: <FaDatabase size={50} className="text-purple-400" /> },
      { name: 'Data Analysis', icon: <SiPandas size={50} className="text-blue-600" /> },
      { name: 'SQL', icon: <TbSql size={50} className="text-blue-500" /> },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'HTML', icon: <FaHtml5 size={50} className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt size={50} className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-teal-400" /> },
      { name: 'React.js', icon: <FaReact size={50} className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress size={50} className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb size={50} className="text-green-600" /> },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: <FaCode size={50} className="text-blue-400" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt size={50} className="text-red-600" /> },
      { name: 'MS Office', icon: <FaMicrosoft size={50} className="text-blue-600" /> },
    ],
  },
  {
    name: 'ML & Data Tools',
    skills: [
      { name: 'NumPy', icon: <SiNumpy size={50} className="text-blue-700" /> },
      { name: 'Pandas', icon: <SiPandas size={50} className="text-purple-600" /> },
      { name: 'Matplotlib', icon: <FaChartLine size={50} className="text-green-500" /> },
      { name: 'Streamlit', icon: <SiStreamlit size={50} className="text-red-500" /> },
      { name: 'FastAPI', icon: <SiFastapi size={50} className="text-green-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={50} className="text-blue-700" /> },
    ],
  },
];

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeSkills = skillCategories[activeCategoryIndex].skills;

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto text-center">
        {/* Main Section Heading */}
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fade-in-up">My Skills</h2>

        {/* Tab Buttons for Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategoryIndex(index)}
              // Added cursor-pointer here
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out cursor-pointer
                          ${index === activeCategoryIndex
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                          }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Display Skills for Active Category */}
        <div className="bg-gray-800 p-8 md:p-10 rounded-lg shadow-xl border border-gray-700
                     animate-fade-in-up animation-delay-400 max-h-[500px] overflow-y-auto custom-scrollbar">
          <h3 className="text-3xl font-semibold mb-8 text-blue-300">
            {skillCategories[activeCategoryIndex].name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {activeSkills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-md
                           transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700
                           animate-fade-in-up text-center overflow-hidden"
                style={{ animationDelay: `${skillIndex * 50}ms` }}
              >
                {skill.icon}
                <p className="text-xl sm:text-lg lg:text-xl font-semibold mt-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;