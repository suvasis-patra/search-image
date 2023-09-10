import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useGlobalContext } from "../../Context/Context";
const ToggleTheme = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  return (
    <>
      <div className="flex px-6 md:px-24 md:py-8 justify-end">
        {isDarkMode ? (
          <LightModeIcon
            fontSize="large"
            style={{ cursor: "pointer", color: "white" }}
            onClick={toggleTheme}
          />
        ) : (
          <ModeNightIcon
            fontSize="large"
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
          />
        )}
      </div>
    </>
  );
};

export default ToggleTheme;
