import React from "react";

const Projects = () => {
  return (
    <section id="projects">
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
    </section>
  );
};

export default Projects;
