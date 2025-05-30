import { motion } from "framer-motion";
import { usePortfolio } from "@/contexts/PortfolioContext";

const ThemeToggle = () => {
  const { mode, toggleMode } = usePortfolio();
  
  return (
    <div className="fixed sm:top-24 top-auto bottom-6 right-6 z-40 portfolio-toggle flex flex-col items-center">
      <motion.div 
        className={`text-sm font-medium mb-1 px-3 py-1 rounded-md shadow-sm
          ${mode === 'dev' 
              ? 'bg-[#212121] bg-opacity-80 text-white' 
              : 'bg-white bg-opacity-90 text-[#3E2723]'
          }`
        }
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Switch Portfolio
      </motion.div>
      <div className="cursor-pointer" onClick={toggleMode}>
        <motion.div 
          className={`toggle-panel relative w-20 rounded-full shadow-lg flex items-center justify-between px-2 ${mode === 'dev' ? 'block h-8' : 'h-2 opacity-0 absolute top-0 left-0'}`}
          animate={{ 
            opacity: mode === 'dev' ? 1 : 0,
            rotateY: mode === 'dev' ? 0 : 180
          }}
          transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A148C] to-[#00BFA5] rounded-full"></div>
          <span className="text-white text-xs font-medium z-10 ml-1">Writer</span>
          <div className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-[#880E4F] text-xs z-10">
            <i className="ri-quill-pen-line"></i>
          </div>
        </motion.div>
        
        <motion.div 
          className={`toggle-panel relative w-20 h-8 rounded-full shadow-lg flex items-center justify-between px-2 ${mode === 'writer' ? 'block' : 'opacity-0 absolute top-0 left-0'}`}
          animate={{ 
            opacity: mode === 'writer' ? 1 : 0,
            rotateY: mode === 'writer' ? 0 : -180
          }}
          transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#880E4F] to-[#3E2723] rounded-full"></div>
          <div className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-[#4A148C] text-xs z-10">
            <i className="ri-code-s-slash-line"></i>
          </div>
          <span className="text-white text-xs font-medium z-10 mr-1">Dev</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeToggle;
