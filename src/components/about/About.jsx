import React, { useRef } from "react";

import noman1Img from "../../assets/noman.png";
import noman2Img from "../../assets/noman2.png";
import noman3Img from "../../assets/noman3.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  const hireBtnRef = useRef(null);

  return (
    <section className="relative w-full py-24 bg-gray-50 dark:bg-gray-900" id="about">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          About{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Me
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Learn more about my experience and skills.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 h-[400px] md:h-[600px]"
          >
            {[noman2Img, noman1Img, noman3Img].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt="profile" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Abdullah Al Noman
          </h1>

          <p className="text-[#00B7C3] font-semibold text-lg">
            Frontend React JS Developer
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about creating beautiful and functional digital experiences. With over 5 years of experience in design and development, I bring ideas to life through clean code and thoughtful design.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in building modern web applications that are visually stunning and offer exceptional user experiences. Each project is a chance to push creative boundaries.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#00B7C3] text-2xl" />
              <p className="text-gray-800 dark:text-gray-200">
                8/32 Ashrafabad main road, Lalbagh, Dhaka-1211
              </p>
            </div>

            <div className="flex items-center gap-3">
              <IoMdMailUnread className="text-[#00B7C3] text-2xl" />
              <p className="text-gray-800 dark:text-gray-200">alnomaan30@gmail.com</p>
            </div>
          </div>

          <button
            ref={hireBtnRef}
            className="bg-[#00C3D9] hover:bg-[#00A5BA] text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-200"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
