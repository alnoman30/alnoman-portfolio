import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import { GoSun } from "react-icons/go";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark/Light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("bg-white", !darkMode);
  }, [darkMode]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="navbar"
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center transition-colors duration-500 px-4">
        {/* Logo */}
        <div>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent cursor-pointer">
            Noman.
          </p>
        </div>

        {/* Desktop / Tablet Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex flex-row gap-6 font-medium text-lg transition-colors duration-500">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-purple-500 font-bold"
                  className="cursor-pointer text-gray-700 dark:text-white hover:text-purple-500 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full cursor-pointer hover:bg-[#d8d2ff] dark:text-white transition duration-300"
          >
            {darkMode ? <GoSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Resume button */}
          <button className="text-white bg-gradient-to-br from-violet-800 to-sky-400 font-medium text-lg px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 hover:scale-105 transition duration-300">
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full cursor-pointer hover:bg-[#d8d2ff] dark:text-white transition duration-300"
          >
            {darkMode ? <GoSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-md w-full absolute top-full left-0 px-4 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 font-medium text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-purple-500 font-bold"
                  className="cursor-pointer text-gray-700 dark:text-white hover:text-purple-500 transition duration-300"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume button at bottom */}
          <button className="text-white bg-gradient-to-br from-violet-800 to-sky-400 font-medium text-lg px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 hover:scale-105 transition duration-300">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
