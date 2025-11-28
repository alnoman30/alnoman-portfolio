import React from "react";
import { motion } from "framer-motion";

import memoji from "../../assets/memoji.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden" id="home">
      {/* Soft pastel gradient blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-white to-violet-300 dark:bg-[#071D3B] dark:bg-none blur-3xl opacity-40 -z-10"></div>

      {/* Floating SVG Circles */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-12"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4"
        animate={{ y: [0, -25, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
          <polygon points="12,2 22,22 2,22" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{ y: [0, 20, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2">
          <polygon points="12,2 22,22 2,22" />
        </svg>
      </motion.div>

<div className="w-32 h-32 p-4 rounded-full bg-violet-100 flex items-center justify-center mb-5">
  <img
    src={memoji}
    alt="avatar"
    className="w-24 h-24 rounded-full relative z-10"
  />
</div>


      {/* Welcome Text */}
      <motion.span
            className="inline-block bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 px-4 py-1 rounded-full mb-4 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome my portfolio
          </motion.span>

      {/* Name & Role */}
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight max-w-3xl mb-4 relative z-10 text-gray-900 dark:text-white">
        Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">Noman</span>
      </h1>
      <h3 className="text-xl sm:text-2xl font-medium mb-4 relative z-10 text-gray-700 dark:text-gray-300">
        Frontend Developer specializing in React JS
      </h3>

      {/* Description */}
      <p className="text-lg max-w-xl text-gray-600 dark:text-gray-300 mb-6 relative z-10">
        I build modern, responsive web applications with a focus on user experience and performance.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 cursor-pointer hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
                >
                  Get in Touch
                </motion.button>
        <motion.button whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
          View Project
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
