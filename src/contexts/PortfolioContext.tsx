import React, { createContext, useState, useContext, ReactNode } from "react";

type PortfolioMode = "dev" | "writer";

interface PortfolioContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>("dev");

  const toggleMode = () => {
    setMode(prevMode => prevMode === "dev" ? "writer" : "dev");
  };

  return (
    <PortfolioContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};