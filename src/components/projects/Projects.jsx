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
        h-[350px]
        group
      "
    >
      {/* Image Wrapper */}
      <div className="relative w-full h-full rounded-[15px] overflow-hidden bg-black/20">
        
        {/* IMAGE — FULLY VISIBLE, NO CROP */}
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full
            object-fit
            transition-transform duration-700
            group-hover:scale-110
          "
        />

{/* CENTER GLASS OVERLAY */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-5 w-[90%]">
  <div
    className="
      bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg
      px-6 py-4 rounded-2xl text-white text-center
      opacity-100
      transition-opacity duration-300
    "
  >
    <h3 className="text-lg font-semibold text-black">{project.title}</h3>
    <p className="text-sm mt-1">{project.subtitle || "View Details"}</p>
  </div>
</div>


      </div>
    </div>
  ))}
</div>




    </section>
  );
};

export default Projects;
