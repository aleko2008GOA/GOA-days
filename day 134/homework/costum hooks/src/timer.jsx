import { useState } from "react"

export function useTimer(){
    const [time, setTime] = useState(10);
    const [toggle, setToggle] = useState('Start');
    const [timerInteval, setTimerInteval] = useState(null);

    function setTimer(){
        if(toggle == 'Start'){
            setToggle('Pause');
            
            const inter = setInterval(() =>{
                if(time <= 1) clearInterval(timerInteval);
                setTime(prev => prev - 1);
            }, 1000);
            setTimerInteval(inter);
        }else{
            clearInterval(timerInteval);
            setToggle('Start');
        }
    }

    function reset(){
        setToggle('Start');
        clearInterval(timerInteval);
        setTime(10);
    }

    return [time, setTimer, toggle, reset];
}