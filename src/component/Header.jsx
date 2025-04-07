import React, { useState } from "react";

const Header = () => {
  // State to control the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle link click to close the mobile menu
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-2xl font-extrabold text-white">
          <span className="text-yellow-400">Saifullah</span> Bangash
        </h1>

        {/* Navigation for larger screens */}
        <nav className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon (SVG Icon) */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu} // Toggle the menu on button click
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu: Show when menuOpen is true */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-900 text-white p-4`}>
        <a
          href="#about"
          className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleLinkClick} // Close menu after clicking the link
        >
          About
        </a>
        <a
          href="#projects"
          className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleLinkClick} // Close menu after clicking the link
        >
          Projects
        </a>
        <a
          href="#skills"
          className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleLinkClick} // Close menu and scroll to skills
        >
          Skills
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleLinkClick} // Close menu after clicking the link
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
