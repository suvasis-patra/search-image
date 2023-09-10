import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [userInput, setUserInput] = useState("cat");
  const context = {
    isDarkMode: theme,
    toggleTheme: () => setTheme((prevTheme) => !prevTheme),
    userInput: userInput,
    setUserInput,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
