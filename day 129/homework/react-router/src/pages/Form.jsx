import React from "react";
import { useState } from "react";

function Form(){
    const [inputVal, setInputVal] = useState('');

    function handleChange(e){
        setInputVal(e.target.value);
    }

    return (
        <>
            <h1>This is an example of fast react input changes</h1>
            <form>
                <input onChange = {handleChange} value = {inputVal} />
            </form>
            <p>{inputVal}</p>
        </>
    );
}

export default Form;