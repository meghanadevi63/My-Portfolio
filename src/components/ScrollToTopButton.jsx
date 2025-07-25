import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    // Show button if page is scrolled more than 50% of the viewport height
    if (window.pageYOffset > window.innerHeight * 0.5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,           // Scroll to the very top of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // Tailwind CSS classes for styling and animation - NO CIRCLE
      className={`
        fixed bottom-4 right-4 z-50 text-blue-500 // Arrow color
        transition-opacity duration-300 transform // Opacity transition
        hover:scale-125 // Slightly larger hover for just the arrow
        focus:outline-none // Remove focus outline
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      aria-label="Scroll to top" // Accessibility for screen readers
    >
      <FaArrowUp size={36} /> {/* Increased size for better visibility without a background */}
    </button>
  );
};

export default ScrollToTopButton;