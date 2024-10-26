import { useState } from "react";
import SaveChild from "./Child";
import SavedList from "./List";

function Parent() {
    const [name, setName] = useState('Alex');
    const [age, setAge] = useState(15);
    const [count, setCount] = useState(0);
    const [list, setList] = useState(['apple', 'orange', 'blue']);

    return (
        <>
            <h1>Hello world!</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Count ++</button>
            <SaveChild name={name} age={age} />
            <SavedList items={list} />
        </>
    );
}

export default Parent;