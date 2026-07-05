import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-colors duration-300">
      <div className="absolute inset-0 bg-offwhite/50 dark:bg-black/50 backdrop-blur-md -z-10 border-b border-gray-200 dark:border-gray-800"></div>

      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={(e) => handleScroll(e, "home")}
      >
        <div className="w-10 h-10 border border-solid md:border-dashed border-gray-800 dark:border-gray-600 rounded-md flex items-center justify-center font-bold text-xl relative bg-white dark:bg-transparent text-black dark:text-white">
          P
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Purushottam Barai
          </span>
          <span className="text-[0.6rem] font-semibold text-gray-500 tracking-[0.2em] uppercase">
            Aspiring Software Engineer
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 px-8 py-2.5 rounded-full border border-gray-300 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 shadow-sm backdrop-blur-sm">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleScroll(e, link)}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-4 text-gray-600 dark:text-gray-400 border-r border-gray-300 dark:border-gray-700 pr-5">
          <a
            href="https://github.com/PurushottamBarai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
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
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://in.linkedin.com/in/purushottam-barai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://x.com/purushottam_X"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.9 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </div>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative"
        >
          {darkMode ? (
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
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
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
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
