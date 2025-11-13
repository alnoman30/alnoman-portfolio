import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import ScrollToTopBtn from "../scrollToTop/ScrollToTopBtn";

const Footer = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <footer className="text-gray-700 pt-16 pb-6" id="contact">
      <ScrollToTopBtn/>

      <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40">
        {/* Left Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent cursor-pointer">
            Noman.
          </p>
          <p className="mt-3 text-[hsl(261,7%,46%)] text-md font-medium leading-relaxed dark:text-[hsl(261,15%,70%)]">
            A passionate Full Stack Developer specialized in{" "}
            <strong>MERN</strong> stack with extensive experience in project
            management.
          </p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <h3 className="text-xl font-bold mb-5 text-gray-700 dark:text-[hsl(0,0%,96%)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((link, index) => (
              <li
                key={link}
              >
                <a
                  href={`#${link}`}
                  className="text-[hsl(261,7%,46%)] dark:text-[hsl(261,15%,70%)] hover:text-[hsl(251,85%,75%)] hover:pl-1.5 font-medium transition-all duration-300 capitalize"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <h3 className="text-xl font-bold mb-5 text-gray-700 dark:text-[hsl(0,0%,96%)]">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-[hsl(261,7%,46%)] dark:text-[hsl(261,15%,70%)] font-medium transition-colors duration-300">
            <li className="flex items-center gap-2">
              <IoCallOutline size={20} className="font-bold text-violet-500" />{" "}
              +8801741619995
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineEnvelope
                size={20}
                className="font-bold text-violet-500"
              />{" "}
              alnomaan30@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineLocationOn
                size={20}
                className="font-bold text-violet-500"
              />{" "}
              Dhaka, Bangladesh
            </li>
          </ul>

          {/* Social Icons */}
          <motion.ul
            className="flex justify-start md:justify-start gap-6 mt-8 text-2xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <RiGithubLine />, href: "https://github.com/alnoman30" },
              {
                icon: <FiLinkedin />,
                href: "https://www.linkedin.com/in/abdullah-al-noman30/",
              },
              { icon: <FaRegEnvelope />, href: "mailto:alnomaan30@gmail.com" },
            ].map((social, i) => (
              <motion.li
                key={i}
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-[#F3E7F9] dark:bg-[#2D2B3A] hover:bg-violet-400 hover:text-white cursor-pointer p-3 rounded-full transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-400/50"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Divider with animation */}
      <motion.div
        className="container mx-auto border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-[hsl(261,15%,70%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        Copyright &copy; {new Date().getFullYear()} Noman. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
