import { usePortfolio } from "../contexts/PortfolioContext";
import PortfolioSlider from "../components/shared/PortfolioSlider";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect } from "react";
import { PortfolioMode } from "../lib/types";

interface HomeProps {
  initialMode?: PortfolioMode;
}

const Home = ({ initialMode }: HomeProps) => {
  const { mode, setMode } = usePortfolio();
  
  useEffect(() => {
    // Set the initial mode if provided
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialMode, setMode]);
  
  useEffect(() => {
    // Update body classes when mode changes
    if (mode === "dev") {
      document.body.classList.add("dev-mode");
      document.body.classList.remove("writer-mode");
    } else {
      document.body.classList.add("writer-mode");
      document.body.classList.remove("dev-mode");
    }
  }, [mode]);

  return (
    <>
      <ThemeToggle />
      <PortfolioSlider />
    </>
  );
};

export default Home;