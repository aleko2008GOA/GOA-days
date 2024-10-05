import { useState } from "react"

export function Component(){
    const [error, setError] = useState(false);

    if(error) {
        throw new Error('Error');
    }

    return (
        <h1 onClick = {() => {
            setError(true);
        }}>Hello world!</h1>
    )
}