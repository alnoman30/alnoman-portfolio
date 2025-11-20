import React from "react";
import { motion } from "framer-motion";

import noman1Img from "../../assets/noman.png";
import noman2Img from "../../assets/noman2.png";
import noman3Img from "../../assets/noman3.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  return (
    <section className="relative w-full py-20" id="about">
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
        className="absolute bottom-14 left-10 z-50"
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
        {/* Image Section with Swiper */}
        <div className="relative">

          {/* Floating Cyan Square */}
          <motion.div
            className="absolute -top-6 -right-6 w-16 h-16 bg-[#28D8D7] rounded-xl opacity-90 z-50"
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

          {/* Swiper Image Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[400px] md:h-[600px]"
          >
            <SwiperSlide>
              <img
                src={noman2Img}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={noman1Img}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={noman3Img}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>


          {/* Floating Orange Circle */}
          <motion.div
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#F4A28C] rounded-full opacity-90 z-50"
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Abdullah Al Noman
          </h1>

          <p className="text-[#00B7C3] font-semibold mb-6">
            Frontend React JS Developer
          </p>

          <p className="text-gray-600 dark:text-[#F7F7F7] leading-relaxed mb-6">
            Passionate about creating beautiful and functional digital
            experiences. With over 5 years of experience in design and
            development, I bring ideas to life through clean code and thoughtful
            design.
          </p>

          <p className="text-gray-600 dark:text-[#F7F7F7] leading-relaxed mb-8">
            I specialize in building modern web applications that are visually
            stunning and offer exceptional user experiences. Each project is a
            chance to push creative boundaries.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-[#00B7C3] text-xl">
                <FaLocationDot />
              </span>
              <p className="text-gray-700 dark:text-[#F7F7F7]">
                8/32 Ashrafabad main road, Lalbagh, Dhaka-1211
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#00B7C3] text-xl">
                <IoMdMailUnread />
              </span>
              <p className="text-gray-700 dark:text-[#F7F7F7]">
                alnomaan30@gmail.com
              </p>
            </div>
          </div>

          <motion.button whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#00C3D9] hover:bg-[#00A5BA] text-white px-6 py-3 rounded-full shadow-md transition cursor-pointer">
            Hire Me
          </motion.button>
        </div>
      </div>
    </section>
  );
}
