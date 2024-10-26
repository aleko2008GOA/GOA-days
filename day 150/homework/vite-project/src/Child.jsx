import React, { useState, memo } from "react";

function Child({ name, age }){
    console.log('render')
    return (
        <>
            <h1>{name}</h1>
            <p>{age}</p>
        </>
    )
}

const SaveChild = memo(Child);

export default SaveChild;