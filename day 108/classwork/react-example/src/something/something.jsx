import React, { useState } from 'react';

const Something = () => {
    const [count, change] = useState(0);

    return (
        <div>
            <h1>Hello!</h1>
            <button onClick={() => change(count + 1)}>Click me</button>
            <p>
                {count}
            </p>
        </div>
    );
}

export default Something;