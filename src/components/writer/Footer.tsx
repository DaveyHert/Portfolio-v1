import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-8 lg:px-16 py-8 bg-[#3E2723] text-center text-white">
      <p>© {new Date().getFullYear()} David Herbert. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="text-neutral-300 hover:text-[#FFD54F] transition-colors">
          <i className="ri-github-fill text-xl"></i>
        </a>
        <a href="#" className="text-neutral-300 hover:text-[#FFD54F] transition-colors">
          <i className="ri-linkedin-fill text-xl"></i>
        </a>
        <a href="#" className="text-neutral-300 hover:text-[#FFD54F] transition-colors">
          <i className="ri-twitter-fill text-xl"></i>
        </a>
        <a href="#" className="text-neutral-300 hover:text-[#FFD54F] transition-colors">
          <i className="ri-medium-fill text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
