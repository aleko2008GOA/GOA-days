import React from "react";
import { useState } from "react";

function Form(){
    const [inputVal, setInputVal] = useState('');

    function handleChange(e){
        setInputVal(e.target.value);
    }

    return (
        <>
            <form>
                <label for = 'email'>Gmail:</label><input id = "email" placeholder="example@gmail.com" onChange = {handleChange} value = {inputVal} />
            </form>
            <p>Your mail: {inputVal}</p>
        </>
    );
}

export default Form;