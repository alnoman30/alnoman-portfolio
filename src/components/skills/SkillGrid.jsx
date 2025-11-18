import { useState } from "react";

// Import images
import reactImg from "../../assets/react.png";

const tabs = ["All", "Frontend", "Backend", "Tools", "Soft Skills"];

const skills = [
  { name: "React", category: "Frontend", icon: reactImg },
  { name: "React", category: "Frontend", icon: reactImg },
  { name: "React", category: "Frontend", icon: reactImg },
  { name: "React", category: "Frontend", icon: reactImg },
];

export default function SkillGrid() {
  const [active, setActive] = useState("All");

  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <section className="py-16 min-h-[600px] bg-[#071D3B]" id="skills">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
              Skills
            </span>
          </h2>
          <p className="text-[hsl(261,15%,70%)] text-lg max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from back-end to front-end and project management.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition 
                ${
                  active === tab
                    ? "bg-violet-500 text-white border-violet-500"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="
                group relative overflow-hidden
                rounded-xl p-8 flex flex-col items-center transition 
                hover:scale-[1.05] hover:shadow-xl

                bg-white/10 backdrop-blur-lg 
                border border-white/20 
                shadow-[0_0_25px_-5px_rgba(255,255,255,0.2)]
              "
            >
              {/* Shine animation */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  translate-x-[-200%]
                  group-hover:translate-x-[200%]
                  transition-transform duration-1000 ease-out
                "
              ></span>

              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-4 object-contain z-10"
              />
              <p className="font-semibold text-white z-10">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
