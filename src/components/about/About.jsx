import React from "react";
import { motion } from "framer-motion";

import nomanImg from "../../assets/noman2.png";

export default function About() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#F4FAFF] to-[#FFF7F4]" id="about">
              {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-30 md:mb-12">
        <h2 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
            Me
          </span>
        </h2>
      </div>
      {/* Top Right Floating Circle */}
      <motion.div
        className="absolute top-10 right-20"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#00D1D1"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Bottom Left Floating Square */}
      <motion.div
        className="absolute bottom-14 left-10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -6, 6, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="40" height="40">
          <rect
            width="22"
            height="22"
            x="9"
            y="9"
            rx="6"
            stroke="#F4A28C"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        {/* Image Section */}
        <div className="relative">

          {/* Floating Cyan Square */}
          <motion.div
            className="absolute -top-6 -right-6 w-16 h-16 bg-[#28D8D7] rounded-xl opacity-90"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={nomanImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Orange Circle */}
          <motion.div
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#F4A28C] rounded-full opacity-90"
            animate={{
              y: [0, 12, 0],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h1>

          <p className="text-[#00B7C3] font-semibold mb-6">
            Creative Designer & Developer
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Passionate about creating beautiful and functional digital
            experiences. With over 5 years of experience in design and
            development, I bring ideas to life through clean code and thoughtful
            design.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            I specialize in building modern web applications that are visually
            stunning and offer exceptional user experiences. Each project is
            a chance to push creative boundaries.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-[#00B7C3] text-xl">📍</span>
              <p className="text-gray-700">
                123 Creative Street, Design City, DC 12345
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#00B7C3] text-xl">✉️</span>
              <p className="text-gray-700">hello@johndoe.com</p>
            </div>
          </div>

          <button className="bg-[#00C3D9] hover:bg-[#00A5BA] text-white px-6 py-3 rounded-full shadow-md transition">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
