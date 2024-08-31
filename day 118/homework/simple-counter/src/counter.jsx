import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [visible, setVisible] = useState(true);
    const [bg, setBg] = useState(true);
    const [like, setLike] = useState(true);

    return (
        <>
            {/* 1 */}
            <button onClick = {() => setCount(count + 1)}>Click me and I'll do magic!</button>
            <p>You clicked button {count} times</p>
            {/* 2 */}
            <button onClick = {() => setToggle(toggle ? false : true)}>
                Click me and I'll say {toggle ? 'Goodbye' : 'Hello'}
            </button>
            <p>{toggle ? 'Hello!' : 'Goodbye'}</p>
            {/* 3 */}
            <button onClick = {() => setVisible(visible ? false : true)}>
                Make something {visible ? 'invisible' : 'visible'}
            </button><br />
            <p style={{display: visible ? 'block' : 'none'}}>I am visible!</p>
            {/* 4 */}
            <button onClick = {() => setBg(bg ? false : true)}>
                Make something {bg ? 'red' : 'blue'}
            </button>
            <div style={{margin:'10px', color:'white', width:'80px', height:'50px', backgroundColor: bg ? 'blue' : 'red'}}>I am {bg ? 'blue!' : 'red!'}</div>
            {/* 5 */}
            <button onClick = {() => like ? setLike(false) : setLike(true)}>{like ? 'Unlike' : 'Like'}</button>
        </>
    );
}

export default Counter;