import React, { useState } from "react";

function ToDoList(){
    const [arr, useArr] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        e.target.clear;
        useArr([...arr, e.target.elements.new.value]);
    }

    return (
        <>
            <ul>{arr.map((val, i) => (
                <li key = {i}>{val}</li>
            ))}</ul>
            <form onSubmit={handleSubmit}>
                <input name = "new" type = "text"/>
                <input type = "submit"/>
            </form>
        </>
    )
}

export default ToDoList;