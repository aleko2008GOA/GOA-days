import { useState } from "react"

export function getWindowWidth(){
    const [wind, setWind] = useState({width: window.innerWidth, height: window.innerHeight});

    function setWidth(){
        setWind({width: window.innerWidth, height: window.innerHeight});
    }
    return [wind, setWidth];
}