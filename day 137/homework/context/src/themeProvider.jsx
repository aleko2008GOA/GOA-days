import { useState } from 'react';
import React from 'react';
import LightDark from './components/lightDark.jsx';
import { ThemeContext } from './context/themeContext.jsx';

function ThemeProvider() {
  const [theme, setTheme] = useState("white");

  function toggle() {
    setTheme(theme == 'white' ? 'black' : 'white');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <LightDark />
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
