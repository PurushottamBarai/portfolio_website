import React from "react";

const SectionTemplate = ({ id, title }) => (
  <section
    id={id}
    className="min-h-screen flex items-center justify-center bg-offwhite dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative z-10"
  >
    <h2 className="text-3xl md:text-5xl font-black text-gray-300 dark:text-gray-800 uppercase tracking-widest text-center px-4">
      {title}
    </h2>
  </section>
);

export default SectionTemplate;
