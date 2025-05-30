import { motion } from "framer-motion";
import { usePortfolio } from "@/contexts/PortfolioContext";
import DeveloperPortfolio from "@/components/developer/DeveloperPortfolio";
import WriterPortfolio from "@/components/writer/WriterPortfolio";

const PortfolioSlider = () => {
  const { mode } = usePortfolio();

  return (
    <div className="slide-container min-h-screen w-full overflow-hidden relative">
      <motion.div 
        className="flex w-[200vw]"
        animate={{
          translateX: mode === "dev" ? "0%" : "-50%"
        }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <DeveloperPortfolio />
        <WriterPortfolio />
      </motion.div>
    </div>
  );
};

export default PortfolioSlider;
