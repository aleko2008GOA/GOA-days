import { useState } from 'react';
import React from 'react';
import { UserContext } from './context/userContext.jsx'; 
import Loginout from './components/loginout.jsx'; 
import ThemeProvider from './themeProvider.jsx';

function UserProvider() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setUser('guest');
    setIsLoggedIn(true);
  }

  function logout() {
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      <ThemeProvider />
      <Loginout />
    </UserContext.Provider>
  );
}

export default UserProvider;