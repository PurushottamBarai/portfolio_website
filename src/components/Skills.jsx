import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL"],
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Render"],
    },
    {
      title: "Core Coursework",
      skills: [
        "DSA",
        "OOPs",
        "DBMS",
        "OS",
        "CN",
      ],

    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative z-10 border-t border-gray-200 dark:border-gray-800/80 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950 dark:from-white dark:via-gray-100 dark:to-indigo-200 bg-clip-text text-transparent">
            Technical Arsenal.
          </h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto shadow-sm"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical expertise, programming
            languages, and foundational computer science knowledge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-white/60 dark:bg-gray-900/20 backdrop-blur-md p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/60 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6 tracking-tight pb-3 border-b border-gray-100 dark:border-gray-800/40">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-50/50 dark:bg-gray-800/20 border border-gray-200/60 dark:border-gray-750/30 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:scale-[1.03] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;


