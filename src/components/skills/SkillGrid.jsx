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
    <section className="py-16" id="skills">
      <div className="container mx-auto px-6">

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
              className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl
                         p-8 flex flex-col items-center shadow-sm transition 
                         hover:scale-[1.05] hover:shadow-xl hover:border-violet-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-4 object-contain"
              />
              <p className="font-semibold text-gray-900">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
