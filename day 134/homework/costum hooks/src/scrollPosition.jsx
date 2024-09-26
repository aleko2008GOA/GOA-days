import { useState } from "react"

export function useScrollPosition(){
    const [position, setPosition] = useState(window.screenY);

    function setPositionObj(){
        setPosition(window.screenY);
    }
    return [position, setPositionObj];
}