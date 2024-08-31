import React, { useState } from "react";

function ColorChange(){
    const [color, setColor] = useState();

    function handleSubmit(e){
        e.preventDefault();
        setColor(e.target.color.value);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p style = {{color: color}}>Hello world!</p>
            <input id = "color" name = "color" type = "text"/><br/>
            <input type = "submit"/>
        </form>
    );
}

export default ColorChange;