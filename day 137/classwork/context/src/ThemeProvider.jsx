import React from 'react';
import Theme from './Theme.jsx';
import { ThemeContext } from './context/ThemeContext.jsx';

function ThemeProvider() {
  const light = 'lightgrey';
  const dark = 'darkgrey';
  const colorfull = 'orange';

  return (
    <div>
      <ThemeContext.Provider value={ light }>
        <Theme />
      </ThemeContext.Provider>

      <ThemeContext.Provider value={ dark }>
        <Theme />
      </ThemeContext.Provider>

      <ThemeContext.Provider value={ colorfull }>
        <Theme />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;
