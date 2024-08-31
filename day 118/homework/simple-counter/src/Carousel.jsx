import React, { useState } from "react";

function Carousel(){
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(false);

    const imgArr = [
        {
            src: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg',
            alt: 'something'
        },
        {
            src: 'https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces',
            alt: 'img world'
        }
    ];

    return (
        <>
            <div><img width = '300px' src = {imgArr[index].src} alt = {imgArr[index].alt} /></div>
            <div style = {{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
                <button onClick = {() => imgArr[index - 1] ? setIndex(index - 1) : setIndex(imgArr.length - 1)}>Prev</button>
                <button onClick = {() => imgArr[index + 1] ? setIndex(index + 1) : setIndex(0)}>Next</button>
            </div>
            <button onClick = {() => timer ? setTimer(false) : setTimeout(() => setTimer(true), 3000)}>Start Timer 3 s</button>
            <>{timer ? <p>Today is: {JSON.stringify(new Date())}</p> : <p></p>}</>
        </>
    )
}

export default Carousel;