import React from 'react';
import Profile from './profile';
import { ThemeContext } from './context';

function App() {
  const user1 = {
    fname: "Alex",
    lname: "Melik",
    mode: 'cyan'
  };

  const user2 = {
    fname: "Nika",
    lname: "Keshelava",
    mode: 'black'
  };

  return (
    <div>
      <ThemeContext.Provider value={ user1 }>
        <Profile />
      </ThemeContext.Provider>

      <ThemeContext.Provider value={ user2 }>
        <Profile />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
