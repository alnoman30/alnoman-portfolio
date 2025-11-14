import React from "react";
import projects from "../../utils/projects";
import { div } from "framer-motion/client";

const Projects = () => {
  return (
    <section className="py-20 " id="projects">
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

      {/* card */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-4">
  {projects.map((project) => (
    <div
      key={project.id}
      className="
        bg-gradient-to-r from-violet-500/10 to-purple-500/5
        backdrop-blur-xl
        rounded-[20px]
        border border-white/30
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        p-5
        h-[450px]
      "
    >
      {/* Inner div to control image overflow */}
      <div className="w-full h-full rounded-[15px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            hover:scale-150
          "
        />
      </div>
    </div>
  ))}
</div>



    </section>
  );
};

export default Projects;
