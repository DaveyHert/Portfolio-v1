import React from "react";

const Header: React.FC = () => {
  return (
    <header className="px-4 sm:px-8 lg:px-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-300">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#880E4F] flex items-center justify-center text-white font-bold text-xl font-poppins">DH</div>
        <h1 className="ml-3 text-2xl font-poppins font-bold text-[#3E2723]">David <span className="text-[#880E4F]">Herbert</span></h1>
      </div>
      
      <nav className="mt-6 md:mt-0">
        <ul className="flex space-x-8 text-sm font-medium">
          <li><a href="#writing" className="text-[#880E4F] hover:text-[#3E2723] transition-colors">Writing</a></li>
          <li><a href="#expertise" className="text-neutral-500 hover:text-[#3E2723] transition-colors">Expertise</a></li>
          <li><a href="#clients" className="text-neutral-500 hover:text-[#3E2723] transition-colors">Clients</a></li>
          <li><a href="#contact-writer" className="text-neutral-500 hover:text-[#3E2723] transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
