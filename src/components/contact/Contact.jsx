import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="container mx-auto py-20"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} // <-- delay added
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-30 md:mb-12">
        <h2 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
            Touch
          </span>
        </h2>
        <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
          Feel free to reach out for opportunities, collaborations, or just to
          say hi! I'm always open to discussing new projects and ideas.
        </p>
      </div>

      {/* Contact Section */}
      <div className="px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center relative">
          <div className="bg-gradient-to-b from-blue-400 to-purple-500 h-72 w-full rounded-2xl shadow-lg"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white dark:bg-[#1c1528] rounded-2xl shadow-md p-8 w-[90%]">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6 dark:text-[hsl(261,15%,70%)]">
                Feel free to reach out for opportunities, collaborations, or
                just to say hi! I'm always open to discussing new projects and
                ideas.
              </p>

              {/* Contact items */}
              <div className="space-y-5">
                {[
                  {
                    icon: <FiMail size={20} />,
                    title: "Email",
                    value: "alnomaan30@gmail.com",
                    href: "mailto:alnomaan30@gmail.com",
                  },
                  {
                    icon: <FiPhone size={20} />,
                    title: "Phone",
                    value: "+8801741619995",
                    href: "tel:+8801741619995",
                  },
                  {
                    icon: <FiMapPin size={20} />,
                    title: "Location",
                    value: "Dhaka, Bangladesh",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="bg-purple-100 text-violet-400 p-3 rounded-full dark:bg-[#2D2B3A]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-gray-700 text-sm font-medium dark:text-white">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-violet-400 text-sm hover:underline dark:text-[hsl(261,15%,70%)]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-violet-400 text-sm dark:text-[hsl(261,15%,70%)]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <ul className="flex justify-start gap-6 mt-8 text-2xl text-gray-600 dark:text-gray-300">
                {[
                  {
                    icon: <RiGithubLine />,
                    href: "https://github.com/alnoman30",
                  },
                  {
                    icon: <FiLinkedin />,
                    href: "https://www.linkedin.com/in/abdullah-al-noman30/",
                  },
                  {
                    icon: <FaRegEnvelope />,
                    href: "mailto:alnomaan30@gmail.com",
                  },
                ].map((social, i) => (
                  <li
                    key={i}
                    className="bg-[#F3E7F9] dark:bg-[#2D2B3A] hover:bg-violet-400 hover:text-white cursor-pointer p-3 rounded-full transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-400/50"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white dark:bg-[#1c1528] rounded-2xl shadow-md p-10 mt-20 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 dark:text-white mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1 dark:text-white">
                Subject
              </label>
              <input
                type="text"
                placeholder="I want to collaborate with you"
                className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1 dark:text-white">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 resize-none dark:text-white"
              ></textarea>
            </div>

            <motion.button
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 cursor-pointer hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
