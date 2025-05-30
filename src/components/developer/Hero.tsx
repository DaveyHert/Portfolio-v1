import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center">
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
          Frontend <span className="text-[#00BFA5]">Developer</span> with an eye for detail
        </h2>
        <p className="mt-6 text-lg text-neutral-300 max-w-lg">
          I craft engaging digital experiences with clean code and creative solutions.
          Specializing in React, TypeScript and modern frontend frameworks.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="inline-block px-8 py-3 bg-[#00BFA5] text-[#212121] font-medium rounded-lg hover:bg-opacity-90 transition-all">Get in touch</a>
          <a href="#" className="inline-block px-8 py-3 border border-[#00BFA5] text-[#00BFA5] font-medium rounded-lg hover:bg-[#00BFA5] hover:bg-opacity-10 transition-all">Download CV</a>
        </div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full max-w-md">
          <div className="bg-[#4A148C] bg-opacity-30 w-64 h-64 sm:w-80 sm:h-80 rounded-full absolute blur-3xl"></div>
          <div className="relative z-10 bg-gradient-to-br from-[#4A148C] to-[#00BFA5] p-1 rounded-xl overflow-hidden rotate-3 shadow-xl w-full">
            <div className="bg-[#212121] rounded-lg overflow-hidden p-4">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-fira text-xs sm:text-sm text-neutral-300 whitespace-pre-wrap break-words overflow-auto max-w-full">
<span className="text-pink-400">const</span> <span className="text-[#00BFA5]">developer</span> = {"{"}
  <span className="text-yellow-300">name</span>: <span className="text-green-300">'David Herbert'</span>,
  <span className="text-yellow-300">skills</span>: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'UI/UX'</span>],
  <span className="text-yellow-300">passion</span>: <span className="text-green-300">'Building beautiful web experiences'</span>,
  <span className="text-pink-400">code</span>: () {"=>"} {"{"}
    <span className="text-blue-400">return</span> <span className="text-green-300">'Clean, efficient, scalable'</span>;
  {"}"}
{"}"};
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
