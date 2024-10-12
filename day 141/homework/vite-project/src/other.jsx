import { useState } from "react";

function Other(){
    const [n, setN] = useState('third')

    return (
        <>
            <h1>Hello world!</h1>
            <p>This is {n} component</p>
        </>
    )
}

export default Other;