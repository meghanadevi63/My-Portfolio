import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white px-4">
      <div className="container mx-auto text-center md:text-left">
        {/* About Me Heading with Animation - ADDED text-center HERE */}
        <h2 className="text-4xl font-bold mb-8 text-blue-400 animate-fade-in-up text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4">
          {/* Paragraph 1 with Animation and Delay */}
          <p className="animate-fade-in-up animation-delay-200">
            I’m Chandu Meghana Devi, a passionate Computer Science undergraduate at RGUKT IIIT RK Valley with a strong foundation in software development, full-stack web technologies, and machine learning. With a CGPA of 9.45 and a GATE 2025 qualification, I thrive on building smart, scalable, and impactful digital solutions.
          </p>
          
          {/* Paragraph 2 with Animation and Delay */}
          <p className="animate-fade-in-up animation-delay-400">
            My experience ranges from developing fraud detection systems using ML to building real-time delivery and bookstore applications using the MERN stack. I also explored biomedical signal processing during my internship at NIT Puducherry, where I worked on ECG signal analysis for heart disease prediction.
          </p>
          
          {/* Paragraph 3 with Animation and Delay */}
          <p className="animate-fade-in-up animation-delay-600">
            I’m a quick learner, a strong collaborator, and someone who believes in using technology to solve meaningful problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;