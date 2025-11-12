import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/noman.png";

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
      {/* Gradient Border & Profile Image */}
      <motion.div
        className="relative rounded-full p-2"
        style={{
          background: "linear-gradient(90deg, #6D28D9, #9333EA, #3B82F6, #6D28D9)",
          backgroundSize: "400% 400%",
          boxShadow: "0 20px 40px rgba(107, 33, 168, 0.6)",
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
          className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] object-cover rounded-full  shadow-2xl"
        />
      </motion.div>

      {/* Labels - Positioned for bigger design */}
      <motion.div
        className="absolute left-0 sm:-left-32 top-1/3 bg-white px-5 py-2 rounded-full shadow-lg text-gray-700 font-semibold text-lg sm:text-xl border-2 border-purple-400"
        animate={{ y: [0, -12, 0] }}
        transition={bounceTransition}
      >
        Frontend Developer
      </motion.div>

      <motion.div
        className="absolute top-0 sm:-top-12 right-0 bg-white px-5 py-2 rounded-full shadow-lg text-gray-700 font-semibold text-lg sm:text-xl border-2 border-purple-400"
        animate={{ y: [0, -14, 0] }}
        transition={{ ...bounceTransition, delay: 0.3 }}
      >
        Project Management
      </motion.div>

      <motion.div
        className="absolute bottom-0 sm:-bottom-12 right-12 bg-white px-5 py-2 rounded-full shadow-lg text-gray-700 font-semibold border-2 border-purple-400 text-lg sm:text-xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ ...bounceTransition, delay: 0.6 }}
      >
        Problem Solver
      </motion.div>
    </div>
  );
};

export default ProfileCard;
