import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="container mx-auto py-20" id="contact">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
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
          {/* Gradient Background */}
          <div className="bg-gradient-to-b from-blue-400 to-purple-500 h-72 w-full rounded-2xl shadow-lg"></div>

          {/* Contact Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white dark:bg-[#1c1528] rounded-2xl shadow-md p-8 w-[90%]">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for opportunities, collaborations, or just
                to say hi! I'm always open to discussing new projects and ideas.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="bg-purple-100 text-purple-600 p-3 rounded-full">
                    <FiMail size={20} />
                  </span>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">Email</p>
                    <a
                      href="mailto:alnomaan30@gmail.com"
                      className="text-purple-600 text-sm hover:underline"
                    >
                      alnomaan30@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="bg-purple-100 text-purple-600 p-3 rounded-full">
                    <FiPhone size={20} />
                  </span>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">Phone</p>
                    <a
                      href="tel:+8801741619995"
                      className="text-purple-600 text-sm hover:underline"
                    >
                      +8801741619995
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="bg-purple-100 text-purple-600 p-3 rounded-full">
                    <FiMapPin size={20} />
                  </span>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">Location</p>
                    <p className="text-purple-600 text-sm">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-gray-700 text-sm font-medium mb-3">
                  Connect with me
                </p>
                <div className="flex gap-4 text-2xl text-gray-600">
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-500 hover:text-white p-3 rounded-full transition"
                  >
                    <RiGithubLine />
                  </a>
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-500 hover:text-white p-3 rounded-full transition"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-500 hover:text-white p-3 rounded-full transition"
                  >
                    <FiMessageCircle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white dark:bg-[#1c1528] rounded-2xl shadow-md p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                placeholder="I want to collaborate with you"
                className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
