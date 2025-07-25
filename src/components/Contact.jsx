import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(''); // Clear previous messages

    const formspreeEndpoint = "https://formspree.io/f/mblkoogv"; // Your actual Formspree endpoint

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message received successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const data = await response.json();
        setSubmitMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto text-center">
        {/* Heading with Underline and Animation */}
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fade-in-up">
          Get in Touch
        </h2>

        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-300 animate-fade-in-up animation-delay-200">
          I'm always open to new opportunities, collaborations, and conversations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>

        {/* Grid/Flex Container for Form and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Left Column: Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg
                               ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className="mt-4 text-center text-green-400 font-semibold">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Direct Contact Info and Social Media */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 animate-fade-in-up animation-delay-600 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Me Directly</h3>
              <div className="space-y-6 text-left">
                {/* Email Icon with flex-shrink-0 */}
                <div className="flex items-center space-x-4">
                  <FaEnvelope size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                  <div>
                    <p className="text-lg font-semibold">Email Address</p>
                    <a href="mailto:chandumeghanadevi123@gmail.com" className="text-gray-300 hover:text-white transition duration-200"> chandumeghanadevi123@gmail.com</a>
                  </div>
                </div>
                {/* Phone Icon with flex-shrink-0 */}
                <div className="flex items-center space-x-4">
                  <FaPhone size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                  <div>
                    <p className="text-lg font-semibold">Phone Number</p>
                    <a href="tel:+917075741418" className="text-gray-300 hover:text-white transition duration-200"> +91 7075741418</a>
                  </div>
                </div>
                {/* Location Icon with flex-shrink-0 */}
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                  <div>
                    <p className="text-lg font-semibold">My Location</p>
                    <p className="text-gray-300"> Ammrutha Nagar, Proddatur, Kadapa, Andhra Pradesh,India, 516360</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links Icons with flex-shrink-0 */}
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/meghanadevi"
                className="text-gray-300 hover:text-white transition duration-200 flex flex-col items-center space-y-1 transform hover:scale-110"
                target="_blank" rel="noopener noreferrer"
              >
                <FaLinkedin size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/meghanadevi63"
                className="text-gray-300 hover:text-white transition duration-200 flex flex-col items-center space-y-1 transform hover:scale-110"
                target="_blank" rel="noopener noreferrer"
              >
                <FaGithub size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="mailto:chandumeghanadevi123@gmail.com"
                className="text-gray-300 hover:text-white transition duration-200 flex flex-col items-center space-y-1 transform hover:scale-110"
                aria-label="Send Email"
                target="_blank" rel="noopener noreferrer"
              >
                <FaEnvelope size={36} className="text-blue-400 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;