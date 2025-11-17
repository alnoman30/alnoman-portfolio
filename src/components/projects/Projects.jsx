import React from "react";
import projects from "../../utils/projects";

const Projects = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-gray-400 tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.preview}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Project Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
