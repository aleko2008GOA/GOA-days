import React, { useContext } from "react";
import { ThemeContext } from "./context";

function Profile() {
    const profile = useContext(ThemeContext);

    return (
        <div style = {{backgroundColor: profile.mode, padding: '10px'}}>
            <h3 style = {{border: 'none', borderRadius: "10px", padding: '5px', margin: '10px', backgroundColor: 'white'}}>First name: {profile.fname}</h3>
            <h3 style = {{border: 'none', borderRadius: "10px", padding: '5px', margin: '10px', backgroundColor: 'white'}}>Last name: {profile.lname}</h3>
        </div>
    );
}

export default Profile;