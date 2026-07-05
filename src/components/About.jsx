import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative z-10 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-4">
              About Me.
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-8"></div>

            <div className="space-y-5 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              <p>
                Hello! I'm{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  Purushottam Barai
                </strong>
                , a dedicated Bachelor of Computer Applications undergraduate
                currently pursuing my degree at Thakur College of Engineering
                and Technology from 2024 to 2027.
              </p>
              <p>
                As an aspiring{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  Full-Stack Developer
                </strong>
                , I'm passionate about building modern, user-friendly web
                applications and continuously improving my problem-solving
                skills. I primarily work with the{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  MERN stack
                </strong>
                , along with Java, JavaScript, and SQL.
              </p>
              <p>
                I enjoy creating clean, maintainable code, learning new
                technologies, and strengthening my understanding of Data
                Structures and Algorithms (DSA). I'm currently looking for
                opportunities to apply my skills, collaborate with experienced
                developers, and grow as a software engineer.
              </p>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Core Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Teamwork",
                "Quick Learner",
                "Attention to Detail",
                "Analytical Thinking",
                "Problem Solving",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>


        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500">
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
                  <path d="M21.42 10.922a2 2 0 0 1-.01 2.83l-7.1 7.1a2 2 0 0 1-2.82 0l-7.1-7.1a2 2 0 0 1-.01-2.83L11 4.293a2 2 0 0 1 2.83 0l6.59 6.63z" />
                  <path d="M22 12v6" />
                  <path d="M2 12v6" />
                  <path d="M12 2v2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-6">
              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-indigo-500"></div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Bachelor of Computer Applications
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                  Thakur College of Engineering and Technology (2024 - 2027)
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                  CGPA: 9.23
                </div>
              </div>
              <div className="relative border-l-transparent">
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-gray-300 dark:border-gray-600"></div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  H.S.C (12th Grade)
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                  Maharashtra State Board (2024)
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-xs font-bold">
                  78.17%
                </div>
              </div>
              <div className="relative border-l-transparent">
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-gray-300 dark:border-gray-600"></div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  S.S.C (10th Grade)
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                  Maharashtra State Board (2022)
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-xs font-bold">
                  86.60%
                </div>
              </div>
            </div>
          </div>


          <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                className="text-indigo-500"
              >
                <path d="M12 15V3" />
                <circle cx="12" cy="12" r="10" />
                <path d="m16 8-4-4-4 4" />
              </svg>
              Certifications & Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  <strong className="text-gray-900 dark:text-gray-200">
                    Full Stack Web Development
                  </strong>{" "}
                  (Udemy, 2026)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  <strong className="text-gray-900 dark:text-gray-200">
                    Oracle AI Foundations Associate
                  </strong>{" "}
                  (Oracle, 2025)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  <strong className="text-gray-900 dark:text-gray-200">
                    Java Programming
                  </strong>{" "}
                  (IIT Kharagpur, NPTEL)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  <strong className="text-gray-900 dark:text-gray-200">
                    Runner-Up, THINK AI Innovation Challenge 3.0
                  </strong>{" "}
                  (TCET, Sep 2025)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
