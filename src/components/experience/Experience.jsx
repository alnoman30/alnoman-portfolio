import React, { useState } from "react";
import { experiences, educations, activities } from "../../utils/data";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { SiTask } from "react-icons/si";

export default function Experience({
  className = "bg-gradient-to-r from-purple-500 to-blue-600 dark:bg-[#071D3B] dark:bg-none transition-all duration-500",
}) {
  return (
    <section className={`w-full py-12 ${className}`} id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">
            Experience &{" "}
            <span className="bg-cyan-500 text-transparent bg-clip-text inline-block">
              Education
            </span>
          </h2>
          <p className="text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career in web development and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Experience Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-violet-600 w-10 h-10 flex items-center justify-center rounded-full mr-3 text-white text-xl">
                <MdOutlineMapsHomeWork />
              </div>
              <h3 className="text-xl font-medium dark:text-white">Experience</h3>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {experiences.map((exp) => (
                <div key={exp.id} className="relative mb-8">
                  <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-violet-600 ring-4 ring-purple-200" />
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-xs bg-purple-200 text-gray-700 px-2 py-0.5 rounded-md">{exp.period}</span>
                    </div>
                    <div className="text-sm text-black dark:text-violet-700 font-bold">{exp.org}</div>
                    <p className="mt-2 text-sm dark:text-[hsl(261,15%,70%)]">{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500 w-10 h-10 flex items-center justify-center rounded-full mr-3 text-white text-xl">
                <RiGraduationCapFill />
              </div>
              <h3 className="text-xl font-medium dark:text-white">Education</h3>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {educations.map((edu) => {
                const [showCgpa, setShowCgpa] = useState(false);
                return (
                  <div key={edu.id} className="relative mb-8">
                    <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-red-300 ring-4 ring-purple-200" />
                    <div className="pl-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <span
                          onClick={() => setShowCgpa(!showCgpa)}
                          className={`text-xs text-black bg-purple-200 px-2 py-0.5 rounded-md blur-sm hover:blur-none transition-all duration-300 cursor-pointer ${
                            showCgpa ? "blur-none" : ""
                          }`}
                        >
                          {edu.cgpa}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-black dark:text-violet-700 font-bold">{edu.school}</span>
                        <span className="text-xs bg-purple-200 text-gray-700 px-2 py-0.5 rounded-md">{edu.period}</span>
                      </div>
                      <p className="mt-2 text-sm dark:text-[hsl(261,15%,70%)]">{edu.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Curricular Activities Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full mr-3 text-white text-xl">
                <SiTask />
              </div>
              <h3 className="text-xl font-medium dark:text-white">Curricular Activities</h3>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300" />
              {activities.map((act) => (
                <div key={act.id} className="relative mb-8">
                  <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-purple-200" />
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold text-white">{act.activity}</h4>
                      <span className="text-xs bg-purple-200 text-gray-700 px-2 py-0.5 rounded-md">{act.period}</span>
                    </div>
                    <p className="mt-2 text-sm dark:text-[hsl(261,15%,70%)]">{act.details}</p>
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
