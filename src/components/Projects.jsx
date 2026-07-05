import React, { useRef } from "react";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount =
        window.innerWidth > 1024
          ? scrollRef.current.clientWidth / 3
          : scrollRef.current.clientWidth / 1.5;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      title: "CareerCraft",
      desc: "A powerful full-stack career platform enabling students to discover relevant job opportunities, connect directly with employers, and utilize Google Gemini for AI-powered resume generation.",
      tech: ["Node.js", "Express.js", "MySQL", "Google Gemini"],
      link: "https://careercraft-gebt.onrender.com/",
      gradient: "from-blue-500 to-indigo-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "FindMyCollege",
      desc: "An extensive full-stack college discovery platform helping students explore and compare over 900+ colleges with advanced backend filtering and an administrative metrics dashboard.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      link: "https://findmycollege-wau3.onrender.com",
      gradient: "from-emerald-400 to-teal-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      title: "LeetStats",
      desc: "A straightforward web application built with HTML, CSS, and JavaScript. It dynamically fetches live data via APIs to provide a quick, clear dashboard visualizing LeetCode user submission statistics.",
      tech: ["JavaScript", "HTML", "CSS", "LeetCode API"],
      link: "https://purushottambarai.github.io/LeetStats",
      gradient: "from-orange-400 to-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <path d="M12 20v-6M6 20V10M18 20V4" />
        </svg>
      ),
    },
    {
      title: "Weather App",
      desc: "A modern and clean weather application built with HTML, CSS, and JavaScript. It provides real-time weather information for any city using the OpenWeatherMap API.",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      link: "https://purushottambarai.github.io/weather-app",
      gradient: "from-cyan-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      title: "Password-Vault",
      desc: "This is a responsive password generator app built using React and JavaScript featuring customizable and secure password generation.",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      link: "https://purushottambarai.github.io/Password-Vault",
      gradient: "from-purple-500 to-indigo-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "Currency Convertor",
      desc: "A dynamic currency convertor application utilizing live REST APIs to seamlessly fetch real-time market conversion rates and accurately format output data.",
      tech: ["JavaScript", "HTML", "CSS", "REST API"],
      link: "https://purushottambarai.github.io/currency-convertor-app",
      gradient: "from-green-400 to-emerald-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-90"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 flex items-center bg-offwhite dark:bg-black transition-colors duration-300 relative z-10 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-4">
            Featured Projects.
          </h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated showcase of my full-stack web applications, highlighting
            responsive layouts, robust backend architectures, and API
            integrations.
          </p>
        </div>

        <div className="relative group overflow-visible">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-12 pt-4 px-2 -mx-2 hide-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="snap-center shrink-0 w-[85vw] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] group/card flex flex-col bg-white dark:bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-full h-48 bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover/card:bg-black/0"></div>
                  <div className="transform group-hover/card:scale-110 transition-transform duration-500">
                    {proj.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-bold opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 shadow-lg">
                    <span>View Live</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover/card:text-indigo-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
