import React, { useState } from 'react';
import { useHandleForm } from './FormHandleHook';
import { getWindowWidth } from './WindowWidth';
import { useFetch } from './FetchData';
import { useMode } from './useMode';
import { useScrollPosition } from './scrollPosition';
import { useTimer } from './timer';
import { useOnlineStatus } from './onlineStatus';

export function Form(){
    const [handleSubmit, useHandleSubmit] = useHandleForm("No name");
    const [width, setWidth] = getWindowWidth();
    const [data, setFetch] = useFetch();
    const [mode, setMode] = useMode();
    const [position, setPositionObj] = useScrollPosition();
    const [time, setTime, toggle, reset] = useTimer();
    const [isOnline, checkOnline] = useOnlineStatus();

    const [inputVal, setInputVal] = useState('');

    return (
        <div style = {{backgroundColor: mode == 'light' ? 'white' : 'black', color: mode == 'light' ? 'black' : 'white'}}>
            <h1>Form :)</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    useHandleSubmit(e.target);
                    e.target.reset();
                }}>
                <label htmlFor = 'name'>Name: </label><input type = 'text' name = 'name' id = 'name' /><br />
                <label htmlFor = 'email'>Email: </label><input type = 'email' name = 'email' id = 'email' /><br />
                <label htmlFor = 'password'>Password: </label><input type = 'password' name = 'password' id = 'password' /><br />
                <input type = "submit" />
            </form>
            <section>
                {Object.keys(handleSubmit).map((key, index) => <p key = {index}>{key} - {handleSubmit[key]}</p>)}
            </section>

            <button onClick={setWidth}>Get window height and width</button>
            <p>{width.width} - current width, {width.height} - current height</p>

            <input onChange = {(e) =>{
                setInputVal(e.target.value);
                setFetch(e);
            }} placeholder='get data from api:' value = {inputVal} />
            <p>{JSON.stringify(data)}</p>

            <p onClick={() => setMode(mode)}>Mode {mode}</p>

            <button onClick = {setPositionObj}>Get vertical offset</button>
            <p>{position}</p>

            <button onClick={setTime}>{toggle} timer</button><button onClick={reset}>Reset timer</button>
            <p>{time} left</p>

            <button onClick={checkOnline}>Current - {isOnline ? 'Online' : 'Offline'}</button>
        </div>
    )
}