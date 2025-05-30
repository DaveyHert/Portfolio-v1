import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 md:py-24 bg-pattern flex flex-col md:flex-row items-center">
      <motion.div 
        className="md:w-1/2 order-2 md:order-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-[#3E2723] leading-tight">
          Technical <span className="text-[#880E4F]">Writer</span> & Documentation Specialist
        </h2>
        <p className="mt-6 text-lg text-neutral-600 max-w-lg">
          I transform complex technical concepts into clear, engaging content that educates and empowers your audience.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact-writer" className="inline-block px-8 py-3 bg-[#880E4F] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all">Hire me for your project</a>
          <a href="#" className="inline-block px-8 py-3 border border-[#880E4F] text-[#880E4F] font-medium rounded-lg hover:bg-[#880E4F] hover:bg-opacity-5 transition-all">View Writing Samples</a>
        </div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-start order-1 md:order-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -left-6 -top-6 w-full h-full border-2 border-[#FFD54F] rounded-xl"></div>
          <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl clip-path-right">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#880E4F] bg-opacity-10 flex items-center justify-center text-[#880E4F]">
                <i className="ri-quill-pen-line text-xl"></i>
              </div>
              <h3 className="ml-3 font-poppins font-semibold text-lg">From My Writing Desk</h3>
            </div>
            
            <blockquote className="italic text-neutral-600 border-l-4 border-[#FFD54F] pl-4 mb-4">
              "Good technical writing is like a clear window to complex ideas. It doesn't draw attention to itself—it simply lets the reader see through to the subject matter with perfect clarity."
            </blockquote>
            
            <div className="text-sm text-neutral-500">
              <p className="mb-3">As a technical writer, I believe documentation should be:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-[#FFD54F] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Clear and accessible to the target audience</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-[#FFD54F] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Comprehensive yet concise</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-[#FFD54F] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Structured logically with the reader in mind</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-[#FFD54F] rounded-full mr-2 flex-shrink-0"></span>
                  <span>Technically precise and rigorously edited</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
