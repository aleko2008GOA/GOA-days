import { useState } from "react";

function Another(){
    const [n, setN] = useState('second');
    n();

    return (
        <>
            <h1>Hello world!</h1>
            <p>This is {n} component</p>
        </>
    )
}

export default Another;