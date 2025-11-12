import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-4">
        
        {/* Left Section */}
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 px-4 py-1 rounded-full mb-4 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome my portfolio
          </motion.span>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4 leading-snug dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Noman
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            FullStack Developer specializing in MERN stack
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-8 text-lg md:text-xl">
            I build modern, responsive web applications with a focus on user
            experience and performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-6 py-3 rounded-md shadow-md cursor-pointer"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-400 text-gray-700 px-6 py-3 rounded-md cursor-pointer dark:text-white dark:border-white"
            >
              View Projects
            </motion.button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl text-gray-600">
            <i className="fa-brands fa-github hover:text-purple-600 transition"></i>
            <i className="fa-brands fa-linkedin hover:text-purple-600 transition"></i>
            <i className="fa-solid fa-envelope hover:text-purple-600 transition"></i>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ProfileCard />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
