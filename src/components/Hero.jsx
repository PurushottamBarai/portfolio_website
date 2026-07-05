import React from "react";
import bgImage from "../Images/profile.pic.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-offwhite dark:bg-black transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-8">
        <div className="flex flex-col items-start relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide border border-gray-300 dark:border-gray-700 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>

          <div>
            <p className="font-cursive text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-2">
              Hey there! I'm
            </p>
            <h1 className="text-6xl md:text-[5.5rem] font-sans font-black leading-[1] text-[#0f172a] dark:text-white tracking-tight -ml-1">
              Purushottam <br />
              Barai<span className="text-gray-400">.</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mt-2">
            An{" "}
            <strong className="text-[#0f172a] dark:text-white font-bold">
              Aspiring Software Engineer
            </strong>{" "}
            specializing in{" "}
            <strong className="text-[#0f172a] dark:text-white font-bold">
              Full Stack Development
            </strong>
            <br /> Building intelligent systems that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-[#1a2332] text-white dark:bg-white dark:text-black px-7 py-3.5 rounded-full font-medium hover:scale-105 transition-transform"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="./ResumeLtst.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-transparent text-gray-900 dark:text-white px-7 py-3.5 rounded-full font-medium border border-gray-300 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-colors bg-white/20 dark:bg-transparent"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-1 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end min-h-[400px] lg:min-h-[500px]">
          <style>{`
            @keyframes morph {
              0% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              }
              50% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
              }
              100% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              }
            }
            .animate-morph {
              animation: morph 8s ease-in-out infinite;
            }
          `}</style>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[150%] aspect-square rounded-full border-[0.5px] border-gray-300 dark:border-gray-800/60 opacity-50 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[110%] aspect-square rounded-full border-[0.5px] border-gray-300 dark:border-gray-800/60 opacity-60 pointer-events-none"></div>

          <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] animate-morph bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl hover:scale-[1.03] transition-transform duration-500">

            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-morph overflow-hidden">
              <img
                src={bgImage}
                alt="Purushottam Barai"
                className="w-full h-full object-cover animate-morph transition-all duration-700 grayscale mix-blend-multiply dark:mix-blend-normal opacity-90 dark:opacity-100 hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 cursor-pointer"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10 cursor-pointer">
        <span className="text-[0.55rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
          Scroll Down
        </span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-gray-400 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
