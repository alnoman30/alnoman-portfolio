import React from "react";
import projects from "../../utils/projects";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoEyeOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <section className="py-20 container mx-auto px-6" id="projects">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-30 md:mb-12">
        <h2 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
          Explore my recent web development projects showcasing my expertise in
          the MERN stack and project management.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-violet-400 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-violet-400 hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-gray-400 dark:text-black tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
<div className="flex gap-3">
  {/* GitHub Button */}
  <a
    href={project.github}
    target="_blank"
    className="flex items-center px-4 py-2 text-sm font-medium 
               border border-violet-500 text-violet-500 rounded-lg 
               hover:bg-violet-500 hover:text-white hover:border-violet-500 dark:text-black
               transition"
  >
    <FiGithub className="mr-2" /> View Code
  </a>

  {/* Preview Button */}
  <a
    href={project.preview}
    target="_blank"
    className="flex items-center px-4 py-2 text-sm font-medium 
               bg-violet-500 text-white border border-violet-500 rounded-lg
               hover:bg-transparent hover:text-violet-500 hover:border-violet-500
               transition"
  >
    <IoEyeOutline className="mr-2" /> Preview
  </a>
</div>

            </div>
          </div>
        ))}
      </div>

      {/* More Project Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 cursor-pointer hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
        >
          More Projects
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
