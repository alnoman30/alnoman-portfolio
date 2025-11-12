import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/noman.png";

const ProfileCard = () => {
  const bounceTransition = {
    y: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Gradient Border */}
      <motion.div
        className="relative rounded-full p-[6px]"
        style={{
          background: "linear-gradient(90deg, #6D28D9, #9333EA, #3B82F6, #6D28D9)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border-[6px] border-white shadow-2xl"
        />
      </motion.div>

      {/* Labels */}
      <motion.div
        className="absolute left-0 sm:-left-24 top-1/3 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md text-gray-700 font-medium text-sm sm:text-base"
        animate={{ y: [0, -10, 0] }}
        transition={bounceTransition}
      >
        Full-Stack Developer
      </motion.div>

      <motion.div
        className="absolute top-0 sm:-top-6 right-0 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md text-gray-700 font-medium text-sm sm:text-base"
        animate={{ y: [0, -12, 0] }}
        transition={{ ...bounceTransition, delay: 0.3 }}
      >
        Project Management
      </motion.div>

      <motion.div
        className="absolute bottom-0 sm:-bottom-8 right-8 sm:right-12 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md text-gray-700 font-medium border border-purple-400 text-sm sm:text-base"
        animate={{ y: [0, -14, 0] }}
        transition={{ ...bounceTransition, delay: 0.6 }}
      >
        Problem Solver
      </motion.div>
    </div>
  );
};

export default ProfileCard;
