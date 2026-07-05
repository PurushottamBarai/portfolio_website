import React from "react";

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      username: "purushottambarai",
      url: "https://in.linkedin.com/in/purushottambarai",
      cta: "Connect",
      accentClass: "hover:border-blue-500/50 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5",
      buttonClass: "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600/10 dark:hover:bg-blue-600/20 dark:text-blue-400 dark:border dark:border-blue-500/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "X",
      username: "@purushottam_X",
      url: "https://x.com/purushottam_X",
      cta: "Follow",
      accentClass: "hover:border-gray-950 dark:hover:border-gray-100 hover:shadow-gray-950/10 dark:hover:shadow-white/5",
      buttonClass: "bg-gray-900 hover:bg-black text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border dark:border-white/10",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-900 dark:text-white"
        >
          <path d="M18.9 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      username: "PurushottamBarai",
      url: "https://github.com/PurushottamBarai",
      cta: "Collaborate",
      accentClass: "hover:border-indigo-500/50 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5",
      buttonClass: "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-600/10 dark:hover:bg-indigo-600/20 dark:text-indigo-400 dark:border dark:border-indigo-500/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-500"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="pt-24 pb-12 flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative z-10 border-t border-gray-200 dark:border-gray-800/80 overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-950 dark:from-white dark:via-gray-100 dark:to-indigo-200 bg-clip-text text-transparent">
            Let's Connect.
          </h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto shadow-sm"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently open to new opportunities, collaborations, and tech chats.
            Reach out via any of my active channels—I look forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col items-center justify-between text-center bg-white/60 dark:bg-gray-900/20 backdrop-blur-md p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/60 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 shadow-sm ${link.accentClass}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-150 dark:border-gray-700/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {link.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-8 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
                  {link.username}
                </h3>
              </div>
              <div className={`w-full py-3.5 rounded-xl font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${link.buttonClass}`}>
                {link.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>


        <div className="text-center mt-12 border-t border-gray-100 dark:border-gray-800/60 pt-6 max-w-xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest leading-loose">
            Designed & Built by Purushottam Barai
          </p>
          <p className="text-[12px] text-gray-400/70 dark:text-gray-600/70 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

