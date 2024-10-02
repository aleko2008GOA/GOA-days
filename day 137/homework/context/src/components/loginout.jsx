import React, { useContext } from "react";
import { UserContext } from "../context/userContext.jsx";

function Loginout() {
  const { user, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div>
      <h1>{isLoggedIn ? `Welcome, ${user}` : "Please log in"}</h1>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Loginout;