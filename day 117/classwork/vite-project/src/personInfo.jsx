import React from "react";

function PersonInfo(props){
    return (
        <>
            <h1>Hello {props.name}!</h1>
            <p>Your last name is: {props.lastname}, your mail: {props.email}</p>
        </>
    );
}

export default PersonInfo;