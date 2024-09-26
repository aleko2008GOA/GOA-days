import { useState } from "react";

export function useMode(){
    const [modeType, setModeType] = useState(localStorage.mode ? JSON.parse(localStorage.mode) : 'light');

    function setMode(x){
        localStorage.mode = JSON.stringify(x == 'light' ? 'dark' : 'light');
        setModeType(x == 'light' ? 'dark' : 'light');
    }

    return [modeType, setMode];
}