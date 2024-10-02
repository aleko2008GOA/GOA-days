import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext.jsx"; 

function LightDark() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme, color: theme === "white" ? "black" : "white" }}>
      <h1>Hello!</h1>
      <button onClick={toggle}>Click me to toggle theme</button>
      <button>Current theme: {theme}</button>
    </div>
  );
}

export default LightDark;