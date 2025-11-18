import React from "react";
import { experiences, educations, activities } from "../../utils/data";

export default function Experience({ className = "bg-[#F4F0F9] dark:bg-[#20192E] transition-all duration-500" }) {
  return (
    <section
      className={`w-full py-12 ${className}`} // full width background
      id="experience"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl text-gray-700 dark:text-[hsl(0,0%,96%)] font-bold mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
              Education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career in web development and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div>
            <h3 className="text-xl font-medium mb-4 dark:text-white">Experience</h3>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {experiences.map((exp) => (
                <div key={exp.id} className="relative mb-8">
                  <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-violet-600 ring-4 ring-purple-200" />
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold dark:text-white">{exp.title}</h4>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{exp.org}</div>
                    <p className="mt-2 text-gray-700 text-sm">{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-xl font-medium mb-4 dark:text-white">Education</h3>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {educations.map((edu) => (
                <div key={edu.id} className="relative mb-8">
                  <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-red-300 ring-4 ring-purple-200" />
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold dark:text-white">{edu.degree}</h4>
                      <span className="text-sm text-gray-500">{edu.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{edu.school}</div>
                    <p className="mt-2 text-gray-700 text-sm">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curricular Activities Column */}
          <div>
            <h3 className="text-xl font-medium mb-4 dark:text-white">Curricular Activities</h3>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {activities.map((act) => (
                <div key={act.id} className="relative mb-8">
                  <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-purple-200" />
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold dark:text-white">{act.activity}</h4>
                      <span className="text-sm text-gray-500">{act.period}</span>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{act.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
